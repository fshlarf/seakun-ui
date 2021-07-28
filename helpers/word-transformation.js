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

export function setNameProvider(provider) {
  switch (provider) {
    case 'netflix':
      return 'Netflix';
      break;
    case 'spotify':
      return 'Spotify';
      break;
    case 'youtube':
      return 'Youtube';
      break;
    case 'gramedia':
      return 'Gramedia';
      break;
    case 'microsoft':
      return 'Microsoft 365';
      break;
    case 'microsoft365':
      return 'Microsoft 365';
      break;
    case 'canva':
      return 'Canva';
      break;
    case 'disney-hotstar':
      return 'Disney+ Hotstar';
      break;
    case 'apple-one':
      return 'Apple One';
      break;
    case 'wattpad':
      return 'Wattpad';
      break;
    case 'nintendo':
      return 'Nintendo Switch';
      break;
    default:
      return provider;
  }
}

export function fullDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return (today = dd + '/' + mm + '/' + yyyy);
}
