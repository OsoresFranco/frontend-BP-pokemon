import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private sharingObservablePrivate: BehaviorSubject<Pokemon[]> = new BehaviorSubject<Pokemon[]>(
    []
  );

  get SharingObservable() {
    return this.sharingObservablePrivate.asObservable();
  }

  set SharingObservableData(data: any) {
    this.sharingObservablePrivate.next(data)
  }
}
