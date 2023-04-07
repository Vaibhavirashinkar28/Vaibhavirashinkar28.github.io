import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }



  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    //you can write this statement in simple way lets do it.


  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'FastFood', count: 3 },
      { name: 'SlowFood', count: 4 },
      { name: 'Lunch', count: 6 },
      { name: 'Dinner', count: 2 },
      { name: 'Fry', count: 1 }
    ]

  }
  getAll(): Foods[] {

    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '25-35',
        price: 5,
        favorite: false,
        origins: ['Italy'],
        stars: 4.3,
        imageUrl: '/assets/food-1.jpg',
        tags: ['Lunch', 'FastFood'],
      },
      {
        id: 2,
        name: 'Veneela Icecream',
        cookTime: '20-30',
        price: 4,
        favorite: true,
        origins: ['Italy', 'China', 'India'],
        stars: 4.6,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood'],
      },

      {
        id: 3,
        name: 'Chees Burger ',
        cookTime: '15-25',
        price: 9,
        favorite: false,
        origins: ['India'],
        stars: 3.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['SlowFood', 'Lunch', 'Dinner'],
      },

      {
        id: 4,
        name: 'Gobbi Manchuri',
        cookTime: '30-35',
        price: 6,
        favorite: true,
        origins: ['india'],
        stars: 4,
        imageUrl: '/assets/food-4.jpg',
        tags: ['Lunch', 'FastFood'],
      },

      {
        id: 5,
        name: 'Soopy Noddles',
        cookTime: '25-27',
        price: 4,
        favorite: true,
        origins: ['Italy', 'India'],
        stars: 4.9,
        imageUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Lunch', 'Dinner'],
      },

      {
        id: 6,
        name: 'French Fries',
        cookTime: '16-20',
        price: 8,
        favorite: false,
        origins: ['Italy', 'China', 'France', 'India'],
        stars: 3,
        imageUrl: '/assets/food-6.jpg',
        tags: ['Fry'],
      },

      {
        id: 7,
        name: 'Dahi Poori',
        cookTime: '23-30',
        price: 6,
        favorite: false,
        origins: ['india', 'italy', 'france'],
        stars: 5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['SlowFood', 'Lunch'],
      },

      {
        id: 8,
        name: 'Chiness Noddles',
        cookTime: '18-25',
        price: 5,
        favorite: true,
        origins: ['Italy', 'India', 'China'],
        stars: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['SlowFood', 'Lunch'],
      }

    ];

  }

}
