
firebase.firestore()
.collection('etiquetas')
.get()
.then(snapshot=>{
    snapshot.docs.map((doc, index)=>{
        console.log(getEtiquetasProduct())
        console.log(doc.data())
                    if(doc.id == getEtiquetasProduct()){
                            document.querySelector('header').style.display = 'none'
                            let cartItem = document.querySelector('.models .cart--item').cloneNode(true)
                            document.querySelector('.cart').append(cartItem)
                            document.querySelector('.tatto-area').append(cartItem)
                            cartItem.setAttribute('data-set', index)
                            addEtiquetas(cartItem, doc, index)
                            window.print()
                            window.location.href ='./index.html'
                    }
});
alert(`Nenhuma Etiqueta foi selecionada.`)
window.location.href ='./index.html'
})

const addEtiquetas = (cartItem, doc, index)=>{
    Etique = doc.data()
    garantiaProduct(cartItem, Etique)
}
const getEtiquetasProduct = () =>{
    const urlId = new URLSearchParams(window.location.search)
    return urlId.get('id')
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