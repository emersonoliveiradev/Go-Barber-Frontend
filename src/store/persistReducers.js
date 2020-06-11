import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  const persistedReduder = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )

  return persistedReduder
}
