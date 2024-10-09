// import i18n from 'i18next';

export function formatTimestamp(dateString) {
    const dateTime = new Date(dateString);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Pad with leading zero if necessary
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hour = dateTime.getHours() % 12 || 12; // Convert to 12-hour format (12 for midnight)
    const minute = String(dateTime.getMinutes()).padStart(2, '0');
    const second = String(dateTime.getSeconds()).padStart(2, '0');
    const amPm = dateTime.getHours() < 12 ? 'AM' : 'PM';
    return `${year}-${month}-${day} ${hour}:${minute}:${second} ${amPm}`;
    // return `${year}-${month}-${day} ${hour}:${minute}:${second} ${i18n.t(`time.${amPm}`)}`;

}
