export const formatToTimeOnly = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

export const formatMinutesToHoursAndMinutes = (totalMinutes: number): string => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч ${minutes}мин`;
}

export const formatPrice = (price: number) => {
    return (Intl.NumberFormat('ru-RU').format(Math.round(price))); 
  };