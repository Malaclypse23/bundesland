import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buchstabe',
  templateUrl: './buchstabe.component.html',
  styleUrls: ['./buchstabe.component.css']
})
export class BuchstabeComponent {
  @Input()
  letter: string;
}
