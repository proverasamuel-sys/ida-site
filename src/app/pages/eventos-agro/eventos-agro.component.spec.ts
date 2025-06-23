import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAgroComponent } from './eventos-agro.component';

describe('EventosAgroComponent', () => {
  let component: EventosAgroComponent;
  let fixture: ComponentFixture<EventosAgroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosAgroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventosAgroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
