import { YearsProps } from './ICustomCalendar'
import { StyledYears, YearsWrapper } from './styles'

const Years = ({
  state,
  startingYear,
  onYearSelect,
  minDate,
  maxDate,
}: YearsProps) => {
  const years = []
  const isDisabled = (year: number, index: number) => {
    return (index >= 9) || (year < (minDate ? minDate.getFullYear() : 0)) || (year > (maxDate ? maxDate.getFullYear() : year + 1))
  }
  for (let i = 0; i < 12; i++) {
    const tempStartingYear = startingYear
    years.push(
      <StyledYears
        key={startingYear}
        state={state}
        disabled={isDisabled(tempStartingYear, i)}
        currentYear={tempStartingYear}
        onClick={() => onYearSelect(tempStartingYear, 'months')}
      >
        {startingYear++}
      </StyledYears>
    )
  }
  return <YearsWrapper>{years}</YearsWrapper>
}

export default Years
