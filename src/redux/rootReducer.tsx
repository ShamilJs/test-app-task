import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";
import { appReducer } from "./appReducer";



export const rootReducer = combineReducers({
	character: characterReducer,
	app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


