import React from 'react'
import Label from '../../components/label/Label'
import SvgApprove from '../../components/svg/logo/SvgApprove'
import {
  Content,
  IconWrapper,
  MainWrapper,
  ProgressBar,
  ProgressBarTwo,
  StepOne,
  StepTwo,
  StepTwoProgressWrapper,
  TextWrapper,
} from './styles'

interface OrderEntryProgressInterface {
  stepComplete?: string
  nextStep?: string
  progressBar?: string
}
const OrderEntryProgress = ({ ...props }: OrderEntryProgressInterface) => {
  return (
    <MainWrapper>
      <StepOne>
        <ProgressBar />
        <Content>
          <IconWrapper className={props.stepComplete !== '' ? 'done' : ''}>
            {props.stepComplete !== '' ? (
              <SvgApprove fillColor={'#2563eb'} />
            ) : (
              1
            )}
          </IconWrapper>
          <TextWrapper>
            <Label>Select Symbol</Label>
          </TextWrapper>
        </Content>
      </StepOne>
      <StepTwo>
        <StepTwoProgressWrapper>
          <ProgressBarTwo
            className={
              props.progressBar === 'two-A' ||
              props.progressBar === 'two-B' ||
              props.progressBar === 'three'
                ? 'in-progress'
                : 'initial'
            }
          />
          <ProgressBarTwo
            className={
              props.progressBar === 'two-B' || props.progressBar === 'three'
                ? 'in-progress'
                : 'initial'
            }
          />
        </StepTwoProgressWrapper>
        <Content>
          <IconWrapper
            className={
              props.stepComplete === 'two'
                ? 'done'
                : props.nextStep === 'two'
                ? ''
                : 'initial'
            }
          >
            {props.stepComplete === 'two' ? (
              <SvgApprove fillColor={'#2563eb'} />
            ) : (
              2
            )}
          </IconWrapper>
          <TextWrapper>
            <Label>Order Details</Label>
          </TextWrapper>
        </Content>
      </StepTwo>
      <StepOne>
        <ProgressBar
          className={props.progressBar === 'three' ? 'in-progress' : 'initial'}
        />
        <Content>
          <IconWrapper
            className={
              props.stepComplete === 'three'
                ? 'done'
                : props.nextStep === 'three'
                ? ''
                : 'initial'
            }
          >
            {props.stepComplete === 'three' ? (
              <SvgApprove fillColor={'#2563eb'} />
            ) : (
              3
            )}
          </IconWrapper>
          <TextWrapper>
            <Label>Preview</Label>
          </TextWrapper>
        </Content>
      </StepOne>
    </MainWrapper>
  )
}

export default OrderEntryProgress
