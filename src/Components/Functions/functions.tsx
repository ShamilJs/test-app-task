import { LocationType } from "../../types/typesApp";

export const formationOfParams  = ({ pathname, page, name, status, gender }: LocationType): string => {
	const paramsPage = page ? `/?page=${page}` : '';
	const paramName = name ? `&name=${name}` : '';
	const paramStatus = status ? `&status=${status}` : '';
	const paramGender = gender ? `&gender=${gender}` : '';

	const params = `${pathname}${paramsPage}${paramName}${paramStatus}${paramGender}`;

	return params;
};