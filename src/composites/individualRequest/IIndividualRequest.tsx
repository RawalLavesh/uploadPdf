import { SubmitLocateValidationPayload } from "../../shared/models/ISubmitLocate"

export interface IndividualRequestProps {
  previewClicked: number
  disabled: boolean
  formCallBackFn: (formData: SubmitLocateValidationPayload[]) => void
}
