export function capitalizeFirstLetter(str) {
  let splitStr = str.toLowerCase().split(' ');

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

export function currencyFormat(num) {
  if (num) {
    return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  } else if (num == 0) {
    return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`;
  }
}

export function fullDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return (today = dd + '/' + mm + '/' + yyyy);
}

export function maskName(name) {
  if (name.length === 2) {
    return name[0] + '*';
  } else if (name.length <= 2) {
    return name;
  } else {
    const masked = name[0] + '*'.repeat(name.length - 2) + name.slice(-1);
    return masked;
  }
}

export function formatPhoneNumber(input) {
  if (input.startsWith('0')) {
    return '62' + input.slice(1);
  }
  return input;
}

export function toUnixTimestamp(isoDate) {
  const dateObject = new Date(isoDate);
  return Math.floor(dateObject.getTime() / 1000);
}

export function unixToIsoDate(unix) {
  const dateObject = new Date(unix * 1000); // Convert seconds to milliseconds

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
  const day = String(dateObject.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function unixToIndonesianDate(unixTimestamp) {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dateObject = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds

  const day = dateObject.getDate();
  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
}

export function unixToIndonesianShortDate(unix) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ags',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ];

  const dateObject = new Date(unix * 1000); // Convert seconds to milliseconds

  const day = dateObject.getDate();
  const month = months[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  return `${day} ${month} ${year}`;
}
