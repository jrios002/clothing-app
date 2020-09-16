import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducer from './user/userReducer';
import CartReducer from './cart/cartReducer';
import DirectoryReducer from './directory/directoryReducer';
import ShopReducer from './shop/shopReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer);