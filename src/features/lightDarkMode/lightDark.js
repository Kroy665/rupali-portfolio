import { createSlice } from '@reduxjs/toolkit'

export const lightDark = createSlice({
  name: 'lightDark',
  initialState: {
    value: true,
  },
  reducers: {
    lightToDark: (state) => {
      state.value = !state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { lightToDark } = lightDark.actions

export default lightDark.reducer