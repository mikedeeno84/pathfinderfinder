import { Injectable } from '@angular/core';
import isEqual from 'lodash.isequal';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public smartSearchHelper(
    source: number | string | any[] | object,
    query: string
  ): boolean {
    if (source && source !== 0) {
      if (typeof source === 'string') {
        return this.stringIncludesNoCase(source, query);
      } else if (typeof source === 'number') {
        return this.stringIncludesNoCase(String(source), query);
      } else if (Array.isArray(source)) {
        return source.some((nestedElement) => {
          return this.smartSearchHelper(nestedElement, query);
        });
      } else if (typeof source === 'object') {
        return Object.values(source).some((nestedElement) => {
          return this.smartSearchHelper(nestedElement, query);
        });
      }
    } else {
      return source === query;
    }
  }
  public stringIncludesNoCase(input: string, query: string): boolean {
    return input.toUpperCase().includes(query.toUpperCase());
  }
  private checkEqual(value, other): boolean {
    if (typeof value === 'string' && typeof other === 'string') {
      return value.toUpperCase() === other.toUpperCase();
    } else {
      return isEqual(value, other);
    }
  }
  public matchesQuery(input: any, query: object): boolean {
    let containsMatch = true;
    for (const propToCheck in query) {
      if (query.hasOwnProperty(propToCheck) && query[propToCheck]) {
        const valueToCheck = query[propToCheck];
        const inputToCheck = input[propToCheck];
        if (
          typeof valueToCheck === 'string' ||
          typeof valueToCheck === 'number'
        ) {
          containsMatch = isEqual(inputToCheck, valueToCheck);
        } else if (Array.isArray(valueToCheck) && valueToCheck.length) {
          containsMatch = valueToCheck.some((value) => {
            return (inputToCheck as any).some((inputValue) =>
            this.checkEqual(inputValue, value)
            );
          });
        } else if (valueToCheck && typeof valueToCheck === 'object' && Object.keys(valueToCheck).length) {
          return Object.keys(valueToCheck).some((key) => {
            return this.checkEqual(valueToCheck[key], inputToCheck[key]);
          });
        }
        if (!containsMatch) {
          break;
        }
      }
    }
    return containsMatch;
  }
  public fullFilter(
    value: any[],
    query: { $?: string; [otherFields: string]: any }
  ): any[] {
    let filteredValue = [...value];
    if (query) {
      if (query.$) {
        filteredValue = filteredValue.filter((element) =>
          this.smartSearchHelper(element, query.$)
        );
      } else if (query.actions) {
          filteredValue = filteredValue.filter((element) => {
            if (Array.isArray(element.action)) {
              return element.action.includes(query.actions);
            } else {
              return query.actions?.toUpperCase() === element.action?.toUpperCase();
            }
          });
      }
      const remainingQuery = { ...query };
      delete remainingQuery.$;
      delete remainingQuery.actions;
      if (Object.keys(remainingQuery).length > 0) {
        filteredValue = filteredValue.filter((element) => {
          return this.matchesQuery(element, remainingQuery);
        });
      }
    }
    return filteredValue;
  }
}
