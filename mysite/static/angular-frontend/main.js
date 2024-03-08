(self["webpackChunkangular_frontend"] = self["webpackChunkangular_frontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 3224:
/*!********************************************************************!*\
  !*** ./src/app/Components/charts/bar-graph/bar-graph.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarGraphComponent": () => (/* binding */ BarGraphComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/chart.service */ 4953);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 4195);




const _c0 = ["barChart"];
class BarGraphComponent {
    constructor() {
        this.chartClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.barChartLabels = [];
        this.barChartData = [];
        this.barchartColors = [];
    }
    ngOnInit() {
    }
    callChartClicked(e) {
        if (e.active.length > 0) {
            const chart = e.active[0]._chart;
            const activePoints = chart.getElementAtEvent(e.event);
            if (activePoints.length > 0) {
                const chartClickedProps = {
                    label: this.labels[activePoints[0]._index],
                    legend: this.data[activePoints[0]._datasetIndex].label,
                    name: this.ChartType
                };
                this.chartClicked.emit(chartClickedProps);
            }
        }
    }
    getChartColors(color) {
        if (color === undefined) {
            color = _Services_chart_service__WEBPACK_IMPORTED_MODULE_0__.COLORPOOL[Math.floor(Math.random() * 11)];
        }
        color[3] = .8;
        const pool = {
            backgroundColor: `rgba(${color.join(',')})`,
            borderColor: `rgba(${color.join(',')})`,
            pointBackgroundColor: `rgba(${color.join(',')})`,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: `rgba(${color.join(',')})`,
            pointHoverBorderColor: '#fff',
            hoverBackgroundColor: `rgba(${color.join(',')})`,
            hoverBorderColor: `rgba(${color.join(',')})`,
        };
        return pool;
    }
    ngOnChanges(changes) {
        this.barchartColors = [];
        this.barChartData.length = 0;
        this.barChartLabels.length = 0;
        if (this.data)
            this.barChartData.push(...this.data);
        if (this.labels) {
            this.barChartLabels.push(...this.labels);
        }
        for (let i = 0; i < this.data.length; i++) {
            this.barchartColors.push(this.getChartColors(_Services_chart_service__WEBPACK_IMPORTED_MODULE_0__.COLORPOOL[i]));
        }
        this.barChartOptions = {
            maintainAspectRatio: true,
            borderColor: 'rgba(0, 255, 185, 1)',
            backgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointRadius: 0,
            tension: 0.1,
            hoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointHitRadius: 10,
            pointHoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointHoverBorderColor: 'rgba(0, 255, 185, 1)',
            pointHoverBorderWidth: 0,
            pointHoverRadius: 10,
            tooltip: {
                backgroundColor: 'rgba(0, 255, 185, 0.5)',
            },
            layout: {
                padding: {
                    left: 10,
                    right: 0,
                    top: 10,
                    bottom: 0
                }
            },
            plugins: {
                legend: {
                    labels: { usePointStyle: true, fontSize: 10, boxWidth: 10 },
                    display: false, position: 'bottom'
                },
                title: {
                    display: true,
                    text: this.title,
                    color: 'white'
                }
            },
            responsive: true,
            scales: {
                x: {
                    stacked: this.stacked,
                    ticks: { autoSkip: true, minTicksLimit: 6, maxTicksLimit: 26, beginAtZero: true, color: 'white' },
                    scaleLabel: {
                        display: true,
                        labelString: this.xAxisLabel
                    }
                },
                y: {
                    ticks: { autoSkip: false, beginAtZero: true, color: 'white', stepSize: 1 },
                    stacked: this.stacked,
                    scaleLabel: {
                        display: true,
                        labelString: this.yAxisLabel
                    }
                }
            },
            scaleShowVerticalLines: false,
            scaleShowValues: true,
            scaleValuePaddingX: 10,
            scaleValuePaddingY: 10,
            fill: true,
        };
        this.barChartLabels = this.labels;
        if (this.ChartType !== 'bar') {
            this.data.forEach((element) => {
                element['fill'] = false;
            });
        }
    }
}
BarGraphComponent.ɵfac = function BarGraphComponent_Factory(t) { return new (t || BarGraphComponent)(); };
BarGraphComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BarGraphComponent, selectors: [["bar-graph"]], viewQuery: function BarGraphComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.barChart = _t.first);
    } }, inputs: { data: "data", labels: "labels", ChartType: "ChartType", stacked: "stacked", xAxisLabel: "xAxisLabel", yAxisLabel: "yAxisLabel", title: "title" }, outputs: { chartClicked: "chartClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [[2, "display", "block", "height", "inherit", "width", "inherit"], [2, "height", "inherit", "width", "inherit"], ["baseChart", "", 1, "pie-bar-Chart", 2, "height", "inherit", "width", "inherit", 3, "datasets", "labels", "options", "type"], ["barChart", "base-chart"]], template: function BarGraphComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("type", ctx.ChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective], styles: [".pie-bar-Chart[_ngcontent-%COMP%] {\r\n    display: inline-block !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1ncmFwaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0VBQ2xDIiwiZmlsZSI6ImJhci1ncmFwaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZS1iYXItQ2hhcnQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 4459:
/*!**************************************************************************!*\
  !*** ./src/app/Components/charts/chart-layout/chart-layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartLayoutComponent": () => (/* binding */ ChartLayoutComponent),
/* harmony export */   "InputParams": () => (/* binding */ InputParams)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/chart.service */ 4953);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 4461);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _overall_usage_bar_graph_overall_usage_bar_graph_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../overall-usage-bar-graph/overall-usage-bar-graph.component */ 9959);
/* harmony import */ var _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bar-graph/bar-graph.component */ 3224);








function ChartLayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Overall Department Usage (Top 10) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "overall-bar-graph", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("emitChartClicked", function ChartLayoutComponent_div_1_Template_overall_bar_graph_emitChartClicked_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.departmentPieChartClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r0.departmentPieData)("labels", ctx_r0.departmentPieLabels)("chartType", "pie");
} }
function ChartLayoutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Overall Feature Usage (Top 10) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "overall-bar-graph", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("emitChartClicked", function ChartLayoutComponent_div_2_Template_overall_bar_graph_emitChartClicked_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.teamPieChartClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r1.teamPieData)("labels", ctx_r1.teamPieLabels)("chartType", "pie");
} }
function ChartLayoutComponent_div_22_bar_graph_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "bar-graph", 21);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r8.activeUserCountBarGraphData)("xAxisLabel", "TimeLine")("yAxisLabel", "Number of Active Users")("labels", ctx_r8.activeUserBarGraphLabels)("ChartType", "bar")("stacked", false);
} }
function ChartLayoutComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Active Users Count ( 14 day window ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ChartLayoutComponent_div_22_bar_graph_4_Template, 1, 6, "bar-graph", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.activeUserCountBarGraphData);
} }
function ChartLayoutComponent_div_23_bar_graph_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "bar-graph", 21);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r9.newUserCountBarGraphData)("xAxisLabel", "TimeLine")("yAxisLabel", "Number of New Users")("labels", ctx_r9.newUserBarGraphLabels)("ChartType", "bar")("stacked", false);
} }
function ChartLayoutComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " New Users Count ( 14 day window ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ChartLayoutComponent_div_23_bar_graph_4_Template, 1, 6, "bar-graph", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.newUserCountBarGraphData);
} }
class ChartLayoutComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.chartData = [];
        this.activeUserCountBarGraphData = [];
        this.activeUserBarGraphLabels = [];
        this.newUserCountBarGraphData = [];
        this.newUserBarGraphLabels = [];
        this.departmentPieData = [];
        this.departmentPieLabels = [];
        this.teamPieData = [];
        this.teamPieLabels = [];
        this.maxDate = new Date();
        this.filterInputs = {
            startDate: '',
            endDate: ''
        };
        this.inputParameters = {
            serviceId: '',
            startDate: '',
            endDate: '',
            windowSizeByWeek: 2
        };
        //Can use the below Logic for Mock Data
        // this.chartData =new MockData_AvoidCrashes().getTelemetryData();
        // console.log(this.chartData);
        // const dates = this.getLastWeekDates();
        // this.filterInputs={ startDate: new Date(dates.startDate), endDate: new Date(dates.endDate)}
    }
    ngOnInit() {
        this.inputParameters.serviceId = this.serviceId; //'bb95fa90-e5c8-4548-ab58-673c8226fec3';
        const lastWeekDates = this.getLastWeekDates();
        this.filterInputs = { startDate: new Date(lastWeekDates.startDate), endDate: new Date(lastWeekDates.endDate) };
        let dates = this.setDates(this.filterInputs);
        this.inputParameters.startDate = dates["startDate"].toString();
        this.inputParameters.endDate = dates["endDate"].toString();
        this.getChartData(this.inputParameters);
    }
    getChartData(inputParams) {
        this.chartService.getChartData(inputParams.serviceId, inputParams.startDate, inputParams.endDate, inputParams.windowSizeByWeek).subscribe((data) => {
            this.chartData = data;
            this.loadChartData();
        });
    }
    loadChartData() {
        this.activeUserBarGraphLabels = this.chartData.activeUsersData.timeLine;
        this.activeUserCountBarGraphData.push({ data: this.chartData.activeUsersData.activeUsersCount });
        this.newUserBarGraphLabels = this.chartData.newUsersData.timeLine;
        this.newUserCountBarGraphData.push({ data: this.chartData.newUsersData.newUsersCount });
        this.departmentPieData.push(this.chartData.departmentData.departmentCount);
        this.departmentPieLabels = this.chartData.departmentData.departmentNames;
        this.teamPieData.push(this.chartData.usedComponentData.componentCount);
        this.teamPieLabels = this.chartData.usedComponentData.componentNames;
    }
    setMinEndDate() {
        return this.filterInputs.startDate;
    }
    searchInput() {
        let dates = this.setDates(this.filterInputs);
        this.inputParameters.startDate = dates["startDate"].toString();
        this.inputParameters.endDate = dates["endDate"].toString();
        this.resetData();
        this.getChartData(this.inputParameters);
    }
    resetData() {
        this.activeUserCountBarGraphData = [];
        this.newUserCountBarGraphData = [];
        this.departmentPieData = [];
        this.teamPieData = [];
    }
    departmentPieChartClick(event) {
        //console.log(event);
        //Pie Chart Event Clicked can be Used later.
    }
    teamPieChartClick(event) {
        //console.log(event);
        //Pie Chart Event Clicked can be Used later.
    }
    getLastWeekDates() {
        const d = new Date();
        d.setDate(d.getDate() - 6);
        const day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1);
        const startDate = new Date(d.setDate(diff - 7));
        d.setDate(d.getDate() + 13);
        const endDate = d;
        return { startDate: startDate, endDate: endDate };
    }
    setDates(filter) {
        var dates = {
            startDate: '',
            endDate: ''
        };
        dates.startDate = `${filter.startDate
            .getFullYear()
            .toString()}${`0${filter.startDate.getMonth() + 1}`.slice(-2)}${`0${filter.startDate.getDate()}`.slice(-2)}`;
        dates.endDate = `${filter.endDate
            .getFullYear()
            .toString()}${`0${filter.endDate.getMonth() + 1}`.slice(-2)}${`0${filter.endDate.getDate()}`.slice(-2)}`;
        return dates;
    }
}
ChartLayoutComponent.ɵfac = function ChartLayoutComponent_Factory(t) { return new (t || ChartLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_chart_service__WEBPACK_IMPORTED_MODULE_0__.ChartService)); };
ChartLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChartLayoutComponent, selectors: [["app-chart-layout"]], inputs: { serviceId: "serviceId" }, decls: 24, vars: 9, consts: [[1, "row", "justify-items"], ["style", "width: 550px;", 4, "ngIf"], [1, "row", 2, "margin-top", "50px"], [1, "col-12"], [1, "col-12", "display-inline"], [1, "col-5", "display-inline"], [1, "col-4", "display-inline"], [1, "form-check-label"], [1, "col-8", "display-inline"], ["type", "text", "placeholder", "Start date", "bsDatepicker", "", 1, "form-control", 3, "maxDate", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "End date", "bsDatepicker", "", 1, "form-control", 3, "maxDate", "minDate", "ngModel", "ngModelChange"], [1, "col-2", "display-inline"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "row", "justify-items", 2, "margin-top", "15px"], ["style", "width: 550px;height: 520px;", 4, "ngIf"], [2, "width", "550px"], [1, "shadow", "p-0", 2, "width", "inherit", "height", "inherit"], [1, "panel-header"], [2, "width", "inherit", "height", "inherit", 3, "data", "labels", "chartType", "emitChartClicked"], [2, "width", "550px", "height", "520px"], ["style", "width: 550px;height: 450px;", 3, "data", "xAxisLabel", "yAxisLabel", "labels", "ChartType", "stacked", 4, "ngIf"], [2, "width", "550px", "height", "450px", 3, "data", "xAxisLabel", "yAxisLabel", "labels", "ChartType", "stacked"]], template: function ChartLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChartLayoutComponent_div_1_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChartLayoutComponent_div_2_Template, 5, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Start date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ChartLayoutComponent_Template_input_ngModelChange_11_listener($event) { return ctx.filterInputs.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " End date : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ChartLayoutComponent_Template_input_ngModelChange_17_listener($event) { return ctx.filterInputs.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChartLayoutComponent_Template_button_click_19_listener() { return ctx.searchInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ChartLayoutComponent_div_22_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ChartLayoutComponent_div_23_Template, 5, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.departmentPieData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.teamPieData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxDate", ctx.maxDate)("ngModel", ctx.filterInputs.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxDate", ctx.maxDate)("minDate", ctx.setMinEndDate())("ngModel", ctx.filterInputs.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeUserCountBarGraphData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newUserCountBarGraphData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__.BsDatepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _overall_usage_bar_graph_overall_usage_bar_graph_component__WEBPACK_IMPORTED_MODULE_2__.OverallUsageBarGraph, _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_3__.BarGraphComponent], styles: [".mdl-cell[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.display-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.justify-items[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  background: #01003E !important;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  padding: 1em;\n  opacity: 0.95;\n  font-weight: bold;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0U7RUFFRSxxQkFBQTtBQURKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSx1REFBQTtBQURGIiwiZmlsZSI6ImNoYXJ0LWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWRsLWNlbGwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtXHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS1pbmxpbmVcclxue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uanVzdGlmeS1pdGVtcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMTAwM0UgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyA0MCUpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
class InputParams {
    constructor() {
        this.serviceId = '';
        this.startDate = '';
        this.endDate = '';
        this.windowSizeByWeek = 2;
    }
}


/***/ }),

/***/ 3935:
/*!****************************************************!*\
  !*** ./src/app/Components/charts/charts.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartsModule": () => (/* binding */ ChartsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _chart_layout_chart_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-layout/chart-layout.component */ 4459);
