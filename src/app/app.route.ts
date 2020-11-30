import { NgModule } from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ContentPostComponent} from "./content/content-post/content-post.component";

const routes: Routes = [
    {
        path: "",
        component: ContentPostComponent
    }
];

export const AppRoutingProviders: any[] = [];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
