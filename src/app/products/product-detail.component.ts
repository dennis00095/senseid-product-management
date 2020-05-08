import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Productinterface } from './product';

@Component({
	templateUrl: './product-detail.component.html',
	styleUrls: [ './product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	product: Productinterface;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		let id = +this.route.snapshot.paramMap.get('id');
		this.pageTitle += `:${id}`;
		this.product = {
			productId: 1,
			productName: 'Grater',
			productCode: 'GDN-0011',
			releaseDate: 'March 19, 2019',
			description:
				'This 7-in-1 box grater from Cuisipro can grate citrus, fine, coarse, ultra-coarse, parmesan, shave, slice and even has a ginger grater.',
			price: 38.95,
			starRating: 4.6,
			imageUrl: 'https://www.mealime.com/images/kitchen-essentials/Grater-156x300.9721950.jpg'
		};
	}
	onBack(): void {
		this.router.navigate([ '/products' ]);
	}
}
