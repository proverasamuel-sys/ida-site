import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIdaComponent } from './about-ida.component';

describe('AboutIdaComponent', () => {
  let component: AboutIdaComponent;
  let fixture: ComponentFixture<AboutIdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutIdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutIdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
