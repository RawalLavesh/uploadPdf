import SidebarDrop from '../sidebarMenuDrop/SidebarDrop'
import { SidebarMenuListProps, Wrapper } from './styles'

/**
 * Groups all the sidebar items into one.
 */
const SidebarMenuList = ({ bgColor }: SidebarMenuListProps) => {
  return (
    <Wrapper bgColor={bgColor}>
      <SidebarDrop label={'Account'} onClick={() => console.log('clicked')} />
      <SidebarDrop label={'Documents'} onClick={() => console.log('clicked')} />
      {/* <SidebarMenuListItems
        label={'Wedbush Research'}
        icon={NeutralIcons.Neutral_Research_16_2x}
        whiteIcon={NeutralIcons.Neutral_Research_16_2x}
        alt={'Research icon'}
      />
      <SidebarMenuListItems
        label={'Quotes & Charts'}
        icon={NeutralIcons.Neutral_Quotes_16_2x}
        whiteIcon={NeutralIcons.Neutral_Quotes_16_2x}
        alt={'Quotes icon'}
      />
      <SidebarMenuListItems
        label={'Help Center'}
        icon={NeutralIcons.Neutral_HelpCenter_16_2x}
        whiteIcon={NeutralIcons.Neutral_HelpCenter_16_2x}
        alt={'Messages icon'}
      /> */}
    </Wrapper>
  )
}

export default SidebarMenuList
