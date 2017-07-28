import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHeroeComponent } from '../../controladores/heroe/show.component';

describe('ShowHeroeComponent', () => {
  let component: ShowHeroeComponent;
  let fixture: ComponentFixture<ShowHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
