import { act } from "react-dom/test-utils";
import { GET_PARAMS, SHOW_LOADER } from "./typesAction";

const initialState = {
	isloader: false as boolean,
	params: '' as string
};

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SHOW_LOADER:
			return {...state, isloader: action.payload};
		case GET_PARAMS:
			return {...state, params: action.payload}
		default: return state;
	};
};