import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonRow } from '../../../composites/buttonRow/ButtonRow'

interface Props {
  children?: React.ReactNode
  onClick?: () => void
}
export const HoldingsButton: FC<Props> = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('holdings')
  }

  return (
    <ButtonRow
      buttons={[{ children: 'Holdings' }]}
      color={'#2563EB'}
      padding={'0px 8px'}
      fontWeight={600}
      fontSize={'14px'}
      lineHeight={'24px'}
      borderColor={'#6085FA'}
      bgColor={'#ffffff'}
      borderRadius={'4px'}
      onClick={onClickHandler}
    />
  )
}

export const ActivityButton: FC<Props> = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('activity')
  }

  return (
    <ButtonRow
      buttons={[{ children: 'Activity' }]}
      color={'#2563EB'}
      padding={'0px 8px'}
      fontWeight={600}
      fontSize={'14px'}
      lineHeight={'24px'}
      borderColor={'#6085FA'}
      bgColor={'#ffffff'}
      borderRadius={'4px'}
      onClick={onClickHandler}
    />
  )
}
