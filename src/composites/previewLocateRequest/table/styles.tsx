import styled from 'styled-components'
import { COLORS } from '../../../theme/Colors'

export const RootContainer = styled.div`
  flex: 1;
  table {
    width: 100%;
    border-spacing: 0;
    color: ${COLORS.UI.NeutralText};
    tbody {
      height: 2rem;
      width: 100%;
      overflow: auto;
      tr {
        &.selected {
          background-color: ${COLORS.Background.Gray90};
          td {
            color: ${COLORS.UI.PrimaryText};
            font-weight: 600;
          }
        }
        td {
          border: none;
          border-bottom: 1px solid ${COLORS.Background.Gray50};
          text-align: left;
          padding: 0.5rem;
          width: fit-content;
          &.error {
            color: ${COLORS.UI.Negative2};
          }
          &.Approved {
            color: ${COLORS.UI.Success2};
          }
          &.Pending {
            color: ${COLORS.UI.Warning};
          }
          &.Rejected {
            color: ${COLORS.UI.Danger};
          }
          &.Partial {
            color: ${COLORS.UI.PrimaryText};
          }
        }
      }
    }
    th {
      margin: 0rem 0rem;
      font-style: normal;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1rem;
      border-bottom: 1px solid ${COLORS.Background.Gray50};
      text-align: left;
      padding: 0.5rem;
      width: fit-content;
      &:not(:last-of-type) {
        border-right: 1px solid ${COLORS.Background.Gray50};
      }
    }
    tr {
      width: 100%;
      td {
        margin: 0rem 0rem;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.5rem;
        text-align: center;
        padding: 0.25rem 0.25rem;
        border-right: 1px solid ${COLORS.Background.Gray30};
        border-bottom: 1px solid ${COLORS.Background.Gray30};
        width: fit-content;
      }
    }
  }
`
export const ButtonWrapper = styled.div`
  :hover + .ToolTip {
    position: absolute;
    visibility: visible;
    margin-left: 2.1875rem;
    z-index: 10;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.UI.White};
  width: 100%;
  padding: 0.5rem 0;
`

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
`
export const PreviewLocatesHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0.5rem 1.5rem;
  background-color: ${COLORS.Background.NeutralMedium};
  border-radius: 8px;
`
export const CSVWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ReactTable = styled.div`
  // max-height: calc(100vh - 25rem);
  display: flex;
  background-color: ${COLORS.UI.White};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.Background.White};
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.Background.Primary5};
    border-radius: 4px;
  }
`
export const TableHead = styled.thead`
  position: sticky;
  top: 0rem;
  margin: 0;
  background-color: ${COLORS.UI.White};
`
export const TableWrapper = styled.table``

export const TableRow = styled.tr``

export const TableHeaderCell = styled.th``

export const TableBody = styled.tbody``

export const TableDataCell = styled.td``

export const NoDataWrapper = styled.div`
  text-align: center;
  padding: 0.5rem;
`
