firebase.firestore()
.collection('etiquetas')
.get()
.then(snapshot=>{
    snapshot.docs.map((doc, index)=>{
                    let cartItem = document.querySelector('.models .cart--item').cloneNode(true)
                    document.querySelector('.cart').append(cartItem)
                    document.querySelector('.tatto-area').append(cartItem)
                    cartItem.setAttribute('data-set', index)
                    addEtiquetas(cartItem, doc, index)
});

})


const addEtiquetas = (cartItem, doc, index)=>{
    Etique = doc.data()
    cartItem.querySelector('.name-Etiquetas').innerHTML = Etique.nameEtiqueta
    cartItem.querySelector('.removeEtiqueta').addEventListener('click',(e)=>{
        pegarKey(e)
        askremoveEtiqueta(doc, e)
    })
    cartItem.querySelector('.imprimirEtiqueta').addEventListener('click',(e)=>{
        const impr = confirm('Deseja imprimir ?')
        if(impr == true){
            window.location.href = './product.html?id=' + doc.id
        }
    })
    cartItem.querySelector('.updateEdit').addEventListener('click',(e)=>{
            const edit = confirm('Realmente deseja editar essa Etiqueta?')
            if(edit == true){
            firebase.firestore()
            .collection('etiquetas')
            .get()
            .then(snapshot =>{
                const etiquetas = snapshot.docs.map(doc =>({
                    ...doc.data(),
                    uid:doc.id
                }))
                window.location.href = "./index.html?uid=" + doc.id
            })
    }
})
buttonAtualizaEndEnviar()
}
const pegarKey = (e) => {
    // .closest retorna o elemento mais proximo que tem a class que passamos
    // do .pizza-item ele vai pegar o valor do atributo data-key
    key = e.target.closest('.cart--item').getAttribute('data-set')
    modalKey = key
    return key
}

const  askremoveEtiqueta = (doc, e) =>{
    const shoulremove = confirm('Deseja remover o protudo?')
    if(shoulremove == true){
        console.log(e)
        removeinfi(doc)
        e.target.parentNode.parentNode.remove();
    }
    
}

function removeinfi (doc){
    firebase.firestore()
    .collection('etiquetas')
    .doc(doc.id)
    .delete()
    .then(()=>{
    })
}     
const getEtiquetas = () =>{
    const urlId = new URLSearchParams(window.location.search)
    return urlId.get('uid')
}
const isnewEtiquetas = () =>{
    return getEtiquetas() ? false : true;
}

if(!isnewEtiquetas()){
    const uid = getEtiquetas()
    findEtiquetas(uid)
}

function buttonAtualizaEndEnviar(){
    if(!isnewEtiquetas()){
        document.querySelector('.enviar').innerHTML = 'Atualizar'
    }else{
        document.querySelector('.enviar').innerHTML = 'Enviar'
    }
}

function findEtiquetas(uid){
firebase.firestore()
.collection("etiquetas")
.doc(uid)
.get()
.then(doc =>{
    if(doc.exists){
        console.log(doc.id)
        let etiqueta = doc.data()
        findEtiquetasScreen(etiqueta)
    }else{
        window.location.href = "./index.html"
    }
})
}
function findEtiquetasScreen(etiqueta){
    let inputrest = document.getElementsByTagName('input'); 
    document.querySelector('#name-Etiquetas').value = etiqueta.nameEtiqueta
    document.querySelector('#composition-product').value = etiqueta.Composition
    document.querySelector('#indication-product').value = etiqueta.indicationOfEtiquetesProduct
    document.querySelector('#module-user').value = etiqueta.moduleUserOfProducts
    console.log(inputrest)
    inputrest[4].value = etiqueta.UmidadeMax[0]
    inputrest[5].value = etiqueta.UmidadeMax[1]
    inputrest[6].value = etiqueta.ProteinaBruta[0]
    inputrest[7].value = etiqueta.ProteinaBruta[1]
    inputrest[8].value = etiqueta.ExtratoEtereo[0]
    inputrest[9].value = etiqueta.ExtratoEtereo[1]
    inputrest[10].value = etiqueta.MateriaFibrosa[0]
    inputrest[11].value = etiqueta.MateriaFibrosa[1]
    inputrest[12].value = etiqueta.MateriaMineral[0]
    inputrest[13].value = etiqueta.MateriaMineral[1]
    inputrest[14].value = etiqueta.Calcio[0]
    inputrest[15].value = etiqueta.Calcio[1]
    inputrest[16].value = etiqueta.Fosforo[0]
    inputrest[17].value = etiqueta.Fosforo[1]
    inputrest[18].value = Etique.validate.fab
    inputrest[19].value = Etique.validate.val
    inputrest[20].value = Etique.validate.lot
}






const garantiaProduct = (cartItem, Etique)=>{
    cartItem.querySelector('.composition-Product').innerHTML = Etique.Composition
    cartItem.querySelector('.indication-Product').innerHTML = Etique.indicationOfEtiquetesProduct
    cartItem.querySelector('.endereco').innerHTML = Etique.moduleUserOfProducts
    cartItem.querySelector('.umidadeQuant').innerHTML = `${Etique.UmidadeMax[0]}/kg`
    cartItem.querySelector('.umidadePercentage').innerHTML = Etique.UmidadeMax[1]
    cartItem.querySelector('.proteinaQuant').innerHTML = `${Etique.ProteinaBruta[0]}/kg`
    cartItem.querySelector('.proteinaPercentage').innerHTML = Etique.ProteinaBruta[1]
    cartItem.querySelector('.extratoQuant').innerHTML = `${Etique.ExtratoEtereo[0]}/kg`
    cartItem.querySelector('.extratoPercentage').innerHTML = Etique.ExtratoEtereo[1]
    cartItem.querySelector('.materiaFibrosaQuant').innerHTML = `${Etique.MateriaFibrosa[0]}/kg`
    cartItem.querySelector('.materiaFibrosaPercentage').innerHTML = Etique.MateriaFibrosa[1]
    cartItem.querySelector('.materiaMineralQuant').innerHTML = `${Etique.MateriaMineral[0]}/kg`
    cartItem.querySelector('.materiaMineralPercentage').innerHTML = Etique.MateriaMineral[1]
    cartItem.querySelector('.calcioQuant').innerHTML = `${Etique.Calcio[0]}/kg`
    cartItem.querySelector('.calcioPercentage').innerHTML = Etique.Calcio[1]
    cartItem.querySelector('.fosforoQuant').innerHTML =  `${Etique.Fosforo[0]}/kg`
    cartItem.querySelector('.fosforoPercentage').innerHTML =Etique.Fosforo[1]
    cartItem.querySelector('.fab').innerHTML = `Fab:${Etique.validate.fab}`
    cartItem.querySelector('.val').innerHTML = `Val: ${Etique.validate.val}`
    cartItem.querySelector('.lot').innerHTML = `Lot: ${Etique.validate.lot}`
}