import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})

export class ScannerComponent implements OnInit {
  url = 'http://localhost:4200/assets/pexels-sunbeam-photography-4994700.jpg';

  constructor() { }

  ngOnInit(): void {
    image: File;
  }

  loadImage(e: any) : void{
    if(e.target.files){
      let reader = new FileReader();
      console.log(e.target.files)
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }

  scanImage(): void{

  }

}
