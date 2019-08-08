import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { DefaultPageComponent } from './default-page/default-page.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    DefaultPageComponent
  ],
  imports: [CommonModule],
  exports: [],
  providers: []
})
export class RecipesModule {}
