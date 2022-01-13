import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // const timer$ = interval(1000);

    // timer$.subscribe(val => {
    //   console.log(val)
    // })

    // setTimeout(() => {
    //   timer$.unsubscribe()
    // })
  }

   
}
