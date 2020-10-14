import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {SecondModalComponent} from '../second-modal/second-modal.component';

@Component({
  selector: 'app-first-modal',
  templateUrl: './first-modal.component.html',
  styleUrls: ['./first-modal.component.scss']
})
export class FirstModalComponent implements OnInit {

  constructor(
    public modalRef: BsModalRef,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    console.log('Id of first modal', this.modalRef.id);
  }

  showSecondModal() {
    this.modalService.show(SecondModalComponent,
      // {id: Math.round(Math.random()*1e9)}
      );
  }

  closeSelf() {
    this.modalRef.hide();
  }
}
