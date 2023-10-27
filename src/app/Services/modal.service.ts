import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showModal = new BehaviorSubject<boolean>(false);  
  public modalTitle = new BehaviorSubject<string>('Modal Title');

  constructor() { }

  openModal(title: string) {
    this.modalTitle.next(title);
    this.showModal.next(true);
  }

  closeModal() {
    this.showModal.next(false);
  }
}
