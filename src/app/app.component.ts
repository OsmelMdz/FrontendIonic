import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Products', url: 'products', icon: 'fast-food' },
    { title: 'New Products', url: 'newproducts', icon: 'bag-add' }
  ];
  public labels = [''];
  constructor(private http: HttpClient) {
    http.get('http://localhost:8000/api/productos').subscribe(console.log);
  }
}
