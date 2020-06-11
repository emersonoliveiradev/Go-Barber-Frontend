import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  const persistedReduder = persistReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )

  return persistedReduder
}
