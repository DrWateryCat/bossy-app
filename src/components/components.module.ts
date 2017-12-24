import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'
import { TaskComponent } from './task/task';
@NgModule({
	declarations: [TaskComponent],
	imports: [IonicModule],
	exports: [TaskComponent]
})
export class ComponentsModule {}
