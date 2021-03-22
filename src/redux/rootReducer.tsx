import { combineReducers } from "redux";
import { contentReducer } from "./contentReducer";
import { appReducer } from "./appReducer";


export const rootReducer = combineReducers({
	content: contentReducer,
	app: appReducer,
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;


