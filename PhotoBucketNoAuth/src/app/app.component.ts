import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";
import * as firebase from "firebase";
interface PhotoBucketNoAuth {
  imageURL: string;
  caption: string;
  $key?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formPhotoBucketNoAuth: PhotoBucketNoAuth = {
    'imageURL': '',
    'caption': ''
  };

  photoBucketNoAuthStream: FirebaseListObservable<PhotoBucketNoAuth[]>;
  private titleFirebase: string = "Photo Bucket No Auth";

  constructor(private af: AngularFire) {
    this.photoBucketNoAuthStream = af.database.list("/imageURL");
    firebase.database().ref().child("/title").on("value",
        (snapshot: firebase.database.DataSnapshot) => {
            this.titleFirebase = snapshot.val();
        }
    );
  }

  onSubmit(): void {
    try {
      if (this.formPhotoBucketNoAuth.$key) {
        this.photoBucketNoAuthStream.update(this.formPhotoBucketNoAuth.$key,
          {
            'imageURL': this.formPhotoBucketNoAuth.imageURL,
            'caption': this.formPhotoBucketNoAuth.caption
          });
      } else {
        this.photoBucketNoAuthStream.push(this.formPhotoBucketNoAuth);
      }

      this.formPhotoBucketNoAuth = {
        'imageURL': '', 'caption': ''
      };
    } catch (e) {
      console.log("Submit error", e);
    }
  }

  edit(photoBucketNoAuthToEdit: PhotoBucketNoAuth): void {
    this.formPhotoBucketNoAuth = photoBucketNoAuthToEdit;
  }

  delete(keyToDelete: string): void {
    this.photoBucketNoAuthStream.remove(keyToDelete);
  }
}
