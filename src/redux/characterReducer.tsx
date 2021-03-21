import { CharacterListType } from "../types/types";
import { CHANGE_FAVORITES, GET_CHARACTERS_LIST } from "./typesAction";

type FavoritesType = {
	[key: string]: boolean
};

const initialState = {
	charactersList: {} as CharacterListType,
	favorites: JSON.parse(localStorage.getItem('favorites') as string) || {} as FavoritesType
};

export type InitialStateType = typeof initialState

export const characterReducer = (state = initialState, action: any):InitialStateType => {
	switch (action.type) {
		case GET_CHARACTERS_LIST:
			return {...state, charactersList: action.payload};
		case CHANGE_FAVORITES:
			return {...state, favorites: {...state.favorites, [action.payload]: !state.favorites[action.payload]}}
		default: return state;
	};
};