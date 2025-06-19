import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAreaComponent } from './news-area.component';

describe('NewsAreaComponent', () => {
  let component: NewsAreaComponent;
  let fixture: ComponentFixture<NewsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
