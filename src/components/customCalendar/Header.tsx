import { Icons } from '../../shared/GlobalStyle'
import { COLORS } from '../../theme/Colors'
import Button from '../button/Button'
import { Icon } from '../icon/Icon'
import { HeaderProps } from './ICustomCalendar'
import {
  DateActionWrapper,
  DateContentWrapper,
  DatePickerHeaderWrapper,
} from './styles'
const Header = ({
  state,
  startingYear,
  prevMonth,
  nextMonth,
  onClick,
}: HeaderProps) => {
  const getFormattedMonthYear = (date: Date) => {
    const month = date.getMonth()
    const year = date.getFullYear().toString()
    let monthYear = ''
    switch (month) {
      case 0:
        monthYear = monthYear.concat('January')
        break
      case 1:
        monthYear = monthYear.concat('February')
        break
      case 2:
        monthYear = monthYear.concat('March')
        break
      case 3:
        monthYear = monthYear.concat('April')
        break
      case 4:
        monthYear = monthYear.concat('May')
        break
      case 5:
        monthYear = monthYear.concat('June')
        break
      case 6:
        monthYear = monthYear.concat('July')
        break
      case 7:
        monthYear = monthYear.concat('August')
        break
      case 8:
        monthYear = monthYear.concat('September')
        break
      case 9:
        monthYear = monthYear.concat('October')
        break
      case 10:
        monthYear = monthYear.concat('November')
        break
      case 11:
        monthYear = monthYear.concat('December')
    }
    return monthYear.concat(' ').concat(year)
  }

  const getFormattedYears = (startingYear: number) => {
    let years = startingYear.toString()
    years = years.concat('-').concat((parseInt(years) + 11).toString())
    return years
  }

  return (
    <>
      {state.currentBodySection === 'days' && (
        <DatePickerHeaderWrapper>
          <DateContentWrapper>
            <Button
              bgColor={'transparent'}
              color={COLORS.UI.PrimaryText}
              type="button"
              borderColor={'transparent'}
              suffixedIcon={<Icon icon={Icons.ChevronDownPrimary} />}
              onClick={() => onClick(startingYear, 'years')}
            >
              {getFormattedMonthYear(state.currentMonth)}
            </Button>
          </DateContentWrapper>
          <DateActionWrapper>
            <Button
              bgColor={'transparent'}
              color={'transparent'}
              type="button"
              borderColor={'transparent'}
              prefixedIcon={<Icon icon={Icons.ChevronLeft} />}
              onClick={() => prevMonth('days')}
            />
            <Button
              bgColor={'transparent'}
              color={'transparent'}
              type="button"
              borderColor={'transparent'}
              prefixedIcon={<Icon icon={Icons.ChevronRight} />}
              onClick={() => nextMonth('days')}
            />
          </DateActionWrapper>
        </DatePickerHeaderWrapper>
      )}
      {state.currentBodySection === 'months' && (
        <DatePickerHeaderWrapper>
          <DateContentWrapper>
            <Button
              bgColor={'transparent'}
              color={COLORS.UI.PrimaryText}
              type="button"
              borderColor={'transparent'}
              suffixedIcon={<Icon icon={Icons.ChevronDownPrimary} />}
              onClick={() => onClick(startingYear, 'years')}
            >
              {state.currentYear}
            </Button>
          </DateContentWrapper>
          <DateActionWrapper>
            <Button
              bgColor={'transparent'}
              color={'transparent'}
              type="button"
              borderColor={'transparent'}
              prefixedIcon={<Icon icon={Icons.ChevronLeft} />}
              onClick={() => prevMonth('months')}
            />
            <Button
              bgColor={'transparent'}
              color={'transparent'}
              type="button"
              borderColor={'transparent'}
              prefixedIcon={<Icon icon={Icons.ChevronRight} />}
              onClick={() => nextMonth('months')}
            />
          </DateActionWrapper>
        </DatePickerHeaderWrapper>
      )}
      {state.currentBodySection === 'years' && (
        <DatePickerHeaderWrapper>
          <DateContentWrapper>
            <Button
              bgColor={'transparent'}
              color={COLORS.UI.PrimaryText}
              type="button"
              borderColor={'transparent'}
              suffixedIcon={<Icon icon={Icons.ChevronDownPrimary} />}
              onClick={() => onClick(startingYear, 'days')}
            >
              {getFormattedYears(startingYear)}
            </Button>
          </DateContentWrapper>
          <DateActionWrapper>
            <Button
              bgColor={'transparent'}
              color={'transparent'}
              type="button"
              borderColor={'transparent'}
              prefixedIcon={<Icon icon={Icons.ChevronLeft} />}
              onClick={() => prevMonth('years')}
            />
            <Button
              bgColor={'transparent'}
              color={'transparent'}
              type="button"
              borderColor={'transparent'}
              prefixedIcon={<Icon icon={Icons.ChevronRight} />}
              onClick={() => nextMonth('years')}
            />
          </DateActionWrapper>
        </DatePickerHeaderWrapper>
      )}
    </>
  )
}

export default Header
