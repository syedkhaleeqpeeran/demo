use strict';
const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const params = {
    TableName: "CandidateDetails",
    Key: {
      "candidateId" : event.candidateId
    }
    
  };

  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data.Item);
    statusCode = 200;
  } catch(err) {
    responseBody = `Unable to get products: ${err}`;
    statusCode = 403;
  }
