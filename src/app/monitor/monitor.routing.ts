import { ModuleWithProviders } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { MonitorComponent } from './monitor.component';
import { MonitorListComponent } from './monitor-list.component';

const routes: Routes = [{
    path: '',
    component: MonitorComponent,
    // children: [
    //     { path: '', component: MonitorListComponent },
    // ]
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
