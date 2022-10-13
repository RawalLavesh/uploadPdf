// import styled from 'styled-components'

// import { Backgrounds, BorderColors, Colors } from '../../shared/styles'
// import { COLORS } from '../../theme/Colors'

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   background: ${Backgrounds.White};
//   padding: 0 32px;
//   border-left: 1px solid ${COLORS.Background.StrongBackgound};
//   box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
//   height: 100vh;
// `

// export const TitleWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 16px 0;
// `

// export const InfoWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0px;
//   gap: 16px;
//   margin-top: 24px;
// `

// export const RowWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0px;
// `

// export const ActionCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   border: 1px solid #cbd5e1;
//   border-radius: 4px;
//   padding: 16px;
//   margin-top: 50px;
//   position: absolute;
//   top: 38px;
//   right:35px;
//   background-color: #ffffff;
// `

// export const CardTitleWrapper = styled(TitleWrapper)`
//   display: flex;
//   flex-direction: row;
//   padding: 0;
// `

// export const AnchorTagsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 16px;
//   padding: 20px 4px 26px 4px;

//   a {
//     text-decoration: none;
//     color: ${Colors.PrimaryText};
//   }
// `
import styled from 'styled-components'

import { Backgrounds, BorderColors, Colors } from '../../shared/styles'
import { COLORS } from '../../theme/Colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Backgrounds.White};
  padding: 0 32px;
  border-left: 1px solid ${COLORS.Background.StrongBackgound};
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  height: 100vh;
  width: 456px;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`
export const LabelWrapper = styled.div`
flex-direction: column;
width: 100%;
gap:16px;
align-items: baseline;
`
export const DividerWrapper = styled.div`
padding-top: 16px;
`


export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
  margin-top: 24px;
`

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
`

export const ActionCard = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 16px;
  margin-top: 50px;
`

export const CardTitleWrapper = styled(TitleWrapper)`
  display: flex;
  flex-direction: row;
  padding: 0;
`

export const AnchorTagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 4px 26px 4px;

  a {
    text-decoration: none;
    color: ${Colors.PrimaryText};
  }
`
export const LabelIconWrapper = styled.div`
align-items: baseline;
flex-direction: row;
`
export const IconLabelWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const ChevronWrapper = styled.div`
display: flex;
justify-content: space-between;
gap: 13px;
align-items: center;
`