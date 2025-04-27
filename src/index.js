import Validator from './Validator.js';
import cleanupPhone from './phoneCleanup.js';

const validator = new Validator();

try {
  console.log(validator.validateUsername('JohnDoe')); // true
  console.log(validator.validateUsername('john_123')); // true
  console.log(validator.validateUsername('123John')); // false
} catch (error) {
  console.error(error.message);
}

try {
  console.log(cleanupPhone('8 (927) 000-00-00')); // '+79270000000'
  console.log(cleanupPhone('+7 960 000 00 00')); // '+79600000000'
  console.log(cleanupPhone('+86 000 000 0000')); // '+860000000000'
} catch (error) {
  console.error(error.message);
}