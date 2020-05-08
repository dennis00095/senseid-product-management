import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Productinterface } from './product';

@Component({
	templateUrl: './product-list.component.html',
	styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	errorMessage: string;

	_listFilter: string = '';
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	filteredProducts: Productinterface[];
	products: Productinterface[] = [];

	constructor(private productService: ProductService) {}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product List: ' + message;
	}

	performFilter(filterBy: string): Productinterface[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter(
			(product: Productinterface) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
		);
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	ngOnInit(): void {
		this.productService.getProducts().subscribe({
			next: (products) => {
				this.products = products;
				this.filteredProducts = this.products;
			},
			error: (err) => (this.errorMessage = err)
		});
	}
}
