import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreIdaComponent } from './sobre-ida.component';

describe('SobreIdaComponent', () => {
  let component: SobreIdaComponent;
  let fixture: ComponentFixture<SobreIdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreIdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreIdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
