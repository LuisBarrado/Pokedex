import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  // Tipos es un array que contiene objetos, representando los tipos de pokemon
  // Cada objeto tiene una propiedad llamada tipo, donde cada uno alberga una lista de Pokemons dentro de cada tipo 
  tipos = [
    {
      tipo: 'Planta',
      pokemons: [
        { id: 1, nombre: 'Bulbasaur', tipo: 'Planta/Veneno', altura: '0,70 m', peso: '6,90 kg' },
        { id: 2, nombre: 'Ivysaur', tipo: 'Planta/Veneno', altura: '1,00 m', peso: '13,00 kg' },
        { id: 3, nombre: 'Venusaur', tipo: 'Planta/Veneno', altura: '2,00 m', peso: '100,00 kg' }
      ]
    },
    {
      tipo: 'Fuego',
      pokemons: [
        { id: 4, nombre: 'Charmander', tipo: 'Fuego', altura: '0,60 m', peso: '8,5 kg' },
        { id: 5, nombre: 'Charmeleon', tipo: 'Fuego', altura: '1,10 m', peso: '19 kg' },
        { id: 6, nombre: 'Charizard', tipo: 'Fuego/Volador', altura: '1,70 m', peso: '90,50 kg' }
      ]
    },
    {
      tipo: 'Agua',
      pokemons: [
        { id: 7, nombre: 'Squirtle', tipo: 'Agua', altura: '0,50 m', peso: '9,00 kg' },
        { id: 8, nombre: 'Wartortle', tipo: 'Agua', altura: '1,00 m', peso: '22,50 kg' },
        { id: 9, nombre: 'Blastoise', tipo: 'Agua', altura: '1,60 m', peso: '85,50 kg' }
      ]
    }
  ];
// Estas dos propiedades se utilizan para seleccionar el tipo y el pokemon que quieres visualizar
  tipoSeleccionado: any;
  pokemonSeleccionado: any;
// Este método se utiliza al dar click en un boton de cada tipo
  seleccionarTipo(tipo: any) {
    this.tipoSeleccionado = tipo;
    this.pokemonSeleccionado = null; // Reinicia el pokemon seleccionado al cambiar de tipo
  }
// Este método se utiliza cuando clickas en un pokemon de la lista, y lo asigna a 'pokemonSeleccionado'
  seleccionarPokemon(pokemon: any) {
    this.pokemonSeleccionado = pokemon;
  }
}
