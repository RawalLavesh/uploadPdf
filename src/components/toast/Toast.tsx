import {
  ToastTitle,
  ToastIcon,
  ToastImage,
  ToastText,
  Main,
  ToastWrapper,
  IconWrapper,
  Master,
} from './styles'
import Image from '../image/Image'
import { useState } from 'react'
import { Icons } from '../../shared/GlobalStyle'
import { WDButtonTransparent } from '../ui/WDButton'
import Button from '../button/Button'
import { ToastProps } from './IToast'

export const Toast = ({ text, type, openStatusCallback }: ToastProps) => {
  const handleAttributes = (type: string | undefined) => {
    switch (type) {
      case 'success':
        return {
          title: 'Success!',
          icon: Icons.Success,
          image: Icons.Cancel,
        }
      case 'danger':
        return {
          title: 'Error!',
          icon: Icons.Critical,
          image: Icons.Cancel,
        }
      case 'warning':
        return {
          title: 'Warning!',
          icon: Icons.Warning,
          image: Icons.Cancel,
        }
      default:
        return {
          title: 'Default!',
          icon: Icons.Default,
          image: Icons.Cancel,
        }
    }
  }

  const [isOpen, setIsOpen] = useState(true)

  setTimeout(() => {
    setIsOpen(false)
    openStatusCallback(false)
  }, 5000)

  const handleToggle = () => {
    setIsOpen(false)
    openStatusCallback(false)
  }

  return (
    <Master>
      {isOpen && (
        <Main type={type}>
          <ToastWrapper>
            <IconWrapper>
              <ToastIcon>
                {handleAttributes(type).icon && (
                  <Image
                    image={handleAttributes(type).icon}
                    alt={'Toast Icon'}
                  />
                )}
              </ToastIcon>
              <ToastTitle title={handleAttributes(type).title}>
                {handleAttributes(type).title}
              </ToastTitle>
              <ToastImage>
                {handleAttributes(type).image && (
                  <WDButtonTransparent>
                    <Button type={'button'} onClick={handleToggle}>
                      <Image
                        image={handleAttributes(type).image}
                        alt={'Toast Cancel'}
                        height={'16px'}
                        width={'16px'}
                      />
                    </Button>
                  </WDButtonTransparent>
                )}
              </ToastImage>
            </IconWrapper>
            <ToastText text={text}>{text}</ToastText>
          </ToastWrapper>
        </Main>
      )}
    </Master>
  )
}
