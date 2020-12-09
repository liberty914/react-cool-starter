import { Express } from "express";
import chalk from "chalk";

import { ENV } from "../app/_bootstrap/env";

export const devServer = (app: Express): void => {
  const webpack = require("webpack");
  const webpackConfig = require("../../tools/webpack/config.babel");
  const compiler = webpack(webpackConfig);
  const instance = require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
    headers: { "Access-Control-Allow-Origin": "*" },
    stats: "minimal",
    serverSideRender: true,
    watchOptions: { ignored: /node_modules/ },
  });

  app.use(instance);

  instance.waitUntilValid(() => {
    const url = `http://${ENV.HOST}:${ENV.PORT}`;
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });

  app.use(
    require("webpack-hot-middleware")(compiler, {
      log: false,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000,
    })
  );
};
