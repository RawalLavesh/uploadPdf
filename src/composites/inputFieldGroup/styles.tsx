import styled from 'styled-components'

export interface InputFieldGroupProps {
  label1: string
  textboxPlaceholder1?: string
  textboxValue1?: string
  textboxDefaultValue1?: string
  name1?: string
  type1?: string
  disabled1?: boolean
  id1?: string
  max1?: string
  onChange1?: () => void
  label2: string
  textboxPlaceholder2?: string
  textboxValue2?: string
  textboxDefaultValue2?: string
  name2?: string
  type2?: string
  disabled2?: boolean
  id2?: string
  max2?: string
  onChange2?: () => void
}

export const Wrapper = styled.div`
  display: flex;
  flex: 0 1 100%;
  gap: 1rem;
`

export const FlexItem = styled.div`
  flex: 0 1 50%;
  // width: 50%;
`
