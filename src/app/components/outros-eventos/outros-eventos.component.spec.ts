import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrosEventosComponent } from './outros-eventos.component';

describe('OutrosEventosComponent', () => {
  let component: OutrosEventosComponent;
  let fixture: ComponentFixture<OutrosEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutrosEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutrosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
