import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaginateComponent } from './paginate/paginate.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginateModule } from './paginate/paginate.module';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate.guard';

export const appRoutes: Routes = [
	{ path: '', component: LoginComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGuard] },
	{ path: 'paginate', loadChildren: './paginate/paginate.module#PaginateModule' },
	{ path: '**', component: NotFoundComponent },
];
