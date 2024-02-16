import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, collectionData, doc, docData, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userIdfromUrl: any = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private readonly firestore: Firestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userIdfromUrl = paramMap.get('id');
      console.log('GOT ID', this.userIdfromUrl);
      this.getUser();
    })
  }

  getUser() {
    debugger
    onSnapshot(doc(collection(this.firestore, 'users'), this.userIdfromUrl), (user: any) => {
      this.user = new User(user);
      console.log('Retrieved User', this.user)
    })
  }
}
