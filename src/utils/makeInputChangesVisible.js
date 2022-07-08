import {SCOREBOARD} from "../consts";
import {errorHandler} from "./validations/errorHandler";

// const descriptorProp = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
// const descriptorAttr = Object.getOwnPropertyDescriptor(Element.prototype, 'setAttribute');
//
// Object.defineProperties(SCOREBOARD, {
//   value: {
//     get: descriptorProp.get,
//     set(value) {
//       errorHandler();
//       descriptorProp.set.call(this, value);
//     },
//   },
//   setAttribute: {
//     value(attr, value) {
//       if (attr === 'value') {
//         errorHandler();
//       }
//       descriptorAttr.value.call(this, attr, value);
//     },
//   }
// });