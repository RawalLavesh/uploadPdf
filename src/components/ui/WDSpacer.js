import styled from 'styled-components'

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
  xLarge: 4,
  xxLarge: 5,
  xxxLarge: 6,
  mEight: 8,
  mTen: 10,
  m25: 25.62,
}

const positionVariant = {
  top: 'margin-Top',
  left: 'margin-Left',
  right: 'margin-Right',
  bottom: 'margin-Bottom',
}

const getVariant = (position, size) => {
  const sizeIndex = sizeVariant[size]
  const property = positionVariant[position]

  return `${property}:${sizeIndex}px`
}

const WDSpacer = styled.div`
  ${({ position, size }) => getVariant(position, size)}
`

WDSpacer.defaultProps = {
  position: 'top',
  size: 'small',
}

export default WDSpacer
