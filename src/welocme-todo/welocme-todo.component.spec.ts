import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelocmeTodoComponent } from './welocme-todo.component';

describe('WelocmeTodoComponent', () => {
  let component: WelocmeTodoComponent;
  let fixture: ComponentFixture<WelocmeTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelocmeTodoComponent]
    });
    fixture = TestBed.createComponent(WelocmeTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
