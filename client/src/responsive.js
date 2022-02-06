// responsive.js is made to write a shortcut function and we can use that shortcut function wherever needed which saves us from writing media query again and again

// To make the shortcut function we need to use the CSS styled component

import { css } from "styled-components"

export const mobile = (props) => {

    return css`
     @media only screen and (max-width: 380px){
        ${props}
    }
    `
}