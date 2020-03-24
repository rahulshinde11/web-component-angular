import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCustomComponent } from './my-custom/my-custom.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyCustomComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(MyCustomComponent, { injector });
    customElements.define('contact-form', el as any);
  }

 }
