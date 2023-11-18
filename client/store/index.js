import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper, createWrapperStore } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

import account from './userSlice.js'



const combinedReducer = combineReducers({
  account
})

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
    devTools: composeWithDevTools
  })

export const wrapper = createWrapper(makeStore, { debug: true })