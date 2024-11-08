import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesPeliculasComponent } from './components/series-peliculas/series-peliculas.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { MusicaComponent } from './components/musica/musica.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    SeriesPeliculasComponent,
    JuegosComponent,
    NovedadesComponent,
    ComunidadComponent,
    MusicaComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
