import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailViewComponent } from './item-detail-view.component';

describe('ItemDetailViewComponent', () => {
  let component: ItemDetailViewComponent;
  let fixture: ComponentFixture<ItemDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
