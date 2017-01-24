import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  implements OnInit {
  private subject : Subject<string> = new Subject();
  public name: string = undefined;

  ngOnInit(): void {
    this.subject.subscribe(val => {
      this.name = val;
    });
    this.subject.next("Rollup");
  }
}
