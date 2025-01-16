import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperViewComponent } from './helper-view.component';

describe('HelperViewComponent', () => {
  let component: HelperViewComponent;
  let fixture: ComponentFixture<HelperViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelperViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
