import { httpRequestAuth } from '~/helpers/httpRequest';
import { API_NOTIFICATION_URL } from '~/constants/api.constants';

export class SefoursaryService {
  constructor(ctx) {
    this.ctx = ctx;

    this.serviceApiAuth = httpRequestAuth(ctx, API_NOTIFICATION_URL).serviceApi;
  }

  uploadImage(payload) {
    return this.serviceApiAuth.post('/email/anniv', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
  pushNotification(payload) {
    return this.serviceApiAuth.post('/customer/push-notif', payload);
  }
}

import axios from 'axios';

const endpoint =
  'https://script.google.com/macros/s/AKfycbzImFA0XrdPWxMKOFxWVMpOmO-4DW-uT91TN47io6e6t-1AcSgQ88Mb0jlqa7pQXaYPmQ/exec?';

export async function getDataFromGoogleSheet(sheetName, sheetColumn, value) {
  const param = {
    sheet: sheetName,
    filterColumn: sheetColumn,
    filterValue: value,
  };
  const queryString = new URLSearchParams(param).toString();

  const scriptUrl = `${endpoint}${queryString}`;
  try {
    const response = await axios.get(scriptUrl);
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
}

export async function updateDataInGoogleSheet(ctx) {
  const scriptUrl = `${endpoint}sheet=${ctx.sheetName}`;

  const newForm = new FormData();

  Object.entries(ctx.payload).forEach(([key, value]) => {
    newForm.append(key, value);
  });

  try {
    const res = await axios.post(scriptUrl, newForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function patchPrize(payload) {
  const scriptUrl = `${endpoint}sheet=HADIAH`;
  try {
    const newForm = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      newForm.append(key, value);
    });
    const res = await axios.post(scriptUrl, newForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.log('error patch prize:', error);
  }
}

export async function getRemainingGifts(ctx) {
  try {
    const param = {
      sheet: 'HADIAH',
      filterColumn: 'prizeCode',
      filterValue: ctx.provider,
    };
    const queryString = new URLSearchParams(param).toString();

    const res = await axios.get(`${endpoint}${queryString}`);

    const { data } = res;

    if (data) {
      const filterData = data
        .filter((item) => item.prizeCode === ctx.provider)
        .filter((item) => item.quota != 0);
      if (filterData.length > 0) {
        return filterData;
      } else {
        const secondParam = {
          ...param,
          filterValue: ctx.ewallet,
        };
        const secondPayload = new URLSearchParams(secondParam).toString();
        const ewalletRes = await axios.get(`${endpoint}${secondPayload}`);
        const { data } = ewalletRes;

        if (data) {
          const filterEwallet = data
            .filter((item) => item.prizeCode === ctx.ewallet)
            .filter((item) => item.quota != 0);

          return filterEwallet;
        } else {
          return [];
        }
      }
    } else {
      return [];
    }
  } catch (error) {
    console.log('error:', error);
  }
}

export async function checkUserRewards(email, level) {
  const param = {
    sheet: 'WIN',
    filterColumn: 'level',
    filterValue: level,
  };
  const queryString = new URLSearchParams(param).toString();
  const scriptUrl = `${endpoint}${queryString}`;
  try {
    const response = await axios.get(scriptUrl);
    const data = response.data;

    const findGift = data.find((item) => item.Email === email);

    return findGift;
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
}

export async function getUniqueCodeGift(email, level) {
  const param = {
    sheet: 'WIN',
    filterColumn: 'Email',
    filterValue: email,
  };
  const queryString = new URLSearchParams(param).toString();

  const scriptUrl = `${endpoint}${queryString}`;
  try {
    const response = await axios.get(scriptUrl);
    const data = response?.data;

    if (data) {
      const findData = data.find((item) => item.level == level);
      if (findData.uniqueCode !== 'nothing') {
        return findData.uniqueCode;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
export async function getIsWaitingForConfirmation(email, level) {
  const param = {
    sheet: 'USER',
    filterColumn: 'Email',
    filterValue: email,
  };
  const queryString = new URLSearchParams(param).toString();

  const scriptUrl = `${endpoint}${queryString}`;
  try {
    const response = await axios.get(scriptUrl);
    const data = response?.data;
    if (data) {
      const findData = data.find(
        (item) => item.level == level && item.passed == 'UPLOADED'
      );

      return findData;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function checkIsGotLottery(email, level) {
  const param = {
    sheet: 'UNDIAN',
    filterColumn: 'Email',
    filterValue: email,
  };
  const queryString = new URLSearchParams(param).toString();

  const scriptUrl = `${endpoint}${queryString}`;
  try {
    const response = await axios.get(scriptUrl);
    const data = response.data;
    if (data) {
      const findLottery = data.find((item) => item.level == level);
      return findLottery || null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
}