/* harmony import */ var _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-graph/bar-graph.component */ 3224);
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-chart/pie-chart.component */ 1885);
/* harmony import */ var _Services_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/chart.service */ 4953);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 4195);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2937);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 4461);
/* harmony import */ var _overall_usage_bar_graph_overall_usage_bar_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overall-usage-bar-graph/overall-usage-bar-graph.component */ 9959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
















class ChartsModule {
}
ChartsModule.ɵfac = function ChartsModule_Factory(t) { return new (t || ChartsModule)(); };
ChartsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ChartsModule });
ChartsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_Services_chart_service__WEBPACK_IMPORTED_MODULE_3__.ChartService, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ThemeService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule,
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ChartsModule, { declarations: [_chart_layout_chart_layout_component__WEBPACK_IMPORTED_MODULE_0__.ChartLayoutComponent, _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_1__.BarGraphComponent, _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent, _overall_usage_bar_graph_overall_usage_bar_graph_component__WEBPACK_IMPORTED_MODULE_5__.OverallUsageBarGraph], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule,
        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__.BsDatepickerModule], exports: [_chart_layout_chart_layout_component__WEBPACK_IMPORTED_MODULE_0__.ChartLayoutComponent, _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_1__.BarGraphComponent, _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__.PieChartComponent, _overall_usage_bar_graph_overall_usage_bar_graph_component__WEBPACK_IMPORTED_MODULE_5__.OverallUsageBarGraph] }); })();


/***/ }),

/***/ 9959:
/*!************************************************************************************************!*\
  !*** ./src/app/Components/charts/overall-usage-bar-graph/overall-usage-bar-graph.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverallUsageBarGraph": () => (/* binding */ OverallUsageBarGraph)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/chart.service */ 4953);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 4195);
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.piecelabel.js */ 2460);
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);







function OverallUsageBarGraph_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function OverallUsageBarGraph_ng_template_2_canvas_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 6, 7);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r5.dataset)("options", ctx_r5.options);
} }
function OverallUsageBarGraph_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, OverallUsageBarGraph_ng_template_2_canvas_0_Template, 2, 2, "canvas", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OverallUsageBarGraph_ng_template_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.downloadCsv(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Export All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.legends.length > 0);
} }
function OverallUsageBarGraph_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No records found !! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class OverallUsageBarGraph {
    constructor() {
        this.chartType = 'horizontalBar';
        this.filterParams = {};
        this.emitChartClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.title = 'Pie Chart';
        this.legends = [];
        this.dataset = [];
        this.pieChartColors = [
            {
                backgroundColor: this.getPieChartColors(_Services_chart_service__WEBPACK_IMPORTED_MODULE_0__.COLORPOOL),
            },
        ];
    }
    ngOnInit() {
    }
    getPieChartColors(COLORPOOL) {
        const pool = [];
        COLORPOOL.forEach(element => {
            pool.push(`rgba(${element.join(',')})`);
        });
        return pool;
    }
    ngOnChanges(changes) {
        let dataArray = {};
        console.log(this.data);
        dataArray = this.data != null ? this.data[0] : {};
        const sortedDataset = dataArray.sort((a, b) => b.value - a.value);
        // Take the top 10 elements from the sorted dataset
        const top10Dataset = sortedDataset.slice(0, 10);
        console.log("Org", dataArray);
        console.log(top10Dataset);
        this.legends.length = 0;
        const pieLabels = [];
        pieLabels.push(...this.labels);
        let trimmedLables = [];
        if (this.labels != null && this.labels != undefined && this.labels.length != 0) {
            this.labels.forEach((arr, index) => {
                if (arr.length > 20) {
                    trimmedLables[index] = arr.substring(0, 16) + "..";
                }
                else {
                    trimmedLables[index] = arr;
                }
            });
        }
        if (this.labels)
            this.legends.push(...trimmedLables);
        const result = GetTop10Values(this.legends, dataArray);
        this.fullDataSet = dataArray.map((value, index) => ({ value, string: this.legends[index] }));
        this.fullDataSet.sort((a, b) => b.value - a.value);
        this.dataset = {
            labels: result.strings,
            datasets: [{
                    data: result.values,
                    borderWidth: 1
                }]
        };
        this.barChartOptions = {
            maintainAspectRatio: true,
            borderColor: 'rgba(0, 255, 185, 1)',
            backgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointRadius: 0,
            tension: 0.1,
            hoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointHitRadius: 10,
            pointHoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointHoverBorderColor: 'rgba(0, 255, 185, 1)',
            pointHoverBorderWidth: 0,
            pointHoverRadius: 10,
            tooltip: {
                backgroundColor: 'rgba(0, 255, 185, 0.5)',
            },
            layout: {
                padding: {
                    left: 10,
                    right: 0,
                    top: 10,
                    bottom: 0
                }
            },
            plugins: {
                legend: {
                    labels: { usePointStyle: true, fontSize: 10, boxWidth: 10 },
                    display: true, position: 'bottom'
                },
                title: {
                    display: true,
                    text: this.title,
                    color: 'white'
                }
            },
            responsive: true,
            scales: {
                x: {
                    ticks: { autoSkip: true, minTicksLimit: 6, maxTicksLimit: 26, beginAtZero: true, color: 'white' },
                    scaleLabel: {
                        display: true,
                        labelString: "Departments"
                    }
                },
                y: {
                    ticks: { autoSkip: false, beginAtZero: true, color: 'white', stepSize: 1 },
                    scaleLabel: {
                        display: true,
                        labelString: "COunt"
                    }
                }
            },
            scaleShowVerticalLines: false,
            scaleShowValues: true,
            scaleValuePaddingX: 10,
            scaleValuePaddingY: 10,
            fill: true,
        };
        this.options = {
            scales: {
                x: {
                    scaleLabel: {
                        display: true,
                        labelString: "Departments"
                    }
                },
                y: {
                    scaleLabel: {
                        display: true,
                        labelString: "COunt"
                    }
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 13,
                    top: 10,
                    bottom: 0
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    labels: { usePointStyle: true, fontSize: 11, boxWidth: 10, fullWidth: false, color: 'white' },
                    display: false,
                    position: 'left',
                    lineWidth: 0,
                },
                title: {
                    display: false,
                    text: this.title,
                    color: 'white'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return pieLabels[tooltipItem.dataIndex];
                        }
                    }
                }
            },
            animation: { animateScale: true, animateRotate: true },
            pieceLabel: {
                render: function (args) {
                    return `${args.percentage}%`;
                },
                position: 'outside'
            }
        };
    }
    chartClicked(e) {
        if (e.active.length > 0) {
            const chart = e.active[0]._chart;
            const activePoints = chart.getElementAtEvent(e.event);
            if (activePoints.length > 0) {
                const labels = Object.keys(this.labels).map(item => this.labels[item]);
                const chartClickedProps = {
                    label: labels[activePoints[0]._index],
                    name: this.chartType
                };
                this.emitChartClicked.emit(chartClickedProps);
            }
        }
    }
    // downloadCsv() {
    //   // Combine the full dataset into a CSV format
    //   const fullData = this.fullDataSet.map((value: any, index: any) => [value, this.labels[index]]);
    //   console.log(fullData)
    //   const csvContent = "Value,Text\n" + fullData.map((row: any[]) => row.join(",")).join("\n");
    //   console.log(csvContent)
    //   // Create a Blob and a link to trigger the download
    //   const blob = new Blob([csvContent], { type: 'text/csv' });
    //   const url = window.URL.createObjectURL(blob);
    //   const a = document.createElement('a');
    //   a.href = url;
    //   a.download = 'full_dataset.csv';
    //   document.body.appendChild(a);
    //   // Trigger the download and remove the temporary link
    //   a.click();
    //   window.URL.revokeObjectURL(url);
    //   document.body.removeChild(a);
    // }
    downloadCsv() {
        // Convert the data into a CSV format
        const csvContent = "Value,Text\n" + this.fullDataSet.map((item) => `${item.value || ''},${item.string || ''}`)
            .join("\n");
        // Create a Blob and a link to trigger the download
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'full_dataset.csv';
        document.body.appendChild(a);
        // Trigger the download and remove the temporary link
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
}
OverallUsageBarGraph.ɵfac = function OverallUsageBarGraph_Factory(t) { return new (t || OverallUsageBarGraph)(); };
OverallUsageBarGraph.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OverallUsageBarGraph, selectors: [["overall-bar-graph"]], viewQuery: function OverallUsageBarGraph_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.myChart = _t.first);
    } }, inputs: { data: "data", labels: "labels", chartType: "chartType", filterParams: "filterParams", title: "title" }, outputs: { emitChartClicked: "emitChartClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [[2, "height", "inherit", "width", "inherit"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["id", "bar-chart-horizontal", "class", "horizontalBar", "baseChart", "", 3, "data", "options", 4, "ngIf"], [1, "btn", "btn-outline-primary", "btn-sm", "float-left", 3, "click"], ["id", "bar-chart-horizontal", "baseChart", "", 1, "horizontalBar", 3, "data", "options"], ["myChart", ""], ["role", "alert", 1, "alert", "alert-info"]], template: function OverallUsageBarGraph_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OverallUsageBarGraph_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, OverallUsageBarGraph_ng_template_2_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OverallUsageBarGraph_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.legends.length > 0)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVyYWxsLXVzYWdlLWJhci1ncmFwaC5jb21wb25lbnQuc2NzcyJ9 */"] });
