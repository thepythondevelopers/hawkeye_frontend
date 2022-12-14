import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbIdComponent } from './fb-id.component';

describe('FbIdComponent', () => {
  let component: FbIdComponent;
  let fixture: ComponentFixture<FbIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
