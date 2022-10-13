import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 12px 24px;
gap: 8px;
background: #FFF7ED;
width: 100%
`
export const LabelContainer = styled.div`
display: flex;
order: 1;
flex-grow: 1;
//gap: 8px
`
export const SvgWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 4px;
gap: 8px;
width: 32px;
height: 32px;
background: #F97316;
border-radius: 1000px;
order: 0
`
export const SvgContainer = styled.div`
display:flex;
align-items:center;
order: 2
`