import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/1024px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string):Recipe {
    let recipe = this.recipes.find(x=>x.id === recipeId);
    
    if(recipe){
      return recipe;
    }
    else{
      let recipe : Recipe={
        id:'',
        title:'',
        imageUrl:'',
        ingredients:[]
      };
      return recipe;
    }
  }

  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(x=>x.id !== recipeId);
  }

}
