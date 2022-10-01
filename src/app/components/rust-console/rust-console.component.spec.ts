import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RustConsoleComponent } from './rust-console.component';

describe('RustConsoleComponent', () => {
  let component: RustConsoleComponent;
  let fixture: ComponentFixture<RustConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RustConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RustConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
