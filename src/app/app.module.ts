import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';
import { CentrodeesteticaComponent } from './pages/centrodeestetica/centrodeestetica.component';
import { HospedagemComponent } from './pages/hospedagem/hospedagem.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';
import { LoginComponent } from './pages/login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavComponent } from './pages/nav/nav.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemsomosComponent,
    CentrodeesteticaComponent,
    HospedagemComponent,
    ECommerceComponent,
    ContatoComponent,
    LocalizacaoComponent,
    LoginComponent,
    ChatComponent,
    NavComponent,
    AuthModule,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
