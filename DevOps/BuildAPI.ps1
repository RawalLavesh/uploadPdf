$workspace     = $env:WORKSPACE
$configuration = $args[0]       
$envName       = $args[1]
$env           = $args[2]
$buildName      = $envName

if ($envName -ieq "prod") {
    $envName = "Production"
}

##$output = "$workspace\build\"
##$zip    = "$workspace\ClientSitePDF.zip"
$output = "$workspace\build"
$zip    = "$workspace\ClientSitePDF.zip"

echo " ==================== BUILD API: Build"
cd $workspace\
npm install
if ($buildName -ieq "production") {
    $buildName = "prod"
}elseif($buildName -ieq "Development"){
    $buildName = "dev"
}
echo " === Now going to run npm run build-ClientSitePDF=== " $buildName
npm run build:$buildName



echo " ==================== BUILD API: Zip"
if (Test-Path $zip) {
  Remove-Item $zip
}
Compress-Archive -Path "$output\*" -DestinationPath $zip
##Compress-Archive -Path "$workspace\Clientlinks-static\*" -DestinationPath $zip -force
