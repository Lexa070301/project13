import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MyWorkerType, MyWorker} from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddWorker() {
    if ((typeof this.name != 'undefined') && (typeof this.surname != 'undefined')) {
      if ((this.name.trim() != '') && (this.surname.trim() != '')) {
        this.addWorker.emit({
          name: this.name,
          surname: this.surname,
          type: this.type,
          bool: true,
        });
      }
      else {
        alert('Заполните все поля!');
      }
    }
    else {
      alert('Заполните все поля!');
    }
  }
}
