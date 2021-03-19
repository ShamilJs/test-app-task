type InfoType = {
	count: number
	pages: number
	next: string | null
	prev: string | null
}

type OriginAndLocationType = {
	name: string
	url: string
}

export type ResultsItemType = {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	origin: OriginAndLocationType
	location: OriginAndLocationType
	image: string
	episode: Array<string>
	url: string
	created: string
  }

export type CharacterListType = {
	info: InfoType
	results: Array<ResultsItemType>
}