function GetTop10Values(strings, dataArray) {
    const data = dataArray.map((value, index) => ({ value, string: strings[index] }));
    data.sort((a, b) => b.value - a.value);
    const top10Values = data.slice(0, 10).map((item) => item.value);
    const top10Strings = data.slice(0, 10).map((item) => item.string);
    console.log(top10Values);
    console.log(top10Strings);
    return { values: top10Values, strings: top10Strings };
}


/***/ }),

/***/ 1885:
/*!********************************************************************!*\
  !*** ./src/app/Components/charts/pie-chart/pie-chart.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartComponent": () => (/* binding */ PieChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Services/chart.service */ 4953);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 4195);
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.piecelabel.js */ 2460);
/* harmony import */ var chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_piecelabel_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);







function PieChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function PieChartComponent_ng_template_2_canvas_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 5, 6);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r5.dataset)("type", "pie")("options", ctx_r5.options);
} }
function PieChartComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PieChartComponent_ng_template_2_canvas_0_Template, 2, 3, "canvas", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.legends.length > 0);
} }
function PieChartComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No records found !! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class PieChartComponent {
    constructor() {
        this.chartType = 'pie';
        this.filterParams = {};
        this.emitChartClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.title = 'Pie Chart';
        this.legends = [];
        this.dataset = [];
        this.pieChartColors = [
            {
                backgroundColor: this.getPieChartColors(_Services_chart_service__WEBPACK_IMPORTED_MODULE_0__.COLORPOOL),
            },
        ];
    }
    ngOnInit() {
    }
    getPieChartColors(COLORPOOL) {
        const pool = [];
        COLORPOOL.forEach(element => {
            pool.push(`rgba(${element.join(',')})`);
        });
        return pool;
    }
    ngOnChanges(changes) {
        let dataArray = {};
        dataArray = this.data != null ? this.data[0] : {};
        this.legends.length = 0;
        const pieLabels = [];
        pieLabels.push(...this.labels);
        let trimmedLables = [];
        if (this.labels != null && this.labels != undefined && this.labels.length != 0) {
            this.labels.forEach((arr, index) => {
                if (arr.length > 20) {
                    trimmedLables[index] = arr.substring(0, 16) + "..";
                }
                else {
                    trimmedLables[index] = arr;
                }
            });
        }
        if (this.labels)
            this.legends.push(...trimmedLables);
        this.dataset = {
            labels: this.legends,
            datasets: [{
                    data: dataArray,
                    borderWidth: 1
                }]
        };
        this.options = {
            layout: {
                padding: {
                    left: 0,
                    right: 13,
                    top: 10,
                    bottom: 0
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: {
                legend: {
                    labels: { usePointStyle: true, fontSize: 11, boxWidth: 10, fullWidth: false, color: 'white' },
                    display: true,
                    position: 'left',
                    lineWidth: 0,
                },
                title: {
                    display: false,
                    text: this.title,
                    color: 'white'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return pieLabels[tooltipItem.dataIndex];
                        }
                    }
                }
            },
            animation: { animateScale: true, animateRotate: true },
            pieceLabel: {
                render: function (args) {
                    return `${args.percentage}%`;
                },
                position: 'outside'
            }
        };
    }
    chartClicked(e) {
        if (e.active.length > 0) {
            const chart = e.active[0]._chart;
            const activePoints = chart.getElementAtEvent(e.event);
            if (activePoints.length > 0) {
                const labels = Object.keys(this.labels).map(item => this.labels[item]);
                const chartClickedProps = {
                    label: labels[activePoints[0]._index],
                    name: this.chartType
                };
                this.emitChartClicked.emit(chartClickedProps);
            }
        }
    }
}
PieChartComponent.ɵfac = function PieChartComponent_Factory(t) { return new (t || PieChartComponent)(); };
PieChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PieChartComponent, selectors: [["pie-chart"]], viewQuery: function PieChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.myChart = _t.first);
    } }, inputs: { data: "data", labels: "labels", chartType: "chartType", filterParams: "filterParams", title: "title" }, outputs: { emitChartClicked: "emitChartClicked" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [[2, "height", "inherit", "width", "inherit"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], ["class", "pie-bar-Chart", "baseChart", "", 3, "data", "type", "options", 4, "ngIf"], ["baseChart", "", 1, "pie-bar-Chart", 3, "data", "type", "options"], ["myChart", ""], ["role", "alert", 1, "alert", "alert-info"]], template: function PieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PieChartComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PieChartComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PieChartComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.legends.length > 0)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9573:
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _environments_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/theme */ 3645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simpl/siemens-brand-ng/header */ 722);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ 6649);
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-menu/user-menu.component */ 2859);







class HeaderComponent {
    constructor() {
        this.dark = _environments_theme__WEBPACK_IMPORTED_MODULE_0__.DARK;
        this.userGivenName = '';
        this.userFamilyName = '';
        this.userIsStaff = '';
    }
    ngOnInit() {
        this.userGivenName = window["userGivenName"];
        this.userFamilyName = window["userFamilyName"];
        this.userIsStaff = window["userIsStaff"];
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 5, consts: [["siHeader", "", 1, "si-header", "si-header-internet", "fixed-top", 3, "cdkTrapFocus"], ["siHeader", "siHeader"], ["siHeaderContainer", "", 1, "container"], ["routerLink", "/", "aria-label", "Siemens logo", 1, "si-header-brand"], ["type", "button", "siHeaderToggler", "", "aria-label", "Toggle navigation", 1, "si-header-toggler"], [1, "siemens-menu"], ["siHeaderCollapse", "", 1, "si-header-collapse"], [1, "si-header-collapse-wrapper"], [1, "container"], ["siHeaderMenu", "", 1, "si-header-nav-main"], ["siHeaderItem", ""], ["routerLink", "/", "hidden", ""], ["siHeaderItem", "", 1, "si-header-item"], ["routerLink", "products", "siHeaderLink", "", 1, "si-header-link"], ["routerLink", "insights", "siHeaderLink", "", 1, "si-header-link"], [1, "si-header-nav-additional"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "si-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "app-user-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-dark", ctx.dark)("bg-light", !ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkTrapFocus", _r0.navbarExpandedOrDropdownOpen);
    } }, directives: [_simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiHeaderDirective, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.CdkTrapFocus, _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiHeaderContainerDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiLogoComponent, _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiHeaderTogglerDirective, _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiHeaderCollapseDirective, _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiHeaderMenuDirective, _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiHeaderItemDirective, _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_1__.SiHeaderLinkDirective, _help_help_component__WEBPACK_IMPORTED_MODULE_2__.HelpComponent, _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_3__.UserMenuComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 6649:
/*!***************************************************!*\
  !*** ./src/app/Components/help/help.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpComponent": () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 7762);



function HelpComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Help!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HelpComponent_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tabset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Portfolio Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " are marketable offerings provided by teams to their stakeholders.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Portfolio Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " can include multiple ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " have a clear value definition and stakeholder focus.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "You can check out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " by discovering them based on their ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Portfolio Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " and by searching name, description, or tags.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Tags provide details to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " and link them with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Portfolio Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, ". To make sure a user can find the correct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " of each ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Portfolio Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, ", create or add a tag with the name of the product and asign it to the insight. If the product changes its name, simply update the name of the product and the tag.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Every Tag has an associated type to add meaning. The following types are defined: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Product:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Gives the Product Cluster of the Insight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Department:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Target Department or Stakeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "CreatorTeam:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Team that was involved in the creation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "ServiceType:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Type of insight that is being offered, Dashboard, Notification, Consulting, Self-service,...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Technology:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Technology used for hosting the Insight (e.g. Tableau, PowerBI)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Value:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Does the Insight improve Efficiency (How), Effectivity (What), or Opportunity?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Phase:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " The phase of software engineering the insight is aimed at: [Define, Design, Implement, Test, Deploy, Operate] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " The role key stakeholder addressed in the insight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Note : Incase of any Feedback or Suggestion, Please Contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Team Sceptrum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Here is some help for you ", ctx_r1.userGivenName, ":");
} }
class HelpComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.userGivenName = '';
        this.userFamilyName = '';
        this.userIsStaff = '';
    }
    ngOnInit() {
        this.userGivenName = window["userGivenName"];
        this.userFamilyName = window["userFamilyName"];
        this.userIsStaff = window["userIsStaff"];
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalService)); };
HelpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 5, vars: 0, consts: [["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [2, "white-space", "nowrap"], ["template", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", "close-btn", 3, "click"], [1, "modal-body"], ["heading", "General"], ["heading", "Tags"], [1, "text-center"], ["src", "../../../../../static/img/ProductInsightLink.png", 2, "max-height", "10vh", "padding-bottom", "2vh"], [1, "modal-footer", 2, "justify-content", "start", "color", "yellow"], ["href", "mailto:ADV D AA DI FA CTR TE Team Sceptrum BLR <RGINSTSCTRDADSAADFPLTCOSPERFORMANCE@internal.siemens.com>"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HelpComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HelpComponent_ng_template_3_Template, 91, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_1__.TabDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5673:
/*!*************************************************************************!*\
  !*** ./src/app/Components/offering-create/offering-create.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferingCreateComponent": () => (/* binding */ OfferingCreateComponent)
/* harmony export */ });
/* harmony import */ var _environments_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/theme */ 3645);
/* harmony import */ var _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simpl/siemens-brand-ng/toast */ 2698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_offering_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/offering.service */ 5347);
/* harmony import */ var _Services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/tag.service */ 4519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @simpl/siemens-brand-ng/form-group */ 2882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ 8375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tag-management/tag-management.component */ 5759);












