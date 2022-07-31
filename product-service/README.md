# Çağla Gezgen AWS Course Task#4

Task#4: https://github.com/EPAM-JS-Competency-center/cloud-development-course-initial/blob/main/4_integration_with_database/task.md


* Product Service - list all: https://f8yw9c2t9g.execute-api.us-east-1.amazonaws.com/dev/products
* Product Service - list one: [[https://f8yw9c2t9g.execute-api.us-east-1.amazonaws.com/dev/products/{productId}](https://f8yw9c2t9g.execute-api.us-east-1.amazonaws.com/dev/products/d9fd2977-0437-44c3-9b93-78b864688c48)]
-> https://f8yw9c2t9g.execute-api.us-east-1.amazonaws.com/dev/products/d9fd2977-0437-44c3-9b93-78b864688c48
* Product Service - Create One: https://f8yw9c2t9g.execute-api.us-east-1.amazonaws.com/dev/products
* Backend Repo: https://github.com/caglagezgen/product-api-aws-ts
* Documentation Url: https://f8yw9c2t9g.execute-api.us-east-1.amazonaws.com/dev/swagger

Front End: https://d3v07c3t9s6dd6.cloudfront.net/
Front End Repo: https://github.com/caglagezgen/shop-react-redux-cloudfront
Front End PR: https://github.com/caglagezgen/shop-react-redux-cloudfront/pull/2



### What is done?

- [x] Auto swagger documentation was implemented. From now on when sls deploys, new swagger documentation deploys.
- [x]  Task 4.1 is implemented
- [x]  Task 4.2 is implemented lambda links are provided and returns data
- [x] Task 4.3 is implemented lambda links are provided and products is stored in DB (call Task 4.2 to see the product)
- [x] Your own Frontend application is integrated with Product Service (/products API) and products from Product Service are represented on Frontend. Link to a working Frontend application is provided for cross-check reviewer.
- [x] RDS PostgreSQL was set-up. Connection to app and query test data has been done.
- [x] PG module was set-up. Get products list and get product by id implemented. Credentials added to serverless.yml via dotenv.
- [x] POST /products lambda functions returns error 400 status code if product data is invalid
- [x]  All lambdas return error 500 status code on any error (DB connection, any unhandled error in code)
- [x]  All lambdas do console.log for each incoming requests and their arguments
- [x]  Transaction based creation of product

Self score for TASK-3: 9/9

PS: I switched the project TS for learning so I created a new GitHub repo with typescript.
