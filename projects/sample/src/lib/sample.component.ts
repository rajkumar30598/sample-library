import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sample',
  template: `
    <p>
      sample works!
    </p>
  `,
  styles: [
  ]
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