function OfferingCreateComponent_div_7_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("( ", item_r3.type, ") ");
} }
function OfferingCreateComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "si-form-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OfferingCreateComponent_div_7_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.offering.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "si-form-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OfferingCreateComponent_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.offering.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "si-form-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OfferingCreateComponent_div_7_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.offering.access_url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "si-form-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OfferingCreateComponent_div_7_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.offering.documentation_url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OfferingCreateComponent_div_7_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.offering.is_recommended = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Recommend to Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tag-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OfferingCreateComponent_div_7_Template_tag_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.offering.tags = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "tag-input-dropdown", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, OfferingCreateComponent_div_7_ng_template_15_Template, 3, 2, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "app-tag-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OfferingCreateComponent_div_7_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.saveOffering(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.offering.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.offering.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.offering.access_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.offering.documentation_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.offering.is_recommended);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.offering.tags)("onlyFromAutocomplete", true)("displayBy", "name")("identifyBy", "id")("theme", "bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("autocompleteItems", ctx_r0.tags)("dynamicUpdate", true)("displayBy", "name")("identifyBy", "id");
} }
function OfferingCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Insight was submitted successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OfferingCreateComponent_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.newOffering(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
// import { TagManagementComponent } from '../tag-management/tag-management.component';
class OfferingCreateComponent {
    constructor(offeringService, tagService, toastService) {
        this.offeringService = offeringService;
        this.tagService = tagService;
        this.toastService = toastService;
        this.dark = _environments_theme__WEBPACK_IMPORTED_MODULE_0__.DARK;
        this.tags = {};
        this.offering = {};
        this.submitted = false;
    }
    ngOnInit() {
        this.getTags();
    }
    getTags() {
        this.tagService.getTags()
            .subscribe(data => {
            this.tags = data;
        }, error => {
            console.log(error);
        });
    }
    saveOffering() {
        const data = {
            name: this.offering.name,
            description: this.offering.description,
            access_url: this.offering.access_url,
            documentation_url: this.offering.documentation_url,
            is_recommended: this.offering.is_recommended,
            tags: this.offering.tags
        };
        this.offeringService.create(data)
            .subscribe(response => {
            this.submitted = true;
        }, error => {
            Object.keys(error.error).forEach(key => {
                let value = error.error[key];
                this.showErrorToast(key + ':' + value);
            });
        });
    }
    newOffering() {
        this.submitted = false;
        this.offering = {
            id: '',
            description: '',
            name: '',
            access_url: '',
            documentation_url: '',
            is_recommended: false,
            image_name: '',
            sas: '',
            tags: [],
            tag_completeness_score: 0,
            tag_improvement_string: '',
            recommendations: []
        };
    }
    showErrorToast(message) {
        this.toastService.showToast({
            content: message,
            type: _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastTypes.DANGER,
            timeout: 3000,
        });
    }
}
OfferingCreateComponent.ɵfac = function OfferingCreateComponent_Factory(t) { return new (t || OfferingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Services_offering_service__WEBPACK_IMPORTED_MODULE_2__.OfferingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_Services_tag_service__WEBPACK_IMPORTED_MODULE_3__.TagService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastService)); };
OfferingCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OfferingCreateComponent, selectors: [["app-offering-create"]], decls: 9, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col", "col-md-12"], [1, "submit-form"], [4, "ngIf"], ["label", "Name"], ["type", "text", "id", "name", "required", "", "name", "name", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["label", "Description"], ["type", "text", "id", "description", "required", "", "name", "description", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["label", "Access URL"], ["type", "text", "id", "access_url", "required", "", "name", "access_url", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["label", "Documentation URL"], ["type", "text", "id", "documentation_url", "required", "", "name", "documentation_url", "siFormControl", "", 3, "ngModel", "ngModelChange"], [1, "form-check"], ["type", "checkbox", "value", "", "name", "is_recommended", "id", "is_recommended", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "is_recommended", 1, "form-check-label"], ["name", "tags", 3, "ngModel", "onlyFromAutocomplete", "displayBy", "identifyBy", "theme", "ngModelChange"], [3, "autocompleteItems", "dynamicUpdate", "displayBy", "identifyBy"], ["style", "color: black;"], ["routerLink", "../../insights"], [1, "btn", "btn-outline-primary"], [1, "siemens-arrow-left"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function OfferingCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Register a new Insight");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, OfferingCreateComponent_div_7_Template, 22, 14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, OfferingCreateComponent_div_8_Template, 8, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("dark", ctx.dark)("light", !ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__.SiFormGroupComponent, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__.SiFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, ngx_chips__WEBPACK_IMPORTED_MODULE_9__.TagInputComponent, ngx_chips__WEBPACK_IMPORTED_MODULE_9__.TagInputDropdown, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_5__.TagManagementComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcmluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8467:
/*!*************************************************************************!*\
  !*** ./src/app/Components/offering-detail/offering-detail.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferingDetailComponent": () => (/* binding */ OfferingDetailComponent)
/* harmony export */ });
/* harmony import */ var _environments_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/theme */ 3645);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simpl/siemens-brand-ng/toast */ 2698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_offering_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/offering.service */ 5347);
/* harmony import */ var _Services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/tag.service */ 4519);
/* harmony import */ var _Services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/image.service */ 5629);
/* harmony import */ var _Services_statistic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/statistic.service */ 3083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 7762);
/* harmony import */ var _charts_chart_layout_chart_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../charts/chart-layout/chart-layout.component */ 4459);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @simpl/siemens-brand-ng/form-group */ 2882);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-chips */ 8375);
/* harmony import */ var _tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tag-management/tag-management.component */ 5759);

















function OfferingDetailComponent_h5_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Completeness ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 1, ctx_r0.offering.tag_completeness_score, "1.1-1"), " ");
} }
function OfferingDetailComponent_h5_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Completeness ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 1, ctx_r1.offering.tag_completeness_score, "1.1-1"), " ");
} }
function OfferingDetailComponent_h5_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Completeness ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 1, ctx_r2.offering.tag_completeness_score, "1.1-1"), " ");
} }
function OfferingDetailComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", line_r6, " ");
} }
function OfferingDetailComponent_div_30_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("( ", item_r8.type, ") ");
} }
function OfferingDetailComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OfferingDetailComponent_div_30_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.toggleEditOffering(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OfferingDetailComponent_div_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.deleteOffering(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "si-form-group", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function OfferingDetailComponent_div_30_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r13.offering.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "si-form-group", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function OfferingDetailComponent_div_30_Template_textarea_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r14.offering.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "si-form-group", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function OfferingDetailComponent_div_30_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r15.offering.access_url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "si-form-group", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function OfferingDetailComponent_div_30_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r16.offering.documentation_url = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function OfferingDetailComponent_div_30_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r17.offering.is_recommended = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Recommend to Users ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "tag-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function OfferingDetailComponent_div_30_Template_tag_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r18.offering.tags = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "tag-input-dropdown", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, OfferingDetailComponent_div_30_ng_template_21_Template, 3, 2, "ng-template", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function OfferingDetailComponent_div_30_Template_input_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r19.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "app-tag-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function OfferingDetailComponent_div_30_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r20.updateOffering(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r4.offering.name)("disabled", ctx_r4.disableEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r4.offering.description)("disabled", ctx_r4.disableEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r4.offering.access_url)("disabled", ctx_r4.disableEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r4.offering.documentation_url)("disabled", ctx_r4.disableEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r4.offering.is_recommended)("disabled", ctx_r4.disableEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r4.offering.tags)("onlyFromAutocomplete", true)("disable", ctx_r4.disableEdit)("displayBy", "name")("identifyBy", "id")("theme", "bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("autocompleteItems", ctx_r4.tags)("dynamicUpdate", true)("displayBy", "name")("identifyBy", "id");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r4.disableEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r4.disableEdit);
} }
function OfferingDetailComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Cannot access this Insight...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
class OfferingDetailComponent {
    constructor(offeringService, tagService, toastService, imageService, statisticService, router, route) {
        this.offeringService = offeringService;
        this.tagService = tagService;
        this.toastService = toastService;
        this.imageService = imageService;
        this.statisticService = statisticService;
        this.router = router;
        this.route = route;
        this.offering = {};
        this.tags = {};
        this.selectedTags = [];
        this.statisticsData = [];
        this.chartData = [];
        this.chartLabels = [];
        this.splitImprovementString = [];
        this.dark = _environments_theme__WEBPACK_IMPORTED_MODULE_0__.DARK;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl();
        this.disableEdit = true;
        this.jsonData = {
            "id": "1c3bfab9-2082-47b3-8259-3925f1f8351b",
            "name": "TIA Avoid Crashes Portal",
            "description": "Crashes reported from different customers of TIA portal across the globe. These crash reports are the most important feedback for improving TIA portal quality and stability. These crashes are collected from various sources, analyzed, categorized and stored in a central repository. Then useful data are made from the whole data and presented in the form of daily, weekly and monthly reports.",
            "access_url": "https://tia-crashreports.siemens.net/tia-avoidcrash/home",
            "documentation_url": "https://asrdwiki.siemens.com/tiapdev/index.php?title=TIA_Error_Reporting",
            "tags": [],
            "is_recommended": false,
            "sas": "se=2023-11-15T11%3A13%3A20Z&sp=r&sv=2023-08-03&ss=b&srt=o&sig=AgnoBGv7syIO9siUWHilUphoAyGvr5siNRAq8S3mRqM%3D",
            "image_name": "",
            "tag_completeness_score": 0.0,
            "tag_improvement_string": "[Product] Add a tag for the product the insight is related to.\n[Role] Specify who the insight is for (Scrum Master, Developer, Architect, ProductOwner, Release Manager, Tester)\n[Value] Tag which value cluster [Link] the insight improves.\n[Phase] Specify which phase of the software life cycle the insight is for.\n[CreatorTeam] Assign the insight to one or more teams who created it for more transparency.",
            "recommendations": []
        };
        this.chartOptions = {
            borderColor: 'rgba(0, 255, 185, 1)',
            backgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointRadius: 0,
            tension: 0.1,
            fill: true,
            hoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointHitRadius: 10,
            pointHoverBackgroundColor: 'rgba(0, 255, 185, 0.5)',
            pointHoverBorderColor: 'rgba(0, 255, 185, 1)',
            pointHoverBorderWidth: 0,
            pointHoverRadius: 10,
            tooltip: {
                backgroundColor: 'rgba(0, 255, 185, 0.5)',
            },
            scaling: {
                y: {
                    suggestedMin: 0,
                }
            }
        };
    }
    createChartData(data) {
        var newData = data.map((e) => {
            return e.user_count;
        });
        return newData;
    }
    ;
    createChartLabels(data) {
        var newData = data.map((e) => {
            let dateTime = new Date(e.time);
            return dateTime.getFullYear() + '/' + (dateTime.getMonth() + 1);
        });
        return newData;
    }
    ;
    createChart() {
        this.chartData = [
            {
                axis: 'x',
                data: this.createChartData(this.statisticsData.data),
                label: 'Unique Monthly Users'
            }
        ];
        this.chartLabels = this.createChartLabels(this.statisticsData.data);
    }
    ngOnInit() {
        this.getOffering(this.route.snapshot.params.id);
        this.getTags();
        this.serviceId = this.route.snapshot.params.id;
        this.portfolioName = this.route.snapshot.params.name;
    }
    onOpenStatistics() {
        this.getStatistic(this.route.snapshot.params.id);
    }
    onFileChange(event) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        const placeholder = document.getElementById('uploadedImage');
        reader.onload = (_event) => {
            placeholder.src = reader.result;
            this.imageService.postImage(event.target.files[0], this.offering.id, 'service')
                .subscribe(response => {
                this.showSuccessToast('Uploaded Preview Image!');
            }, error => {
                this.showErrorToast('Could not upload Preview Image!');
                console.log(error);
            });
        };
    }
    getStatistic(id) {
        this.statisticService.get(id)
            .subscribe(data => {
            console.log(data);
            this.statisticsData = data;
            this.createChart();
        }, error => {
            console.log(error);
        });
    }
    getTags() {
        this.tagService.getTags()
            .subscribe(data => {
            this.tags = data;
        }, error => {
            console.log(error);
        });
    }
    getOffering(id) {
        // this.offeringService.get(id)
        //   .subscribe(
        //     data => {
        //       this.offering = data;
        //       this.splitImprovementString = this.offering.tag_improvement_string.split('\n');
        //     },
        //     error => {
        //       console.log(error);
        //     });
        this.offering = this.jsonData;
        this.splitImprovementString = this.offering.tag_improvement_string.split('\n');
    }
    updateOffering() {
        this.offeringService.update(this.offering.id, this.offering)
            .subscribe(response => {
            this.showSuccessToast('Updated Insight');
            this.disableEdit = true;
        }, error => {
            Object.keys(error.error).forEach(key => {
                let value = error.error[key];
                this.showErrorToast(key + ':' + value);
            });
        });
    }
    deleteOffering() {
        this.offeringService.delete(this.offering.id)
            .subscribe(response => {
            this.router.navigate(['/insights']);
        }, error => {
            this.showErrorToast(error.message);
            console.log(error);
        });
    }
    toggleEditOffering() {
        this.disableEdit = !this.disableEdit;
    }
    showSuccessToast(message) {
        this.toastService.showToast({
            content: message,
            type: _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastTypes.SUCCESS,
            timeout: 3000,
        });
    }
    showErrorToast(message) {
        this.toastService.showToast({
            content: message,
            type: _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastTypes.DANGER,
            timeout: 3000,
        });
    }
}
OfferingDetailComponent.ɵfac = function OfferingDetailComponent_Factory(t) { return new (t || OfferingDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Services_offering_service__WEBPACK_IMPORTED_MODULE_2__.OfferingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Services_tag_service__WEBPACK_IMPORTED_MODULE_3__.TagService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Services_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_Services_statistic_service__WEBPACK_IMPORTED_MODULE_5__.StatisticService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute)); };
OfferingDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: OfferingDetailComponent, selectors: [["app-offering-detail"]], decls: 32, vars: 14, consts: [[1, "container"], [1, "row"], [1, "col-sm"], ["id", "uploadedImage", 3, "src"], [1, "col", "col-md-12"], ["heading", "Statistics"], [2, "margin-bottom", "25px", "margin-left", "25px"], [3, "serviceId"], ["routerLink", "../../insights"], [1, "btn", "btn-outline-primary"], [1, "siemens-arrow-left"], ["heading", "Edit"], [2, "margin-bottom", "50px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "edit-form", 4, "ngIf"], [1, "badge", "bg-success"], [1, "badge", "bg-warning"], [1, "badge", "bg-danger"], [1, "edit-form"], [2, "flex-direction", "column"], ["type", "submit", 1, "btn", "btn-outline-primary", 2, "align-self", "flex-start", 3, "click"], [1, "btn", "btn-outline-danger", 2, "align-self", "flex-end", 3, "click"], [1, "siemens-trash"], ["enctype", "application/json"], ["label", "Name"], ["type", "text", "id", "name", "required", "", "name", "name", "siFormControl", "", 3, "ngModel", "disabled", "ngModelChange"], ["label", "Description"], ["id", "description", "required", "", "name", "description", "rows", "7", "siFormControl", "", 3, "ngModel", "disabled", "ngModelChange"], ["label", "Access URL"], ["type", "text", "id", "access_url", "required", "", "name", "access_url", "siFormControl", "", 3, "ngModel", "disabled", "ngModelChange"], ["label", "Documentation URL"], ["type", "text", "id", "documentation_url", "required", "", "name", "documentation_url", "siFormControl", "", 3, "ngModel", "disabled", "ngModelChange"], [1, "form-check"], ["type", "checkbox", "value", "", "name", "is_recommended", "id", "is_recommended", 1, "form-check-input", 3, "ngModel", "disabled", "ngModelChange"], ["for", "is_recommended", 1, "form-check-label"], ["name", "tags", 3, "ngModel", "onlyFromAutocomplete", "disable", "displayBy", "identifyBy", "theme", "ngModelChange"], [3, "autocompleteItems", "dynamicUpdate", "displayBy", "identifyBy"], ["style", "color: black;"], ["type", "file", "id", "image", "accept", "image/png, image/jpeg", "name", "image", 3, "disabled", "change"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled", "click"]], template: function OfferingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Usage Statistics : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "app-chart-layout", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Data Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, OfferingDetailComponent_h5_25_Template, 5, 4, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, OfferingDetailComponent_h5_26_Template, 5, 4, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, OfferingDetailComponent_h5_27_Template, 5, 4, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, OfferingDetailComponent_li_29_Template, 2, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, OfferingDetailComponent_div_30_Template, 30, 22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, OfferingDetailComponent_div_31_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("dark", ctx.dark)("light", !ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.portfolioName, " Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("src", "https://dactelemetrystorageaccnt.blob.core.windows.net/datadiscovery-media/", ctx.offering.image_name, "?", ctx.offering.sas, "", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("serviceId", ctx.serviceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.offering.tag_completeness_score > 0.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.offering.tag_completeness_score > 0.5 && ctx.offering.tag_completeness_score < 0.9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.offering.tag_completeness_score < 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.splitImprovementString);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.offering.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.offering.id);
    } }, directives: [ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabsetComponent, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__.TabDirective, _charts_chart_layout_chart_layout_component__WEBPACK_IMPORTED_MODULE_7__.ChartLayoutComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_8__.SiFormGroupComponent, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_8__.SiFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, ngx_chips__WEBPACK_IMPORTED_MODULE_14__.TagInputComponent, ngx_chips__WEBPACK_IMPORTED_MODULE_14__.TagInputDropdown, _tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_9__.TagManagementComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe], styles: ["#uploadedImage[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmVyaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0oiLCJmaWxlIjoib2ZmZXJpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VwbG9hZGVkSW1hZ2V7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 7211:
/*!*************************************************************!*\
  !*** ./src/app/Components/offerings/offerings.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferingsComponent": () => (/* binding */ OfferingsComponent)
