import { Component } from '@angular/core';
import * as workerPath from "file-loader?name=[name].js!./image.web.worker";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app';
  // //https://www.html5rocks.com/en/tutorials/canvas/imagefilters/
  // imagePath="https://picsum.photos/200/200/?random";
  // constructor(){
  //   this.initWebWorker();
  // }
  // initWebWorker(){
  //   const worker = new Worker(workerPath);
  //   console.log(workerPath, worker);
  //   worker.onmessage=(e)=> {
  //       console.log('hello from a webworker');
  //   };
  //   worker.postMessage('Send Message to worker');
  // }
  colorFilterStart()
  {
    // var picture = document.getElementById('picture');
    // var canvas = document.querySelector('canvas');
    // canvas.width = document.width;
    // canvas.height = picture.clientHeight;
    // var tempContext = canvas.getContext("2d");
    // tempContext.drawImage(picture, 0, 0, canvas.width, canvas.height);
    // var pixels = canvas.width * canvas.height * 4;
    // var canvasData = tempContext.getImageData(0, 0, canvas.width, canvas.height);
    // var binaryData = canvasData.data;
    // var timeStart = new Date();

    // colorFilter(binaryData, pixels);
    // tempContext.putImageData(canvasData, 0, 0);
    // var timeDiffer = new Date() - timeStart;
    // message.innerHTML = timeDiffer + " ms";
  };


}
