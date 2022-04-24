import { configureStore } from '@reduxjs/toolkit'
import lightDark from '../features/lightDarkMode/lightDark'

export default configureStore({
  reducer: {
    lightDark: lightDark,
  },
})