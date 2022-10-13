import styled from 'styled-components'
import { Colors } from '../../shared/styles'
import { ContactProps } from './IAvatar'
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0px 16px 16px;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid #e2e8f0;
  :last-child {
    border: none;
    padding-bottom: 8px;
  }

  /* :nth-child(4){
    padding-bottom:8px;
  } */

 
`

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props: ContactProps) => props.circleBgColor};
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  flex-grow: 1;

  a {
    text-decoration: none;
  }
`

export const StyledWrapper = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
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
      line-height: 24px;
      color: ${Colors.Gray};
    }
  }
`

export const ContactAvatarWrapper = styled.div`
  p {
    :nth-child(1) {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${Colors.Gray};
    }

    /* :nth-child(2) {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${Colors.NeutralText};
    } */
  }
`
