// Just pretend it's a db.)
import { faker } from "@faker-js/faker";

// use cache
export function getProductDescription() {
  return faker.commerce.productDescription();
}

// keep dynamic
export function getPrice() {
  return faker.commerce.price();
}

// const { faker } = require('@faker-js/faker');

// faker.seed(1234);

faker.person.firstName(); // 'John'
faker.person.lastName(); // 'Doe'
import { Faker, es } from "@faker-js/faker";
// const { Faker, es } = require('@faker-js/faker');

// create a Faker instance with only es data and no en fallback (=> smaller bundle size)
const customFaker = new Faker({ locale: [es] });

customFaker.person.firstName(); // 'Javier'
customFaker.person.lastName(); // 'Ocampo Corrales'

// customFaker.music.genre(); // throws Error as this data is not available in `es`
