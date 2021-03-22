import { DataListType } from "../types/typesApp";
import { ActionsTypes } from "../types/typesRedux";
import { CHANGE_FAVORITES, GET_CHARACTERS_LIST } from "./typesAction";

type FavoritesType = {
	[key: string]: boolean
};

const initialState = {
	data: {} as DataListType,
	favorites: JSON.parse(localStorage.getItem('favorites') as string) || {} as FavoritesType
};

export type InitialStateType = typeof initialState;

export const contentReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case GET_CHARACTERS_LIST:
			return {...state, data: action.payload};
		case CHANGE_FAVORITES:
			return {...state, favorites: {...state.favorites, [action.payload]: !state.favorites[action.payload]}};
		default: return state;
	};
};