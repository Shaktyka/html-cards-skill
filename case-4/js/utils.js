// Склонение существительных по числам
const declOfNum = (n, text_forms) => {  
    const num = Math.abs(n) % 100; 
    const n1 = num % 10;
    if (num > 10 && num < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
};

// Добавляет пробелы между тысячами
const formatPrice = (price) => {
    return price ? new Intl.NumberFormat('ru-RU').format(price) : 0;
};
