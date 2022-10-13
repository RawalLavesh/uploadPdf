import { ISvg } from '../ISvg'

const SvgApps = ({ fillColor }: ISvg) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66683 8.66683H2.00016C1.82335 8.66683 1.65378 8.73707 1.52876 8.86209C1.40373 8.98712 1.3335 9.15669 1.3335 9.3335V14.0002C1.3335 14.177 1.40373 14.3465 1.52876 14.4716C1.65378 14.5966 1.82335 14.6668 2.00016 14.6668H6.66683C6.84364 14.6668 7.01321 14.5966 7.13823 14.4716C7.26326 14.3465 7.3335 14.177 7.3335 14.0002V9.3335C7.3335 9.15669 7.26326 8.98712 7.13823 8.86209C7.01321 8.73707 6.84364 8.66683 6.66683 8.66683ZM6.00016 13.3335H2.66683V10.0002H6.00016V13.3335ZM14.0002 1.3335H9.3335C9.15669 1.3335 8.98712 1.40373 8.86209 1.52876C8.73707 1.65378 8.66683 1.82335 8.66683 2.00016V6.66683C8.66683 6.84364 8.73707 7.01321 8.86209 7.13823C8.98712 7.26326 9.15669 7.3335 9.3335 7.3335H14.0002C14.177 7.3335 14.3465 7.26326 14.4716 7.13823C14.5966 7.01321 14.6668 6.84364 14.6668 6.66683V2.00016C14.6668 1.82335 14.5966 1.65378 14.4716 1.52876C14.3465 1.40373 14.177 1.3335 14.0002 1.3335ZM13.3335 6.00016H10.0002V2.66683H13.3335V6.00016ZM14.0002 8.66683H9.3335C9.15669 8.66683 8.98712 8.73707 8.86209 8.86209C8.73707 8.98712 8.66683 9.15669 8.66683 9.3335V14.0002C8.66683 14.177 8.73707 14.3465 8.86209 14.4716C8.98712 14.5966 9.15669 14.6668 9.3335 14.6668H14.0002C14.177 14.6668 14.3465 14.5966 14.4716 14.4716C14.5966 14.3465 14.6668 14.177 14.6668 14.0002V9.3335C14.6668 9.15669 14.5966 8.98712 14.4716 8.86209C14.3465 8.73707 14.177 8.66683 14.0002 8.66683ZM13.3335 13.3335H10.0002V10.0002H13.3335V13.3335ZM6.66683 1.3335H2.00016C1.82335 1.3335 1.65378 1.40373 1.52876 1.52876C1.40373 1.65378 1.3335 1.82335 1.3335 2.00016V6.66683C1.3335 6.84364 1.40373 7.01321 1.52876 7.13823C1.65378 7.26326 1.82335 7.3335 2.00016 7.3335H6.66683C6.84364 7.3335 7.01321 7.26326 7.13823 7.13823C7.26326 7.01321 7.3335 6.84364 7.3335 6.66683V2.00016C7.3335 1.82335 7.26326 1.65378 7.13823 1.52876C7.01321 1.40373 6.84364 1.3335 6.66683 1.3335ZM6.00016 6.00016H2.66683V2.66683H6.00016V6.00016Z"
        fill={fillColor}
      />
    </svg>
  )
}

export default SvgApps