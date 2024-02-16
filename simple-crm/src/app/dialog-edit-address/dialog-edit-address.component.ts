import { Component } from '@angular/core';
import { User } from '../../models/user.class';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog , MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatProgressBar, MatDialogModule, MatFormField, MatInputModule, FormsModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {

  user: User | any;
  loading = false;


  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>,public dialog: MatDialog,){

  }

  saveUser(){
    
  }
}
