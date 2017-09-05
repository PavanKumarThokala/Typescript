import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assin3Component } from './assin3.component';

describe('Assin3Component', () => {
  let component: Assin3Component;
  let fixture: ComponentFixture<Assin3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assin3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assin3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
