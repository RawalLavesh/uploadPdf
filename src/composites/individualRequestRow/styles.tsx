import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const FormWrapper = styled.form`
  display: flex;
`
export const FieldsetWrapper = styled.fieldset`
  border: none;
  padding: 0;
  width: 100%;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`
export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  flex: 1 0 100%;
  gap: 1rem;
`
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 2.25rem;
  left: -2.5rem;
  &:hover + .ToolTip {
    position: absolute;
    margin-left: 0.5rem;
    margin-top: 1.4rem;
    visibility: visible;
    z-index: 10;
  }
`
export const MasterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-of-type) {
    flex: 0 0 calc(25% - 1rem);
  }
  &:last-of-type {
    flex: 0 0 25%;
  }
`
export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const InlineErrorWrapper = styled.div`
  color: ${COLORS.UI.Negative2};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
`

export const FirstTextBox = styled.div`
  padding: 0.5rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;
`
export const SecondTextBox = styled.div`
  padding: 0.5rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;
`
export const ThirdTextBox = styled.div`
  padding: 0.5rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;
`
export const FourthTextBox = styled.div`
  padding: 0.5rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.25rem;
`
