import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { MusicaComponent } from './components/musica/musica.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesPeliculasComponent } from './components/series-peliculas/series-peliculas.component';

const routes: Routes = [

  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path:'footer', component: FooterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'juegos', component:JuegosComponent},
  { path: 'musica', component:MusicaComponent},
  { path: 'navmenu', component:NavmenuComponent},
  { path: 'novedades', component:NovedadesComponent},
  { path: 'personajes', component:PersonajesComponent},
  { path: 'series_peliculas', component:SeriesPeliculasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
