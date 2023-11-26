import { Component, OnInit } from '@angular/core';
import { Festivo } from 'src/app/entities/festivo';
import { FestivoService } from 'src/app/services/festivo.service';

@Component({
  selector: 'app-validar-festivo',
  templateUrl: './validar-festivo.component.html',
  styleUrls: ['./validar-festivo.component.css'],
})
export class ValidarFestivoComponent implements OnInit {
  public selectedDate: any;
  public festivos: Festivo[];

  constructor(private festivoService: FestivoService) {}

  verifyHoliday(): void {
    const date = new Date(this.selectedDate);

    if (this.isValidDate(date)) {
      this.festivoService.verifyHoliday(date).subscribe((res) => {
        window.alert(res);
      });
    } else {
      //cuando se da click en el boton y no hay fecha
      window.alert(
        'Fecha no válida. Por favor, ingrese una fecha o revise el formato. Debe seguir el patrón yyyy/MM/dd.'
      );
    }
  }

  isValidDate(date: Date): boolean {
    return !isNaN(date.getTime());
  }

  ngOnInit(): void {}
}

console.log('Hola');
