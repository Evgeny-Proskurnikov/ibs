import { v4 as uuid } from 'uuid';

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS';
const ADD_CITY_NAME = 'ADD_CITY_NAME';

const CITY_NAMES = [
  {
    city: 'moscow',
    id: uuid()
  },
  {
    city: 'saint petersburg',
    id: uuid()
  },
  {
    city: 'kazan',
    id: uuid()
  },
  {
    city: 'ufa',
    id: uuid()
  },
  {
    city: 'magnitogorsk',
    id: uuid()
  },
]

export { ADD_ITEM, REMOVE_ALL_ITEMS, CITY_NAMES, ADD_CITY_NAME };