import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesOutletComponent } from './profiles-outlet/profiles-outlet.component';

@NgModule({
    imports: [
        CommonModule,
        ProfilesRoutingModule,
        SharedModule,
    ],
    declarations: [
        ProfilesListComponent,
        ProfileComponent,
        ProfilesOutletComponent,
    ]
})
export class ProfilesModule { }
