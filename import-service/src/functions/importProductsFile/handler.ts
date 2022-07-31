import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { HttpCode } from "src/utils/http.utils";
import { APIGatewayProxyEvent } from "aws-lambda";
import { formatResponse, lambdaHandler } from "src/utils/handler.utils";

const BUCKET_NAME = "product-service-be"

export const main = lambdaHandler(async (event: APIGatewayProxyEvent) => {
    const { name } = event.queryStringParameters;

    const s3Client = new S3Client({ region: "eu-east-1" });
    const bucketParams = {
        Bucket: BUCKET_NAME,
        Key: `uploaded/${name}`,
        ContentType: "text/csv",
    };
    try {
        const command = new PutObjectCommand(bucketParams);
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
        console.log("----- Signed Url is: ", signedUrl);
        return formatResponse(signedUrl, HttpCode.OK);
    } catch (error) {
        console.log("error while generate signed url:", error);
        throw error;
    }
})
