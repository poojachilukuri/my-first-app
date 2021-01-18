import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  showScrete= false;
  log=[];

  toToggleDetails(){
    this.showScrete=!this.showScrete;
    this.log.push(this.log.length+1);

  }
 
}
