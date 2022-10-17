import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
import { SIZES } from '../../theme/Sizes'

export const MasterWrapper = styled.div`
  display: flex;
  margin-top: 1.25rem;
  flex-direction: column;
  align-content: stretch;
  box-sizing: border-box;
  border-radius: 8px;
  flex-flow: row wrap;
  width: 100%;
`
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex: 0 1 100%;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 0 4%;
`
export const LabelS = styled.div`
  border-radius: 8px 8px 0px 0px;
  padding: 0.375rem 1.5rem;
  background-color: ${COLORS.UI.PrimaryText};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`
export const Wrapper2 = styled.div`
  width: 50%;
  padding: 1rem 1% 1rem 10%;
`
export const Wrapper3 = styled.div`
  width: 50%;
  padding: 1rem 10% 1rem 1%;
`
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  flex: 0 1 100%;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 3.5rem 4%;
`
export const SpinnerWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${COLORS.Background.Gray90};
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
export const LottieWrapper = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  background-color: ${COLORS.UI.White};
`
export const ToastWrapper = styled.div`
  position: fixed;
  color: ${COLORS.UI.Black};
  top: 5rem;
  right: 2rem;
  z-index: 999;
`
export const PreviewLocatesWrapper = styled.div`
  display: flex;
  padding: 0 1.5rem;
`
export const DividerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`
export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const PreviewLocate = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  background: ${COLORS.UI.White};
  border-radius: 8px;
`
export const PButton = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const WDCard = styled.div`
  padding: ${SIZES[2]} ${SIZES[4]};
  gap: ${SIZES[1]};
  /* background: ${COLORS.UI.BackgroundStrong}; */
  background-color: #ffffff;
`

export const WDCardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${SIZES[3]} ${SIZES[4]};
  background: ${COLORS.Background.White};
`