import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-second-modal',
  templateUrl: './second-modal.component.html',
  styleUrls: ['./second-modal.component.scss']
})
export class SecondModalComponent implements OnInit {

  constructor(
    public secondModalRef: BsModalRef,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    console.log('Id of second modal', this.secondModalRef.id);
  }

  closeSelf() {
    this.secondModalRef.hide();
  }

}
