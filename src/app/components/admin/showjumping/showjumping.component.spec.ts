import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowjumpingComponent } from './showjumping.component';

describe('ShowjumpingComponent', () => {
  let component: ShowjumpingComponent;
  let fixture: ComponentFixture<ShowjumpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowjumpingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowjumpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