/* harmony export */ });
/* harmony import */ var _environments_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/theme */ 3645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_offering_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/offering.service */ 5347);
/* harmony import */ var _Services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/event.service */ 3919);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @simpl/siemens-brand-ng/form-group */ 2882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3403);









function OfferingsComponent_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OfferingsComponent_div_18_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
function OfferingsComponent_div_18_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OfferingsComponent_div_18_span_8_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const tag_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r9.clickTagHandler(tag_r8.type, tag_r8.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("tooltip", tag_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", tag_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", tag_r8.type)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c0, ctx_r5.getBackgroundColor(tag_r8.type), ctx_r5.getColor(tag_r8.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tag_r8.name, "");
} }
function OfferingsComponent_div_18_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OfferingsComponent_div_18_div_12_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const offering_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.emitEvent("Access", offering_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OfferingsComponent_div_18_div_12_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const offering_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.emitEvent("DocumentationAccess", offering_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offering_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", offering_r2.access_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", offering_r2.documentation_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("routerLink", "./", offering_r2.id, "/", offering_r2.name, "");
} }
function OfferingsComponent_div_18_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OfferingsComponent_div_18_div_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const offering_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.emitEvent("DocumentationAccess", offering_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offering_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](offering_r2.access_url);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", offering_r2.documentation_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("routerLink", "./", offering_r2.id, "/", offering_r2.name, "");
} }
function OfferingsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, OfferingsComponent_div_18_span_2_Template, 3, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, OfferingsComponent_div_18_span_3_Template, 3, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, OfferingsComponent_div_18_span_8_Template, 2, 8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, OfferingsComponent_div_18_div_12_Template, 10, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, OfferingsComponent_div_18_div_13_Template, 9, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offering_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", offering_r2.recommendations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", offering_r2.is_recommended);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](offering_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "https://dactelemetrystorageaccnt.blob.core.windows.net/datadiscovery-media/", offering_r2.image_name, "?", offering_r2.sas, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", offering_r2.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](offering_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", offering_r2.access_url.startsWith("http") || offering_r2.access_url.startsWith("mailto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(offering_r2.access_url.startsWith("http") || offering_r2.access_url.startsWith("mailto")));
} }
function OfferingsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Register a new Insight");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class OfferingsComponent {
    constructor(offeringService, eventService, formBuilder, router, route) {
        this.offeringService = offeringService;
        this.eventService = eventService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.offerings = [];
        this.dark = _environments_theme__WEBPACK_IMPORTED_MODULE_0__.DARK;
        this.userGivenName = '';
        this.userFamilyName = '';
        this.userIsStaff = false;
        this.searchValue = ''; //this.route.snapshot.queryParams.search;
        this.trackByIndex = (index) => index;
        this.route.queryParams.subscribe(params => {
            this.searchValue = this.route.snapshot.queryParamMap.get('search');
            this.getOfferings();
        });
    }
    ngOnInit() {
        this.searchValue = this.route.snapshot.queryParams.search;
        this.userGivenName = window["userGivenName"];
        this.userFamilyName = window["userFamilyName"];
        this.userIsStaff = window["userIsStaff"] == 'True' ? true : false;
        this.form = this.formBuilder.group({
            search: [null],
        });
    }
    clickTagHandler(type, name) {
        this.router.navigate([], { queryParams: { search: type + '>' + name } });
    }
    emitEvent(type, target) {
        this.eventService.create({ 'type': type, 'target': target }).subscribe(response => {
        }, error => {
            console.log(error);
        });
    }
    getOfferings() {
        if (this.searchValue == '' || this.searchValue == undefined) {
            this.offeringService.getOfferings()
                .subscribe(offerings => this.offerings = offerings);
        }
        else {
            this.offeringService.searchOfferings(this.searchValue)
                .subscribe(offerings => this.offerings = offerings);
        }
    }
    refreshSearch() {
        this.router.navigate([], { queryParams: { search: this.searchValue } });
    }
    getBackgroundColor(type) {
        let colorMap = {
            'Department': '#FE8389',
            'InformationType': '#0087BE',
            'Technology': '#00557C',
            'CreatorTeam': '#00e6dc',
            'Keyword': '#00FFB9',
            'Phase': '#AA32BE',
            'Product': '#500078',
            'Role': '#FF9000',
            'ServiceType': '#EC6602',
            'Value': '#FFD732'
        };
        return colorMap[type];
    }
    getColor(type) {
        let colorMap = {
            'Department': '#000000',
            'InformationType': '#000000',
            'Technology': '#FFFFFF',
            'CreatorTeam': '#000000',
            'Keyword': '#000000',
            'Phase': '#000000',
            'Product': '#FFFFFF',
            'Role': '#000000',
            'ServiceType': '#000000',
            'Value': '#000000'
        };
        return colorMap[type];
    }
}
OfferingsComponent.ɵfac = function OfferingsComponent_Factory(t) { return new (t || OfferingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_offering_service__WEBPACK_IMPORTED_MODULE_1__.OfferingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
OfferingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OfferingsComponent, selectors: [["app-offerings"]], decls: 20, vars: 8, consts: [[1, "container"], [1, "row"], [1, "col", "col-md-12"], [3, "formGroup"], [1, "row", "gy-6"], [1, "col-12"], ["label", "Search"], ["id", "search", "formControlName", "search", "siFormControl", "", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "input-group-append"], ["type", "button", "aria-label", "Search", 1, "input-group-text", 3, "click"], [1, "siemens-search"], [1, "container-xxl"], [1, "col"], [1, "card-deck", "offerings"], ["class", "card", 4, "ngFor", "ngForOf"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-body"], ["class", "float-right m-2", 4, "ngIf"], [1, "card-title"], ["onerror", "this.src='http://127.0.0.1:8000/static/img/MissingImage.png';", 1, "card-img-top", 3, "src"], [1, "card-header"], ["class", "badge badge-primary badge-pill", "data-toggle", "tooltip", "data-placement", "top", 3, "ngClass", "ngStyle", "tooltip", "title", "click", 4, "ngFor", "ngForOf"], [1, "card-text", 2, "white-space", "pre-wrap"], [1, "card-footer", "text-muted", "text-center"], [4, "ngIf"], [1, "float-right", "m-2"], [1, "btn", "btn-warning", "btn-xs", 2, "margin-top", "-30px", "width", "30px", "height", "50px", "padding", "0"], [1, "siemens-favorite"], [1, "siemens-language"], ["data-toggle", "tooltip", "data-placement", "top", 1, "badge", "badge-primary", "badge-pill", 3, "ngClass", "ngStyle", "tooltip", "title", "click"], ["target", "_blank", 3, "href"], [1, "btn", "btn-primary", 3, "click"], [1, "siemens-link"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "siemens-document"], [3, "routerLink"], [1, "btn", "btn-outline-primary"], [1, "siemens-information"], ["routerLink", "../insights/create"], [1, "siemens-plus"]], template: function OfferingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Insights");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "si-form-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function OfferingsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.searchValue = $event; })("keydown.enter", function OfferingsComponent_Template_input_keydown_enter_10_listener() { return ctx.refreshSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OfferingsComponent_Template_button_click_12_listener() { return ctx.refreshSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, OfferingsComponent_div_18_Template, 14, 9, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, OfferingsComponent_div_19_Template, 8, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("dark", ctx.dark)("light", !ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.offerings);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userIsStaff);


/***/ }),

/***/ 6355:
/*!***********************************************************************!*\
  !*** ./src/app/Components/product-create/product-create.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCreateComponent": () => (/* binding */ ProductCreateComponent)
/* harmony export */ });
/* harmony import */ var _environments_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/theme */ 3645);
/* harmony import */ var _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simpl/siemens-brand-ng/toast */ 2698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/product.service */ 6076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @simpl/siemens-brand-ng/form-group */ 2882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tag-management/tag-management.component */ 5759);










function ProductCreateComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "si-form-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductCreateComponent_div_7_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.product.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "si-form-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductCreateComponent_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.product.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-tag-management");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductCreateComponent_div_7_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.saveProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.product.description);
} }
function ProductCreateComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Product was submitted successfully!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductCreateComponent_div_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.newProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ProductCreateComponent {
    constructor(productService, toastService) {
        this.productService = productService;
        this.toastService = toastService;
        this.dark = _environments_theme__WEBPACK_IMPORTED_MODULE_0__.DARK;
        this.product = {};
        this.submitted = false;
    }
    ngOnInit() {
    }
    saveProduct() {
        const data = {
            name: this.product.name,
            description: this.product.description,
        };
        this.productService.create(data)
            .subscribe(response => {
            console.log(response);
            this.submitted = true;
        }, error => {
            Object.keys(error.error).forEach(key => {
                let value = error.error[key];
                this.showErrorToast(key + ':' + value);
            });
        });
    }
    newProduct() {
        this.submitted = false;
        this.product = {
            id: '',
            description: '',
            name: '',
            image_name: '',
            sas: '',
        };
    }
    showErrorToast(message) {
        this.toastService.showToast({
            content: message,
            type: _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastTypes.DANGER,
            timeout: 3000,
        });
    }
}
ProductCreateComponent.ɵfac = function ProductCreateComponent_Factory(t) { return new (t || ProductCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastService)); };
ProductCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductCreateComponent, selectors: [["app-product-create"]], decls: 9, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col", "col-md-12"], [1, "submit-form"], [4, "ngIf"], ["label", "Name"], ["type", "text", "id", "name", "required", "", "name", "name", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["label", "Description"], ["type", "text", "id", "description", "required", "", "name", "description", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["routerLink", "../../products"], [1, "btn", "btn-outline-primary"], [1, "siemens-arrow-left"], [1, "btn", "btn-outline-primary", 3, "click"]], template: function ProductCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Register a new Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProductCreateComponent_div_7_Template, 11, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProductCreateComponent_div_8_Template, 8, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("dark", ctx.dark)("light", !ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_3__.SiFormGroupComponent, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_3__.SiFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_4__.TagManagementComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3461:
/*!***********************************************************************!*\
  !*** ./src/app/Components/product-detail/product-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailComponent": () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _environments_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/theme */ 3645);
/* harmony import */ var _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simpl/siemens-brand-ng/toast */ 2698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/image.service */ 5629);
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/product.service */ 6076);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @simpl/siemens-brand-ng/form-group */ 2882);










function ProductDetailComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "si-form-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_div_8_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.product.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "si-form-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_div_8_Template_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.product.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ProductDetailComponent_div_8_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductDetailComponent_div_8_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.deleteProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProductDetailComponent_div_8_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.updateProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.product.description);
} }
function ProductDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cannot access this Product...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ProductDetailComponent {
    constructor(imageService, productService, router, route, toastService) {
        this.imageService = imageService;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.toastService = toastService;
        this.product = {};
        this.tags = {};
        this.selectedTags = [];
        this.dark = _environments_theme__WEBPACK_IMPORTED_MODULE_0__.DARK;
    }
    ngOnInit() {
        this.getProduct(this.route.snapshot.params.id);
    }
    getProduct(id) {
        this.productService.get(id)
            .subscribe(data => {
            this.product = data;
        }, error => {
            console.log(error);
        });
    }
    updateProduct() {
        this.productService.update(this.product.id, this.product)
            .subscribe(response => {
            console.log(response);
        }, error => {
            Object.keys(error.error).forEach(key => {
                let value = error.error[key];
                this.showErrorToast(key + ':' + value);
            });
        });
    }
    deleteProduct() {
        this.productService.delete(this.product.id)
            .subscribe(response => {
            console.log(response);
            this.router.navigate(['/products']);
        }, error => {
            console.log(error);
        });
    }
    onFileChange(event) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        const placeholder = document.getElementById('uploadedImage');
        reader.onload = (_event) => {
            placeholder.src = reader.result;
            this.imageService.postImage(event.target.files[0], this.product.id, 'product')
                .subscribe(response => {
                this.showSuccessToast('Uploaded Preview Image!');
            }, error => {
                this.showErrorToast('Could not upload Preview Image!');
                console.log(error);
            });
        };
    }
    showSuccessToast(message) {
        this.toastService.showToast({
            content: message,
            type: _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastTypes.SUCCESS,
            timeout: 3000,
        });
    }
    showErrorToast(message) {
        this.toastService.showToast({
            content: message,
            type: _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastTypes.DANGER,
            timeout: 3000,
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_image_service__WEBPACK_IMPORTED_MODULE_2__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_1__.SiToastService)); };
ProductDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-product-detail"]], decls: 10, vars: 8, consts: [[1, "container"], [1, "row"], [1, "col", "col-md-12"], ["id", "uploadedImage", 3, "src"], ["class", "edit-form", 4, "ngIf"], [4, "ngIf"], [1, "edit-form"], ["enctype", "application/json"], ["label", "Name"], ["type", "text", "id", "name", "required", "", "name", "name", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["label", "Description"], ["id", "description", "required", "", "name", "description", "rows", "7", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["type", "file", "id", "image", "accept", "image/png, image/jpeg", "name", "image", 3, "change"], ["routerLink", "../../products"], [1, "btn", "btn-outline-primary"], [1, "siemens-arrow-left"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "siemens-trash"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "click"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Manage Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProductDetailComponent_div_8_Template, 15, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProductDetailComponent_div_9_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("dark", ctx.dark)("light", !ctx.dark);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "https://dactelemetrystorageaccnt.blob.core.windows.net/datadiscovery-media/", ctx.product.image_name, "?", ctx.product.sas, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.product.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__.SiFormGroupComponent, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__.SiFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], styles: ["#uploadedImage[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1cGxvYWRlZEltYWdle1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 918:
/*!***********************************************************!*\
  !*** ./src/app/Components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/product.service */ 6076);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);




function ProductsComponent_ng_container_12_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_container_12_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const product_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.searchServicesForProduct(product_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProductsComponent_ng_container_12_button_15_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "https://dactelemetrystorageaccnt.blob.core.windows.net/datadiscovery-media/", product_r2.image_name, "?", product_r2.sas, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", product_r2.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "./", product_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userIsStaff);
} }
function ProductsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Register a new Portfolio Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ProductsComponent {
    constructor(router, productService) {
        this.router = router;
        this.productService = productService;
        this.products = [];
        this.userIsStaff = false;
        this.userGivenName = '';
        this.userFamilyName = '';
    }
    ngOnInit() {
        this.getProducts();
        this.userGivenName = window["userGivenName"];
        this.userFamilyName = window["userFamilyName"];
        this.userIsStaff = window["userIsStaff"] == 'True' ? true : false;
        console.log(this.userIsStaff, this.userGivenName, this.userFamilyName);
    }
    searchServicesForProduct(searchString) {
        this.router.navigate(['../insights'], { queryParams: { search: 'Product>' + searchString } });
    }
    getProducts() {
        this.router.navigate([]);
        this.productService.getProducts()
            .subscribe(products => this.products = products);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 14, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col", "col-md-12"], [1, "card-columns"], [4, "ngFor", "ngForOf"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], ["id", "uploadedImage", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text", 2, "white-space", "pre-wrap"], [1, "card-footer", "text-muted", "text-center"], [3, "click"], [1, "btn", "btn-primary"], [1, "siemens-explore"], [3, "routerLink"], ["class", "btn btn-outline-primary", 4, "ngIf"], [1, "btn", "btn-outline-primary"], [1, "siemens-settings"], ["routerLink", "../products/create"], [1, "siemens-plus"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " The Value Domain Data Analytics and Consulting (DAC) provides a number of products to stakeholders along the software value creation process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductsComponent_ng_container_12_Template, 16, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductsComponent_div_13_Template, 8, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userIsStaff);


/***/ }),

/***/ 5759:
/*!***********************************************************************!*\
  !*** ./src/app/Components/tag-management/tag-management.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagManagementComponent": () => (/* binding */ TagManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _Services_tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/tag.service */ 4519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @simpl/siemens-brand-ng/table */ 7890);
/* harmony import */ var _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @simpl/siemens-brand-ng/form-group */ 2882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _simpl_siemens_brand_ng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @simpl/siemens-brand-ng/dropdown */ 8092);








function TagManagementComponent_ng_template_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "si-form-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TagManagementComponent_ng_template_2_div_6_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.selectedTag.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "si-form-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "si-dropdown", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TagManagementComponent_ng_template_2_div_6_Template_si_dropdown_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.selectedTag.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagManagementComponent_ng_template_2_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.createTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.selectedTag.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.selectedTag.type)("dropdownOptions", ctx_r2.tagTypeOptions);
} }
function TagManagementComponent_ng_template_2_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagManagementComponent_ng_template_2_div_13_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const row_r9 = restoredCtx.row; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.toggleDetails(row_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("siemens-arrow-down", !ctx_r3.showDetails.has(row_r9.id))("siemens-arrow-up", ctx_r3.showDetails.has(row_r9.id));
} }
function TagManagementComponent_ng_template_2_pre_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "si-form-group", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TagManagementComponent_ng_template_2_pre_14_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.selectedTag.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "si-form-group", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "si-dropdown", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TagManagementComponent_ng_template_2_pre_14_Template_si_dropdown_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.selectedTag.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagManagementComponent_ng_template_2_pre_14_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const row_r12 = restoredCtx.row; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r16.updateTag(row_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagManagementComponent_ng_template_2_pre_14_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const row_r12 = restoredCtx.row; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.deleteTag(row_r12.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.selectedTag.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.selectedTag.type)("dropdownOptions", ctx_r4.tagTypeOptions);
} }
const _c0 = function () { return []; };
function TagManagementComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Manage Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagManagementComponent_ng_template_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.toggleCreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " New Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TagManagementComponent_ng_template_2_div_6_Template, 9, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "si-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "siTableColumn", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "siTableColumn", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "siTableColumn", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "siTableColumn", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TagManagementComponent_ng_template_2_div_13_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TagManagementComponent_ng_template_2_pre_14_Template, 25, 3, "pre", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagManagementComponent_ng_template_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showCreate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rows", ctx_r1.tags)("loading", ctx_r1.tags === _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c0))("bordered", false)("condensed", true)("rowsPerPage", 10)("detailSectionExpandedProvider", ctx_r1.showDetailsProvider);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enableClearFilter", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disableSort", true)("disableFilter", true)("widthFactor", 0)("connectWithDetail", true);
} }
// import { CollapseModule } from 'ngx-bootstrap/collapse';
class TagManagementComponent {
    constructor(modalService, tagService) {
        this.modalService = modalService;
        this.tagService = tagService;
        this.tags = [];
        this.tagTypeOptions = [];
        this.showDetails = new Set();
        this.showCreate = false;
        this.showDetailsProvider = (row, key) => this.showDetails.has(row.id);
    }
    ngOnInit() {
        this.getTags();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    }
    getTags() {
        this.tagService.getTags()
            .subscribe(tags => this.tags = tags);
    }
    deleteTag(id) {
        this.showDetails.delete(id);
        this.tagService.delete(id).subscribe(response => {
            this.showDetails.delete(id);
            this.getTags();
        }, error => {
            console.log(error);
        });
    }
    updateTag(id) {
        this.tagService.update(id, this.selectedTag)
            .subscribe(response => {
            this.showDetails.delete(id);
            this.getTags();
        }, error => {
            console.log(error);
        });
    }
    createTag() {
        this.tagService.create(this.selectedTag)
            .subscribe(response => {
            this.showCreate = false;
            this.getTags();
        }, error => {
            console.log(error);
        });
    }
    getTagByID(id) {
        return this.tags.find((tag) => {
            return tag.id === id;
        });
    }
    toggleCreate() {
        if (this.showCreate) {
            this.showCreate = false;
        }
        else {
            this.tagTypeOptions = [...new Set(this.tags.map(tag => tag.type))];
            this.showCreate = true;
            this.showDetails.clear();
            this.selectedTag = { 'id': '', 'type': '', 'name': '' };
        }
    }
    toggleDetails(id) {
        if (!this.showDetails.delete(id)) {
            this.tagTypeOptions = [...new Set(this.tags.map(tag => tag.type))];
            this.showDetails.clear();
            this.showCreate = false;
            this.selectedTag = this.getTagByID(id);
            this.showDetails.add(id);
            console.log(this.showDetails);
        }
    }
}
TagManagementComponent.ɵfac = function TagManagementComponent_Factory(t) { return new (t || TagManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_tag_service__WEBPACK_IMPORTED_MODULE_1__.TagService)); };
TagManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TagManagementComponent, selectors: [["app-tag-management"]], decls: 4, vars: 0, consts: [["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["template", ""], [1, "modal-header"], [1, "modal-title"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "siemens-options"], [4, "ngIf"], [1, "modal-body"], ["id", "table-basic", 3, "rows", "loading", "bordered", "condensed", "rowsPerPage", "detailSectionExpandedProvider"], ["key", "id", "name", "ID"], ["key", "name", "name", "Name", 3, "enableClearFilter"], ["key", "type", "name", "Type"], [3, "disableSort", "disableFilter", "widthFactor", "connectWithDetail"], ["style", "display: flex", 4, "siTableCell"], [4, "siTableDetailSection"], ["no-data", ""], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "siemens-close"], [2, "padding-left", "32px", "padding-right", "32px"], ["label", "Name"], ["type", "text", "id", "name", "required", "", "name", "name", "siFormControl", "", 3, "ngModel", "ngModelChange"], ["label", "Type"], ["inputId", "type", "required", "", 3, "ngModel", "dropdownOptions", "ngModelChange"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "siemens-success"], [2, "display", "flex"], [1, "border-0", "btn-info", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "siemens-trash"]], template: function TagManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagManagementComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Manage Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TagManagementComponent_ng_template_2_Template, 21, 13, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_2__.SiTableComponent, _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_2__.SiTableColumnDirective, _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_2__.SiTableCellDirective, _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_2__.SiTableDetailSectionDirective, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_3__.SiFormGroupComponent, _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_3__.SiFormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _simpl_siemens_brand_ng_dropdown__WEBPACK_IMPORTED_MODULE_4__.SiDropdownComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWctbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2859:
/*!*************************************************************!*\
  !*** ./src/app/Components/user-menu/user-menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _Services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/role.service */ 1443);
/* harmony import */ var _Services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/team.service */ 912);




function UserMenuComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserMenuComponent_ng_template_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Hello, ", ctx_r1.userGivenName, "!");
} }
class UserMenuComponent {
    constructor(modalService, roleService, teamService) {
        this.modalService = modalService;
        this.roleService = roleService;
        this.teamService = teamService;
        this.userGivenName = '';
        this.userFamilyName = '';
        this.userIsStaff = '';
        this.roles = [];
        this.teams = [];
        this.team_names = [];
        this.createdRole = {
            'team': '',
            'type': '',
            'user': ''
        };
        this.createdTeam = {
            'name': ''
        };
        this.roleTypeOptions = [
            'DEVELOPER',
            'SCRUM_MASTER',
            'PRODUCT_OWNER',
            'TESTER',
            'ARCHITECT'
        ];
        this.showDetails = new Set();
        this.showCreateRole = false;
        this.showCreateTeam = false;
        this.showDetailsProvider = (row, key) => this.showDetails.has(row.id);
    }
    ngOnInit() {
        this.userGivenName = window["userGivenName"];
        this.userFamilyName = window["userFamilyName"];
        this.userIsStaff = window["userIsStaff"];
        this.getRoles();
        this.getTeams();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
        this.team_names = this.teams.map(obj => {
            return obj.name;
        });
    }
    //// Role Management
    // Role API Handlers
    getRoles() {
        this.roleService.getRoles()
            .subscribe(roles => this.roles = roles);
    }
    deleteRole(id) {
        this.showDetails.delete(id);
        this.roleService.delete(id).subscribe(response => {
            this.showDetails.delete(id);
            this.getRoles();
        }, error => {
            console.log(error);
        });
    }
    createRole() {
        var role = { 'type': this.createdRole.type, 'team': this.createdRole.team, 'user': 'Test' };
        this.roleService.create(role)
            .subscribe(response => {
            this.showCreateRole = false;
            this.getRoles();
        }, error => {
            console.log(error);
        });
    }
    updateRole(id) {
        this.roleService.update(id, this.selectedRole)
            .subscribe(response => {
            this.showDetails.delete(id);
            this.getRoles();
        }, error => {
            console.log(error);
        });
    }
    //// Team Management
    getTeams() {
        this.teamService.getTeams()
            .subscribe(teams => this.teams = teams);
    }
    getRoleByID(id) {
        return this.roles.find((role) => {
            return role.id === id;
        });
    }
    toggleCreateRole() {
        if (this.showCreateRole) {
            this.showCreateRole = false;
        }
        else {
            this.showCreateRole = true;
            this.showCreateTeam = false;
            this.showDetails.clear();
            this.selectedRole = { 'id': '', 'type': '', 'team': '' };
        }
    }
    createTeam() {
        this.teamService.create(this.createdTeam)
            .subscribe(response => {
            this.showCreateTeam = false;
            this.getTeams();
        }, error => {
            console.log(error);
        });
    }
    toggleCreateTeam() {
        if (this.showCreateTeam) {
            this.showCreateTeam = false;
        }
        else {
            this.showCreateTeam = true;
            this.showCreateRole = false;
            // this.showDetails.clear();
            this.createdTeam = { 'name': '' };
        }
    }
    toggleDetails(id) {
        if (!this.showDetails.delete(id)) {
            this.showDetails.clear();
            this.showCreateRole = false;
            this.selectedRole = this.getRoleByID(id);
            this.showDetails.add(id);
            this.team_names = this.teams.map(obj => {
                return obj.name;
            });
        }
    }
}
UserMenuComponent.ɵfac = function UserMenuComponent_Factory(t) { return new (t || UserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_0__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_team_service__WEBPACK_IMPORTED_MODULE_2__.TeamService)); };
UserMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserMenuComponent, selectors: [["app-user-menu"]], decls: 5, vars: 1, consts: [["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [2, "white-space", "nowrap"], ["template", ""], [1, "modal-header"], [1, "modal-title"], [1, "modal-footer"], ["href", "/oidc/logout/"], [1, "btn", "btn-primary"], [1, "btn", "btn-secondary", 3, "click"], [1, "siemens-close"]], template: function UserMenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserMenuComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); return ctx.openModal(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UserMenuComponent_ng_template_3_Template, 10, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Hello, ", ctx.userGivenName, "!");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9770:
/*!************************************************!*\
  !*** ./src/app/Services/auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class AuthGuardService {
  constructor(http) {
    this.http = http;
    this.userUrl = 'http://127.0.0.1:8000/api/siemensUsers/';
    this.localData = {
      given_name: 'Pooja',
      family_name: 'A',
      gid: 'Z004K8AC',
      org_code: 'ADV D IN DASS PLT TE4 DAC2',
      email: 'pooja.a@siemens.com'
    };
  }

  getMyIdAccessToken() {
    const serviceUrl = 'https://diagnosticreports.dainsights.public.siemens.com/.auth/me'; //environment
    //const serviceUrl:string = environment.DNS + '/.auth/me'; //environment

    return this.http.get(serviceUrl);
  }

  create(data) {
    return this.http.post(this.userUrl, data);
  }

  canActivate(route, state) {
    // return this.getMyIdAccessToken()
    //       .pipe(map(response=>{
    //         let token = response[0].id_token;
    //         sessionStorage.setItem('id_token',JSON.stringify(token))
    //         let decodedToken:IToken = jwt_decode(token)
    //         return decodedToken.sam_account_name
    //       }
    //     ),
    //     mergeMap(async zid=>{
    //       let userDetail = await this._authService.getRole(zid).toPromise();
    //       // .pipe(map(userDetail=>{
    //         user=userDetail   
    //         sessionStorage.setItem('userData',JSON.stringify(user))
    //        let object= {userRole:user.Role,roleToCheck:''}
    //        let condition = object['userRole']===object['roleToCheck']
    //        isValid = this.userData.checkForValidUserRole(condition,user)           
    //        if(isValid){
    //         return true;
    //        }         
    //       })
    //       )
    var user = this.create(this.localData);
    console.log('abc', user);
    return true;
  }

}

AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
  return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};

AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AuthGuardService,
  factory: AuthGuardService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4953:
/*!*******************************************!*\
  !*** ./src/app/Services/chart.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartService": () => (/* binding */ ChartService),
/* harmony export */   "COLORPOOL": () => (/* binding */ COLORPOOL)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class ChartService {
    constructor(http) {
        this.http = http;
        //private telemetryChartAPI = "https://telemeteryservices-dev.azurewebsites.net/api/DataReader/chartdata";
        this.telemetryChartAPI = "https://usagestats.dainsights.public.siemens.com/api/DataReader/chartdata";
    }
    postApiCall(body, serviceUrl) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json"
            }),
        };
        return this.http.post(serviceUrl, body, httpOptions);
    }
    getChartData(serviceId, startDate, endDate, windowSizeByWeek) {
        return this.http.get(this.telemetryChartAPI + "?serviceId=" + serviceId + "&sd=" + startDate + "&ed=" + endDate + "&week=" + windowSizeByWeek);
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ChartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
const COLORPOOL = [
    [255, 99, 132, 0.6],
    [54, 162, 235, 0.6],
    [255, 206, 86, 0.6],
    [75, 192, 192, 0.6],
    [151, 187, 205, 0.6],
    [247, 70, 74, 0.6],
    [174, 174, 29, 0.6],
    [253, 180, 92, 0.6],
    [189, 69, 37, 0.6],
    [77, 83, 96, 0.6],
    [14, 97, 219, 0.6],
    [118, 108, 91, 0.6],
    [49, 1, 87, 0.6],
    [226, 134, 66, 0.6],
    [16, 140, 198, 0.6],
    [13, 116, 119, 0.6],
    [246, 157, 2, 0.6],
    [50, 180, 40, 0.6],
    [212, 186, 22, 0.6],
    [125, 125, 63, 0.6],
    [148, 182, 161, 0.6],
    [21, 112, 22, 0.6],
    [91, 119, 151, 0.6],
    [299, 114, 191, 0.6],
    [127, 42, 98, 0.6]
];


/***/ }),

