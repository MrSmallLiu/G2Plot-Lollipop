import { Params, interval, flow } from '@antv/g2plot';
import { LollipopOptions } from './type';
import { registerShape } from './shape';
registerShape();

/**
 * axis 配置
 * @param params
 */
function axis(params: Params<LollipopOptions>): Params<LollipopOptions> {
  const { chart, options } = params;
  const { xAxis, yAxis, xField, yField } = options;

  // 为 false 则是不显示轴
  if (xAxis === false) {
    chart.axis(xField, false);
  } else {
    chart.axis(xField, xAxis);
  }

  if (yAxis === false) {
    chart.axis(yField, false);
  } else {
    chart.axis(yField, yAxis);
  }

  return params;
}

/**
 * legend 配置
 * @param params
 */
export function legend(params: Params<LollipopOptions>): Params<LollipopOptions> {
  const { chart, options } = params;
  const { legend, seriesField } = options;

  if (legend && seriesField) {
    chart.legend(seriesField, legend);
  } else if (legend === false) {
    chart.legend(false);
  }

  return params;
}
/**
 * legend 配置
 * @param params
 */
export function scale(params: Params<LollipopOptions>): Params<LollipopOptions> {
  const { chart, options } = params;
  const { xField, yField } = options;
  chart.scale({
    [xField]: { sync: xField, nice: true },
    [yField]: { sync: yField, nice: true },
  });

  return params;
}
/**
 * 图形通道
 * @param params
 */
function geometry(params: Params<LollipopOptions>): Params<LollipopOptions> {
  const { chart, options } = params;
  const { diameterRatio, columnStyle, color } = options;
  chart.data(options.data);
  interval({
    chart,
    options: {
      ...options,
      widthRatio: diameterRatio,
      interval: {
        style: columnStyle,
        shape: 'interval-lollipop',
        color,
      },
    },
  });
  return params;
}

/**
 * tooltip通道，后续可以考虑使用g2plot暴露的tooltip
 * @param params
 */
function tooltip(params: Params<LollipopOptions>): Params<LollipopOptions> {
  const { chart, options } = params;
  const { tooltip } = options;
  chart.tooltip(tooltip);
  return params;
}

/**
 * interaction通道，后续可以考虑使用g2plot暴露的interaction
 * @param params
 */
function interaction(params: Params<LollipopOptions>): Params<LollipopOptions> {
  const { chart, options } = params;
  const { interactions } = options;
  for (const i of interactions) {
    if (i.enable === false) {
      chart.removeInteraction(i.type);
    } else {
      chart.interaction(i.type, i.cfg || {});
    }
  }
  return params;
}

export function adaptor(params: Params<LollipopOptions>): Params<LollipopOptions> {
  return flow(geometry, axis, legend, tooltip, interaction, scale)(params);
}
