import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LabelHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  color: ${(props: any) =>
    props.color ? props.color : `${COLORS.Brand.Primary}`};
`

export const List = styled.div`
  position: relative;
  margin: 0 8px 0 0;
  input {
    // padding: 8px 4px;
    font-size: 16px;
    width: 128px;
    height: 32px;
    line-height: 32px;
    border-radius: 8px;
    ::placeholder {
      color: ${COLORS.Text.NeutralTextWeak};
      opacity: 1;
    }
  }
  input:focus {
    outline: none;
    border: 1px solid ${COLORS.UI.Border};
  }
  div > div > div {
    border-radius: 5px;
    width: 100%;
    height: 32px;
    line-height: 32px;
  }
  div > div > div div {
    width: 100%;
    border-radius: 0;
    overflow: visible;
  }
  div > div > div > div:nth-child(2) {
    position: absolute;
    right: 10px;
    left: auto;
    width: 20px;
    top: -2px;
  }
  button {
    color: ${COLORS.Text.NeutralTextDisabled};
    line-height: 24px;
  }
`
export const InputIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8.67px;
  svg path {
    fill: ${COLORS.UI.Icon};
  }
`
export const ButtonStyle = styled.div`
  display: flex;
  // padding-bottom: 16px;
  button {
    background-color: ${COLORS.Background.NeutralBackground};
    border: 1px solid ${COLORS.UI.Border};
    border-radius: 8px;
    padding: 4px 16px;
    width: 176px;
    height: 32px;
  }
`
