import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrodeesteticaComponent } from './centrodeestetica.component';

describe('CentrodeesteticaComponent', () => {
  let component: CentrodeesteticaComponent;
  let fixture: ComponentFixture<CentrodeesteticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrodeesteticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrodeesteticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
