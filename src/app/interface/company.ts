export interface Company {
	name: string
	catchPhrase: string
	bs: string
}

export class Company implements Company {
	constructor() {
		this.name = '';
		this.catchPhrase = '';
		this.bs = '';
	}
}
