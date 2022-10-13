import { Wrapper } from './styles'
import Label from '../../components/label/Label'
import { Colors } from '../../shared/styles'
import { TotalAccountValueProps } from './ITotalAccountValue'

const TotalAccountValue = ({
  title,
  value,
  isValueDown = undefined,
  gap = '0px',
}: TotalAccountValueProps) => {
  return (
    <Wrapper gap={gap}>
      <Label
        fontFamily={'Open Sans'}
        fontStyle={'normal'}
        fontWeight={400}
        fontSize={'16px'}
        lineHeight={'24px'}
        color={Colors.Gray}
      >
        {title}
      </Label>
      <Label
        fontStyle={'normal'}
        fontWeight={700}
        fontSize={'20px'}
        lineHeight={'32px'}
        color={
          isValueDown !== undefined
            ? isValueDown
              ? Colors.DangerText
              : Colors.SuccessText
            : Colors.NeutralText
        }
      >
        {value}
      </Label>
    </Wrapper>
  )
}

export default TotalAccountValue
