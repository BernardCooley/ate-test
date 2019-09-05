import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AvailableServicesComponent } from './available-services.component';
import { By } from '@angular/platform-browser';

describe('AvailableServicesComponent', () => {
  let component: AvailableServicesComponent;
  let fixture: ComponentFixture<AvailableServicesComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableServicesComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('.servicesContainer'));
    htmlElement = debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct number of service cards', () => {
    expect(htmlElement.querySelectorAll('div').length).toEqual(4);
  });
});
