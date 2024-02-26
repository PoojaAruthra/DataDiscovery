import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallUsageBarGraph } from './overall-usage-bar-graph.component';

describe('OverallUsageBarGraphComponent', () => {
  let component: OverallUsageBarGraph;
  let fixture: ComponentFixture<OverallUsageBarGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallUsageBarGraph ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallUsageBarGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
