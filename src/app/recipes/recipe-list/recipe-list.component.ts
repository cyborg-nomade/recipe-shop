import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test',
      'http://www.trbimg.com/img-57b62a41/turbine/ct-kfc-recipe-test-20160818'
    ),
    new Recipe(
      'Test2',
      'This is a test too',
      'http://www.trbimg.com/img-57b62a41/turbine/ct-kfc-recipe-test-20160818'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
