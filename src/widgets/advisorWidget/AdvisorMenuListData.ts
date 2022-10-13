import { Icons } from '../../shared/GlobalStyle'

export interface AdvisorMenuItem {
  id: string
  name: string
  value: string
  src: string
  alt: string
  category: string
}

export const AdvisorMenuMenuList = [
  {
    id: 'Advisor',
    name: 'Financial Advisor',
    value: 'James Taylor',
    src: Icons.UnnamedAdvisor,
    alt: 'Advisor icon',
    category: 'advisor',
  },

  {
    id: 'Call',
    name: 'Call',
    value: '517-722-9898',
    src: Icons.PhoneCall,
    alt: 'PhoneCall icon',
    category: 'default',
  },
]
