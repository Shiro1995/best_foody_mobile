import { normalizeJsonApiIfNeed } from '@utils/common';
import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// TODO: testing refresh token
// let shouldRefresh = true;
// let interval = setInterval(() => {
//   shouldRefresh = !shouldRefresh;
//   console.log('shouldRefresh', shouldRefresh);
// }, 10000);

export const responseInterceptor = (response: AxiosResponse) => {
  // TODO: testing
  // if (response?.request?.responseURL?.includes('refresh_token')) {
  //   shouldRefresh = false;
  //   console.log('response refresh_token', response);
  // }
  // if (shouldRefresh) {
  //   throw {
  //     error: 'mocking test refreshtoken',
  //     status: 401,
  //     serverStatus: 401,
  //   };
  // }

  console.log(
    'Response from API: ',
    response?.request?.responseURL,
    response?.status,
  );

  if (response.status >= 400) {
    console.log('Response from API error: ', response?.data);
    // need to show message from server
    const errorObject = normalizeJsonApiIfNeed(response?.data ?? response);
    if (response.status === 404) {
      // not found => show customize message instead
    }

    const customError = {
      serverStatus: response.status.toString(),
      ...errorObject,
    };
    return Promise.reject(customError);
  }

  const dataObject = {
    ...response?.data,
  };
  const normalizeData = normalizeJsonApiIfNeed(dataObject);

  console.log('Response from API data: ', normalizeData);

  return Promise.resolve(normalizeData);
};

export const errorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

export const requestInterceptor = (value: InternalAxiosRequestConfig<any>) => {
  console.log(
    'REQUEST: ',
    value?.method,
    (value?.baseURL ?? '') + value?.url,
    value?.data,
  );
  return value;
};
