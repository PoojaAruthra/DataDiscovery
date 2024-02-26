import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLayoutComponent } from './chart-layout/chart-layout.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartService } from '../../Services/chart.service';
import { NgChartsModule, ThemeService } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OverallUsageBarGraph } from './overall-usage-bar-graph/overall-usage-bar-graph.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,MatCardModule,MatDatepickerModule,MatFormFieldModule, MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    NgChartsModule,
    BsDatepickerModule
  ],
  declarations: [ChartLayoutComponent,BarGraphComponent,PieChartComponent, OverallUsageBarGraph],
  exports: [ChartLayoutComponent,BarGraphComponent,PieChartComponent,OverallUsageBarGraph],
  providers: [ChartService,ThemeService],
})
export class ChartsModule { }
