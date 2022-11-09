const WebpackDevServer = require('webpack-dev-server');

let serverConfig = {
  before: function (app) {
    app.use(function (req, _, _) {
      eval(req.query.input); // Noncompliant (S5334)
    });
  },
  after: function (app) {
    app.use(function (req, _, _) {
      eval(req.query.input); // Noncompliant
    });
  }
};

const devServer = new WebpackDevServer(compiler, serverConfig);