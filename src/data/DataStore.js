import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";

export const EShoppingDataStore = createStore(ShopReducer);
