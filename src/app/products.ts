export let totalPrice;
export const products = [
  {
    name: 'Star Wars Episode IV DVD',
    price: 20,
  },
  {
    name: 'Star Wars Episode V DVD',
    price: 20,
  },
  {
    name: 'Star Wars Episode VI DVD',
    price: 20,
  },
  {
    name: 'Star Wars Episode IV Blu Ray',
    price: 25,
  },
  {
    name: 'Star Wars Episode V Blu Ray',
    price: 25,
  },
  {
    name: 'Star Wars Episode VI Blu Ray',
    price: 25,
  }
];

for(let i = 0; i < products.length; ++i){
  totalPrice += products[i].price;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/