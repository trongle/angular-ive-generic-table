import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { Component } from "@angular/compiler/src/core";

@Directive({
  selector: "[dynamicCell]"
})
export class DynamicCellDirective {
  @Input()
  component: any;
  @Input()
  attributes: any;

  constructor(
    private factory: ComponentFactoryResolver,
    private vc: ViewContainerRef
  ) {}

  ngOnInit() {
    if (typeof this.component != "string") {
      const componentFactory = this.factory.resolveComponentFactory(
        this.component
      );
      const componentRef = this.vc.createComponent(componentFactory);
      
      if (this.attributes) {
        Object.keys(this.attributes).forEach(
          key => (componentRef.instance[key] = this.attributes[key])
        );
      }
    }
  }
}
