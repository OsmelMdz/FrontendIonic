import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-newproducts',
  templateUrl: './newproducts.page.html',
  styleUrls: ['./newproducts.page.scss'],
})
export class NewproductsPage implements OnInit {
  @Input() product: Product | undefined;
  isEditMode = false;
  form!: FormGroup;
  constructor(private productsService: ProductsService, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      descripcion: new FormControl(null,[Validators.required,Validators.maxLength(200),Validators.minLength(20)]),
      precio: new FormControl(null, [Validators.required]),
      categoria: new FormControl(null, [Validators.required]),
      stock: new FormControl(null, [Validators.min(1),Validators.max(1000)]),
      urlimg: new FormControl(null, [Validators.required]),
      marca: new FormControl(null, [Validators.required]),
      estado: new FormControl(null, [Validators.required])
    });
  }

//console.log(this.form.value);
  async guardarProducto(){
    const loading = await this.loadingCtrl.create({message: 'Loading...'});
    loading.present();
    this.productsService.addProduct(this.form.value).pipe(
      take(1)).subscribe(()=>{
        this.form.reset();
        loading.dismiss();
      })
  }

  campoValido(campo:string){
    return this.form.controls[campo].errors&&this.form.controls[campo].touched;
  }

}
