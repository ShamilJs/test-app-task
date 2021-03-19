import { CharacterListType } from '../types/types';
import { GET_CHARACTERS_LIST, SHOW_LOADER } from './typesAction';

type showLoaderActionType = {
	type: typeof SHOW_LOADER,
	payload: boolean
};

export const showLoader = (isShow: boolean): showLoaderActionType => {
	return {
		type: SHOW_LOADER,
		payload: isShow
	};
};


type getCharacterListActionType = {
	type: typeof GET_CHARACTERS_LIST,
	payload: CharacterListType
};

export const getCharactersList = (charactersList: CharacterListType): getCharacterListActionType => {
	return {
		type: GET_CHARACTERS_LIST,
		payload: charactersList
	};
};

// Получение данных с сервера
export const getCharactersListFromServer = (params: any) => (dispatch: any) => {
	dispatch(showLoader(true));
	return fetch(`https://rickandmortyapi.com/api/character/?page=${params}`)
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
}


