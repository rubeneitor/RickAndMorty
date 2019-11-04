// axios.get('https://rickandmortyapi.com/api/episode/1')
// .then(result => {
//     console.log('result', result)
// })
// .catch(error => {
//     console.error('error', error);
// })






// async function getEpisode(){
    
//     const cha = axios.get('https://rickandmortyapi.com/api/episode/1').then(res => {'res',
//         res.data;
//         document.getElementById('character').firstChild = cha;
//     });
// }


async function getEpisode(){
    
  return axios.get('https://rickandmortyapi.com/api/episode/1').then(res => res.data)
}

async function getLocation(url){
    return axios.get(url);
}

//GENERO TODOS LOS PERSONAJES


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

  async function getCharactersFromLocation(url) {
    const characters = await axios
      .get(url)
      .then(res => res.data)
      .then(data => data.residents);
    return characters;
  }

async function characters (){
  const idEpisodio = document.getElementById('episodio').value;
    const charactersEndpoints = await getCharactersFromEpisode(
        'https://rickandmortyapi.com/api/episode/' + idEpisodio,
      );
      const charactersData = await Promise.all(
        charactersEndpoints.map(url => getCharacter(url))
      );
    
      return charactersData;
}

async function charactersLocation (){
  const idLocalizacion = document.getElementById('localizacion').value;
  const charactersEndpoints = await getCharactersFromLocation(
      'https://rickandmortyapi.com/api/location/' + idLocalizacion,
    );
    const charactersData = await Promise.all(
      charactersEndpoints.map(url => getCharacter(url))
    );
  
    return charactersData;
}

function createNode(string) {
    const div = document.createElement('div');
    div.innerHTML = string;
    return div.firstChild;
  }

//   characters()
//   .then(data => {
//     data.forEach(character => {
//       const characterNode = createNode(`<div class="character">

//         <h1>${character.name}</h1>
//         <img src="${character.image}"  />

//       </div>`);
//         console.log(characterNode);


//       document
//         .querySelector('.characters')
//         .appendChild(characterNode);
//     });

//     console.log('all data fectch', data);
//   })
//   .catch(error => {
//     console.error('ups', error);
//   });

//GENERO PERSONAJES POR NOMBRE

async function getCharacterPorNombre(){
    // const name = prompt('Dime un nombre');
    const name = document.getElementById("name").value;

    console.log(name);
    const results = await axios.get('https://rickandmortyapi.com/api/character/?name=' + name).then(res => res.data)
    
    

    console.log(results);



    const firstResult = results.results[0];
    const chaNombre = firstResult.name;
    const chaImage = firstResult.image;
    const chaStatus = firstResult.status;
    const chaEspecie = firstResult.species;
    console.log(chaImage);
    console.log(chaNombre);
    document.getElementById('characters').innerHTML= `<h1>${chaNombre} </h1><img src=${chaImage} /> <p>${chaStatus}</p> <p>${chaEspecie}</p>`;
    
    
}



function mostrarPersonajePorNombre(){
    const inputValue = document.getElementById('name').value;
    console.log('INPUT VALUE ' + inputValue)
    document.getElementById('characters').style.display="block"; 
    if(inputValue === ""){
        alert('Introduce un nombre de un personaje valido. Gracias!')
        
          
    } else {
        const espacioBlanco = createNode(`<div id="character2"></div>`);
        document.querySelector('#characterVacio').appendChild(espacioBlanco);
        // document.getElementById('characters').style.display = "none"
        getCharacterPorNombre();
    }
    
}

function mostrarPorLocalizacion(){
  document.getElementById('characters').innerHTML = "";
  document.getElementById('characters').style.display="flex";
  charactersLocation().then(data => {
    data.forEach(character => {
      const characterNode = createNode(`<div id="ccharacter"><br>

        <h1>${character.name}</h1>
        <img src="${character.image}"  />
        <p>${character.status}</p>
        <p>${character.species}</p>

      </div>`);
        console.log(characterNode);


      document
        .querySelector('#characters')
        .appendChild(characterNode);
    });

    console.log('all data fectch', data);
  })
  .catch(error => {
    console.error('ups', error);
  });;
}

function mostrarTodosPersonajes(){
  document.getElementById('characters').innerHTML = "";
  document.getElementById('characters').style.display="flex";
  characters().then(data => {
    data.forEach(character => {
      const characterNode = createNode(`<div id="ccharacter">

        <h1>${character.name}</h1>
        <img src="${character.image}"  />
        <p>${character.status}</p>
        <p>${character.species}</p>

      </div><div></div>`);
        console.log(characterNode);


      document
        .querySelector('#characters')
        .appendChild(characterNode);
    });

    console.log('all data fectch', data);
  })
  .catch(error => {
    console.error('ups', error);
  });;
}

function buscarPorNombre(){
  const inputValue = document.getElementById('name').value;
    console.log('INPUT VALUE ' + inputValue)
    document.getElementById('characters').style.display="block"; 
    if(inputValue === ""){
        alert('Introduce un nombre de un personaje valido. Gracias!')
        
          
    } else {
        const espacioBlanco = createNode(`<div id="character2"></div>`);
        document.querySelector('#characterVacio').appendChild(espacioBlanco);
        // document.getElementById('characters').style.display = "none"
        getCharacterPorNombre();
    }
}

function buscarPorEstado(){
  const inputValue = document.getElementById('name').value;
    console.log('INPUT VALUE ' + inputValue)
    document.getElementById('characters').style.display="block"; 
    if(inputValue === ""){
        alert('Introduce un nombre de un personaje valido. Gracias!')
        
          
    } else {
        const espacioBlanco = createNode(`<div id="character2"></div>`);
        document.querySelector('#characterVacio').appendChild(espacioBlanco);
        // document.getElementById('characters').style.display = "none"
        getCharacterPorEstado();
    }
}

function limpiarResultados(){
  document.getElementById('characters').innerHTML = "";
}








// async function start(){
    
// }

// start().then((data) => {
//     console.log('all data fecth')
// })
// getCharacter();





