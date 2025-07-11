import { APP_SIZE } from "../../styles/size/app-size.js"

export const calculateCenteredXPosition = (width) => {
  return ((APP_SIZE.width / 2) - (width / 2))
}
export const calculateCenteredYPosition = (height) => {
  return ((APP_SIZE.height / 2) - (height / 2))
}

export const calculateRightCenteredXPosition = (width) => {
  return (APP_SIZE.width / 2) - width
}
export const calculateLeftCenteredXPosition = () => {
  return APP_SIZE.width / 2
}

export const calculateBottomCenteredYPosition = (height) => {
  return (APP_SIZE.height / 2) - height
}
export const calculateTopCenteredYPosition = () => {
  return APP_SIZE.height / 2
}