import { Component, OnInit } from '@angular/core';
import { Festivo } from 'src/app/entities/festivo';
import { FestivoService } from 'src/app/services/festivo.service';

@Component({
  selector: 'app-validar-festivo',
  templateUrl: './validar-festivo.component.html',
  styleUrls: ['./validar-festivo.component.css'],
})
export class ValidarFestivoComponent implements OnInit {
  public selectedDate: Date;
  public enteredYear: number;
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

  getFestivos(): void {
    if (this.isYearValid(this.enteredYear)) {
      this.festivoService.getFestivos(this.enteredYear).subscribe((res) => {
        this.festivos = res;
        console.log(this.festivos);
      });
    } else {
      //cuando se da click en el boton y no hay año
      window.alert(
        'Año no válido. Por favor ingrese solo números en formato yyyy'
      );
    }
  }

  isYearValid(year: number): boolean {
    // Validar que el año no sea negativo y no tenga más de 4 caracteres
    return year >= 0 && year.toString().length <= 4;
  }

  ngOnInit(): void {}
}
