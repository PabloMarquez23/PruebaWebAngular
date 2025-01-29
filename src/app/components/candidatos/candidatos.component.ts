import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CandidatosService, Candidato } from '../../services/candidatos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent {
  candidatos: Candidato[] = [];
  nuevoCandidato: Candidato = {
    nombre: '',
    apellido: '',
    partido: '',
    binomio: { nombre: '', apellido: '' }
  };

  constructor(private candidatoService: CandidatosService) {}

  ngOnInit() {
    this.obtenerCandidatos();
  }

  obtenerCandidatos() {
    this.candidatoService.obtenerCandidatos().subscribe(data => {
      this.candidatos = data;
    });
  }

  agregarCandidato() {
    if (this.nuevoCandidato.nombre && this.nuevoCandidato.apellido && this.nuevoCandidato.partido) {
      this.candidatoService.crearCandidato(this.nuevoCandidato).subscribe(() => {
        this.obtenerCandidatos();
        this.nuevoCandidato = { nombre: '', apellido: '', partido: '', binomio: { nombre: '', apellido: '' } }; // Limpia el formulario
      });
    }
  }

  eliminarCandidato(nombre: string) {
    this.candidatoService.eliminarCandidato(nombre).subscribe(() => {
      this.obtenerCandidatos();
    });
  }
}
