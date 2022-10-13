import styled from 'styled-components'
import { Backgrounds } from '../../shared/styles'
import { COLORS } from '../../theme/Colors'
import { AccountProps } from './IAccounts'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  padding: 12px 24px 20px 24px;
`

export const TitleWrapper = styled.div`
  cursor: pointer;
`

export const MoreButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 8px 16px 8px;
  background: #ffffff;
  border: 1px solid #d0d7e2;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  position: absolute;
  right: 1.5em;
  //bottom: 1em;
  top: 40px;
  z-index: 1;
  width: 232px;

  p {
    padding: 12px 0px 4px 8px;
  }
`

export const DropdownItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    background-color: ${Backgrounds.White};
    :nth-child(3) {
      background-color: ${(props: AccountProps) =>
        props.showOptions ? Backgrounds.Primary10 : Backgrounds.White};
    }
    &:hover {
      background-color: ${Backgrounds.Primary10};
    }
    &:disabled {
      cursor: no-drop;
      background-color: ${COLORS.Background.Neutral40};
    }
  }
`

export const AccountDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 616px;
  p {
    :nth-child(1) {
      min-width: 140px;
    }
    :nth-child(2) {
      min-width: 140px;
    }
  }
`

export const InnerWrapper = styled.div`
  flex: 1;
  border: 1px solid black;
`

export const PctChangeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 4px;
`

export const QuickViewBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 2px;
  cursor: pointer;
  width: max-content;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
`
