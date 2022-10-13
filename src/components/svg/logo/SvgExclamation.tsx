import { ISvg } from '../ISvg'
export const SvgExclamation = ({ fillColor }: ISvg) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7ZM12.92 15.62C12.8981 15.5563 12.8679 15.4957 12.83 15.44L12.71 15.29C12.5694 15.1512 12.3908 15.0572 12.1968 15.0199C12.0028 14.9825 11.8021 15.0034 11.62 15.08C11.4988 15.1306 11.3872 15.2017 11.29 15.29C11.1973 15.3834 11.124 15.4943 11.0742 15.6161C11.0245 15.7379 10.9992 15.8684 11 16C11.0016 16.1307 11.0288 16.2598 11.08 16.38C11.1249 16.5041 11.1966 16.6168 11.2899 16.7101C11.3832 16.8034 11.4959 16.8751 11.62 16.92C11.7397 16.9729 11.8691 17.0002 12 17.0002C12.1309 17.0002 12.2603 16.9729 12.38 16.92C12.5041 16.8751 12.6168 16.8034 12.7101 16.7101C12.8034 16.6168 12.8751 16.5041 12.92 16.38C12.9712 16.2598 12.9984 16.1307 13 16C13.0049 15.9334 13.0049 15.8666 13 15.8C12.9828 15.7362 12.9558 15.6755 12.92 15.62ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
        fill={fillColor}
      />
    </svg>
  )
}
