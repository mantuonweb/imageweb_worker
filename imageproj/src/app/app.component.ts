import { Component } from '@angular/core';
import * as workerPath from "file-loader?name=[name].js!./image.web.worker";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(){
    this.initWebWorker();
  }
  initWebWorker(){
    const worker = new Worker(workerPath);
    console.log(workerPath, worker);
    worker.onmessage=(e)=> {
        console.log('hello from a webworker');
    };
    worker.postMessage('Send Message to worker');
  }
}
