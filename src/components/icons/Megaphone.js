import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function SvgMegaphone(props) {
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
      <G clipPath="url(#megaphone_svg__clip0)">
        <Path d="M27.665 9.883V3.689a.723.723 0 00-.345-.585.86.86 0 00-.653-.103l-13.66 5.436H6.262a3.51 3.51 0 00-3.028 1.859l-.619.24A3.888 3.888 0 000 14.218a3.82 3.82 0 002.615 3.647l.413.173a3.544 3.544 0 001.72 1.892l1.824 6.606a3.372 3.372 0 005.953 1.136 3.544 3.544 0 00.55-2.994l-1.238-4.542h1.17l13.66 5.54.24.069a.825.825 0 00.413-.103.653.653 0 00.344-.55v-6.538a4.335 4.335 0 000-8.671zM2.89 16.489a2.305 2.305 0 01-1.445-2.27 2.305 2.305 0 011.445-2.272v4.542zm8.534 10.323c-.38.51-.982.805-1.618.791A2.065 2.065 0 017.88 26.09l-1.618-5.953h4.164l1.307 4.886a2.065 2.065 0 01-.31 1.79zm1.1-8.052H6.263a1.893 1.893 0 01-1.995-1.927v-4.886A2.065 2.065 0 016.26 9.814h6.265v8.946zm13.764 5.299l-12.387-4.955V9.676l12.387-4.955V24.06zm1.377-6.882V11.26a2.96 2.96 0 010 5.918z" />
      </G>
      <Defs>
        <ClipPath id="megaphone_svg__clip0">
          <Path d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgMegaphone
