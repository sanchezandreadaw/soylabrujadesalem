import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosReikiComponent } from './beneficios-reiki.component';

describe('BeneficiosReikiComponent', () => {
  let component: BeneficiosReikiComponent;
  let fixture: ComponentFixture<BeneficiosReikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiosReikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosReikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
