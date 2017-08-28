module.exports = function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        if (!t.isMemberExpression(path.node.callee)) return;

        const callee = path.node.callee;
        if (!t.isIdentifier(callee.object, { name: 'console' })) return;
        if (!t.isIdentifier(callee.property, { name: 'log' })) return;
        const { logPrefix } = state.opts;

        path.node.arguments = [t.stringLiteral(logPrefix)].concat(path.node.arguments);
      },
    },
  };
};
