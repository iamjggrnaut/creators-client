export function generateDateRange(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateArray = [];

    while (start <= end) {
        dateArray.push(new Date(start)); // Добавляем копию текущей даты
        start.setDate(start.getDate() + 1); // Переходим на следующий день
    }

    return dateArray?.map(date => formatDate(date));
}

export function formatDate(date) {
    return date.toISOString().split('T')[0]; // Возвращает формат YYYY-MM-DD
}
