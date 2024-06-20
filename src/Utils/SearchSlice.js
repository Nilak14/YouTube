import {createSlice} from '@reduxjs/toolkit'

const SearchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    searchCache: (state, action) => {
      state = Object.assign(state, action.payload)
    },
  },
})

export const {searchCache} = SearchSlice.actions
export default SearchSlice.reducer
