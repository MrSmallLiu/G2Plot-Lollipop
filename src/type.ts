import { ColumnOptions } from '@antv/g2plot';
export interface LollipopOptions extends Omit<ColumnOptions, 'columnWidthRaio'> {
  /**对应于柱状图的 columnWidthRatio */
  readonly radiusRatio?: number;
}
