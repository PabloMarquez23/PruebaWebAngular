import { Component, OnInit } from '@angular/core';
import { Candidato, CandidatosService } from '../../services/candidatos.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {
  candidatos: Candidato[] = [];

  constructor(private candidatoService: CandidatosService) {}

  ngOnInit() {
    this.obtenerCandidatos();
  }

  obtenerCandidatos() {
    this.candidatoService.obtenerCandidatos().subscribe(data => {
      this.candidatos = data;
    });
  }

  eliminarCandidato(id: number) {
    this.candidatoService.eliminarCandidato(id).subscribe(() => {
      this.candidatos = this.candidatos.filter(c => c.id !== id);
    });
  }
}
