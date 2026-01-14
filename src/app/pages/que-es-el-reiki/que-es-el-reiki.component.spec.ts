import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsElReikiComponent } from './que-es-el-reiki.component';

describe('QueEsElReikiComponent', () => {
  let component: QueEsElReikiComponent;
  let fixture: ComponentFixture<QueEsElReikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueEsElReikiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueEsElReikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
