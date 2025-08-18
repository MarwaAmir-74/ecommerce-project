import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' 
import CategoriesSlice from './redux/Slices/categoriesSlice'
import ProductsSlice from './redux/Slices/productsSlice'
import cartSlice from './redux/Slices/cartSlice'
import wishListSlice from './redux/Slices/wishListSlice'
import authSlice from './redux/Slices/authSlice'
import orderSlice from './redux/Slices/orderSlice'
import { persistReducer ,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
const cartPersistConfig  = {
  key:'cart',
  storage,
  whitelist:['items']
}

const wishListPersistConfig  = {
  key:'wishList',
  storage,
  whitelist:['itemsId']
}
const AuthConfig  = {
  key:'auth',
  storage,
    whitelist:['user','accessToken']

}
const rootReducer = combineReducers({
  categories:CategoriesSlice,
  products:ProductsSlice,
  order:orderSlice,
  cart:persistReducer(cartPersistConfig,cartSlice),
  wishList:persistReducer(wishListPersistConfig,wishListSlice),
  auth: persistReducer(AuthConfig, authSlice)
})
 export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    })
})

export const persistor=persistStore(store) 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch