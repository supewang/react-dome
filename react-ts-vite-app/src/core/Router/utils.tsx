/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LazyExoticComponent, ReactNode } from "react";

/**
 * @description 路由懒加载
 * @param {Element} Com 需要访问的组件
 * @returns element
 */
export const lazyLoad = (Com: LazyExoticComponent<any>): ReactNode => {
  return <Com />;
};
