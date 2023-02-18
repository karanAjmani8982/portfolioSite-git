import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyStoryComponent } from './my-story/my-story.component';

const routes : Routes = [
  {path:'',redirectTo:'Welcome',pathMatch:'full'},
  {path:'Welcome', component: HomePageComponent},
  {path:'Contact', component: ContactComponent},
  {path:'myStory', component: MyStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
