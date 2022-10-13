import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const MasterWrapper = styled.div`
  display: flex;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  flex: 0 1 100%;
  flex-flow: column nowrap;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 4%;
  width: 100%;
`
export const OverlayWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 0 1 100%;
  flex-flow: column nowrap;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`
export const ModalWrapper = styled.div`
  display: flex;
  flex: 0 1 50%;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px -2px ${COLORS.BoxShadow.Shadow1};
  background-color: ${COLORS.Background.White};
  color: ${COLORS.UI.Gray100};
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 1.25rem;
  line-height: 2rem;
  text-align: right;
  padding: 0.5rem;
  width: 700px;
`
export const ModalHeaderWrapper = styled.div`
  display: flex;
  flex: none;
  order: 0;
  flex-grow: 1;
  width: 100%;
  margin-top: 0.3125rem;
  margin-bottom: 0rem;
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex: 0 1 50%;
  justify-content: flex-start;
  padding: 0.5rem 0rem 0rem 0.5rem;
  text-align: left;
`
export const CancelWrapper = styled.div`
  display: flex;
  flex: 0 1 50%;
  justify-content: flex-end;
  height: 0.75rem;
  margin: 1.25rem 0.875rem;
`
export const ImageWrapper = styled.div`
  margin: 0.25rem;
`
export const DividerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const FieldsetWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: none;
  padding: 0;
  width: 100%;
  margin-left: 0.5rem;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  width: 100%;
`
export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
`
export const FirstTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0.5rem 0 0;
  gap: 0.5rem;
  flex: 0 1 50%;
  align-items: flex-start;
`
export const SecondTextBox = styled.div`
  padding: 0.5rem 0.5rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 0 1 50%;
  gap: 0.5rem;
`

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const ThirdTextBox = styled.div`
  color: ${COLORS.UI.White};
  padding: 0.5rem 0.5rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 0 1 50%;
  gap: 0.5rem;
`
export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${COLORS.UI.White};
  width: 100%;
  margin: 0rem 0rem 0.3125rem 0rem;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 0.5rem 0.5rem;
`
export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  &:not(:last-of-type) {
    flex: 0 0 calc(50% - 1rem);
  }
  &:last-of-type {
    flex: 0 0 50%;
  }
`
export const InlineErrorWrapper = styled.div`
  color: ${COLORS.UI.Negative2};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  font-weight: 400;
  flex: 0 1 50%;
  font-size: 1.125rem;
`
export const AllocationWrapperReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  flex-direction: row;
  height: 80px;
  background: ${COLORS.Background.NeutralMedium};
  opacity: 0.8;
  border-radius: 8px;
  width: 100%;
`
