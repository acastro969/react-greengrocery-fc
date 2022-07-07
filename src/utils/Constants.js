import Banana from '../assets/images/Banana.png';
import Apple from '../assets/images/Apple.png';
import Lettuce from '../assets/images/Lettuce.png';
import Spinach from '../assets/images/Spinach.webp';
import Cherries from '../assets/images/Cherries.png';
import Tomato from '../assets/images/Tomato.png';
import SweetPotato from '../assets/images/SweetPotato.png';
import Pear from '../assets/images/Pears.png';
import Peach from '../assets/images/Peach.png';
import Orange from '../assets/images/Orange.png';

export const DEFAULT_PRODUCTS_LIST = [
  {id: 1, img: Banana, title: 'Bananas', price: 5.9},
  {id: 2, img: Apple, title: 'Apples', price: 1.05},
  {id: 3, img: Lettuce, title: 'Lettuces', price: 8.79},
  {id: 4, img: Spinach, title: 'Spinach', price: 1.20},
  {id: 5, img: Cherries, title: 'Cherries', price: 1.15},
  {id: 6, img: Tomato, title: 'Tomatoes', price: 2.40},
  {id: 7, img: SweetPotato, title: 'Sweet Potatoes', price: 5.4},
  {id: 8, img: Pear, title: 'Pears', price: 6.2},
  {id: 9, img: Peach, title: 'Peaches', price: 2.30},
  {id: 10, img: Orange, title: 'Oranges', price: 1.45}
];

export const HOME_ROUTE = '/';
export const LOG_IN_ROUTE = '/log-in';
export const SIGN_IN_ROUTE = '/sign-in';

export const USERNAME_MIN_LENGTH = 6;
export const USERNAME_MAX_LENGTH = 30;
export const EMAIL_MIN_LENGTH = 6;
export const EMAIL_MAX_LENGTH = 254;
export const PWD_MIN_LENGTH = 8;
export const PWD_MAX_LENGTH = 256;

export const MSG_VALUE_TOO_SHORT = 'The value is too short';
export const MSG_VALUE_TOO_LONG = 'The value is too long';
export const MSG_MUST_BE_VALID_EMAIL = 'The value must be a valid email';
export const MSG_REQUIRED = 'The field is required';
export const MSG_PASSWORDS_MUST_MATCH = 'Passwords must match';
export const MSG_TTYCC = 'You must accept terms and conditions in order to sign in';