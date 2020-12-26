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
        { x: +x - width / 10, y: y0 },
        { x: +x - width / 10, y: pathY },
        { x: +x + width / 10, y: pathY },
        { x: +x + width / 10, y: y0 },
        { x: +x - width / 2, y: +y }, // 圆的左侧点坐标
        { x: +x + width / 2, y: +y }, // 圆的左侧点坐标
      ];
    },
    draw(cfg, container) {
      const group = container.addGroup();
      const points = this.parsePoints(cfg.points);
      group.addShape('path', {
        attrs: {
          path: [
            ['M', points[0].x, points[0].y],
            ['L', points[1].x, points[1].y],
            ['A', points[5].x - points[4].x, points[5].x - points[4].x, 0, 1, 1, points[2].x, points[2].y],
            ['L', points[3].x, points[3].y],
            ['Z'],
          ],
          ...cfg.defaultStyle,
          ...cfg.style,
        },
      });

      return group;
    },
  });
}
