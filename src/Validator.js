export default class Validator {
    /**
     * Проверяет имя пользователя на соответствие правилам.
     *
     * @param {string} username - Имя пользователя.
     * @returns {boolean} true, если имя допустимо, иначе false.
     */
    validateUsername(username) {
      if (typeof username !== 'string') {
        throw new TypeError('Аргумент должен быть строкой');
      }
  
      // Регулярное выражение для проверки имени пользователя
      const regex = /^(?![\d_-])(?!.*\d{4})([a-zA-Z0-9_-]*)(?<![\d_-])$/;
  
      return regex.test(username);
    }
  }