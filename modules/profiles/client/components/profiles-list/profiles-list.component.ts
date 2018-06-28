import { Component, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

import { User, UserApi as UserService, LoopBackFilter } from '@lbservices';
import { PaginationService } from '@shared/services/pagination/pagination.service';
import { profilesPerPage } from './resolvers/profies-resolver-settings';

@Component({
    selector: 'app-profiles-list',
    templateUrl: './profiles-list.component.html',
    styleUrls: ['./profiles-list.component.scss'],
})
export class ProfilesListComponent implements OnInit, OnDestroy {
    private navSub;
    private queryParamSub;
    private profilesSub;

    profiles: User[];
    profilesCount: number;
    page: number = 1;
    perpage: number = profilesPerPage;
    profilesPagination: PaginationService;

    loading: boolean = false;
    search: string;

    constructor(
        private user: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.navSub = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.initNav();
            }
        })
    }

    initNav() {
        this.queryParamSub = this.route.queryParams.subscribe(params => {
            this.initQuery(params);
        });
    }

    initQuery(params) {
        this.page = Number(params['page']) || 1;
        this.initProfiles();
    }

    initProfiles() {
        this.route.data.subscribe(({ profiles, profilesCount }) => {
            this.profiles = profiles;
            this.profilesCount = profilesCount.count;
        });
    }

    ngOnInit() {
        this.profilesPagination = new PaginationService({
            page: this.page,
            perpage: this.perpage,
            total: this.profilesCount,
            showNumbers: true,
            showPageless: false,
        }, (page: number, perpage: number) => {
            this.updateProfiles(page, perpage, this.search);
        });
    }

    updateProfiles(page: number, perpage: number, search: string) {
        this.loading = true;

        var where: LoopBackFilter = {};
        var findFilter: LoopBackFilter = {
            where: where,
            skip: (page * perpage) - perpage,
            limit: perpage,
            order: 'username ASC',
        };
        var countFilter: LoopBackFilter = {
            where: where,
        };

        this.profilesPagination.update(this.user, 'find', 'count', findFilter, countFilter).subscribe((data) => {
            this.loading = false;

            this.page = page;
            this.profiles = data.profiles;
        });
    }

    ngOnDestroy() {
        if (this.navSub) {
            this.navSub.unsubscribe();
        }

        if (this.queryParamSub) {
            this.queryParamSub.unsubscribe();
        }

        if (this.profilesSub) {
            this.profilesSub.unsubscribe();
        }
    }

}

@Injectable()
export class CanActivateProfilesList implements CanActivate {
    constructor(private user: UserService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.user.isAuthenticated();
    }
}
