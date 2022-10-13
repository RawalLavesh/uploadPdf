import { WDTextLabel, WDTextStrong } from '../../components/ui/WDTypography'
import { PopCard, List, Strong } from './styles'

function PopUPCard(props: any) {
  const { orderId, popup } = props
  return (
    <>
      {orderId && (
        <PopCard popup={popup}>
          <List>
            <WDTextLabel>Order ID</WDTextLabel>
            <WDTextStrong>VFF-5025</WDTextStrong>
          </List>
          <List>
            <WDTextLabel>Submitted on </WDTextLabel>
            <WDTextStrong>05/13/2022 02:49 PM ET</WDTextStrong>
          </List>
        </PopCard>
      )}
      <PopCard popup={popup}>
        <List>
          <WDTextLabel>
            Account Type
            <Strong>General Investment</Strong>
          </WDTextLabel>
          <WDTextStrong>Cash</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Action</WDTextLabel>
          <WDTextStrong>Buy</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Number of Shares</WDTextLabel>
          <WDTextStrong>2</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Action</WDTextLabel>
          <WDTextStrong>Buy</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Order Type</WDTextLabel>
          <WDTextStrong>Limit</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Limit Price</WDTextLabel>
          <WDTextStrong>$125.00</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Duration</WDTextLabel>
          <WDTextStrong>Good for the Day</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Execution Type</WDTextLabel>
          <WDTextStrong>Not Limited</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Action</WDTextLabel>
          <WDTextStrong>Buy</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Commission</WDTextLabel>
          <WDTextStrong>$1.00</WDTextStrong>
        </List>
        <List>
          <WDTextLabel>Estimated Cost</WDTextLabel>
          <WDTextStrong>$250.50</WDTextStrong>
        </List>
      </PopCard>
    </>
  )
}

export default PopUPCard
