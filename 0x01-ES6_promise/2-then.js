export default function handleResponseFromAPI(promise) {
  const objt = { status: 200, body: 'success' };
  return promise
    .then(() => objt)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
