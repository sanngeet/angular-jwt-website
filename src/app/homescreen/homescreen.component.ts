import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss'],
})
export class HomescreenComponent implements OnInit {

  loopArray(n: number): any[] {
    return Array(n);
  }

  constructor() {}

  ngOnInit(): void {}
}
