import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promise } from 'node_modules/es6-promise';

@Injectable()
export class ConfigService {
  config: any;
  baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;
  }

  loadConfig(): Promise<any> {
    let promise: Promise<any> = new Promise((resolve: any) => {
      this.getConfig().toPromise().then(config => {
        this.config = config;
        resolve(true);
      });
    });
    return promise;
  }

  private getConfig() {
    return this.http.get(this.baseUrl + 'api/values');
  }

}
