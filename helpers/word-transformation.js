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
