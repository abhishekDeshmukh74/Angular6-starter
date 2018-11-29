import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

import { PaginateComponent } from './paginate.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatSortModule } from '@angular/material';

const routes: Routes = [
	{
		path: '',
		component: PaginateComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		MatPaginatorModule,
		MatTableModule,
		MatSortModule
	],
	providers: [
	],
	declarations: [
		PaginateComponent,
		DataTableComponent
	]
})

export class PaginateModule { }
