import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes : Recipe[]=[];
  constructor(private recipeService : RecipesService) { }
  ngOnInit(): void {
    console.log("Test");
    //  this.recipes = this.recipeService.getRecipes();
  }

  ionViewWillEnter(){
    this.recipes = this.recipeService.getRecipes();
  }

  ionViewDidEnter(){

  }

  ionViewWillLeave(){

  }

  ionViewDidLeave(){

  }

}
