async function partidas (req, res) {

    const response = await fetch('https://api.cartolafc.globo.com/partidas');
    const jsonResponse =  await response.json();
  
    res.json(jsonResponse);
  
  }
  
  export default partidas;