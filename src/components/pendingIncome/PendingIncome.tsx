import styled from 'styled-components'

const P = styled.p`
  font-family: 'SourceSansPro-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 24px;
  /* or 150% */
  /* neutral/text */
  color: #0f172a;
`
const RootContainer = styled.div`
  margin: 200px 264px 24px 264px;
`
export const WIP = () => {
  return (
    <RootContainer>
      <P>We are working on it!!</P>
    </RootContainer>
  )
}
