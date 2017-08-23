import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bind2wayComponent } from './bind2way.component';

describe('Bind2wayComponent', () => {
  let component: Bind2wayComponent;
  let fixture: ComponentFixture<Bind2wayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bind2wayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bind2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
