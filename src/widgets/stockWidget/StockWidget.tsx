import { useState, useEffect } from 'react'

import { RootContainer, StockInfoContainer, StockPriceWrapper } from './styles'

interface StocksProp {
  ticker: string
  price: number
  isDown: boolean
  change: number
}

const stocks = [
  { ticker: 'IBM', price: 212.9, change: -2.6, down: true },
  { ticker: 'MSFT', price: 299.5, change: -0.6, down: true },
  { ticker: 'AAPL', price: 170.8, change: 2.8, down: true },
  { ticker: 'AMZN', price: 3268.7, change: -2.6, down: true },
  { ticker: 'GOOGLE', price: 2789.6, change: 12.34, down: true },
  { ticker: 'BRK', price: 348.3, change: 5.6, down: true },
  { ticker: 'BABA', price: 58.1, change: 11.54, down: true },
  { ticker: 'NFLX', price: 1230.2, change: -2.67, down: true },
]

const StockWidgetContent = () => {
  // const [stocks, setStocks] = useState([])

  // useEffect(() => {
  //   fetch('/api/stocks')
  //     .then((res) => res.json())
  //     .then((json) => setStocks(json.stocks))
  // }, [])

  return (
    <>
      {stocks.map((item) => {
        return (
          <StockInfoContainer key={item.ticker}>
            <div>{item.ticker}</div>
            <StockPriceWrapper>{item.price}</StockPriceWrapper>
            <div>{item.change}%</div>
          </StockInfoContainer>
        )
      })}
    </>
  )
}

const StockWidget = () => {
  return (
    <RootContainer>
      <StockWidgetContent />
    </RootContainer>
  )
}

export default StockWidget
