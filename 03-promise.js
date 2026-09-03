function prepararPedido(){
    return new Promise((resolve, reject)=>{
        temPao = false;
        setTimeout(()=>{
            if(temPao){
                resolve("Hambúrger pronto!");
            }else{
                reject(new Error("Não deu para fazer o Hambúrger"));
            }
            
        },2000)
    })
}

prepararPedido().then((resultado)=>{
    console.log(resultado)
}).catch((erro) =>{
    console.error(erro.message)
});