import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoedeDoelComponent } from './goede-doel.component';

describe('GoedeDoelComponent', () => {
  let component: GoedeDoelComponent;
  let fixture: ComponentFixture<GoedeDoelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoedeDoelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoedeDoelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
