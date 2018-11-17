import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe("A test Recipe1","This is simply a test part1","https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg"),
  new Recipe("A test Recipe2","This is simply a test part2","https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg")
];
  constructor() { }

  ngOnInit() {
  }

}
