import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  constructor(public classes: ClassesService) {}
  title: string;
  diaDaSemana: string;
  horario: string;

  ngOnInit() {}
}
