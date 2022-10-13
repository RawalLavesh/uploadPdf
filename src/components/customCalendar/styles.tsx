import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
import { DateButtonProps, MonthsProps, YearsProps } from './ICustomCalendar'

export const CustomCalendarWrapper = styled.div`
  position: relative;
  height: inherit;
  width: inherit;
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: inherit;
  height: inherit;
  button {
    position: absolute;
    right: 0.75rem;
  }
  cursor: pointer;
`
export const StyledInput = styled.input`
  padding: 10px 12px;
  flex: 1 1 100%;
  height: 2rem;
  width: inherit;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid ${COLORS.Border.Gray50};
`
export const DatePickerPopUp = styled.div`
  background-color: ${COLORS.Background.White};
  border-radius: 0.5rem;
  width: 18rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 6px -2px ${COLORS.BoxShadow.Shadow2};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;
  position: absolute;
  top: inherit;
  left: 0;
  z-index: 99;
`
export const DatePickerHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const DateContentWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  button {
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
`
export const DateActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`
export const DaysWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const StyledDays = styled.div`
  color: ${COLORS.UI.Gray};
  font-size: 1rem;
  font-weight: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: default;
`
export const RowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const DaysContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const DateWrapper = styled.div<DateButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const ButtonWrapper = styled.div<DateButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  cursor: ${(YearsProps: YearsProps) =>
    YearsProps.disabled ? 'default' : 'pointer'};
  pointer-events: ${(YearsProps: YearsProps) =>
    YearsProps.disabled ? 'none' : ''};
  background-color: ${(DateButtonProps: DateButtonProps) =>
    DateButtonProps.isSameDay && DateButtonProps.isSameSelectedDateMonth
      ? COLORS.Background.PrimaryText
      : COLORS.Background.White};
  color: ${(DateButtonProps: DateButtonProps) =>
    !DateButtonProps.isSameMonth
      ? COLORS.UI.Gray40
      : DateButtonProps.isSameDay && DateButtonProps.isSameSelectedDateMonth
      ? COLORS.UI.White
      : DateButtonProps.disabled
      ? COLORS.UI.Gray40
      : COLORS.UI.NeutralText};
  &:hover {
    background-color: ${(DateButtonProps: DateButtonProps) =>
      DateButtonProps.isSameDay && DateButtonProps.isSameSelectedDateMonth
        ? COLORS.Background.PrimaryText
        : COLORS.Border.Primary5};
  }
`
export const MonthsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`
export const StyledMonths = styled.div<MonthsProps>`
  color: ${(MonthsProps: MonthsProps) =>
    MonthsProps.currentYear === MonthsProps.state.currentMonth.getFullYear() &&
    MonthsProps.currentMonth === MonthsProps.state.currentMonth.getMonth()
      ? COLORS.UI.White
      : MonthsProps.disabled
      ? COLORS.UI.Gray40
      : COLORS.UI.Gray};
  background-color: ${(MonthsProps: MonthsProps) =>
    MonthsProps.currentYear === MonthsProps.state.currentMonth.getFullYear() &&
    MonthsProps.currentMonth === MonthsProps.state.currentMonth.getMonth()
      ? COLORS.Background.PrimaryText
      : COLORS.Background.White};
  &:hover {
    background-color: ${COLORS.Border.Primary5};
  }
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  flex: 0 0 calc(33% - 1rem);
  cursor: ${(YearsProps: YearsProps) =>
    YearsProps.disabled ? 'default' : 'pointer'};
  pointer-events: ${(YearsProps: YearsProps) =>
    YearsProps.disabled ? 'none' : ''};
`
export const MonthsContainer = styled.div`
  color: ${COLORS.UI.Gray};
  font-size: 1rem;
  font-weight: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: default;
`
export const YearsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`
export const StyledYears = styled.div<YearsProps>`
  flex: 0 0 calc(33% - 1rem);
  color: ${(YearsProps: YearsProps) =>
    YearsProps.currentYear === YearsProps.state.currentMonth.getFullYear()
      ? COLORS.UI.White
      : YearsProps.disabled
      ? COLORS.UI.Gray40
      : COLORS.UI.Gray};
  background-color: ${(YearsProps: YearsProps) =>
    YearsProps.currentYear === YearsProps.state.currentMonth.getFullYear()
      ? COLORS.Background.PrimaryText
      : COLORS.Background.White};
  &:hover {
    background-color: ${COLORS.Border.Primary5};
  }
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: ${(YearsProps: YearsProps) =>
    YearsProps.disabled ? 'default' : 'pointer'};
  pointer-events: ${(YearsProps: YearsProps) =>
    YearsProps.disabled ? 'none' : ''};
`
