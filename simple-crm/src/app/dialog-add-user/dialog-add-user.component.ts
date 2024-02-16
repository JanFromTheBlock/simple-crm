import { Component, NgModule } from '@angular/core';
import { MatDialog , MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';  


import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc, } from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, public dialog: MatDialog, private readonly firestore: Firestore){
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is', this.user);
    this.loading = true;

    addDoc(collection(this.firestore, 'users'), this.user.toJSON())
    .then((result: any) => {
      this.loading = false;
      debugger
      this.user['userId'] = result.id
      updateDoc(doc(this.firestore, 'users', this.user['userId']), this.user.toJSON());
      console.log(result);
      this.dialogRef.close();
    })
  }
}
