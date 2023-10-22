import Config from '@constant/config';
import axios, { AxiosRequestConfig } from 'axios';

import {
  responseInterceptor,
  errorInterceptor,
  requestInterceptor,
} from './interceptor';

const HOST = Config.API_URL + 'api/';

const mainAxios = axios.create({
  baseURL: HOST,
  validateStatus: function (status) {
    return status >= 200 && status <= 500;
    // return status === 200 || status === 404 || status === 201 || status === 500;
  },
  timeout: 60000,
});
mainAxios.defaults.baseURL = HOST;
// mainAxios.defaults.baseURL = '';
mainAxios.interceptors.response.use(responseInterceptor, errorInterceptor);
mainAxios.interceptors.request.use(requestInterceptor, errorInterceptor);

export enum AcceptType {
  json = 'application/json',
  formData = 'multipart/form-data',
  urlencode = 'application/x-www-form-urlencoded',
  vndJson = 'application/vnd.api+json',
}

const defaultHeader = {
  Accept: AcceptType.json,
  'Accept-Version': 'v1',
  'Content-Type': AcceptType.json,
};

const formHeader = {
  Accept: AcceptType.formData,
  'Content-Type': AcceptType.formData,
};

export class apiClient {
  config: AxiosRequestConfig;
  headers: any;

  constructor(token?: string, orderToken?: string) {
    const authHeader =
      token && token.length > 0 ? { Authorization: '' + token } : null;
    this.config = {};
    this.headers = {
      ...defaultHeader,
      ...authHeader,
    };

    if (orderToken?.length) {
      this.headers['X-Spree-Order-Token'] = orderToken;
    }
  }

  get = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const { headers, ...rest } = option;

    return mainAxios.get(url, {
      ...this.config,
      params: {
        ...body,
      },
      headers: {
        ...this.headers,
        ...headers,
      },
      baseURL: baseUrl,
      ...rest,
    });
  };

  post = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const { headers, ...rest } = option;

    return mainAxios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      baseURL: baseUrl,
      ...rest,
    });
  };

  postForm = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const { headers, ...rest } = option;

    return mainAxios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...formHeader,
        ...headers,
        post: formHeader,
        put: formHeader,
      },
      baseURL: baseUrl,
      ...rest,
    });
  };

  postFile = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const { headers, ...rest } = option;

    return mainAxios.post(url, body, {
      ...this.config,
      headers: {
        ...formHeader,
        ...headers,
      },
      baseURL: baseUrl,
      ...rest,
    });
  };

  delete = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return mainAxios.delete(url, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      data: {
        ...body,
      },
      ...rest,
    });
  };

  putAvatar = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return mainAxios.put(url, {
      ...this.config,
      params: {
        ...body,
      },
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };

  put = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const { headers, ...rest } = option;

    return mainAxios.put(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      baseURL: baseUrl,
      ...rest,
    });
  };

  putForm = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const { headers, ...rest } = option;

    return mainAxios.put(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...formHeader,
        ...headers,
      },
      baseURL: baseUrl,
      ...rest,
    });
  };

  patch = (url: string, body?: any, option?: any, baseUrl?: string) => {
    option = option || {};
    const { headers, ...rest } = option;
    return mainAxios.patch(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      baseURL: baseUrl,
      ...rest,
    });
  };
}
