import { P } from '@antv/g2plot';
import { LollipopOptions } from './type';
import { adaptor } from './adaptor';
import { defaultOptions } from './default-options';

export class Lollipop extends P<LollipopOptions> {
  constructor(container: HTMLElement | string, options: LollipopOptions) {
    super(container, options, adaptor, defaultOptions);
  }
}
