import { DaysWrapper, StyledDays } from './styles'

const Days = () => {
  const days = []
  const dayList = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  for (let i = 0; i < 7; i++) {
    days.push(<StyledDays key={i}>{dayList[i]}</StyledDays>)
  }
  return <DaysWrapper>{days}</DaysWrapper>
}

export default Days
