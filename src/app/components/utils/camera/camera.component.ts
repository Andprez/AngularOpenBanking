import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef;
  @ViewChild('canvasElement', { static: true }) canvasElement!: ElementRef;

  private video!: HTMLVideoElement;
  private canvas!: HTMLCanvasElement;
  private stream!: MediaStream;
  isCameraActive: boolean = false;

  constructor() { }

  ngAfterViewInit(): void {
    this.video = this.videoElement!.nativeElement;
    this.canvas = this.canvasElement!.nativeElement;
  }

  toggleCamera(): void {
    if (!this.isCameraActive) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream: MediaStream) => {
          this.stream = stream;
          this.video.srcObject = stream;
          this.video.play();
          this.isCameraActive = true;
        })
        .catch(err => console.error('Error al acceder a la cámara:', err));
    } else {
      this.takePhoto();
    }
  }

  takePhoto(): void {
    const context = this.canvas.getContext('2d');
    this.canvas.width = 400;
    this.canvas.height = 300;
    context!.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    const imageData = this.canvas.toDataURL('image/png');
    console.log('Imagen capturada:', imageData);
  }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }
}
