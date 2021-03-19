import { SHOW_LOADER } from "./typesAction";

const initialState = {
	isloader: false as boolean,
};

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SHOW_LOADER:
		return {...state, isloader: action.payload};
		default: return state;
	};
};