import { Injectable} from '@angular/core';    
@Injectable()
export  class menuService {

    private menu:Menu[]=[
        {
          nombre:'cheeseburger',
          descripcion : ' 100g de carne jugosa y 100% a la parrilla, cubirtas de nuestro queso cheddarr, vegetales frescos ',
          precio : '$3,50',
          imagen : '../../../assets/img/hamburgesa.jpg',
          id : 1,
          categoria : 'hamburguesas',
          disponible : true,
          ingredientes : 'carne, queso, huevo',
          calorias : '200'
        },
        {
            nombre:'cheeseburger',
            descripcion : ' 100g de carne jugosa y 100% a la parrilla, cubirtas de nuestro queso cheddarr, vegetales frescos ',
            precio : '$4,50',
            imagen : 'https://res.cloudinary.com/dt0x73u8z/image/upload/v1659977148/AllReady/cheeseburguer_sgdbam.jpg',
            id : 1,
            categoria : 'hamburguesas',
            disponible : true,
            ingredientes : 'carne, queso, huevo',
            calorias : '200'
          },
          {
            nombre:'cheeseburger',
            descripcion : ' 100g de carne jugosa y 100% a la parrilla, cubirtas de nuestro queso cheddarr, vegetales frescos',
            precio : '$3,99',
            imagen : 'https://res.cloudinary.com/dt0x73u8z/image/upload/v1659977537/AllReady/cheeseburguer-1024x683_mnkpok.jpg',
            id : 1,
            categoria : 'hamburguesas',
            disponible : true,
            ingredientes : 'carne, queso, huevo',
            calorias : '200'
          }

      ];
    constructor( ) {
        console.log('servicio menu');
    }

    getMenu():Menu[]{
        return this.menu;
          }
    
    
}

export interface Menu{
    nombre:string;
    descripcion:string;
    precio:string;
    imagen:string;
    id:number;
    categoria:string;
    disponible:boolean;
    ingredientes:string;
    calorias:string;
}