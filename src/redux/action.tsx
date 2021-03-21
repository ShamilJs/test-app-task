import { CharacterListType } from '../types/types';
import { CHANGE_FAVORITES, GET_CHARACTERS_LIST, SHOW_LOADER, GET_PARAMS } from './typesAction';


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
}

type GetParamsType = {
	type: typeof GET_PARAMS
	payload: string
}

export const getParams = (params: string): GetParamsType => {
	return {
		type: GET_PARAMS,
		payload: params
	};
};

export const getCharactersListFromServer = (page = 1, name = '', status = ''):GetCharactersListFromServerType => (dispatch: any) => {
	console.log(page);
	
	const params =
		(!name && !status) ? `/?page=${page}` : 
		(!name && status) ? `/?page=${page}&status=${status}` :
		(name && !status) ? `/?page=${page}&name=${name}` : 
		`/?page=${page}&name=${name}&status=${status}`;

	dispatch(getParams(params));

	dispatch(showLoader(true));
	return fetch(`https://rickandmortyapi.com/api/character${params}`)
		.then(async response => {
			if (!response.ok) {
				throw await 'Что-то пошло не так...';
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
			dispatch(getCharactersList(data))
		})
		.catch(err => console.log(err))
		// .catch(err => dispatch(showError(true, err)))
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