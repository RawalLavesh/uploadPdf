import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { COLORS } from '../../../theme/Colors'

export const StyleTabs = styled(Tabs)`
  ul {
    background: none;
  }
  -webkit-tap-highlight-color: transparent;
  .react-tabs__tab--selected {
    background: #2563eb;
    color: #ffffff;
    border: 1px solid #2563eb;
  }

  .react-tabs__tab--disabled {
    color: #374253;
    background: #f0f2f5;
    border-radius: 0;
    cursor: default;
  }
`

export const StyleTabList = styled(TabList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f0f2f5;
  border-radius: 4px;
  margin-bottom: 16px;
  margin-top: 16px;

  li {
    padding: 4px 16px;
    list-style: none;
    font-size: 14px;
    font-weight: 600;
    height: 32px;
    line-height: 24px;
    border: 1px solid ${COLORS.Background.PrimaryBorderStrong};
    color: #2563eb;
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
`

export const StyleTab = styled(Tab)`
  width: auto;
  cursor: pointer;
`

export const StyleTabPanel = styled(TabPanel)`
  /* display: none; */
  &:selected {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }
`
