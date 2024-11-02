export const formatDateTo12Hour = (dateString) => {
    const date = new Date(dateString);
    
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const isPM = hours >= 12;
    hours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes} ${isPM ? 'PM' : 'AM'}`;
  };