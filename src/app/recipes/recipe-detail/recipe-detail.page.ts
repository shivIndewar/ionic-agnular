import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe : Recipe={
    id:'',
    title:'',
    imageUrl:'',
    ingredients:[]
  };

  constructor(private activatedRout : ActivatedRoute, 
              private recipeService : RecipesService, 
              private router : Router,
              private alrtController : AlertController) { }

  ngOnInit() {
    this.activatedRout.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
          return;
      }
      const recipeId = paramMap.get('recipeId');
      if(recipeId!==null && recipeId!==undefined){
         this.loadedRecipe = this.recipeService.getRecipe(recipeId);
      }
    });
  }

  onDeleteRecipe(){
    this.alrtController.create({header:"Are you sure!", message:"Do you really want to delete the recipe?",
                                buttons:[{
                                  text: "Cancel",
                                  role: "cancel"
                                },
                                {
                                  text:'Delete',
                                  handler:()=>{
                                    this.recipeService.deleteRecipe(this.loadedRecipe.id);
                                    this.router.navigate(['/recipes']);
                                  }
                                }
                              ]}).then(alertEl=>{
                                alertEl.present();
                              });
    
  }
}
