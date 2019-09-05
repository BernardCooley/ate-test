import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../fields/input/input.component';
import { RadiosComponent } from '../fields/radios/radios.component';
import { TextareaComponent } from '../fields/textarea/textarea.component';
import { ButtonComponent } from '../fields/button/button.component';
import { DateComponent } from '../fields/date/date.component';

const components = {
  input: InputComponent,
  radios: RadiosComponent,
  textarea: TextareaComponent,
  button: ButtonComponent,
  date: DateComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() config;
  @Input() group: FormGroup;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  component;

  ngOnInit() {
    const component = components[this.config.type];
    console.log(this.config.type);
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }

}