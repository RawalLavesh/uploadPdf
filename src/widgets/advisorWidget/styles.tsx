import styled from 'styled-components'
import { Colors } from '../../shared/styles'
import { COLORS } from '../../theme/Colors'

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 8px 8px 16px;
  border: 1px solid ${COLORS.Background.StrongBackgound};
  box-sizing: border-box;
  //box-shadow: 0px 8px 16px -8px rgba(0, 36, 93, 0.3);
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  background: ${COLORS.Brand.Primary};
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SubWrapper = styled.div`
  padding-bottom: 16px;
  overflow-y: scroll;

  max-height: 300px;
  &::-webkit-scrollbar {
    background: #f1f5f9;
  }
  &::-webkit-scrollbar-thumb {
    height: 8px;
    background: #e2e8f0;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(167, 175, 188, 0.3);
  }
  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
  }
  p {
    :nth-child(1) {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${Colors.Gray};
    }
  }
  svg {
    width: 24px;
    height: 24px;
  }
`
export const AdvisorWidgetWrapper = styled.div`
  display: flex;
  padding-bottom: 8px;
  p {
    :nth-child(1) {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${Colors.NeutralText};
    }
    :nth-child(2) {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${Colors.Gray};
    }
    :nth-child(3) {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${Colors.Gray};
    }
  }
`
export const StyledImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  background: url(.jpg);
  border-radius: 1000px;
`

export const StyledPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const StyledItemNameValueWrapper = styled.div`
  flex: 2 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-left: 16px;
`
export const LabelWrapper = styled.div`
  display: flex;
  //padding-bottom: 8px;
  padding: 16px 0px 8px 16px;
  white-space: pre;
`
