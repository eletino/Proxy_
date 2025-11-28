import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://eletino.de/",
    changeOrigin: true
  })
);

app.listen(process.env.PORT || 3000);
