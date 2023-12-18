import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botton-upc',
  standalone: true,
  imports: [],
  templateUrl: './botton-upc.component.html',
  styleUrl: './botton-upc.component.css'
})
export class BottonUpcComponent {
  @Input() TextoBotton: any= "0";
  @Input() AnchoBotton: any= "100px";

}
