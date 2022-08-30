export default async function response() {
  const response = await fetch(`http://localhost:8080/create-checkout-session`, {
    method: 'POST',
  });
  return response;
}
