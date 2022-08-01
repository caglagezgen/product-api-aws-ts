import { pathHandler } from "../../utils/handler.utils";

export default {
  handler: `${pathHandler(__dirname)}/handler.main`,
  events: [
    {
      s3: {
        bucket: "caglagzgn-aws-import-service",
        event: "s3:ObjectCreated:*",
        rules: [
          {
            prefix: "uploaded/",
          },
        ],
        existing: true,
      },
    },
  ],
};