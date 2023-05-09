import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFrom01Component } from './template-from01.component';

describe('TemplateFrom01Component', () => {
  let component: TemplateFrom01Component;
  let fixture: ComponentFixture<TemplateFrom01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFrom01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFrom01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
