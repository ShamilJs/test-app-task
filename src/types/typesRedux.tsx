import { CHANGE_FAVORITES, GET_CHARACTERS_LIST, SHOW_ERROR, SHOW_LOADER } from "../redux/typesAction";
import { DataListType } from "./typesApp";

export type ShowLoaderActionType = {
	type: typeof SHOW_LOADER,
	payload: boolean
};

export type ShowErrorActionType = {
	type: typeof SHOW_ERROR,
	payload: boolean
	message: string
};

export type ChangeFavoritesActionType = {
	type: typeof CHANGE_FAVORITES,
	payload: string
};

export type GetDataListActionType = {
	type: typeof GET_CHARACTERS_LIST,
	payload: DataListType
};

export type ActionsTypes = ShowLoaderActionType | ShowErrorActionType | 
	GetDataListActionType | ChangeFavoritesActionType;
