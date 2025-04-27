export default function cleanupPhone(phone) {
    if (typeof phone !== 'string') {
      throw new TypeError('Аргумент должен быть строкой');
    }
  
    // Удаляем все символы, кроме цифр и "+" в начале
    let cleanedPhone = phone.replace(/[^+\d]/g, '');
  
    // Если начинается с "8" или "+7", приводим к формату "+7xxxxxxxxxx"
    if (cleanedPhone.startsWith('8')) {
      cleanedPhone = '+7' + cleanedPhone.slice(1);
    } else if (cleanedPhone.startsWith('+7')) {
      cleanedPhone = cleanedPhone.slice(0, 2) + cleanedPhone.slice(2).replace(/\D/g, '');
    }
  
    // Для международных номеров оставляем только цифры после "+"
    if (cleanedPhone.startsWith('+')) {
      cleanedPhone = '+' + cleanedPhone.slice(1).replace(/\D/g, '');
    }
  
    return cleanedPhone;
  }