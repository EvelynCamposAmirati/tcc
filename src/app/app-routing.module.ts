import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CentrodeesteticaComponent } from './pages/centrodeestetica/centrodeestetica.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { HomeComponent } from './pages/home/home.component';
import { HospedagemComponent } from './pages/hospedagem/hospedagem.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';
import { LoginComponent } from './pages/login/login.component';
import { QuemsomosComponent } from './pages/quemsomos/quemsomos.component';

const routes: Routes = [
 
  { path: 'centrodeestetica', component:CentrodeesteticaComponent },
  { path: 'chat', component:ChatComponent },
  { path: 'contato', component:ContatoComponent },
  { path: 'ecommerce', component:ECommerceComponent }, 
  { path: 'home', component:HomeComponent },
  { path: 'hospedagem', component:HospedagemComponent },
  { path: 'localizacao', component:LocalizacaoComponent },
  { path: 'login', component:LoginComponent },
  { path: 'quemsomos', component:QuemsomosComponent},
  { path: '', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
   
})

export class AppRoutingModule { }
