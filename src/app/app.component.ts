import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean{
    return this.counter <= 0;
  }

  increase(): void{
    this.makeUpdateDate();  
    this.counter ++;
  }
  decrease(): void{
    this.makeUpdateDate();  
    this.counter --;
  }
  clear(): void{
    this.makeUpdateDate();  
    this.counter = 0;
  }

  makeUpdateDate(): void{
    this.updatedAt = Date.now();
  }
}
