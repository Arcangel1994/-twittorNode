class Camara{

    constructor(videoNode){

        this.videoNode = videoNode
        console.log('Class Inicializada')

    }


    encender(){

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 300,
                height: 300
            }
        }).then(stream => {

            this.videoNode.srcObject = stream
            this.stream = stream

        });

    }

    apagar(){

        this.videoNode.pause()

        if(this.stream){
            this.stream.getTracks()[0].stop()
        }

    }

    tomarFoto(){

        //Donde vamos a poner la foto
        let canvas = document.createElement('canvas')

        //dimenciones del canva
        canvas.setAttribute('width', 300)
        canvas.setAttribute('height', 300)
        
        //obtener el contesto 
        let context = canvas.getContext('2d') //Sola la imagen

        //dibujar la imagen
        context.drawImage(this.videoNode,0,0,canvas.width, canvas.height)

        this.foto = context.canvas.toDataURL();

        canvas = null
        context = null

        return this.foto

    }

}