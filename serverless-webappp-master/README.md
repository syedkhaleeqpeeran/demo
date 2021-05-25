# serverless-webappp

This project is a serverless static web application hosted on s3 using a list of other aws services such as api gateway , lambda functions as backend and dynamodb as a database.The architecture is as follows :

s3 -> Api Gateway -> Lambda functions -> DynamoDb.
(Note: The services could be created using CloudFormation template but this project was done by creating all of the services manually.)
So lets get started!

INSTRUCTIONS:
#1: Log in to the aws console using the credentials.

#2: CREATE a table in DynamoDb by clicking on "Create Table" and providing the specifications such as "table name" and a "partition key" which simply is the primary key (a unique identity) of your table. 
For this project:
Table name: CandidateDetails
partition key: candidateId

#3: Once your table is created, you can manually populate it using the "Create item" tab or use lamda function to populate it.

#4: The next step is to create lambda functions to connect with the database. Navigate to the "Lambda" service and clic on " Create function"

#5:Select "Author from scratch" and give the " function name " "runtime" and "permission" which are in this case , "getCandidateDetails","nodejs" and an IAM role created for lambda permissions.

#6: Once the lambda function is created, in the inline code editor, enter the code for the getCandidateDetails present in the github repo.Test the code and your lambda function is created.

#7: Similarly create 3 more lambda functions and type in the code for the corresponding lambda functions, all present in the repo.

#8: So now, the database and the lambda functions are ready and are connected. The next step is to create the Api gateways.

#9 For this project, 2 Api gateways were created. One for getCandidateDetails, getAllCandidateDetails and deleteCandidateDetails and the other for putCandidateDetails.

#10: Switch to the Api Gateway in the aws console and click on "Create API" and under "rest Api" click on "build"

#11:Select "new api" and give the api name as "getCandidateDetails" and the "endpoint type" as "edge optimized". Click on "create api"

#12: Once your api is created, now you need to create resources and methods from the "actions" dropdown box.

#13: Create methods GET, POST, DELETE and another GET method in a sub-resource.

#14: Now, the api gateways need to be linked to the respective lambda functions. Click on the method created, and click on " Integration request" 

#15: Under "Integration Request" select the "Integration Type" as "lambda function" and the "lambda region" and select the "lambda function" that needs to be associated with the current method.The lambda fucntion is linked to the corresponding api and method.

#16: Now check if the sequence works (i.e Api gateway -> Lambda function -> Dynamodb). by deploying the api gateway and open postman app and copy the url dislayed after deploying the api and post it in the postman's GET OR POST OR DELETE http request type and provide sample data as and when required and check if it is reflecting in the database.

#17: Once all of this is done, its time to launch our frontend!

#18: Before creating an s3 bucket, modify the html file and paste the Api gateway method URLs in the code so that the frontend and the api gateway can now establish a connection.Save the changes.

#19: Now create an aws s3 bucket by providing the name and permissions for the bucket.Once created, upload all the depency files and the code files into the bucket and under the "properties" tab, select " Static web hosting"

#20:Enable static web hosting and enter the name of the file that contains the code in the " Index Document" and "Error Document" text boxes and save changes.

#21: The website is hosted and the URL is displayed. Click on the URL to see the webpage open. Now try to access db through the frontend!
