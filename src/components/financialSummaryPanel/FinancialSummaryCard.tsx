import React from 'react'
import { StyledCard } from './styles'

interface cardProps {
  title: string
  children: React.ReactNode
}

const FinancialSummaryCard = ({ title, children }: cardProps) => {
  return (
    <StyledCard>
      <p>{title}</p>
      {children}
    </StyledCard>
  )
}

export default FinancialSummaryCard
