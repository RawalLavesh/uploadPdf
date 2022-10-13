import { ReactElement } from 'react'

export interface ContactProps {
  avatarIcon: SVGElement | ReactElement | string
  title: string
  address: string
  telephoneNo: string
  circleBgColor?: string
}

export interface AvatarProps {
  contactDetails: ContactProps[]
}
