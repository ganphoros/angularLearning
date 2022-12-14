import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.modal';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  buttonText!: string;

  ngOnInit(){
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit !';
    this.imageUrl =  'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.createdDate = new Date();
    this.snaps = 0;
    this.buttonText = 'Oh Snap!'
  }

  onAddSnap() {
    this.snaps++;
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'
    }
  }
}
