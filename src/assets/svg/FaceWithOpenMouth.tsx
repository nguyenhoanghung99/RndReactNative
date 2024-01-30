import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function FaceWithOpenMouth(props: any) {
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
          <Use xlinkHref="#image0_795_48497" transform="scale(.01389)" />
        </Pattern>
        <Image
          id="image0_795_48497"
          width={72}
          height={72}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default FaceWithOpenMouth
