async function getCharacter(url) {
  return axios.get(url).then(res => res.data);
}

async function getCharactersFromEpisode(url) {
  const characters = await axios
    .get(url)
    .then(res => res.data)
    .then(data => data.characters);
  return characters;
}

//OTRA FORMA
// async function getCharactersFromEpisode2(url) {
//   const res = await axios
//     .get(url)
//     const data = res.data;
//     const characters = data.characters;
//   return characters;
// }

async function start() {
  const charactersEndpoints = await getCharactersFromEpisode(
    'https://rickandmortyapi.com/api/episode/1',
  );

  const charactersData = await Promise.all(
    charactersEndpoints.map(url => getCharacter(url))
    );
    
    //ESPERA A RESOLVER TODAS LAS PROMESAS QUE SE PASAN COMO STRING
    //QUE SON LOS CARACTERES Y SE GUARDAN EN CHARACTERSDATA PARA PODER MOSTRAR MAS ABAJO EN START CON .THEN

  return charactersData;
}

function createNode(string) {
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.firstChild;
}

start()
  .then(data => {
    data.forEach(character => {
      const characterNode = createNode(`<div class="character">

        <h1>${character.name}</h1>
        <img src="${character.image}"  />

      </div>`);
        console.log(characterNode);


      document
        .querySelector('.characters')
        .appendChild(characterNode);
    });

    console.log('all data fectch', data);
  })
  .catch(error => {
    console.error('ups', error);
  });
  

//  console.log( getCharacter( 'https://rickandmortyapi.com/api/episode'));
