import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectListService {
  constructor() {}

  // Images Details

  galleryDetails = [
    {
      id: 1,
      imgName: 'Home Interior',
      img: './assets/img/home-main.jpg',
    },
    {
      id: 2,
      imgName: 'Salon And Spa Designs ',
      img: './assets/img/salon-main.jpg',
    },
    {
      id: 3,
      imgName: 'Hospital and Clinic Interior',
      img: './assets/img/hospital-main.jpg',
    },
    {
      id: 4,
      imgName: 'Washroom Designs',
      img: './assets/img/washroom-main.jpg',
    },
    {
      id: 5,
      imgName: 'Fancy Kitchen Designs',
      img: './assets/img/kitchen-main.jpg',
    },
    {
      id: 6,
      imgName: 'Wardrobe Designs',
      img: './assets/img/kitchen-main.jpg',
    },
    {
      id: 7,
      imgName: 'Wardrobe Designs',
      img: './assets/img/kitchen-main.jpg',
    },
    {
      id: 8,
      imgName: 'Wardrobe Designs',
      img: './assets/img/kitchen-main.jpg',
    },
    {
      id: 9,
      imgName: 'Wardrobe Designs',
      img: './assets/img/kitchen-main.jpg',
    },
  ];

  // Home Interior Array Object

  homeInterior = [
    {
      id: 1,
      imgName: 'Home 1',
      img: './assets/img/home-main.jpg',
    },
    {
      id: 2,
      imgName: 'Home 2',
      img: './assets/img/home-1.jpg',
    },
    {
      id: 3,
      imgName: 'Home 3',
      img: './assets/img/home-2.jpg',
    },
    {
      id: 4,
      imgName: 'Home 4',
      img: './assets/img/home-3.jpg',
    },
    {
      id: 5,
      imgName: 'Home 5',
      img: './assets/img/home-4.jpg',
    }
  ];

  // Home Interior Array Object

  salon = [
    {
      id: 1,
      imgName: 'salon 1',
      img: './assets/img/salon-1.jpg',
    },
    {
      id: 2,
      imgName: 'salon 2',
      img: './assets/img/salon-2.jpg',
    },
    {
      id: 3,
      imgName: 'salon 3',
      img: './assets/img/salon-3.jpg',
    },
    {
      id: 4,
      imgName: 'salon 4',
      img: './assets/img/salon-4.jpg',
    },
    {
      id: 5,
      imgName: 'salon 5',
      img: './assets/img/salon-5.jpg',
    },
    {
      id: 6,
      imgName: 'salon 6',
      img: './assets/img/salon-6.jpg',
    },
  ];

  hospital = [
    {
      id: 1,
      imgName: 'Clinic 1',
      img: './assets/img/clinic-1.jpg',
    },
    {
      id: 2,
      imgName: 'Clinic 2',
      img: './assets/img/clinic-2.jpg',
    },
    {
      id: 3,
      imgName: 'Clinic 3',
      img: './assets/img/clinic-3.jpg',
    },
    {
      id: 4,
      imgName: 'Clinic 4',
      img: './assets/img/clinic-4.jpg',
    },
    {
      id: 5,
      imgName: 'Clinic 5',
      img: './assets/img/clinic-5.jpg',
    },
  ];

  washroom = [
    {
      id: 1,
      imgName: 'washroom 1',
      img: './assets/img/washroom-main.jpg',
    },
    {
      id: 2,
      imgName: 'washroom 2',
      img: './assets/img/washroom-1.jpg',
    },
    {
      id: 3,
      imgName: 'washroom 3',
      img: './assets/img/washroom-2.jpg',
    },
    {
      id: 4,
      imgName: 'washroom 4',
      img: './assets/img/washroom-3.jpg',
    },
    {
      id: 5,
      imgName: 'washroom 5',
      img: './assets/img/washroom-main.jpg',
    },
    {
      id: 6,
      imgName: 'washroom 6',
      img: './assets/img/washroom-1.jpg',
    }
  ];

  kitchen = [
    {
      id: 1,
      imgName: 'kitchen 1',
      img: './assets/img/home-main.jpg',
    },
    {
      id: 2,
      imgName: 'kitchen 2',
      img: './assets/img/salon-main.jpg',
    },
    {
      id: 3,
      imgName: 'kitchen 3',
      img: './assets/img/hospital-main.jpg',
    },
  ];
  wardrobe = [
    {
      id: 1,
      imgName: 'wardrobe 1',
      img: './assets/img/home-main.jpg',
    },
    {
      id: 2,
      imgName: 'wardrobe 2',
      img: './assets/img/salon-main.jpg',
    },
    {
      id: 3,
      imgName: 'wardrobe 3',
      img: './assets/img/hospital-main.jpg',
    },
  ];
}
