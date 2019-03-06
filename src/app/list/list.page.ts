import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  urlData: string = '';
  constructor(
    public activatedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.urlData = this.activatedRoute.snapshot.paramMap.get('datos');
    localStorage.setItem('urldata', this.urlData);
  }
}

  // private selectedItem: any;
  // private icons = [
  //   'flask',
  //   'wifi',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
  // ];
  // public items: Array<{ title: string; note: string; icon: string }> = [];
  // constructor() {
  //   for (let i = 1; i < 11; i++) {
  //     this.items.push({
  //       title: 'Item ' + i,
  //       note: 'This is item #' + i,
  //       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
  //     });
  //   }
  // }

  // ngOnInit() {
  // }
  // // add back when alpha.4 is out
  // // navigate(item) {
  // //   this.router.navigate(['/list', JSON.stringify(item)]);
  // // }
