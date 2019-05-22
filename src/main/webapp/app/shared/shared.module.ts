import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AresSharedLibsModule, AresSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [AresSharedLibsModule, AresSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [AresSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AresSharedModule {
  static forRoot() {
    return {
      ngModule: AresSharedModule
    };
  }
}
