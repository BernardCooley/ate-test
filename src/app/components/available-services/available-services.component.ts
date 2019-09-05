import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.scss']
})
export class AvailableServicesComponent implements OnInit {

  serviceCardDetails = [
    {
      'key': 'confetti',
      'title':'Confetti',
      'imageUrl': 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2900103/600/491/m1/fpnw/wm1/456789-.jpg?1498579882&s=97c59743cd293b7b2d7c50a3464ced2e',
      'imageAlt': 'confetti service card'
    },
    {
      'key': 'hottub',
      'title':'Hot tub',
      'imageUrl': 'https://odis.homeaway.com/odis/listing/68316209-4f3b-4715-9d91-a093cb38b4e9.f10.jpg',
      'imageAlt': 'hot tub service card'
    },
    {
      'key': 'magician',
      'title':'Magician',
      'imageUrl': 'https://gerryedtl.com/wp-content/uploads/2016/08/Magician.jpeg',
      'imageAlt': 'magician service card'
    }
  ]

  constructor(private dialog: MatDialog) { }

  openBookingDialog(key) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "auto";
    dialogConfig.data = key;
    
    this.dialog.open(BookingModalComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
