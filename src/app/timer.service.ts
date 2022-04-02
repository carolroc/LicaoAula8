import { Injectable } from '@angular/core';
import { ClassesService } from './classes.service';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;
  private fim: any;

  constructor(public classes: ClassesService) {
    this.start(1000);
    this.classes.add('Projeto de Encontrabilidade', 'Segunda', '19h');
    this.classes.add('Arquitetura Orientada a Serviços', 'Quarta', '19h');
    this.classes.add(
      'Tópicos Especiais em Sistemas para Internet II',
      'Sexta',
      '19h'
    );
  }

  start(inicio: number) {
    if (!this.timer) {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++;
      }, inicio);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  getCount() {
    return this.counter;
  }
}
