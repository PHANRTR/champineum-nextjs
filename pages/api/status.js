 async function status (req, res) {

  const response = await fetch('https://api.cartolafc.globo.com/mercado/status');
  const jsonResponse =  await response.json();
  console.log(jsonResponse);

  res.json(jsonResponse);

}

export default status;