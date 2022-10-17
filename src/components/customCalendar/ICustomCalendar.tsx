import { CalendarState } from './CustomCalendar'
export interface InputFunc {
  (bodySection: 'days' | 'months' | 'years'): void
}

export interface CalendarInputFunc {
  (day: Date): void
}

export interface InputBoxFunc {
  (): void
}

export interface DateInputFunc {
  (date: Date): void
}

export interface YearInputFunc {
  (year: number, bodySection: 'days' | 'months' | 'years'): void
}

export interface MonthInputFunc {
  (month: number): void
}

export interface DateButtonProps {
  isSameDay: boolean
  isSameMonth: boolean
  isSameSelectedDateMonth: boolean
  disabled?: boolean
}

export interface InputBoxProps {
  name?: string
  placeholder?: string
  value?: string
  onClick?: InputBoxFunc
  onBlur?: InputBoxFunc
}

export interface CustomCalendarProps {
  name?: string
  placeholder?: string
  value?: string
  onChange?: CalendarInputFunc
  minDate?: Date
  maxDate?: Date
  resetValue?: string
  disable?: boolean
}

export interface HeaderProps {
  state: CalendarState
  startingYear: number
  prevMonth: InputFunc
  nextMonth: InputFunc
  onClick: YearInputFunc
}

export interface CellsProps {
  state: CalendarState
  onDateClick: DateInputFunc
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
}

export interface MonthsProps {
  state: CalendarState
  currentMonth?: number
  currentYear: number
  onMonthSelect: MonthInputFunc
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
}

export interface YearsProps {
  state: CalendarState
  startingYear: number
  currentYear: number
  onYearSelect: YearInputFunc
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
}
