import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Usuario } from 'src/app/shared/models';


const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }
  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }
  Logout() {
    delete localStorage[LS_CHAVE];
  }
  login (login: Login): Observable<Usuario | null> {
    let usu = new Usuario(1, "Razer-Func",
      login.login, login.senha, "FUNC");
    if (login.login == login.senha) {
      if (login.login == "admin") {
        usu = new Usuario(1, "Razer-Admin",
         login.login, login.senha, "ADMIN");
      }
      else if (login.login == "gerente") {
        usu = new Usuario(1, "Razer_Gerente",
          login.login, login.senha, "GERENTE");
      }
      return Of(usu);
    }
    else{
      return Of(null);
    }
  }
}
