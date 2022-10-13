interface InformationProps {
  infoTitle: string
  infoStatus: string
}

export interface DocumentSidePanelProps {
  title: string
  documentInformation: InformationProps[]
  handleClose?: () => void
  handleVote?: () => void
}
