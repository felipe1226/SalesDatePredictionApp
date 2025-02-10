import { ComponentRef, Directive, inject, input, SimpleChanges, ViewContainerRef } from '@angular/core';
import { ModalData, ModalViews } from '../interfaces/modal.interface';
import { MODAL_VIEWS } from '../models/modal-components';

@Directive({
  selector: '[dynamicView]',
})
export class DynamicViewDirective {

  view = input.required<ModalViews>()
  data = input.required<ModalData>()

  viewRef = inject(ViewContainerRef)

  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['view']){
      this.loadView(changes['view'].currentValue)
    }
  }

  private async loadView(view: ModalViews){
    this.viewRef.clear()

    try{
      const modalView = MODAL_VIEWS[view]
      await modalView.lazy().then(module => { 
        const componentType = module[modalView.className]
        const component: ComponentRef<any> | undefined = this.viewRef?.createComponent(componentType)
        component.instance.customerId = this.data().customerId
      })
    }
    catch(error){
      console.error(error)
    }
  }
}
