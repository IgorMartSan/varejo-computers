import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoencontradoComponent } from './naoencontrado.component';

describe('NaoencontradoComponent', () => {
  let component: NaoencontradoComponent;
  let fixture: ComponentFixture<NaoencontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoencontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
