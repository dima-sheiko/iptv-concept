import discover from '../api/discover.json';

export enum ActionsEnum {
  GET_DISCOVER = 'get/discover',
}

class HttpHandlerInstance {
  public async get(url: string) {
    switch (url) {
      case ActionsEnum.GET_DISCOVER: {
        return discover;
      }
      default: {
        return [];
      }
    }
  }
}

export const HttpHandler = new HttpHandlerInstance();
