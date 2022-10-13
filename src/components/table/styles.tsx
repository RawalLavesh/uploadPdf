import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

import { Colors } from './../../shared/styles'

export const Wrapper = styled.div`
  table {
    table-layout: flex;
    border-collapse: collapse;
    min-width: 100%;
    flex-direction: column;
    border: none;
    background: ${Colors.White};
    text-align: left;

    thead {
      font-family: 'Source Sans Pro';
      font-style: normal;

      tr {
        display: table-row;
        align-items: center;
        flex-wrap: wrap;
        box-shadow: inset 0px -1px 0px ${Colors.Gray30};

        th {
          display: table-cell;
          align-items: center;
          justify-content: space-between;
          /* flex: 4 1 auto; */
          gap: 8px;
          box-shadow: inset 0px -1px 0px ${Colors.Gray30};
          padding: 4px 0px 4px 8px;
        }
      }
    }

    tbody {
      font-family: 'Source Sans Pro';
      font-style: normal;

      tr {
        display: table-row;
        align-items: center;
        font-family: 'Source Sans Pro';

        td {
          display: table-cell;
          align-items: center;
          gap: 8px;
          box-shadow: inset 0px -1px 0px ${Colors.Gray30};
        }
      }
    }

    tfoot {
      font-family: 'Source Sans Pro';
      font-style: normal;

      tr {
        display: table-row;
        align-items: center;
        box-shadow: inset 0px -1px 0px ${Colors.Gray30};

        td {
          display: table-cell;
          align-items: center;
          gap: 8px;
        }
      }
    }

    th,
    td {
      white-space: nowrap;
      display: flex;
      align-items: center;
      flex: 1 0 auto;
      gap: 8px;
    }
  }
`

export const ThWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ThContentWrapper = styled.div`
  width: 100%;
  padding-right: 8px;
`

export const StyledRectangle = styled.div`
  width: 1px !important;
  height: 16px;
  background: ${COLORS.Background.Border} !important;
  border-radius: 1px;
`
