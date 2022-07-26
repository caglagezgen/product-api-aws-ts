// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "RS-AWS Product Shop Import Service API",
    "version": "1"
  },
  "paths": {
    "/import": {
      "get": {
        "summary": "Import a csv file contains products",
        "description": "",
        "operationId": "importProductsFile.get.import",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "name",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "Creates and returns a new signed url for upload file to s3 bucket."
          },
          "500": {
            "description": "Server error."
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {},
  "basePath": "/dev"
};