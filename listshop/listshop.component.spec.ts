import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListshopComponent } from './listshop.component';

describe('ListshopComponent', () => {
  let component: ListshopComponent;
  let fixture: ComponentFixture<ListshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
