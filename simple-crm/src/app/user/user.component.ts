import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialog , MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import {MatCardModule} from '@angular/material/card';
import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc, } from '@firebase/firestore';
import { Firestore, collectionData, docData, onSnapshot } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatNativeDateModule, MatCardModule, CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user = new User();
  allUsers: any = [];

  constructor(public dialog: MatDialog, private readonly firestore: Firestore) {
    onSnapshot(collection(this.firestore, 'users'), (list) => {
      this.allUsers = list.docs.map(doc => doc.data());
    });
  }


  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }
}
