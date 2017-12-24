import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskComponent } from '../../components/task/task'; 
import { TasksProvider } from '../../providers/tasks/tasks';

/**
 * Generated class for the ShowTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-task',
  templateUrl: 'show-task.html',
})
export class ShowTaskPage {
  public title: string;
  public desc: string;
  public id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private tasks: TasksProvider) {
    let id = this.navParams.get('id');

    this.tasks.loadDetails(id).subscribe(task => {
      this.title = task.title;
      this.desc = task.desc;
      this.id = task.id;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowTaskPage');
  }

  public delete() {
    this.tasks.delete(this.id).subscribe(res => {
      this.navCtrl.pop();
    }, error => {
      alert("Error: " + JSON.stringify(error.json()));
    })
  }

}
