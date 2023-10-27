import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() modalTitle: string | undefined;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  close() {
    this.closeModal.emit();
  }

  Save() {
    this.saveModal.emit();
  }
}
