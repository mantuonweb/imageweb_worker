import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
declare var nlp;
@Injectable()
export class NaturalLanguageService {
  private subject: Observable<Array<string>>;
  private observer:any;
  constructor() {
    this.subject = new Observable(observer => {
        this.observer=observer;
    });
  }
  getObserver(){
    console.log(this.observer,"get observer");
    return this.observer;
  }
  getSubject(){
    return this.subject;
  }
  toNPL(input:string){
    let con=nlp(input).sentences().toFutureTense().out()
    this.observer.next(con);
  }
}
