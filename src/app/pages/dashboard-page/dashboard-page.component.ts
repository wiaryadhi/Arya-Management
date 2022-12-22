import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  daftarFitur: any = [
    {
      "title": "Product Management",
      "image": "https://picsum.photos/200/90?random1",
      "link": "/product"
    },
    {
      "title": "User Management",
      "image": "https://picsum.photos/200/90?random2",
      "link": "/user"
    },
    {
      "title": "Sales Management",
      "image": "https://picsum.photos/200/90?random3",
      "link": ""
    },
    {
      "title": "Task Management",
      "image": "https://picsum.photos/200/90?random4",
      "link": ""
    },
    {
      "title": "Content Management",
      "image": "https://picsum.photos/200/90?random5",
      "link": ""
    }
  ];

}
