import { Icons } from '../../../../shared/GlobalStyle'

export interface SiteMenuItem {
  id: string
  name: string
  src: string
  alt: string
  category: string
  path: string
}

export const SiteMenuList = [
  {
    id: 'Review',
    path: '/review',
    name: 'Reports',
    src: Icons.Document,
    alt: 'Settings icon',
    category: 'default',
  },
  {
    id: 'SignOut',
    path: '/',
    name: 'Sign out',
    src: Icons.SignOut,
    alt: 'Log out icon',
    category: 'LogOut',
  }
]
