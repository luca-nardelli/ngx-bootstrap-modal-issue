import {Component, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {FirstModalComponent} from './modals/first-modal/first-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-bootstrap-modal-issue';

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  showFirstModal(): void {
    this.modalService.show(FirstModalComponent,
      // {id: Math.round(Math.random()*1e9)}
      );
  }
}
