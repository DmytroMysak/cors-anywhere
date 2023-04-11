exports.handler = function (event, context) {
  console.log({ url: event.queryStringParameters.url });

  return fetch(event.queryStringParameters.url).then((res) =>
    res.text().then((body) => ({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Content-type": "application/json",
      },
      statusCode: 200,
      body: body,
    }))
  );
};
