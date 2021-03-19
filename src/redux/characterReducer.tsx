import { CharacterListType } from "../types/types";
import { GET_CHARACTERS_LIST } from "./typesAction";



const initialState = {
	charactersList: {} as CharacterListType,
};

export type InitialStateType = typeof initialState

export const characterReducer = (state = initialState, action: any):InitialStateType => {
	switch (action.type) {
		case GET_CHARACTERS_LIST:
			return {...state, charactersList: action.payload};
		default: return state;
	}
};