import styled from 'styled-components'
import { UploadedFile } from '../../shared/models/IUploadDoc'

import { Colors } from '../../shared/styles'

export interface CardProps {
  latestFile: UploadedFile
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 32px 16px;
  gap: 10px;

  /* max-width:23.8%; */
  height: 142px;
  width: 100%;
  flex: 0 0 23.8%;
  background: ${Colors.White};
  box-shadow: 0px 2px 6px -2px rgba(0, 36, 93, 0.3);
  border-radius: 4px;
  p {
    text-transform: capitalize;
  }
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    cursor: pointer;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`
export const WDCard = styled.div``
export const WdPdfDownload = styled.div`
  height: 20px;
`
