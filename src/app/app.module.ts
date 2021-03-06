import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ThfRangeComponent } from './thf-range/thf-range.component';
import { ThfRangeSimplesComponent } from './thf-range-simples/thf-range-simples.component';
import { ThfRangeComplexoComponent } from './thf-range-complexo/thf-range-complexo.component';


@NgModule({
  declarations: [
    AppComponent,
    ThfRangeComponent,
    ThfRangeSimplesComponent,
    ThfRangeComplexoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
