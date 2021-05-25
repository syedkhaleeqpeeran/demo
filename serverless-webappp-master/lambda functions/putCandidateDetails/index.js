'use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;
  

  const params = {
    TableName: "CandidateDetails",
    Item: {
      candidateId: event.candidateId,
      name: event.name,
      emailId: event.emailId
    }
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch(err) {
    responseBody = `Unable to put product: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test",
      "access-control-allow-origin":"*"
    },
    body: responseBody
  };

  return response;
};
