import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `{{ time | date: 'hh' }}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = new Date();

  ngOnInit() {
      setInterval(() => {
         this.time = new Date();
      }, 1000);
  }

  constructor(){
  }

}
