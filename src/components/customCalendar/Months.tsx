import { MonthsProps } from './ICustomCalendar'
import { MonthsWrapper, StyledMonths } from './styles'

const Months = ({
  state,
  currentYear,
  onMonthSelect,
  minDate,
  maxDate,
}: MonthsProps) => {
  const monthsRows = []
  const monthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const isDisabled = (month: number) => {
    const displayedMonth = new Date(currentYear, month)
    return (
      (minDate &&
        displayedMonth < new Date(minDate.getFullYear(), minDate.getMonth())) ||
      (maxDate &&
        displayedMonth > new Date(maxDate.getFullYear(), maxDate.getMonth()))
    )
  }

  for (let i = 0; i < 12; i++) {
    monthsRows.push(
      <StyledMonths
        key={monthList[i]}
        state={state}
        currentYear={currentYear}
        currentMonth={i}
        onClick={() => onMonthSelect(i)}
        disabled={isDisabled(i)}
      >
        {monthList[i]}
      </StyledMonths>
    )
  }
  return <MonthsWrapper>{monthsRows}</MonthsWrapper>
}

export default Months
