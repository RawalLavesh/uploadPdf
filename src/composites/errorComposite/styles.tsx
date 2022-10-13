import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 682px;
`
export const ButtonContainer = styled.div`
  button {
    text-align: center;
    padding: 8px 32px;
    width: 168px;
    height: 40px;
    background: #2563eb;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
    justify-content: center;
    :hover {
      background: #1d4ed8;
    }
    :active {
      background: #1e40af;
    }
    :focus-within {
      border: 2px solid #00a9ce;
    }
  }
`
export const StyledSubHeadingTextRegular = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #475569;
`
export const LinkContainer = styled.div`
  margin-top: 4px;
  a {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2563eb;
    text-decoration: none;

    :hover {
      text-decoration-line: underline;
      color: #1e40af;
    }
    :active {
      text-decoration-line: underline;
      color: #1e3a8a;
    }
  }
`
