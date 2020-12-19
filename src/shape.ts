import { G2 } from '@antv/g2plot';
export function registerShape(): void {
  G2.registerShape('interval', 'interval-lollipop', {
    getPoints(shapePoint) {
      const { x, y, y0 } = shapePoint;
      const width = shapePoint.size;
      /**
       *  4
       * 1——2
       * |  |
       * 0——3
       * 4: 圆的位置
       * */
      // 让线向下一点儿，不至于到圆心的位置
      const pathY = +y - width;
      return [
        { x: +x - width / 2, y: y0 },
        { x: +x - width / 2, y: pathY },
        { x: +x + width / 2, y: pathY },
        { x: +x + width / 2, y: y0 },
        { x: +x, y: +y - width / 2 },
      ];
    },
    draw(cfg, container) {
      const group = container.addGroup();
      const points = this.parsePoints(cfg.points);

      //绘制线
      cfg.defaultStyle.stroke = cfg.defaultStyle.fill;
      cfg.defaultStyle.strokeOpacity = cfg.defaultStyle.fillOpacity;
      if (cfg.color) {
        cfg.style.stroke = cfg.color;
        cfg.style.fill = cfg.color;
      }
      group.addShape('path', {
        attrs: {
          path: [
            ['M', (points[0].x + points[3].x) / 2, points[0].y],
            ['L', (points[0].x + points[3].x) / 2, points[1].y],
          ],
          ...cfg.defaultStyle,
          ...cfg.style,
        },
      });
      const r = (points[3].x - points[0].x) / 2;

      // 绘制圆
      group.addShape('circle', {
        attrs: {
          x: points[4].x,
          // 让圆的最上边代表数据值，防止99.7这种圆截断一部分
          y: points[4].y,
          r,
          ...cfg.defaultStyle,
          ...cfg.style,
        },
      });

      return group;
    },
  });
}
