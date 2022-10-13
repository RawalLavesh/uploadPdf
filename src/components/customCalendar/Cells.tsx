import { CellsProps } from './ICustomCalendar'
import {
  ButtonWrapper,
  DateWrapper,
  DaysContainer,
  RowsWrapper,
} from './styles'

const Cells = ({ state, onDateClick, minDate, maxDate }: CellsProps) => {
  const toDate = (argument: Date | number) => {
    const argStr = Object.prototype.toString.call(argument)
    if (
      argument instanceof Date ||
      (typeof argument === 'object' && argStr === '[object Date]')
    ) {
      return new Date(argument.getTime())
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument)
    } else {
      return new Date(NaN)
    }
  }

  const startOfMonth = (dirtyDate: Date) => {
    const date = toDate(dirtyDate)
    date.setDate(1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  const endOfMonth = (dirtyDate: Date) => {
    const date = toDate(dirtyDate)
    const month = date.getMonth()
    date.setFullYear(date.getFullYear(), month + 1, 0)
    date.setHours(23, 59, 59, 999)
    return date
  }

  const startOfWeek = (dirtyDate: Date) => {
    const date = toDate(dirtyDate)
    const day = date.getDay()
    const diff = (day < 0 ? 7 : 0) + day
    date.setDate(date.getDate() - diff)
    date.setHours(0, 0, 0, 0)
    return date
  }

  const endOfWeek = (dirtyDate: Date) => {
    const date = toDate(dirtyDate)
    const day = date.getDay()
    const diff = (day < 0 ? -7 : 0) + 6 - day
    date.setDate(date.getDate() + diff)
    date.setHours(23, 59, 59, 999)
    return date
  }

  const isSameMonth = (day: Date, monthStart: Date) => {
    return day.getMonth() === monthStart.getMonth()
  }

  const isSameDay = (day: Date, selectedDate: Date) => {
    return day.getDate() === selectedDate.getDate()
  }

  const isDisabled = (day: Date) => {
    day = new Date(day.getFullYear(), day.getMonth(), day.getDate())
    return (
      (minDate
        ? day <
          new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
        : false) ||
      (maxDate
        ? day >
          new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())
        : false)
    )
  }

  const { currentMonth, selectedDate } = state
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const rows = []

  let days = []
  let day = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
    new Date().getHours(),
    new Date().getMinutes(),
    new Date().getSeconds(),
    new Date().getMilliseconds()
  )
  let formattedDate = ''
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = day.getDate().toString()
      const cloneDay = day
      days.push(
        <DateWrapper key={day.toString()}>
          <ButtonWrapper
            onClick={() => onDateClick(cloneDay)}
            isSameDay={isSameDay(day, selectedDate)}
            isSameSelectedDateMonth={isSameMonth(day, selectedDate)}
            isSameMonth={isSameMonth(day, monthStart)}
            disabled={isDisabled(cloneDay)}
          >
            {formattedDate}
          </ButtonWrapper>
        </DateWrapper>
      )
      const updatedDay = new Date(day)
      day = new Date(updatedDay.setDate(day.getDate() + 1))
    }
    rows.push(<DaysContainer key={day.toString()}>{days}</DaysContainer>)
    days = []
  }
  return <RowsWrapper>{rows}</RowsWrapper>
}

export default Cells
