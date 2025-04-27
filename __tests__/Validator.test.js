import Validator from '../src/Validator.js';

describe('Validator', () => {
  test('проверяет допустимые имена', () => {
    const validator = new Validator();

    expect(validator.validateUsername('JohnDoe')).toBe(true); // Только латинские буквы
    expect(validator.validateUsername('john_doe')).toBe(true); // С подчёркиванием
    expect(validator.validateUsername('john-doe')).toBe(true); // С тире
    expect(validator.validateUsername('john123kek')).toBe(true); // С цифрами (не более трёх подряд)
    expect(validator.validateUsername('john_123_doe')).toBe(true); // Комбинация символов
  });

  test('отклоняет недопустимые имена', () => {
    const validator = new Validator();

    expect(validator.validateUsername('john123')).toBe(false); //Заканчивается цифрами
    expect(validator.validateUsername('123John')).toBe(false); // Начинается с цифр
    expect(validator.validateUsername('John1234')).toBe(false); // Более трёх цифр подряд
    expect(validator.validateUsername('John-')).toBe(false); // Заканчивается символом "-"
    expect(validator.validateUsername('John_')).toBe(false); // Заканчивается символом "_"
    expect(validator.validateUsername('-JohnDoe')).toBe(false); // Начинается символом "-"
    expect(validator.validateUsername('_JohnDoe')).toBe(false); // Начинается символом "_"
    expect(validator.validateUsername('John@Doe')).toBe(false); // Содержит недопустимые символы
  });

  test('выбрасывает ошибку при некорректных данных', () => {
    const validator = new Validator();

    expect(() => validator.validateUsername(null)).toThrow(TypeError);
    expect(() => validator.validateUsername(123)).toThrow(TypeError);
    expect(() => validator.validateUsername([])).toThrow(TypeError);
  });
});