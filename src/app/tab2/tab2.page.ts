import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import {CommonService} from '../common.service'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  output: string = ''
  constructor(
    private commonService: CommonService
  ) {}

  async generateRecipes() {
    var result = await Preferences.get({
      key: 'list',
    });
    var list = JSON.parse(result.value as string);
    console.log(list);
    this.commonService.findRecipes(list).subscribe(response=>{
      var json = JSON.parse(JSON.stringify(response))
      this.output = json.result;
    })
  }
}
