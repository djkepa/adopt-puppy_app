export const displayDate = (timestamp) => {
  const date = new Date(timestamp);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return `${hours}:${minutes}h ${monthNames[monthIndex]} ${day}, ${year}`;
};

export const displayDateShort = (timestamp) => {
  const date = new Date(timestamp);

  const monthNames = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return `${day} / ${monthNames[monthIndex]} / ${year}`;
};
