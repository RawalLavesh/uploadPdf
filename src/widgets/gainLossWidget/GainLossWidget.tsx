import { RootContainer } from './styles'
import TabControl from './tabs/Tabs'

const GainLossWidget = () => {
  return (
    <RootContainer>
      <div>Top Gainers / Losers</div>
      <TabControl />
    </RootContainer>
  )
}

export default GainLossWidget
