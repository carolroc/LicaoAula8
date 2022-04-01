import { Injectable } from '@angular/core';

interface Classe {
  title: string;
  diaDaSemana: string;
  horario: string;
}

@Injectable()
export class ClassesService {
  list: Array<Classe> = [];

  constructor() {}

  getList() {
    return this.list;
  }

  add(title: string, diaDaSemana: string, horario: string) {
    this.list.push({ title, diaDaSemana, horario });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
