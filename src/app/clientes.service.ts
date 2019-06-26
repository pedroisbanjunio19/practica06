import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes = [
    {nombre: 'Iberdrola', cif: 'A12345678'},
    {nombre: 'Gas Natural', cif: 'A87654321'},
    {nombre: 'Vodafone', cif: 'A6789543'}
  ];

  constructor() { }

  getClientes() {
    return this.clientes;
  }

  postCliente(cliente) {
    this.clientes.push(cliente);
  }
}
