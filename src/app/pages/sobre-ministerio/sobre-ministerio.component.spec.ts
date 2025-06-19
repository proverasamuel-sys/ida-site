import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMinisterioComponent } from './sobre-ministerio.component';

describe('SobreMinisterioComponent', () => {
  let component: SobreMinisterioComponent;
  let fixture: ComponentFixture<SobreMinisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMinisterioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreMinisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
