import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgServerComponent } from './ag-server.component';

describe('AgServerComponent', () => {
  let component: AgServerComponent;
  let fixture: ComponentFixture<AgServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
