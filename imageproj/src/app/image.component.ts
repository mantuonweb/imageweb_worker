import { Component,ViewChild } from '@angular/core';
import * as workerPath from "file-loader?name=[name].js!./image.web.worker";
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html'
})
export class ImageComponent {
  title = 'app';
  @ViewChild('imgContainer') imgContainer;
  @ViewChild('img') img;
  imagePath="https://picsum.photos/200/200/?random";
  //https://developer.tizen.org/dev-guide/2.4/org.tizen.guides/html/web/w3c/perf_opt/web_workers_w.htm
  tempContext
  constructor(){
  }
  ngAfterViewInit() {
   this.colorFilterStart()
  }
  colorFilterStart()
    {
        var picture = this.img.nativeElement;
        var canvas = this.imgContainer.nativeElement;
        canvas.width = 200;
        canvas.height = 200;
        var tempContext = canvas.getContext("2d");
        var pixels = canvas.width * canvas.height * 4;
        tempContext.drawImage(picture, 0, 0, canvas.width, canvas.height);
        var workerNember = 4;
        var count = 0;
        var pixelLength = pixels / workerNember;
        var pixelSize = canvas.height / workerNember;
        var timeStart = new Date();
        var worker =  new Worker(workerPath);
        var canvasData = tempContext.getImageData(0, pixelSize * 1, canvas.width, pixelSize);

        /* Handle data received from the host worker */
        worker.onmessage = function(e)
        {
            tempContext.putImageData(e.data.canvasData, 0, pixelSize * e.data.count);
        };

        /* Send data to the host worker */
        worker.postMessage(
        { 
            "data": canvasData, 
            "length": pixelLength, 
            "count": 1 
        });

    }
//   colorFilterStart()
//   {
//         var img = document.createElement("img");
//         img.setAttribute("src", this.imagePath);
//         var picture = img;
//         var canvas = this.imgContainer.nativeElement;
//         this.tempContext = canvas.getContext("2d");
//         this.tempContext.drawImage(picture, 0, 0, canvas.width, canvas.height);
//         var pixels = canvas.width * canvas.height * 4;
//         var canvasData =  this.tempContext.getImageData(0, 12, canvas.width, canvas.height);
//         var binaryData = canvasData.data;
//         var timeStart = new Date();
//         this.colorFilter(binaryData, pixels);
//   }
//   colorFilter(img:any,pix:any){
//         const worker = new Worker(workerPath);
//         worker.onmessage=(e)=> {
//             console.log('hello from a webworker',e);
//             //this.tempContext.putImageData(e.data.canvasData,0,34);
//         };
//         worker.postMessage({img,pix});
//   }
}
