import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabReagentConsumptionComponent } from './lab-reagent-consumption.component';

describe('LabReagentConsumptionComponent', () => {
  let component: LabReagentConsumptionComponent;
  let fixture: ComponentFixture<LabReagentConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabReagentConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabReagentConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
