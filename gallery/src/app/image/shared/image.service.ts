import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
	visibleImages = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}
getImage(id: number){
	return IMAGES.slice(0).find(image => image.id == id)
	}	
}

const IMAGES = [
	{"id": 1, "category": "boats", "caption": "view of a boat", "url": "assets/img/boat_01.jpeg"}
	{"id": 2, "category": "boats", "caption": "dock view", "url": "assets/img/boat_02.jpeg"}
	{"id": 3, "category": "boats", "caption": "sunrise", "url": "assets/img/boat_03.jpeg"}
	{"id": 4, "category": "boats", "caption": "beach boat", "url": "assets/img/boat_04.jpeg"}
	{"id": 5, "category": "boats", "caption": "island vibes", "url": "assets/img/boat_05.jpeg"}
	{"id": 6, "category": "camping", "caption": "high shot", "url": "assets/img/camping_01.jpeg"}
	{"id": 7, "category": "camping", "caption": "late night", "url": "assets/img/camping_02.jpeg"}
	{"id": 8, "category": "camping", "caption": "under the stars", "url": "assets/img/camping_03.jpeg"}
	{"id": 9, "category": "camping", "caption": "amazing sky", "url": "assets/img/camping_04.jpeg"}
	{"id": 10, "category": "camping", "caption": "after a hike", "url": "assets/img/camping_05.jpeg"}
	{"id": 11, "category": "library", "caption": "towne library", "url": "assets/img/library_01.jpeg"}
	{"id": 12, "category": "library", "caption": "artistic ceiling", "url": "assets/img/library_02.jpeg"}
	{"id": 13, "category": "library", "caption": "vinatge vibes", "url": "assets/img/library_03.jpeg"}
	{"id": 14, "category": "library", "caption": "deep sea learning", "url": "assets/img/library_04.jpeg"}
	{"id": 15, "category": "library", "caption": "magical knowledge", "url": "assets/img/library_05.jpeg"}
]