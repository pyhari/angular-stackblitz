import { Component, OnInit } from '@angular/core';
import {of, from} from 'rxjs'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  
  ngOnInit() {
    
        from([11,2,4,68,8,10,50,10,11]).subscribe(
        item => console.log(`Reteriving .. ${item}`),
        err => console.log(`error occured ${err}`),
        () => console.log('complete')
          //item => console.log(item)
        
        );
        from(['One','Two','Three']).subscribe( 
          item => console.log(item),
          err => console.log("Error Occuerd"),
          () => console.log("completed")
        );
    //  of(2,4,6,8,10,10,33).subscribe(console.log)
  }
}
