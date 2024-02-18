import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, collectionData, doc, docData, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog , MatDialogModule} from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userIdfromUrl: any = '';
  user: User = new User();

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private readonly firestore: Firestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userIdfromUrl = paramMap.get('id');
      console.log('GOT ID', this.userIdfromUrl);
      this.getUser();
    })
  }

  getUser() {
    onSnapshot(doc(collection(this.firestore, 'users'), this.userIdfromUrl), (user: any) => {
      this.user = new User(user.data());
      console.log('Retrieved User', this.user)
    })
  }

  editUserDetail(){
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userIdfromUrl;
  }

  editMenu(){
   const dialog =  this.dialog.open(DialogEditAddressComponent);
   dialog.componentInstance.userId = this.userIdfromUrl;
  }
}
