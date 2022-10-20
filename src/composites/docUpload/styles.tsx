import styled from 'styled-components'
import { COLORS } from '../../theme/Colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  align-content: stretch;
  width: 100%;
`
export const File = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const UploadWrapper = styled.div`
  border: 2px dashed ${COLORS.Border.PrimaryBorderStrong};
  border-radius: 8px;
  padding: 1.5rem 0;
  display: flex;
  &.file-uploaded {
    background-color: ${COLORS.Background.NeutralMedium};
    border: none;
  }
  height: 142px;
`
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`
export const DeleteRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonRowWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding-right: 1rem;
`
export const SampleFile = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 600;
  margin-top: 0.5rem;
`
export const InlineErrorWrapper = styled.div`
  display: flex;
  flex: 0 1 50%;
  justify-content: flex-start;
  align-items: center;
  color: ${COLORS.UI.Danger};
  margin-left: 0.25rem;
`
export const IconWrapper = styled.div`
  display: flex;
  flex: 0 1 50%;
  justify-content: flex-end;
  align-items: center;
`
export const SvgWrapper = styled.div`
  margin-right: 0.25rem;
  margin-top: 0.25rem;
`
export const FileUploadInPut = styled.input``