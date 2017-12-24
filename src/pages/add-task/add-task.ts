import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksProvider } from '../../providers/tasks/tasks';
import { Task } from '../../models/task';

/**
 * Generated class for the AddTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tasks: TasksProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  submitTask() {
    this.tasks.upload({title: this.title, desc: this.description}).subscribe(res => {
      if (res.status == 200) {
        this.navCtrl.pop();
      }
    })
  }

}
