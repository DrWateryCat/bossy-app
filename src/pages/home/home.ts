import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { TaskComponent } from '../../components/task/task';
import { AddTaskPage } from '../add-task/add-task';
import { ShowTaskPage } from '../show-task/show-task';
import { TasksProvider } from '../../providers/tasks/tasks';
import { Task } from '../../models/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tasks: Task[];
  public taskList: List;

  addTaskPage = AddTaskPage;
  showTaskPage = ShowTaskPage;
  constructor(public navCtrl: NavController, private tasksDB: TasksProvider) {
  }

  ionViewDidLoad() {
    this.populate();
  }

  ionViewWillEnter() {
    this.clearArray();
    this.populate();
  }

  refresh(refresher) {
    this.clearArray();
    this.populate();
    refresher.complete();
  }

  clearArray() {
    if (this.tasks != null) {
      while (this.tasks.length != 0) {
        this.tasks.pop();
      }
    }
  }

  populate() {
    this.tasksDB.load().subscribe(tasks => {
      this.tasks = tasks;
    })
  }

  launchAddTask() {
    this.navCtrl.push(AddTaskPage);
  }

  taskClick(id) {
    this.navCtrl.push(ShowTaskPage, {id});
  }

  deleteTask(id) {
    this.tasksDB.delete(id).subscribe(t => {
      this.clearArray();
      this.populate();
    });
  }

}
