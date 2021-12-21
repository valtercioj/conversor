const conversor = ()=>{
    const moedas = document.querySelectorAll("#moedas option")
    
    let valor = document.getElementById("valor").value
    let result = document.getElementById("result")
  
    moedas.forEach(e => {
        if(e.selected == true && e.value=='Dolar'){
            result.innerText = `${valor} $ = ${(valor*5.74).toFixed(2)} BRL`
        }
        else if (e.selected == true && e.value=='Euro'){
            result.innerText = `${valor} € = ${(valor*6.47).toFixed(2)} BRL`
        }
    })
  }
  
  