import { createContext } from 'react';

/**
 * 泛型约束，对注入数据的类型推断支持
 *
 * @export
 * @template T
 * @param {(T | undefined)} [initialData=undefined]
 * @returns
 */
export default function createServiceContext<T>(
  _: (...args: any) => T,
  initialData: T | undefined = undefined,
) {
  return createContext(initialData as T);
}