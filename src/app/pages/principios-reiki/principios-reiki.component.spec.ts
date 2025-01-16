import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosReikiComponent } from './principios-reiki.component';

describe('PrincipiosReikiComponent', () => {
  let component: PrincipiosReikiComponent;
  let fixture: ComponentFixture<PrincipiosReikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipiosReikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipiosReikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
