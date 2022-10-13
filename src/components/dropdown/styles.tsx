import styled from 'styled-components'

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 0px;
`

export const DropdownBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem 1rem;
  flex: 100%;

  background: #ffffff;

  border: 0.0625rem solid #d0d7e2;
  box-sizing: border-box;
  border-radius: 0.5rem;
`

export const IconWrapper = styled.div`
  flex: 0 1 12%;
  padding: 0.555rem 0.419rem 0.554rem 0.422rem;
`

export const TextWrapper = styled.div`
  flex: 0 1 100%;
`

export const DropdownText = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  margin: 0rem;

  color: #374253;

  opacity: 0.8;
`

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.5rem 0rem 1rem;
  flex: 100%;

  background: #ffffff;
  box-shadow: 0rem 0.125rem 0.375rem -0.125rem rgba(0, 36, 93, 0.3);
  border-radius: 0.5rem;
  margin: 0.5rem 0rem;
`

export const DropdownList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #ffffff;
`

export const DropdownContentTextWrap = styled.div`
  flex: 0 1 100%;
`

export const ListIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order: 1;
  margin: 0px 0px 0.5px 1rem;
  flex: 1 1 12%;
`
