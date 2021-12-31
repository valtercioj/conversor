urlDolar = ' https://economia.awesomeapi.com.br/last/USD-BRL'
urlEuro = 'https://economia.awesomeapi.com.br/last/EUR-BRL'

const conversor = async ()=>{
    const moedas = document.querySelectorAll("#moedas option")
    
    let valor = document.getElementById("valor").value
    let result = document.getElementById("result")
  
     const responseDolar = await fetch(urlDolar)
     const cotacaoDolar = await responseDolar.json()
      const responseEuro = await fetch(urlEuro)
     const cotacaoEuro = await responseEuro.json()
      
     moedas.forEach(e => {
        if(e.selected == true && e.value=='Dolar'){
            result.innerText = `${valor} $ = ${(valor*parseFloat(cotacaoDolar.USDBRL.low
)).toFixed(2)} BRL`
        }
        else if (e.selected == true && e.value=='Euro'){
            result.innerText = `${valor} € = ${(valor*parseFloat(cotacaoEuro.EURBRL.low
)).toFixed(2)} BRL`
        }
    })
  }
  
