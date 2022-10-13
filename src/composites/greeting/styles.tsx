import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`
export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SubHeading = styled.div`
  flex: 1;
  order: 1;
`
export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  flex: 1;
`
export const DateHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 4px;
  justify-content: flex-end;
  flex: 1;
  order: 2;
  padding-right: 12px;
`
