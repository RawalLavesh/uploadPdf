import styled from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  gap: 8px;
`
export const StepOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% / 3);
`
export const ProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 8px;
  padding: 0px;
  width: 100%;
  background-color: #2563eb;
  &.initial {
    background-color: #e2e8f0;
  }
  &.in-progress {
    background-color: #2563eb;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 1000px;
  background-color: #2563eb;
  color: #ffffff;
  &.initial {
    background-color: #e2e8f0;
    color: #a7afbc;
  }
  &.done {
    background-color: #ffffff;
    border: 1px solid #2563eb;
  }
`
export const TextWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0f172a;
`
export const StepTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% / 3);
`
export const ProgressBarTwo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 8px;
  padding: 0px;
  width: 50%;
  &.initial {
    background-color: #e2e8f0;
  }
  &.in-progress {
    background-color: #2563eb;
  }
`
export const StepTwoProgressWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`
