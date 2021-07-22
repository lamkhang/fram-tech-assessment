import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DataSet = {
  name: string;
  email: string;
  position: string;
}
export type DatasetState = {
  listData: DataSet[]
}

export const initState: DatasetState = {
  listData: []
}
const slice = createSlice({
  name: 'dataset',
  initialState: initState,
  reducers: {
    setList: (state, action: PayloadAction<DatasetState>) => {
      state.listData = action.payload.listData
    }
  }
});

export const { actions } = slice;
export default slice.reducer;