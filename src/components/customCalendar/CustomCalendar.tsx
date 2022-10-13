import { RefObject, useEffect, useRef, useState } from 'react'
import Cells from './Cells'
import Days from './Days'
import Header from './Header'
import { CustomCalendarProps } from './ICustomCalendar'
import InputBox from './InputBox'
import Months from './Months'
import { CustomCalendarWrapper, DatePickerPopUp } from './styles'
import Years from './Years'

export interface CalendarState {
  currentMonth: Date
  selectedDate: Date
  isCalendarOpen: boolean
  isDateSelected: boolean
  currentYear: number
  startingYear: number
  currentBodySection: 'days' | 'months' | 'years'
}

const CustomCalendar = ({
  name,
  placeholder,
  value,
  onChange,
  resetValue,
  minDate,
  maxDate,
}: CustomCalendarProps) => {
  const getStartingYear = (year: number) => {
    return Math.floor(year / 9) * 9
  }
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<CalendarState>({
    currentMonth: new Date(),
    selectedDate: value ? new Date(value) : new Date(),
    isCalendarOpen: false,
    isDateSelected: false,
    currentYear: new Date().getFullYear(),
    startingYear: getStartingYear(new Date().getFullYear()),
    currentBodySection: 'days',
  })

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear().toString()
    return month.concat('/').concat(day).concat('/').concat(year)
  }

  const onDateClick = (day: Date) => {
    setState({
      ...state,
      selectedDate: day,
      isDateSelected: true,
      isCalendarOpen: false,
    })
    onChange && onChange(day)
  }

  const onHeaderClick = (
    year: number,
    bodySection: 'days' | 'months' | 'years'
  ) => {
    setState({
      ...state,
      currentBodySection: bodySection,
      startingYear: year,
    })
  }

  const onYearClick = (year: number) => {
    setState({
      ...state,
      currentYear: year,
      currentBodySection: 'months',
    })
  }

  const onMonthClick = (month: number) => {
    setState({
      ...state,
      currentBodySection: 'days',
      currentMonth: new Date(
        state.currentMonth.setFullYear(state.currentYear, month)
      ),
    })
  }

  const addMonths = (date: Date, months: number) => {
    return new Date(date.setMonth(date.getMonth() + months))
  }

  const subMonths = (date: Date, months: number) => {
    return new Date(date.setMonth(date.getMonth() - months))
  }

  const nextMonth = (bodySection: 'days' | 'months' | 'years') => {
    switch (bodySection) {
      case 'days':
        setState({
          ...state,
          currentMonth: addMonths(state.currentMonth, 1),
        })
        break
      case 'months':
        setState({
          ...state,
          currentYear: state.currentYear + 1,
        })
        break
      case 'years':
        setState({
          ...state,
          startingYear: state.startingYear + 12,
        })
        break
    }
  }

  const prevMonth = (bodySection: 'days' | 'months' | 'years') => {
    switch (bodySection) {
      case 'days':
        setState({
          ...state,
          currentMonth: subMonths(state.currentMonth, 1),
        })
        break
      case 'months':
        setState({
          ...state,
          currentYear: state.currentYear - 1,
        })
        break
      case 'years':
        setState({
          ...state,
          startingYear: state.startingYear - 12,
        })
        break
    }
  }

  const getSelectedDate = () => {
    return state.selectedDate && state.isDateSelected
      ? formatDate(state.selectedDate)
      : ''
  }

  useEffect(() => {
    if (!resetValue) {
      setState({
        ...state,
        isDateSelected: false,
        selectedDate: new Date(),
      })
    }
  }, [resetValue])

  const useOutsideAlerter = (ref: RefObject<HTMLDivElement>) => {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          if (state.isCalendarOpen) {
            setState({
              ...state,
              isCalendarOpen: false,
            })
          }
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, state.isCalendarOpen])
  }

  useOutsideAlerter(wrapperRef)

  return (
    <CustomCalendarWrapper ref={wrapperRef}>
      <InputBox
        name={name}
        onClick={() =>
          setState({ ...state, isCalendarOpen: !state.isCalendarOpen })
        }
        value={value ? formatDate(new Date(value)) : getSelectedDate()}
        placeholder={placeholder}
      />
      {state.isCalendarOpen && (
        <DatePickerPopUp>
          <Header
            state={state}
            startingYear={state.startingYear}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            onClick={onHeaderClick}
          />
          {state.currentBodySection === 'days' && (
            <>
              <Days />
              <Cells
                state={state}
                onDateClick={onDateClick}
                minDate={minDate}
                maxDate={maxDate}
              />
            </>
          )}
          {state.currentBodySection === 'months' && (
            <Months
              currentYear={state.currentYear}
              state={state}
              onMonthSelect={onMonthClick}
              minDate={minDate}
              maxDate={maxDate}
            />
          )}
          {state.currentBodySection === 'years' && (
            <Years
              startingYear={state.startingYear}
              currentYear={state.currentMonth.getFullYear()}
              state={state}
              onYearSelect={onYearClick}
              minDate={minDate}
              maxDate={maxDate}
            />
          )}
        </DatePickerPopUp>
      )}
    </CustomCalendarWrapper>
  )
}

export default CustomCalendar
