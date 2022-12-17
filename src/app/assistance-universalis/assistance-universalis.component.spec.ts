import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceUniversalisComponent } from './assistance-universalis.component';

describe('AssistanceUniversalisComponent', () => {
  let component: AssistanceUniversalisComponent;
  let fixture: ComponentFixture<AssistanceUniversalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceUniversalisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistanceUniversalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
