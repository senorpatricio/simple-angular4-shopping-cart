import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const products = [
			{ id: 1, name: 'Dawn soap', price: 5 },
			{ id: 2, name: 'Pledge soap', price: 87 },
			{ id: 3, name: 'This soap', price: 66 },
			{ id: 4, name: 'Kroger soap', price: 2 },
			{ id: 5, name: 'Dove soap', price: 8.4 },
			{ id: 6, name: 'Irish Spring soap', price: 3 }
		];
		return products;
	}
}