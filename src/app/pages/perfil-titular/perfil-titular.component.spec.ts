import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTitularComponent } from './perfil-titular.component';

describe('PerfilTitularComponent', () => {
  let component: PerfilTitularComponent;
  let fixture: ComponentFixture<PerfilTitularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilTitularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
