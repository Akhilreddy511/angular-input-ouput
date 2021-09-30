import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() showOrHide = false ;

  @Output() greet = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  childToParent(){
this.greet.emit()
  }

}