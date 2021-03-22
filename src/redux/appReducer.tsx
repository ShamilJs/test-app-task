import { SHOW_ERROR, SHOW_LOADER } from "./typesAction";

const initialState = {
	isloader: false as boolean,
	errorMessage: '' as string,
	isError: false as boolean
};

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SHOW_LOADER:
			return {...state, isloader: action.payload};
		case SHOW_ERROR:
			return {...state, errorMessage: action.message, isError: action.payload}
		default: return state;
	};
};