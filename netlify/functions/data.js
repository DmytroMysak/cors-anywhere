exports.handler = function (event, context) {
  console.log({ url: event.queryStringParameters.url });

  return fetch(event.queryStringParameters.url).then((res) =>
    res.text().then((body) => ({
      headers: { "Content-type": "application/json" },
      statusCode: 200,
      body: body,
    }))
  );
};
