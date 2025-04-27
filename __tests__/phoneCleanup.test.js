import cleanupPhone from '../src/phoneCleanup.js';

describe('cleanupPhone', () => {
  test('очищает номера телефонов РФ', () => {
    expect(cleanupPhone('8 (927) 000-00-00')).toBe('+79270000000'); // Формат РФ
    expect(cleanupPhone('+7 960 000 00 00')).toBe('+79600000000'); // Формат РФ
  });

  test('очищает международные номера', () => {
    expect(cleanupPhone('+86 000 000 0000')).toBe('+860000000000'); // Китайский номер
    expect(cleanupPhone('+1 (234) 567-89-00')).toBe('+12345678900'); // Американский номер
  });

  test('обрабатывает некорректные данные', () => {
    expect(() => cleanupPhone(null)).toThrow(TypeError);
    expect(() => cleanupPhone(123)).toThrow(TypeError);
    expect(() => cleanupPhone([])).toThrow(TypeError);
  });
});