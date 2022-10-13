import { DividerProps } from './IDivider'
import { DividerLine } from './styles'

const Divider = ({ horizontal, thickness, bgColor }: DividerProps) => {
  return (
    <DividerLine
      bgColor={bgColor}
      horizontal={horizontal}
      thickness={thickness}
    ></DividerLine>
  )
}

export default Divider
