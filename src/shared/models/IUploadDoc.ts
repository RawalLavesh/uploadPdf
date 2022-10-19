export interface UploadedFile {
    documentId: number,
    documentName: string,
    uploadedDate: string,
    uploadedBy: string
}

export interface DocumentType {
    id: number,
    documentTypeName: string
}

export interface UploadFileValidationPayload {
    formFiles: string,
    uploadedBy: string,
    documentType: number,
    uploadedDate: Date
}

export interface UploadedFileResponse {
    id: number,
    fileName: string,
    documentType: number,
    createdDate: Date,
    editedDate: Date,
    createdBy: string,
    editedBy: string,
    status: number,
    version: number,
    filePath: string
}

export interface UploadedFileValidationResponse {
    totalFiles: number;
    activeFiles: number;
    uploadedFiles: UploadedFileResponse[]
}

export interface UploadFileModel {
    uploadFile: UploadFileValidationPayload[],
    uploadFileResponse: UploadedFileValidationResponse
}