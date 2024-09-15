import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import clientReducer from './features/identitySlice';
import configReducer from './features/configSlice';
import licenseReducer from './features/licenseSlice';

const store = configureStore({
  reducer: {
    identity: clientReducer,
    config: configReducer,
    license: licenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export default store;
