import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgInfo(props) {
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
      <Path d="M16 5.333A2.67 2.67 0 0013.333 8 2.67 2.67 0 0016 10.667 2.67 2.67 0 0018.667 8 2.67 2.67 0 0016 5.333zm0 4A1.335 1.335 0 0114.667 8c0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333S16.735 9.333 16 9.333zM18 12h-5.333a.666.666 0 00-.667.667v2.666c0 .369.298.667.667.667h.666v10c0 .369.299.667.667.667h4a.666.666 0 00.667-.667V12.667A.666.666 0 0018 12zm-.667 13.333h-2.666v-10a.666.666 0 00-.667-.666h-.667v-1.334h4v12z" />
      <Path d="M16 0C7.178 0 0 7.178 0 16s7.178 16 16 16 16-7.178 16-16S24.822 0 16 0zm0 30.667c-8.087 0-14.667-6.58-14.667-14.667S7.913 1.333 16 1.333 30.667 7.913 30.667 16 24.087 30.667 16 30.667z" />
    </Svg>
  )
}

export default SvgInfo
