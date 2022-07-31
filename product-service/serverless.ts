import type { AWS } from "@serverless/typescript";
import getProducts from "@functions/getProductsList";
import getProductById from "@functions/getProductById";
import createProduct from "@functions/createProduct";
import * as dotenv from 'dotenv';

dotenv.config();

const serverlessConfiguration: AWS = {
  service: "product-service",
  frameworkVersion: "3",
  useDotenv: true,
  plugins: [
    "serverless-auto-swagger",
    "serverless-esbuild",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    stage: "dev",
    region: "us-east-1",
    profile: "cagla",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      PG_HOST: process.env.PG_HOST,
      PG_PORT: process.env.PG_PORT,
      PG_DATABASE: process.env.PG_DATABASE,
      PG_USERNAME: process.env.PG_USERNAME,
      PG_PASSWORD: process.env.PG_PASSWORD
    },
  },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk", "pg-native"],
      target: "node16",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    "serverless-offline": {
      httpPort: 8000,
    },
    autoswagger: {
      apiType: "http",
      basePath: "/${self:provider.stage}",
      title:"Çağla Gezgen's Store"
    },
  },
  package: { individually: true },
  functions: { getProducts, getProductById, createProduct },
};

module.exports = serverlessConfiguration;