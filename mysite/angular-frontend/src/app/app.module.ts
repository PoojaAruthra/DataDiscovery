import { A11yModule } from '@angular/cdk/a11y';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiLocalizationNgModule } from '@simpl/siemens-brand-localize-with-angular';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';


import { SiFooterModule } from '@simpl/siemens-brand-ng/footer';
import { SiBreadcrumbModule } from '@simpl/siemens-brand-ng/breadcrumb';

import { SI_VALIDATION_ERROR_RESOLVER_MAP } from '@simpl/siemens-brand-ng/form-group';
import { SiHeaderModule } from '@simpl/siemens-brand-ng/header';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { OfferingsComponent } from './Components/offerings/offerings.component';
import { OfferingDetailComponent } from './Components/offering-detail/offering-detail.component';
import { OfferingCreateComponent } from './Components/offering-create/offering-create.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductCreateComponent } from './Components/product-create/product-create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SiFormGroupModule } from '@simpl/siemens-brand-ng/form-group';

import { NgSelectModule } from '@ng-select/ng-select';

import { TagInputModule } from 'ngx-chips';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TagManagementComponent } from './Components/tag-management/tag-management.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SiTableModule } from '@simpl/siemens-brand-ng/table';
import { UserMenuComponent } from './Components/user-menu/user-menu.component';
import { SiDropdownModule } from '@simpl/siemens-brand-ng/dropdown';
import { SiToastModule } from '@simpl/siemens-brand-ng/toast';
import { HelpComponent } from './Components/help/help.component';
import { TabsModule as NgxTabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgChartsModule } from 'ng2-charts';

import { ChartsModule } from './Components/charts/charts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfferingsComponent,
    OfferingDetailComponent,
    OfferingCreateComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    TagManagementComponent,
    UserMenuComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken'
    }),
    ModalModule.forRoot(),
    A11yModule,
    AppRoutingModule,
    SiHeaderModule,
    SiFooterModule,
    SiBreadcrumbModule,
    SiDropdownModule,
    SiToastModule,
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SiLocalizationNgModule,
    TypeaheadModule,
    ReactiveFormsModule,
    SiFormGroupModule,
    SiTableModule,
    NgSelectModule,
    FormsModule,
    TagInputModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    NgxTabsModule.forRoot(),
    NgChartsModule,
    ChartsModule
  ],
  providers: [{
    provide: SI_VALIDATION_ERROR_RESOLVER_MAP,
    useValue: { required: 'Value is required' }
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
