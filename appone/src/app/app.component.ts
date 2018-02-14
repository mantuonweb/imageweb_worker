import { Component } from '@angular/core';
import { NaturalLanguageService } from './natural.language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  observerObj;
  inputvalue="";
  outputvalue:any;
  constructor(public nlservice:NaturalLanguageService){
    let subject=nlservice.getSubject();
    subject.subscribe(value=>{
      this.outputvalue=value;
    });
    this.observerObj=nlservice.getObserver();
  }
  onChangeString(data){
    console.log('data',data);
    console.log('data',this.outputvalue);
  }
  onValueChange(){
    console.log(this.inputvalue);
    this.nlservice.toNPL(this.inputvalue);
    
    //this.observerObj.next(this.inputvalue);
  }
}
