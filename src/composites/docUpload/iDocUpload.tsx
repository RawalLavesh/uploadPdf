export interface DocUploadProps {
    primary?: boolean
    uploadCallBackFn: (status: boolean) => void
    returnFileData: (status: any,fileData:any) => void
    uploadSuccess:boolean
  }
  