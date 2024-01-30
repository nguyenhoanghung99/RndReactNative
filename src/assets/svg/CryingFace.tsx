import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function CryingFace(props: any) {
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
          <Use xlinkHref="#image0_795_48498" transform="scale(.01389)" />
        </Pattern>
        <Image
          id="image0_795_48498"
          width={72}
          height={72}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default CryingFace
