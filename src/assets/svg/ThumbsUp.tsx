import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function ThumbsUp(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H24V24H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_795_48502" transform="scale(.01389)" />
        </Pattern>
        <Image
          id="image0_795_48502"
          width={72}
          height={72}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default ThumbsUp
