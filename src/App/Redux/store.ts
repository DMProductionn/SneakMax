import { configureStore } from '@reduxjs/toolkit'
import { ModalsSlice } from './Slices/modals.slice'
import { TeamSlice } from './Slices/team.slice'
import { ProductsSlice } from './Slices/products.slice'
import { CartSlice } from './Slices/cart.slice'
import { ViewProductSlice } from './Slices/view-product.slice'
import { OrdersSlice } from './Slices/orders.slice'
import { QuestionsSlice } from './Slices/questions.slice'
import { SelectionSneakersSlice } from './Slices/selection-sneakers.slice'

export const store = configureStore({
  reducer: {
    modals: ModalsSlice.reducer,
    team: TeamSlice.reducer,
    products: ProductsSlice.reducer,
    productView: ViewProductSlice.reducer,
    cart: CartSlice.reducer,
    orders: OrdersSlice.reducer,
    questions: QuestionsSlice.reducer,
    selection_sneakers: SelectionSneakersSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch