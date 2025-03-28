import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService as AxiosHttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HttpService {
  constructor(
    private readonly axiosHttpService: AxiosHttpService,
    private readonly configService: ConfigService,
  ) {}

  private getFullUrl(path: string): string {
    const baseUrl = this.configService.get('externalApi.baseUrl');
    return `${baseUrl}${path}`;
  }

  async get<T>(path: string, params?: any, headers?: any): Promise<T> {
    const response = await firstValueFrom(
      this.axiosHttpService.get<T>(this.getFullUrl(path), { params, headers }),
    );
    return response.data;
  }

  async post<T>(path: string, body?: any, headers?: any): Promise<T> {
    const response = await firstValueFrom(
      this.axiosHttpService.post<T>(this.getFullUrl(path), body, { headers }),
    );
    return response.data;
  }

  async put<T>(path: string, body?: any, headers?: any): Promise<T> {
    const response = await firstValueFrom(
      this.axiosHttpService.put<T>(this.getFullUrl(path), body, { headers }),
    );
    return response.data;
  }

  async delete<T>(path: string, headers?: any): Promise<T> {
    const response = await firstValueFrom(
      this.axiosHttpService.delete<T>(this.getFullUrl(path), { headers }),
    );
    return response.data;
  }

  async patch<T>(path: string, body?: any, headers?: any): Promise<T> {
    const response = await firstValueFrom(
      this.axiosHttpService.patch<T>(this.getFullUrl(path), body, { headers }),
    );
    return response.data;
  }
}
