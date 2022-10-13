import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../../theme/Colors'

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  margin: 1rem 0rem 0rem 0rem;
  width: 100%;
  border-radius: 0.5rem;
`

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 0;
  margin-left: 8px;
  margin-right: 8px;
  height: fit-content;
  border-radius: 0.5rem;
`

export const StyledLabel = styled.div`
  overflow: hidden;
  letter-spacing: 0.02em;
  order: 1;
  flex-grow: 1;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: inherit;
`

export const AvatarCircle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${COLORS.Background.Primarytext};
`
