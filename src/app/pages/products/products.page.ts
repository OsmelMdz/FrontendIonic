import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from "./product.model";
import { NewproductsPage } from '../newproducts/newproducts.page';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products$: Observable<Product[]> | undefined;
  constructor(private productsService: ProductsService, private loadingCtrl: LoadingController, private modalCtrl: ModalController){
  }
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Loading...'});
    loading.present();
    this.products$ = this.productsService.getProducts().pipe(
      tap(products =>{
        loading.dismiss();
        return products;
      })
    );
  }
}
