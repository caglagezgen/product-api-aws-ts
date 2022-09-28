import { pathHandler } from "../../utils/handler.utils";

export default {
  handler: `${pathHandler(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: "import",
        cors: true,
        summary: "Import a csv file contains products",
        authorizer: {
          name: 'basicAuthorizer',
          arn: "arn:aws:lambda:us-east-1:142019455180:function:authorization-service-dev-basicAuthorizer",
          identitySource: 'method.request.header.Authorization',
          type: 'token',
        },
        request: {
          parameters: {
            querystrings: {
              name: true,
            },
          },
        },
        responses:{
          200:{
            description: "Creates and returns a new signed url for upload file to s3 bucket.",
          },
          500: {
            description: "Server error.",
          },
        }
      },
    },
  ],
};