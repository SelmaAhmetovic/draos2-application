import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  @Input() id;
  @Input() name;
  @Input() item;

  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public modal: NgbActiveModal, private _modalService: NgbModal) {

  }

  passBack() {
    this.passEntry.emit('ok');
  }


}

/*
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
      (click)="modal.close('Ok click')">Ok</button>`;*/

