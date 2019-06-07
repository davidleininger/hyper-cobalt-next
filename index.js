'use strict'

const bg = "#1b2b34"
const black = "#0f1c23"
const red = "#ed6f7d"
const green = "#99c794"
const yellow = "#fac863"
const blue = "#5a9bcf"
const magenta = "#c5a5c5"
const cyan = "#5fb3b3"
const white = "#d8dee9"
const lightBlack = "#65737e"
const lightRed = "#D6838C"
const lightGreen = "#C1DCBE"
const lightYellow = "#FFDE9B"
const lightBlue = "#8ABEE7"
const lightMagenta = "#EDCDED"
const lightCyan = "#9BE2E2"
const lightWhite = "#ffffff"

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed,
  lightGreen,
  lightYellow,
  lightBlue,
  lightMagenta,
  lightCyan,
  lightWhite
}

module.exports.decorateConfig = config => {
  const backgroundColor = bg
  const foregroundColor = white
  const cursorColor = cyan
  const borderColor = bg
  const selectionColor = 'rgba(95, 179, 169, .3)'
  const tabNavBg = black
  const tabText = lightBlack
  const tabTextActive = white
  const dividerBg = black

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
    css: `
      #hyper {
        border: 1px solid ${borderColor};
      }
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			background-color: ${backgroundColor};
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab{
        border-left-color: ${tabNavBg} !important
        border-left-width: 3px;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
        border-left-color: ${cursorColor} !important;
        border-left-width: 3px;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .tab_icon {
        border-radius: 3px;
        background: ${backgroundColor};
        transition: all .2s;
      }
      .tab_icon:hover {
        background: ${tabNavBg};
      }
      #hyper .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
      ${config.css || ''}
    `
  })
}
