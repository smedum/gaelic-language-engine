exports.handler = async () => {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
  return { statusCode: 200, headers, body: JSON.stringify({ message: 'Community endpoint ready', total_phrases: 125 }) };
};
