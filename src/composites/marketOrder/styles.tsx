import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'
export const CardBox = styled.div`
  padding: 32px 32px 32px 32px;
  /* background: ${COLORS.Background.Primary};
  border: 1px solid ${COLORS.Background.Border};
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px; */
`

export const MakeOrderForm = styled.form`
  max-width: 440px;
`
export const FromControllerGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px;
  align-items: center;
  column-gap: 50px;
  input {
    border: ${(props: any) =>
      props.disabled ? 'none !important' : '1px solid #cbd5e1'};
    width: 167px;
    &:active {
      border: 1px solid #2563eb;
    }
    &:focus {
      border: 1px solid #2563eb;
    }
  }
`
export const FromControllerGroupOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px;
  align-items: center;
  column-gap: 50px;
  input {
    border: ${(props: any) =>
      props.disabled ? 'none !important' : '1px solid #cbd5e1'};
    width: 167px;
    &:active {
      border: 1px solid #2563eb;
    }
    &:focus {
      border: 1px solid #2563eb;
    }
  }
`
export const FromControllerGroupTwo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 16px;
  align-items: center;
  column-gap: 50px;
  input {
    border: ${(props: any) =>
      props.disabled ? 'none !important' : '1px solid #cbd5e1'};
    width: 167px;
    &:active {
      border: 1px solid #2563eb;
    }
    &:focus {
      border: 1px solid #2563eb;
    }
  }
`

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 9;

  button {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px 16px;
    text-align: center;
    width: 100%;
    color: #0f172a;
  }
`
export const CombinedDropdownWrapper = styled.div`
 
  button {
  width: 167px;
  height: 48px;
  }
`
export const CombinedExecutionTypeDropdownWrapper = styled.div`
  position: relative;
`
export const ExecutionTypeDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 9;

  button {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px 16px;
    text-align: center;
    width: 100%;
    color: #0f172a;
  }
`
export const DropdownOne = styled.div`
  position: relative;
`
export const DropdownTwo = styled.div`
  position: relative;
  button {
  width: 167px;
  height: 48px;
  }
`
export const DropdownSubMenuOne = styled.div`
  /* position: absolute;
  top: 100%;
  left: 50;
  width: 100%; */
  position: absolute;
  width: 239px;
  height: 112px;
  left: -73px;
  top: 50px;
  background: #fff;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  overflow: hidden;
  z-index: 1;
  p {
    padding: 16px 25px;
    margin: -1px;
    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-radius: 0 0 8px 8px;
    }
    &:hover {
      background: #bfdbfe;
    }
  }
`
export const DropdownSubMenuTwo = styled.div`
  /* position: absolute;
  top: 100%;
  left: 50;
  width: 100%; */
  position: absolute;
  width: 239px;
  height: 112px;
  left: -69px;
  top: 50px;
  background: #fff;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  //overflow: hidden;
  z-index: 1;
  p {
    padding: 16px 25px;
    margin: -1px;
    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-radius: 0 0 8px 8px;
    }
    &:hover {
      background: #bfdbfe;
    }
  }
`

export const Warning = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px;
  p {
    padding-left: 10px;
    color: #c2410c;
  }
`
