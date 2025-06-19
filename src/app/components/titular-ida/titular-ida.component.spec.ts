import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularIdaComponent } from './titular-ida.component';

describe('TitularIdaComponent', () => {
  let component: TitularIdaComponent;
  let fixture: ComponentFixture<TitularIdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitularIdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitularIdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
