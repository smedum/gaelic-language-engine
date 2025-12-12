exports.handler = async () => {
  const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };
  return { statusCode: 200, headers, body: JSON.stringify({ packs: [{ id: 'gaelic_basic', name: 'Gaelic Basics', phrase_count: 50 }] }) };
};
