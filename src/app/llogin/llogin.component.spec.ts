import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LloginComponent } from './llogin.component';

describe('LloginComponent', () => {
  let component: LloginComponent;
  let fixture: ComponentFixture<LloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
