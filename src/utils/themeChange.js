import {
  ALL_ELEMENTS, BODY,
  CURRENT_STATE,
  DARK_THEME_BTN, ERROR,
  LIGHT_THEME_BTN,
  MEMORY_WRAP,
  PREV_VALUE_BTN,
  SCOREBOARD,
  THEME_WRAP
} from "../const";

export const themeChangeDark = () => {
  if (CURRENT_STATE.theme !== 'dark') {
    CURRENT_STATE.theme = "dark"
    DARK_THEME_BTN.classList.add("selectedTheme")
    LIGHT_THEME_BTN.classList.remove("selectedTheme")
    SCOREBOARD.style.backgroundColor = "#333"
    MEMORY_WRAP.style.backgroundColor = "#333"
    PREV_VALUE_BTN.classList.toggle('prevValueLight')
    THEME_WRAP.style.backgroundColor = "#333"
    ALL_ELEMENTS.forEach(el => el.style.color = "#e6e6e6")
    BODY.style.backgroundColor = "#48494a"
    ERROR.style.backgroundColor = "#333"
    ERROR.style.color = "red"
  }
}

export const themeChangeLight = () => {
  if (CURRENT_STATE.theme !== 'light') {
    CURRENT_STATE.theme = "light"
    LIGHT_THEME_BTN.classList.add("selectedTheme")
    DARK_THEME_BTN.classList.remove("selectedTheme")
    SCOREBOARD.style.backgroundColor = "#e6e6e6"
    MEMORY_WRAP.style.backgroundColor = "#e6e6e6"
    PREV_VALUE_BTN.classList.toggle('prevValueLight')
    THEME_WRAP.style.backgroundColor = "#e6e6e6"
    ALL_ELEMENTS.forEach(el => el.style.color = "#000")
    BODY.style.backgroundColor = "#b4b4b4"
    ERROR.style.backgroundColor = "#e6e6e6"
    ERROR.style.color = "darkred"
  }
}