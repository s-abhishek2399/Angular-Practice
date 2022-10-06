import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name:string = "Clean Code";
  author:string = "Charles Dean";
  src:string = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293._UY630_SR1200,630_.jpg"
  isdisabled:boolean = false
  isShowing:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    alert("Hello Universe")
  }
  myName: string='';
  toggleBooks(){
    this.isShowing= !this.isShowing;
  }
  
}
