function verificar(){
    let ano = 2025
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let img =document.getElementById('foto')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] O ano de nascimento não pode ser zero, e não pode ser maior que o ano atual (2025')
    } else {
      let fsex = document.getElementsByName('radsex')
      let idade = ano - Number(fano.value)
      let genero = ''
 
      if (fsex[0].checked){
        document.body.style.background= '#1569a1b8'
        genero = 'homem'
        
        if (idade >= 0 && idade < 10){
          //Criança
          img.src = "imagens/dwightC.jpeg"
        } else if(idade < 21){
          //Jovem
          img.src = "imagens/jimJ.jpeg"
        } else if( idade < 50){
        //Adulto
        img.src = "imagens/homemd.jpg"
        } else {
          //idoso
          img.src= "imagens/creedV.jpeg"
        }
      }
       if (fsex[1].checked){
         document.body.style.background= '#88329bc5'
        genero = 'mulher'
        if (idade >= 0 && idade < 10){
          //Criança
          img.src= 'imagens/mulherc.jpg'
        } else if(idade < 21){
          //Jovem
          img.src= "imagens/pamJ.jpeg"
        } else if( idade < 50){
        //Adulto
        img.src= "imagens/mulherd.jpeg"
        } else {
          //idoso
          img.src= "imagens/meredithV.jpeg"
        }
       } 
      res.innerHTML = `Registrado um(a) ${genero} com ${idade} anos de idade`
    }
}