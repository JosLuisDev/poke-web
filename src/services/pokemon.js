/*fetch es un metodo para obtener recursos de forma asincrona por la red, el metodo json es para extraer el contenido
        en el cuerpo del json (data), despues con un arrow function retornamos resolve con la data*/

        export async function getAllPokemon(url) {
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                    resolve(data);
                })
            })
        }
        
        /*Servicio para obtener toda la informacion del pokemon*/
        export async function getPokemon(url){
            return new Promise((resolve, reject) => {
                fetch(url).then(res => res.json()).then(data => {
                    resolve(data);
                })
            })
        }