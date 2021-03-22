import { CharacterListType } from '../types/types';
import { CHANGE_FAVORITES, GET_CHARACTERS_LIST, SHOW_LOADER, SHOW_ERROR } from './typesAction';


// Лоадер
type ShowLoaderActionType = {
	type: typeof SHOW_LOADER,
	payload: boolean
};

export const showLoader = (isShow: boolean): ShowLoaderActionType => {
	return {
		type: SHOW_LOADER,
		payload: isShow
	};
};


type ShowErrorActionType = {
	type: typeof SHOW_ERROR,
	payload: boolean
	message: string
};

const showError = (isError: boolean, err: ''): ShowErrorActionType => {
	return {
		type: SHOW_ERROR,
		payload: isError,
		message: err
	};
};

// Получение данных с сервера
type GetCharacterListActionType = {
	type: typeof GET_CHARACTERS_LIST,
	payload: CharacterListType
};

export const getCharactersList = (charactersList: CharacterListType): GetCharacterListActionType => {
	return {
		type: GET_CHARACTERS_LIST,
		payload: charactersList
	};
};

type GetCharactersListFromServerType = {
	page?: number
	name?: string
	status?: string
	(dispatch: any): Promise<void>
};

export const getCharactersListFromServer = ({page = 1, name = '', status = ''}): GetCharactersListFromServerType => 
	(dispatch: any) => {
	
	const params =
		(!name && !status) ? `/?page=${page}` : 
		(!name && status) ? `/?page=${page}&status=${status}` :
		(name && !status) ? `/?page=${page}&name=${name}` : 
		`/?page=${page}&name=${name}&status=${status}`;


	dispatch(showLoader(true));
	return fetch(`https://rickandmortyapi.com/api/character${params}`)
		.then(async response => {
			if (!response.ok) throw await response.json();
			return response.json();
		})
		.then(data => {
			dispatch(getCharactersList(data));
			dispatch(showError(false, ''));
		})
		.catch(err => dispatch(showError(true, err.error)))
		.finally(() => dispatch(showLoader(false)))
};


// Управление "Избранным"
type ChangeFavoritesActionType = {
	type: typeof CHANGE_FAVORITES,
	payload: number
};

export const changeFavorites = (id: number): ChangeFavoritesActionType => {
	return {
		type: CHANGE_FAVORITES,
		payload: id
	};
};