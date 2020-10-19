import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { NgSearchFilterService } from './ng-search-filter.service';

@Pipe({
  name: 'filter',
  pure: false,
})
@Injectable()
export class NgSearchFilterPipe implements PipeTransform {
  constructor(private _ngSearchFilterService: NgSearchFilterService) {}
  private _lang = this._ngSearchFilterService.getDefaultLang();
  /**
   * @param items object from array
   * @param term term's search
   * @param excludes array of strings which will ignored during search
   */
  transform(items: any, term: string, excludes: any = []): any {
    if (!term || !items) return items;

    return NgSearchFilterPipe.filter(items, term, excludes, this._lang);
  }

  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * @param excludes List of keys which will be ignored during search
   *
   */
  static filter(
    items: Array<{ [key: string]: any }>,
    term: string,
    excludes: any,
    lang: string
  ): Array<{ [key: string]: any }> {
    const toCompare = term.toLocaleLowerCase(lang);

    function checkInside(item: any, term: string) {
      if (
        typeof item === 'string' &&
        item.toString().toLocaleLowerCase(lang).includes(toCompare)
      ) {
        return true;
      }

      for (let property in item) {
        if (
          item[property] === null ||
          item[property] == undefined ||
          excludes.includes(property)
        ) {
          continue;
        }
        if (typeof item[property] === 'object') {
          if (checkInside(item[property], term)) {
            return true;
          }
        } else if (
          item[property].toString().toLocaleLowerCase(lang).includes(toCompare)
        ) {
          return true;
        }
      }
      return false;
    }

    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }
}
