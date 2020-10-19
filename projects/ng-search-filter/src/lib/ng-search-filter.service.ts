import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgSearchFilterService {
  private _defaultLang: string;

  constructor() {}

  private get defaultLang(): string {
    return this._defaultLang || 'tr';
  }

  private set defaultLang(defaultLang: string) {
    this._defaultLang = defaultLang;
  }

  public getDefaultLang(): string {
    return this.defaultLang;
  }

  public setDefaultLang(defaultLang): void {
    this.defaultLang = defaultLang;
  }
}
