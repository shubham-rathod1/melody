import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
