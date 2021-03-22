import { Dispatch } from 'redux';
import { DataListType, LocationType } from '../types/typesApp';
import { ActionsTypes, ChangeFavoritesActionType,
	GetDataListActionType,
	ShowErrorActionType,
	ShowLoaderActionType } from '../types/typesRedux';
import { CHANGE_FAVORITES, GET_CHARACTERS_LIST, SHOW_LOADER, SHOW_ERROR } from './typesAction';


export const showLoader = (isShow: boolean): ShowLoaderActionType => {
	return {
		type: SHOW_LOADER,
		payload: isShow
	};
};

const showError = (isError: boolean, err: ''): ShowErrorActionType => {
	return {
		type: SHOW_ERROR,
		payload: isError,
		message: err
	};
};

export const changeFavorites = (id: string): ChangeFavoritesActionType => {
	return {
		type: CHANGE_FAVORITES,
		payload: id
	};
};

export const getDataList = (data: DataListType): GetDataListActionType => {
	return {
		type: GET_CHARACTERS_LIST,
		payload: data
	};
};

export const getDataListFromServer = ({pathname = '', page = 1, name = '', status = '', gender = ''}: LocationType) => 
	(dispatch: Dispatch<ActionsTypes>) => {
	dispatch(showLoader(true));
	return fetch(`https://rickandmortyapi.com/api/${pathname}/?page=${+page}&name=${name}&status=${status}&gender=${gender}`)
		.then(async response => {
			if (!response.ok) throw await response.json();
			return response.json();
		})
		.then(data => {
			dispatch(getDataList(data));
			dispatch(showError(false, ''));
		})
		.catch(err => dispatch(showError(true, err.error)))
		.finally(() => dispatch(showLoader(false)));
};

