import { isArray, isObject } from 'lodash';
import { parseArray } from './array';
import { parseObject } from './object';
import { parsePrimative } from './primitive';

export function parse(json: {} | Array<any>) {
  return isArray(json)
    ? parseArray(json)
    : isObject(json)
      ? parseObject(json)
      : parsePrimative(json);
}
