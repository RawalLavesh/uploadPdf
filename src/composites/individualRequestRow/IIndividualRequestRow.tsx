export interface IndividualRequestRowProps {
  labelOne: string
  labelTwo: string
  labelThree: string
  labelFour: string
  number: number
  disabled: boolean
  callBackFn: (index: number) => void
  showError: boolean
}
