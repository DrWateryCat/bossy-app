import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowTaskPage } from './show-task';
import { TaskComponent } from '../../components/task/task';

@NgModule({
  declarations: [
    ShowTaskPage,
    TaskComponent
  ],
  imports: [
    IonicPageModule.forChild(ShowTaskPage),
    TaskComponent
  ],
})
export class ShowTaskPageModule {}
