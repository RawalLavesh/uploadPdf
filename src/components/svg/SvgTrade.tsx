import { ISvg } from './ISvg'

const SvgTradeSmall = ({ fillColor = '#475569' }: ISvg) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4733 6.19334L11.8067 3.52667C11.7445 3.46451 11.6707 3.41521 11.5895 3.38157C11.5083 3.34793 11.4212 3.33061 11.3333 3.33061C11.1558 3.33061 10.9855 3.40114 10.86 3.52667C10.7345 3.65221 10.6639 3.82247 10.6639 4.00001C10.6639 4.17754 10.7345 4.3478 10.86 4.47334L12.3933 6.00001H4.66666C4.48985 6.00001 4.32028 6.07024 4.19525 6.19527C4.07023 6.32029 3.99999 6.48986 3.99999 6.66667C3.99999 6.84348 4.07023 7.01305 4.19525 7.13808C4.32028 7.2631 4.48985 7.33334 4.66666 7.33334H14C14.1316 7.33268 14.2601 7.29308 14.3692 7.21953C14.4784 7.14597 14.5633 7.04175 14.6133 6.92001C14.6644 6.7986 14.6783 6.66479 14.6534 6.53546C14.6285 6.40614 14.5658 6.28709 14.4733 6.19334V6.19334ZM11.3333 8.66667H1.99999C1.86837 8.66733 1.7399 8.70693 1.63075 8.78049C1.5216 8.85404 1.43667 8.95826 1.38666 9.08001C1.3356 9.20141 1.32166 9.33522 1.34657 9.46455C1.37149 9.59388 1.43415 9.71292 1.52666 9.80667L4.19333 12.4733C4.2553 12.5358 4.32903 12.5854 4.41027 12.6193C4.49151 12.6531 4.57865 12.6705 4.66666 12.6705C4.75467 12.6705 4.8418 12.6531 4.92304 12.6193C5.00428 12.5854 5.07802 12.5358 5.13999 12.4733C5.20248 12.4114 5.25207 12.3376 5.28592 12.2564C5.31977 12.1752 5.33719 12.088 5.33719 12C5.33719 11.912 5.31977 11.8249 5.28592 11.7436C5.25207 11.6624 5.20248 11.5886 5.13999 11.5267L3.60666 10H11.3333C11.5101 10 11.6797 9.92977 11.8047 9.80474C11.9298 9.67972 12 9.51015 12 9.33334C12 9.15653 11.9298 8.98696 11.8047 8.86194C11.6797 8.73691 11.5101 8.66667 11.3333 8.66667Z"
        fill={fillColor}
      />
    </svg>
  )
}

export default SvgTradeSmall

export const SvgTradeMedium = ({ fillColor = '#475569' }: ISvg) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.71 9.29L17.71 5.29C17.6168 5.19676 17.5061 5.1228 17.3843 5.07234C17.2624 5.02188 17.1319 4.99591 17 4.99591C16.7337 4.99591 16.4783 5.1017 16.29 5.29C16.1017 5.47831 15.9959 5.7337 15.9959 6C15.9959 6.2663 16.1017 6.5217 16.29 6.71L18.59 9H7.00002C6.7348 9 6.48045 9.10536 6.29291 9.2929C6.10537 9.48043 6.00002 9.73479 6.00002 10C6.00002 10.2652 6.10537 10.5196 6.29291 10.7071C6.48045 10.8946 6.7348 11 7.00002 11H21C21.1974 10.999 21.3902 10.9396 21.5539 10.8293C21.7176 10.7189 21.845 10.5626 21.92 10.38C21.9966 10.1979 22.0175 9.99718 21.9801 9.80319C21.9428 9.6092 21.8488 9.43063 21.71 9.29V9.29ZM17 13H3.00002C2.80259 13.001 2.60988 13.0604 2.44616 13.1707C2.28244 13.2811 2.15504 13.4374 2.08002 13.62C2.00344 13.8021 1.98252 14.0028 2.01989 14.1968C2.05726 14.3908 2.15126 14.5694 2.29002 14.71L6.29002 18.71C6.38298 18.8037 6.49358 18.8781 6.61544 18.9289C6.7373 18.9797 6.86801 19.0058 7.00002 19.0058C7.13203 19.0058 7.26274 18.9797 7.38459 18.9289C7.50645 18.8781 7.61705 18.8037 7.71002 18.71C7.80375 18.617 7.87814 18.5064 7.92891 18.3846C7.97968 18.2627 8.00582 18.132 8.00582 18C8.00582 17.868 7.97968 17.7373 7.92891 17.6154C7.87814 17.4936 7.80375 17.383 7.71002 17.29L5.41002 15H17C17.2652 15 17.5196 14.8946 17.7071 14.7071C17.8947 14.5196 18 14.2652 18 14C18 13.7348 17.8947 13.4804 17.7071 13.2929C17.5196 13.1054 17.2652 13 17 13Z"
        fill={fillColor}
      />
    </svg>
  )
}
