const FOREGROUND = '#BCC0CC'
const BACKGROUND = '#112239'
const DARKBACKGROUND = '#0E1C2F'
const BORDER = '#1E232F'

const BLACK = '#4A4D4C'
const RED = '#E84030'
const GREEN = '#14B369'
const YELLOW = '#EBD547'
const ORANGE = '#FCAF22'
const PURPLE = '#B04CE6'
const CYAN = '#38A6F5'
const WHITE = '#BABDBC'
const LIGHTBLACK = '#6A6D6C'
const LIGHTRED = '#E47267'
const LIGHTGREEN = '#25D483'
const LIGHTYELLOW = '#E8DA7D'
const LIGHTORANGE = '#F4BF5D'
const LIGHTPURPLE = '#C181E4'
const LIGHTCYAN = '#71BAEF'
const LIGHTWHITE = '#DADDDC'

const colors = {
  black: BLACK,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: ORANGE,
  magenta: PURPLE,
  cyan: CYAN,
  white: WHITE,
  lightBlack: LIGHTBLACK,
  lightRed: LIGHTRED,
  lightGreen: LIGHTGREEN,
  lightYellow: LIGHTYELLOW,
  lightBlue: LIGHTORANGE,
  lightMagenta: LIGHTPURPLE,
  lightCyan: LIGHTCYAN,
  lightWhite: LIGHTWHITE
}

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    colors,
    foregroundColor: FOREGROUND,
    backgroundColor: BACKGROUND,
    cursorColor: GREEN,
    cursorShape: 'BLOCK',
    lineHeight: 1.2,
    selectionColor: LIGHTGREEN,
    borderColor: BORDER,
    fontSize: 14,
    css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background: ${DARKBACKGROUND} !important;
    }
    .tab_tab {
      color: ${FOREGROUND}60;
      background: ${DARKBACKGROUND} !important;
      border: 0 !important;
      border-top: none !important;
    }
    .tab_tab.tab_active {
      color: ${FOREGROUND};
      border-top: 1px solid ${GREEN} !important;
      border-bottom: none !important;
      background: ${BACKGROUND} !important;
    }
    `
  })
