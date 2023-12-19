import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botton-upc',
  standalone: true,
  imports: [],
  templateUrl: './botton-upc.component.html',
  styleUrl: './botton-upc.component.css'
})
export class BottonUpcComponent {

  @Input() TextoBoton: any ="0";
  @Input() AnchoBoton: any ="100px";

}