import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    newProductReducer,
    newReviewReducer,
    productDetailsReducer,
    productReducer,
    productReviewsReducer,
    productsReducer,
    reviewReducer,
} from "./reducers/productReducer";




const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,

    newReview: newReviewReducer,
    newProduct: newProductReducer,
    product: productReducer,

    productReviews: productReviewsReducer,
    review: reviewReducer,
});

let initialState = {

};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;