import { FC } from 'react'
import { StyledTag } from './styles'
interface TagProps {
  title?: string
}

const Tag: FC<TagProps> = ({ title = 'My title' }) => {
  return <StyledTag>{title}</StyledTag>
}

export default Tag
