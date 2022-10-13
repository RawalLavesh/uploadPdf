import { ImageProps } from './IImage'
import { StyledImage } from './styles'

const Image = ({ image, alt, width, height }: ImageProps) => {
  return <StyledImage src={image} alt={alt} width={width} height={height} />
}

export default Image
