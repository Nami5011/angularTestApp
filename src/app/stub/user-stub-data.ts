import { User } from "../interface/user";
export class UserStubData {
	public data1: User = {
		id: 1,
		name: "Ricky Gervais",
		username: "Ricky",
		email: "Ricky@april.biz",
		address: {
			street: "Kulas Light",
			suite: "Apt. 556",
			city: "Gwenborough",
			zipcode: "92998-3874",
			geo: {
				lat: "-37.3159",
				lng: "81.1496"
			}
		},
		phone: "70-736-8031",
		website: "hildegard.org",
		company: {
			name: "Romaguera-Crona",
			catchPhrase: "Multi-layered client-server neural-net",
			bs: "harness real-time e-markets"
		}
	}
}