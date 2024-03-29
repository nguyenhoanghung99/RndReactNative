import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PDF = (props: any) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
  >
    <Path
      fill="#E5252A"
      fillRule="evenodd"
      d="M13.325 0h17.386l14.734 15.358V45.23c0 3.742-3.027 6.77-6.757 6.77H13.325a6.765 6.765 0 0 1-6.77-6.77V6.77A6.765 6.765 0 0 1 13.326 0Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M30.696 0v15.241h14.748L30.696 0Z"
      clipRule="evenodd"
      opacity={0.302}
    />
    <Path
      fill="#fff"
      d="M14.077 38.795v-9.498h4.041c1 0 1.793.273 2.391.831.598.546.896 1.287.896 2.21 0 .922-.298 1.663-.896 2.208-.598.559-1.39.832-2.39.832h-1.612v3.417h-2.43Zm2.43-5.483h1.338c.364 0 .65-.078.845-.26.195-.169.299-.403.299-.715 0-.311-.104-.545-.3-.714-.194-.182-.48-.26-.844-.26h-1.338v1.949Zm5.899 5.483v-9.498h3.365c.663 0 1.287.09 1.871.286a5.03 5.03 0 0 1 1.585.844c.468.364.845.858 1.118 1.482.26.623.403 1.338.403 2.144 0 .792-.143 1.507-.403 2.13-.273.624-.65 1.118-1.117 1.482-.468.377-1.001.65-1.586.844a5.88 5.88 0 0 1-1.87.286h-3.366Zm2.378-2.066h.701c.377 0 .728-.039 1.053-.13.312-.09.61-.234.896-.428.273-.195.494-.468.65-.832.156-.364.234-.793.234-1.286 0-.507-.078-.936-.234-1.3a1.926 1.926 0 0 0-.65-.831 3.156 3.156 0 0 0-.896-.43 3.896 3.896 0 0 0-1.053-.13h-.701v5.367Zm7.185 2.066v-9.498h6.757v2.066h-4.327v1.52h3.456v2.053H34.4v3.86h-2.43Z"
    />
  </Svg>
);
export default PDF; 