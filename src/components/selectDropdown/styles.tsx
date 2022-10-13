import styled from 'styled-components'
import Select from 'react-select'
import { COLORS } from '../../theme/Colors'

export const Wrapper = styled.div`
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid ${COLORS.UI.PrimaryBorderStrong};
  color: ${COLORS.Text.Primary};

  :nth-child(n) {
    color: ${COLORS.Text.Primary};
  }
`

export const StyledSelect = styled(Select)`
  box-sizing: border-box;
  width: 176px;
`
