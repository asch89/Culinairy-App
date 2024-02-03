import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ingredientList: Array<string> = []
  constructor() {}

  ngOnInit() {
    console.log("oninit")
    this.getList()
  }

  async getList() {
    this.ingredientList = JSON.parse((await Preferences.get({
      key: 'list',
    })).value as string);
  }

  async addIngredient(input: any) {
    console.log("infunc")
    if(input != "")
    {
      console.log("Pushed")
      this.ingredientList.push(input);
      (<HTMLInputElement>document.getElementById("input")).value = "";
      await Preferences.set({
        key: 'list',
        value: JSON.stringify(this.ingredientList),
      });
    }
  }

  async removeIngredient(index: number) {
    console.log("removed")
    this.ingredientList.splice(index,1);
    await Preferences.set({
      key: 'list',
      value: JSON.stringify(this.ingredientList),
    });
  }
}
