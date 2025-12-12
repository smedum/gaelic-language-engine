exports.handler = async (event) => {
  const headers = { 'Content-Type': 'application/json' };
  return { statusCode: 200, headers, body: JSON.stringify({ status: 'connected', message: 'Website sync ready' }) };
};
