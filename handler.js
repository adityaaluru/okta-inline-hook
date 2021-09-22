"use strict";

module.exports.hello = async (event) => {
  console.log("event received");
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello Serverless!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.tokenHook = async (event) => {
  console.log("Token inline hook invoked... ");
  //const reqBody = JSON.parse(event.body);
  console.log("Event Body: ", event);
  const resBody = {
    commands: [
      {
        type: "com.okta.access.patch",
        value: [
          {
            op: "add",
            path: "/claims/department_id",
            value: "my-department",
          },
        ],
      },
    ],
  };

  return {
    statusCode: 200,
    body: JSON.stringify(resBody, null, 2),
  };
};
