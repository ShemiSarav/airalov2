// src/services/airaloApi.ts
import { request, APIRequestContext } from '@playwright/test';

export class AiraloAPI {
    private context: APIRequestContext;

    constructor(context: APIRequestContext) {
      this.context = context;    
  }

  async placeOrder(slug: string, quantity: number) {
    return this.context.post('/v1/orders', {
      data: { esim_slug: slug, quantity },
    });
  }

  async getPackages() {
    const res = await this.context.get('/v1/packages');
    return res.json();
  }

  static async createWithToken(apiBaseUrl: string, clientId: string, clientSecret: string) {
    const tokenContext = await request.newContext();
    const tokenRes = await tokenContext.post(`${apiBaseUrl}/v2/token`, {
      form: {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      },
    });

    const { data } = await tokenRes.json();
    const token = data?.access_token;

    const authContext = await request.newContext({
      baseURL: apiBaseUrl,
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return new AiraloAPI(authContext);
  }
}
