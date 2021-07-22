import { combineReducers } from '@reduxjs/toolkit'
import datasetReducer from './slices/dataset';
const rootReducer = combineReducers({
  dataset: datasetReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;