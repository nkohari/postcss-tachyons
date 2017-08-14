import * as postcss from 'postcss';

export default postcss.plugin('postcss-tachyons', (options = {}) => {
  return root => {
    root.walkAtRules('tachyons', rule => {
      const tachyons = rule.params.split(/\s+/);
      tachyons.forEach(tachyon => {
        root.insertAfter(rule, postcss.decl({
          prop: 'composes',
          value: `${tachyon} from 'tachyons'`
        }));
      });
      rule.remove();
    });
  };
});
