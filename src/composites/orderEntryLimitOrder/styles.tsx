import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
  gap: 16px;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 0px 0px 8px;
  //gap: 16px;
  justify-content: space-between;
  width: 100%;
  input{
    align-self: stretch;
    align-items:flex-end;
    width: 50%;
  }
 &.div p {
    width: 50%;
  }
`
export const WholeDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const LimitPriceInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 8px;
  gap: 16px;
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
  input {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }
  input p {
    white-space: pre;
    align-items: center;
  }
`
export const EstimatedCostWrapper = styled.div`
  input {
    border: ${(props: any) =>
      props.disabled ? 'none !important' : '1px solid #cbd5e1'};
  }
`
export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  
  button {
    width: 167px;
    height: 48px;
    background: #ffffff;
    mix-blend-mode: normal;
    border: 1px solid #2563eb;
    border-radius: 8px;
    padding: 12px 16px;
    align-items: center;
  }
  p {
    display: flex;
    align-items: center;
    //text-align: right;
  }
`
export const ExecutionTypeDropdownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 0px 0px 8px;
  gap: 16px;
  width: 311px;
  height: 48px;
  position: absolute;
  top: 6px;
  z-index: 1;
  button {
    width: 167px;
    height: 48px;
    background: #ffffff;
    mix-blend-mode: normal;
    border: 1px solid #2563eb;
    border-radius: 8px;
    padding: 12px 16px;
  }
`
export const CombinedDropdownWrapper = styled.div`
  position: relative;
  width: 43%;
`
export const CombinedExecutionTypeWrapper = styled.div`
  position: relative;
  width: 45%;
`
export const LabelWrapper = styled.div`
 width: 50%;
 :nth-last-child(){
    text-align: center;
    align-items: center;
 }
`
export const DurationDropdownSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 8px;
  width: 239px;
  height: 112px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  position: absolute;
  top: 51px;
  left: -68px;
  z-index: 19;
 :nth-child(1){
    &:hover {
      background: #bfdbfe;
    }}
  p {
    padding: 16px 24px;
    margin: -1px;
    align-self: stretch;
    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-radius: 0 0 8px 8px;
    }
   
  }


`
export const ExecutionDropdownSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 8px;
  width: 239px;
  height: 112px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 8px;
  position: absolute;
  top: 58px;
  left: -57px;
  z-index: 1;
  :nth-child(1){
    :hover {
      background: #bfdbfe;
    }}
  p {
    padding: 16px 24px;
  }
`
