import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from "./entete/entete";
import { ContactCompetencesLangues } from "./contact-competences-langues/contact-competences-langues";
import { Experiences } from "./experiences/experiences";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Entete, ContactCompetencesLangues, Experiences],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
