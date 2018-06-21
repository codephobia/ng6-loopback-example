import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesOutletComponent } from './components/profiles-outlet/profiles-outlet.component';

@NgModule({
    imports: [
        CommonModule,
        ProfilesRoutingModule
    ],
    declarations: [
        ProfilesListComponent,
        ProfileComponent,
        ProfilesOutletComponent,
    ]
})
export class ProfilesModule { }
