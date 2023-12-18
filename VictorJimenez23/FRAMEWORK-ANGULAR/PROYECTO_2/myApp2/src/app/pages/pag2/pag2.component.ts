import { Component } from '@angular/core';
import { PokemonsService } from '../../servicios/pokemons.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pag2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pag2.component.html',
  styleUrl: './pag2.component.scss'
})
export class Pag2Component {
  pokemons1:any;
  constructor(private pokemonsService:PokemonsService){
   this.WebServiceGetMaterias();
  }
   public WebServiceGetMaterias(){
     this.pokemonsService.getPokemons()
       .subscribe(data => {
         this.pokemons1 = data.results;
         console.log(this.pokemons1);
       })
   }
}
