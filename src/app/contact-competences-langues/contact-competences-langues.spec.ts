import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCompetencesLangues } from './contact-competences-langues';

describe('ContactCompetencesLangues', () => {
  let component: ContactCompetencesLangues;
  let fixture: ComponentFixture<ContactCompetencesLangues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCompetencesLangues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCompetencesLangues);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
