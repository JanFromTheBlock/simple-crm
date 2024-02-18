import { Component, NgModule } from '@angular/core';
import { User } from '../../models/user.class';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { CollectionReference, DocumentData, addDoc, collection, deleteDoc, doc, updateDoc, } from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatProgressBarModule, MatProgressBar, MatDialogModule, FormsModule, MatInputModule, MatFormField, MatDatepickerModule, MatNativeDateModule, CommonModule, ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  user: User | any;
  userId: string | undefined;
  loading = false;
  birthDate!: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, public dialog: MatDialog, private readonly firestore: Firestore) {

  }

  saveUser() {

  }
}
