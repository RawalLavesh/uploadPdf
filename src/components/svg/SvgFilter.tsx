import { ISvg } from './ISvg'

const SvgFilter = ({ fillColor }: ISvg) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6668 1.3335H3.3335C2.80306 1.3335 2.29436 1.54421 1.91928 1.91928C1.54421 2.29435 1.3335 2.80306 1.3335 3.3335V4.11349C1.3334 4.38879 1.39014 4.66114 1.50016 4.91349V4.95349C1.59435 5.16748 1.72776 5.36194 1.8935 5.52683L6.00016 9.60683V14.0002C5.99994 14.1135 6.02859 14.2249 6.08341 14.3241C6.13824 14.4232 6.21742 14.5068 6.3135 14.5668C6.41959 14.6326 6.54202 14.6672 6.66683 14.6668C6.77119 14.6662 6.87395 14.6411 6.96683 14.5935L9.6335 13.2602C9.74344 13.2048 9.8359 13.12 9.90062 13.0153C9.96534 12.9105 9.99979 12.7899 10.0002 12.6668V9.60683L14.0802 5.52683C14.2459 5.36194 14.3793 5.16748 14.4735 4.95349V4.91349C14.5927 4.66312 14.6586 4.39068 14.6668 4.11349V3.3335C14.6668 2.80306 14.4561 2.29435 14.081 1.91928C13.706 1.54421 13.1973 1.3335 12.6668 1.3335ZM8.86017 8.86016C8.79838 8.92245 8.7495 8.99633 8.71632 9.07756C8.68314 9.15878 8.66633 9.24576 8.66683 9.33349V12.2535L7.3335 12.9202V9.33349C7.33401 9.24576 7.31719 9.15878 7.28401 9.07756C7.25084 8.99633 7.20195 8.92245 7.14017 8.86016L3.60683 5.33349H12.3935L8.86017 8.86016ZM13.3335 4.00016H2.66683V3.3335C2.66683 3.15668 2.73707 2.98712 2.86209 2.86209C2.98712 2.73707 3.15669 2.66683 3.3335 2.66683H12.6668C12.8436 2.66683 13.0132 2.73707 13.1382 2.86209C13.2633 2.98712 13.3335 3.15668 13.3335 3.3335V4.00016Z"
        fill={fillColor}
      />
    </svg>
  )
}

export default SvgFilter
