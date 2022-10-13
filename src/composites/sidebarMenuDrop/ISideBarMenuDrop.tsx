export interface RouteTitles {
  routeTitle: string
  openAtNewTab: boolean
}

export interface SidebarDropProps {
  label: string
  items?: RouteTitles[]
  onClick: () => void | string | number | boolean
  clicked?: boolean
  currentState?: boolean
}
