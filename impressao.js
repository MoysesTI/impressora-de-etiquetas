
    let compositionProduct = () => document.querySelector('#composition-product').value
    let indicationProduct = () => document.querySelector('#indication-product').value
    let moduleUser = () => document.querySelector('#module-user').value
    let nameEtiquet = ()=> document.querySelector('#name-Etiquetas').value
    const criarProduct = () =>{
    const confimationEtiquetas = confirm('Deseja Realmente Criar uma Etiquetas ?')
    if(confimationEtiquetas == true){
        const etiquetasnew = creatEtiques()
        
        if(isnewEtiquetas()){
            sava(etiquetasnew)
         
        }else{
            update(etiquetasnew)
        
        }
}

}

function restForm(){
    window.location.href = './index.html'
}
let newEtiquetesProducts
function creatEtiques(){
    let ulInputs = document.getElementsByTagName('input'); 
            return newEtiquetesProducts = {
                nameEtiqueta:nameEtiquet(),
                Composition:compositionProduct(),
                indicationOfEtiquetesProduct:indicationProduct(),
                moduleUserOfProducts:moduleUser(),
                UmidadeMax:[ulInputs[4].value,ulInputs[5].value],
                ProteinaBruta:[ulInputs[6].value, ulInputs[7].value],
                ExtratoEtereo:[ulInputs[8].value, ulInputs[9].value],
                MateriaFibrosa:[ulInputs[10].value,ulInputs[11].value],
                MateriaMineral:[ulInputs[12].value,ulInputs[12].value],
                Calcio:[ulInputs[13].value,ulInputs[14].value],
                Fosforo:[ulInputs[15].value,ulInputs[16].value],
                validate:{
                    fab:ulInputs[17].value,
                    val:ulInputs[18].value,
                    lot:ulInputs[19].value
                },
            }
}

function update(etiquetasnew){
    firebase.firestore()
    .collection('etiquetas')
    .doc(getEtiquetas())
    .update(etiquetasnew)
    .then(()=>{
        restForm()
    })
}

function sava(etiquetasnew){
firebase.firestore()
        .collection('etiquetas')
        .add(etiquetasnew)
        .then((snapshot)=>{
            restForm()
    })
}