var db = new PouchDB('mensajes');

//Guardar en Pouchdb
function guardarMensaje(mensaje){

    mensaje._id = new Date().toISOString()

    return db.put(mensaje).then( () => {

        self.registration.sync.register('nuevo-post');

        const newResp = {ok: true, offline: true}

        console.log('Mensaje Guardado Internamente')

        return new Response( JSON.stringify(newResp) )

    })

}


// Postear mensajes a la API
function postearMensajes() {

    const posteos = [];

    return db.allDocs({ include_docs: true }).then( docs => {


        docs.rows.forEach( row => {

            const doc = row.doc;

            const fetchPom =  fetch('api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( doc )
                }).then( res => {

                    return db.remove( doc );

                });
            
            posteos.push( fetchPom );


        }); // fin del foreach

        return Promise.all( posteos );

    });





}
