/* eslint-disable no-console */
let requestCalls = 0;

const printRequestCalls = (request, response, next) => {
  requestCalls += 1;
  console.log(`Requests made until now: ${requestCalls}`);

  next();
};

export default { printRequestCalls };
