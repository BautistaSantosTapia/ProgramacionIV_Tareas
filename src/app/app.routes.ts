import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: "login", loadComponent: ()=> import("./login/login").then((archivo)=> archivo.Login)},
    {path: "registro", loadComponent: ()=> import("./registro/registro").then((archivo)=> archivo.Registro)},
    {path: "sobre-mi", loadComponent: ()=> import("./sobre-mi/sobre-mi").then((archivo)=> archivo.SobreMi)},
    {path: "", loadComponent: ()=> import("./bienvenida/bienvenida").then((archivo)=> archivo.Bienvenida), pathMatch: "full"},
    {path: "**", loadComponent: ()=> import("./error/error").then((archivo)=> archivo.Error)},
];
