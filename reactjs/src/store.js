import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./redux/saga/index"
import noteReducer from "./redux/slicers/note.slice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
})

sagaMiddleware.run(rootSaga)

export { store }
