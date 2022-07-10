export interface resultsList {
	address1: string
	address2: string
	address3: string
	kana1: string
	kana2: string
	kana3: string
	prefcode: string
	zipcode: string
}

export interface GetAddressfromZipResponse {
	message?: string
	status: number
	results: Array<resultsList>
}