/***/ 3919:
/*!*******************************************!*\
  !*** ./src/app/Services/event.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class EventService {
    constructor(http) {
        this.http = http;
        this.eventUrl = '/api/events/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    create(data) {
        return this.http.post(this.eventUrl, data);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5629:
/*!*******************************************!*\
  !*** ./src/app/Services/image.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class ImageService {
    constructor(http) {
        this.http = http;
        this.imageUploadUrl = '/api/image/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    postImage(imageFile, offeringID, offeringType) {
        let formData = new FormData();
        formData.append('id', offeringID);
        formData.append('type', offeringType);
        formData.append('image', imageFile);
        return this.http.post(this.imageUploadUrl, formData);
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ImageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5347:
/*!**********************************************!*\
  !*** ./src/app/Services/offering.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferingService": () => (/* binding */ OfferingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class OfferingService {
    constructor(http) {
        this.http = http;
        this.offeringUrl = 'http://127.0.0.1:8000/api/services/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    getOfferings() {
        return this.http.get(this.offeringUrl);
    }
    searchOfferings(search) {
        return this.http.get(this.offeringUrl + '?search=' + search);
    }
    get(id) {
        return this.http.get(this.offeringUrl + id);
    }
    create(data) {
        return this.http.post(this.offeringUrl, data);
    }
    update(id, data) {
        return this.http.put(this.offeringUrl + id + '/', data);
    }
    delete(id) {
        return this.http.delete(this.offeringUrl + id + '/');
    }
}
OfferingService.ɵfac = function OfferingService_Factory(t) { return new (t || OfferingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
OfferingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OfferingService, factory: OfferingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6076:
/*!*********************************************!*\
  !*** ./src/app/Services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class ProductService {
    constructor(http) {
        this.http = http;
        this.productUrl = 'http://127.0.0.1:8000/api/products/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    getProducts() {
        return this.http.get(this.productUrl);
    }
    get(id) {
        return this.http.get(this.productUrl + id);
    }
    create(data) {
        return this.http.post(this.productUrl, data);
    }
    update(id, data) {
        return this.http.put(this.productUrl + id + '/', data);
    }
    delete(id) {
        return this.http.delete(this.productUrl + id + '/');
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1443:
/*!******************************************!*\
  !*** ./src/app/Services/role.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class RoleService {
    constructor(http) {
        this.http = http;
        this.roleUrl = 'http://127.0.0.1:8000/api/roles/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    getRoles() {
        return this.http.get(this.roleUrl);
    }
    update(id, data) {
        return this.http.put(this.roleUrl + id + '/', data);
    }
    create(data) {
        return this.http.post(this.roleUrl, data);
    }
    delete(id) {
        return this.http.delete(this.roleUrl + id + '/');
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3083:
/*!***********************************************!*\
  !*** ./src/app/Services/statistic.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticService": () => (/* binding */ StatisticService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class StatisticService {
    constructor(http) {
        this.http = http;
        this.statisticUrl = '/api/stats/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    get(id) {
        return this.http.get(this.statisticUrl + id);
    }
}
StatisticService.ɵfac = function StatisticService_Factory(t) { return new (t || StatisticService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
StatisticService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StatisticService, factory: StatisticService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4519:
/*!*****************************************!*\
  !*** ./src/app/Services/tag.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagService": () => (/* binding */ TagService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class TagService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.tagUrl = 'http://127.0.0.1:8000/api/tags/';
    }
    getTags() {
        return this.http.get(this.tagUrl);
    }
    update(id, data) {
        return this.http.put(this.tagUrl + id + '/', data);
    }
    create(data) {
        delete data.id;
        return this.http.post(this.tagUrl, data);
    }
    delete(id) {
        return this.http.delete(this.tagUrl + id + '/');
    }
}
TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
TagService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 912:
/*!******************************************!*\
  !*** ./src/app/Services/team.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamService": () => (/* binding */ TeamService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class TeamService {
    constructor(http) {
        this.http = http;
        this.teamUrl = 'http://127.0.0.1:8000/api/teams/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    getTeams() {
        return this.http.get(this.teamUrl);
    }
    update(id, data) {
        return this.http.put(this.teamUrl + id + '/', data);
    }
    create(data) {
        return this.http.post(this.teamUrl, data);
    }
    delete(id) {
        return this.http.delete(this.teamUrl + id + '/');
    }
}
TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
TeamService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _Components_offerings_offerings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/offerings/offerings.component */ 7211);
/* harmony import */ var _Components_offering_create_offering_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/offering-create/offering-create.component */ 5673);
/* harmony import */ var _Components_offering_detail_offering_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/offering-detail/offering-detail.component */ 8467);
/* harmony import */ var _Components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/products/products.component */ 918);
/* harmony import */ var _Components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/product-detail/product-detail.component */ 3461);
/* harmony import */ var _Components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/product-create/product-create.component */ 6355);
/* harmony import */ var _Components_tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/tag-management/tag-management.component */ 5759);
/* harmony import */ var _Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/auth-guard.service */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full', data: { title: 'Home' } },
    { path: 'products', component: _Components_products_products_component__WEBPACK_IMPORTED_MODULE_3__.ProductsComponent, data: { title: 'Products' }, canActivate: [_Services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__.AuthGuardService] },
    { path: 'products/create', component: _Components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_5__.ProductCreateComponent, data: { title: 'Products' } },
    { path: 'products/:id', component: _Components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__.ProductDetailComponent, data: { title: 'Products' } },
    { path: 'insights', component: _Components_offerings_offerings_component__WEBPACK_IMPORTED_MODULE_0__.OfferingsComponent, data: { title: 'Insights' } },
    { path: 'insights/create', component: _Components_offering_create_offering_create_component__WEBPACK_IMPORTED_MODULE_1__.OfferingCreateComponent, data: { title: 'Insights' } },
    { path: 'insights/:id/:name', component: _Components_offering_detail_offering_detail_component__WEBPACK_IMPORTED_MODULE_2__.OfferingDetailComponent, data: { title: 'Insights' } },
    { path: 'tags', component: _Components_tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_6__.TagManagementComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _simpl_siemens_brand_ng_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simpl/siemens-brand-ng/tools */ 2131);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/header/header.component */ 9573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _simpl_siemens_brand_ng_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @simpl/siemens-brand-ng/footer */ 9117);





class AppComponent {
    getRouteAnimation(outlet) {
        return (outlet.isActivated ? outlet.activatedRoute : null);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 1, consts: [[1, "d-flex", "flex-column", "min-vh-100"], [1, "flex-fill"], ["route", "outlet"], [1, "si-footer", "si-footer-legal-only"], [1, "container"], [1, "si-application-name"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "DI FA Data Discovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "si-copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "si-legal-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@siRouterFadeAnimation", ctx.getRouteAnimation(_r0));
    } }, directives: [_Components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _simpl_siemens_brand_ng_footer__WEBPACK_IMPORTED_MODULE_2__.SiCopyrightComponent, _simpl_siemens_brand_ng_footer__WEBPACK_IMPORTED_MODULE_2__.SiLegalLinksComponent], encapsulation: 2, data: { animation: [_simpl_siemens_brand_ng_tools__WEBPACK_IMPORTED_MODULE_0__.siRouterFadeAnimation] } });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/a11y */ 1606);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _simpl_siemens_brand_localize_with_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @simpl/siemens-brand-localize-with-angular */ 464);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 4461);
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/popover */ 4646);
/* harmony import */ var _simpl_siemens_brand_ng_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @simpl/siemens-brand-ng/footer */ 9117);
/* harmony import */ var _simpl_siemens_brand_ng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @simpl/siemens-brand-ng/breadcrumb */ 7114);
/* harmony import */ var _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @simpl/siemens-brand-ng/form-group */ 2882);
/* harmony import */ var _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @simpl/siemens-brand-ng/header */ 722);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/header/header.component */ 9573);
/* harmony import */ var _Components_offerings_offerings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/offerings/offerings.component */ 7211);
/* harmony import */ var _Components_offering_detail_offering_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/offering-detail/offering-detail.component */ 8467);
/* harmony import */ var _Components_offering_create_offering_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/offering-create/offering-create.component */ 5673);
/* harmony import */ var _Components_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/products/products.component */ 918);
/* harmony import */ var _Components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/product-detail/product-detail.component */ 3461);
/* harmony import */ var _Components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/product-create/product-create.component */ 6355);
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ 2511);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-select/ng-select */ 6868);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-chips */ 8375);
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/accordion */ 5444);
/* harmony import */ var _Components_tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/tag-management/tag-management.component */ 5759);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/modal */ 4183);
/* harmony import */ var _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @simpl/siemens-brand-ng/table */ 7890);
/* harmony import */ var _Components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/user-menu/user-menu.component */ 2859);
/* harmony import */ var _simpl_siemens_brand_ng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @simpl/siemens-brand-ng/dropdown */ 8092);
/* harmony import */ var _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @simpl/siemens-brand-ng/toast */ 2698);
/* harmony import */ var _Components_help_help_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/help/help.component */ 6649);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 7762);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ 3403);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng2-charts */ 4195);
/* harmony import */ var _Components_charts_charts_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/charts/charts.module */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2316);















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [{
            provide: _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__.SI_VALIDATION_ERROR_RESOLVER_MAP,
            useValue: { required: 'Value is required' }
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientXsrfModule.withOptions({
                cookieName: 'csrftoken',
                headerName: 'X-CSRFToken'
            }),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__.ModalModule.forRoot(),
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__.A11yModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__.AppRoutingModule,
            _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_5__.SiHeaderModule,
            _simpl_siemens_brand_ng_footer__WEBPACK_IMPORTED_MODULE_2__.SiFooterModule,
            _simpl_siemens_brand_ng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.SiBreadcrumbModule,
            _simpl_siemens_brand_ng_dropdown__WEBPACK_IMPORTED_MODULE_21__.SiDropdownModule,
            _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_22__.SiToastModule,
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverModule.forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__.BsDatepickerModule.forRoot(),
            _simpl_siemens_brand_localize_with_angular__WEBPACK_IMPORTED_MODULE_33__.SiLocalizationNgModule,
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_15__.TypeaheadModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
            _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__.SiFormGroupModule,
            _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_19__.SiTableModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            ngx_chips__WEBPACK_IMPORTED_MODULE_35__.TagInputModule,
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionModule.forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_25__.TooltipModule.forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_24__.TabsModule.forRoot(),
            ng2_charts__WEBPACK_IMPORTED_MODULE_36__.NgChartsModule,
            _Components_charts_charts_module__WEBPACK_IMPORTED_MODULE_26__.ChartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent,
        _Components_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent,
        _Components_offerings_offerings_component__WEBPACK_IMPORTED_MODULE_9__.OfferingsComponent,
        _Components_offering_detail_offering_detail_component__WEBPACK_IMPORTED_MODULE_10__.OfferingDetailComponent,
        _Components_offering_create_offering_create_component__WEBPACK_IMPORTED_MODULE_11__.OfferingCreateComponent,
        _Components_products_products_component__WEBPACK_IMPORTED_MODULE_12__.ProductsComponent,
        _Components_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__.ProductDetailComponent,
        _Components_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_14__.ProductCreateComponent,
        _Components_tag_management_tag_management_component__WEBPACK_IMPORTED_MODULE_17__.TagManagementComponent,
        _Components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__.UserMenuComponent,
        _Components_help_help_component__WEBPACK_IMPORTED_MODULE_23__.HelpComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientXsrfModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_18__.ModalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__.A11yModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__.AppRoutingModule,
        _simpl_siemens_brand_ng_header__WEBPACK_IMPORTED_MODULE_5__.SiHeaderModule,
        _simpl_siemens_brand_ng_footer__WEBPACK_IMPORTED_MODULE_2__.SiFooterModule,
        _simpl_siemens_brand_ng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__.SiBreadcrumbModule,
        _simpl_siemens_brand_ng_dropdown__WEBPACK_IMPORTED_MODULE_21__.SiDropdownModule,
        _simpl_siemens_brand_ng_toast__WEBPACK_IMPORTED_MODULE_22__.SiToastModule, ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_0__.BsDatepickerModule, _simpl_siemens_brand_localize_with_angular__WEBPACK_IMPORTED_MODULE_33__.SiLocalizationNgModule,
        ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_15__.TypeaheadModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _simpl_siemens_brand_ng_form_group__WEBPACK_IMPORTED_MODULE_4__.SiFormGroupModule,
        _simpl_siemens_brand_ng_table__WEBPACK_IMPORTED_MODULE_19__.SiTableModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_34__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        ngx_chips__WEBPACK_IMPORTED_MODULE_35__.TagInputModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_25__.TooltipModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_24__.TabsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_36__.NgChartsModule,
        _Components_charts_charts_module__WEBPACK_IMPORTED_MODULE_26__.ChartsModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    DNS: 'https://data-discovery.azurewebsites.net/'
};
// For easier debugging in development mode, you can import the following file
// to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
//
// This import should be commented out in production mode because it will have a negative impact
// on performance if an error is thrown.
//
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 3645:
/*!***********************************!*\
  !*** ./src/environments/theme.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DARK": () => (/* binding */ DARK)
/* harmony export */ });
const DARK = true;


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map