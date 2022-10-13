$workspace = $env:WORKSPACE
$env       = $args[0]
$server    = $args[1]

$base = if ($env -ieq "PROD") {"\\$server\e$"} else {"\\$server"}

$dest       = "$base\ClientSitePDF"
$remote_tmp = "$base\Temp"

$zip_name   = "ClientSitePDF.zip"
$remote_zip = "$remote_tmp\$zip_name"
$local_zip  = "$workspace\$zip_name"
echo "==================Stop IIS =============================="
$app_pool="ClientSitePDF"
$app_name="ClientSitePDF"
invoke-command -computername "$server.wedbush.com" -scriptblock { 
    Import-Module WebAdministration
    Stop-WebAppPool $Using:app_pool -ErrorAction Ignore
    Stop-WebSite $Using:app_name -ErrorAction Ignore
  
    $currentRetry = 0;
    $success = $false;
    do{
        $status = Get-WebAppPoolState -name $Using:app_pool
        if ($status.Value -eq "Stopped"){
                $success = $true;
            }
            echo "Waiting for App Pool to stop"
            Start-Sleep -s 5
            $currentRetry = $currentRetry + 1;
        }
    while (!$success -and $currentRetry -le 24)
}

echo " ==================== DEPLOY API ($server)"

echo " ==================== DEPLOY API ($server): Emptying destination folder $dest"
Remove-Item "$dest\*" -Recurse -Force -ErrorAction Ignore

echo " ==================== DEPLOY API ($server): Copy to target"
xcopy $local_zip $remote_tmp /Y /S /F

echo " ==================== DEPLOY API ($server): Extract"
Expand-Archive -Path $remote_zip -DestinationPath $dest -Force

echo " ==================== DEPLOY API ($server): Clean"
Remove-Item $remote_zip -Recurse -Force -ErrorAction Ignore
echo " ==================== Restart Server ======================="
invoke-command -computername "$server.wedbush.com" -scriptblock { 
    echo " ==================== DEPLOY ($Using:server): Start Apps"
    Import-Module WebAdministration
    Start-WebAppPool $Using:app_pool
    Start-WebSite $Using:app_name

  
}
