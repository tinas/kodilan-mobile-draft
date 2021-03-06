import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgSearch(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 32 32"
      className=""
      {...props}
    >
      <Path d="M31.609 29.724l-9.1-9.1a12.606 12.606 0 002.824-7.957C25.333 5.683 19.65 0 12.667 0 5.682 0 0 5.683 0 12.667s5.683 12.666 12.666 12.666c3.014 0 5.78-1.061 7.958-2.824l9.1 9.1a1.33 1.33 0 001.885 0 1.332 1.332 0 000-1.885zm-18.943-7.057c-5.514 0-10-4.486-10-10 0-5.515 4.486-10 10-10 5.515 0 10 4.485 10 10 0 5.514-4.485 10-10 10z" />
    </Svg>
  )
}

export default SvgSearch
