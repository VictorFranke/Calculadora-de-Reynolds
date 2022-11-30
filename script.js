
function calcular(){
    var velocidade = document.getElementById("txt1")
    var diametro = document.getElementById("txt2")
    var viscosidade_cinetica = document.getElementById("txt3")
    var rugosidade = document.getElementById("txt4")

    var opera = document.getElementById("operacao")
    var res = document.getElementById("res")
    var operador = document.getElementById("operador_multiplicador")

    if(velocidade.length == 0 || diametro.value.length == 0 || viscosidade_cinetica.value.length == 0){
        window.alert("[ERROR] Faltam dados")
    }
    else{
        res.innerHTML = "Número de Reynolds: "

        var v = Number(velocidade.value)
        var d = Number(diametro.value)
        var r = Number(rugosidade.value)

        var sel = operador.options[operador.selectedIndex].value
        if(sel == "v-9"){

            var vo = Number(viscosidade_cinetica.value)
            var Re = (v*(d*0.001)/(vo*0.000000001))
            var selec = opera.options[opera.selectedIndex].value

            if(selec === "M1"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var B = (2.457*Math.log(1/(((7/Re)**(0.9))+(0.27*r/d))))**(16)
                    var C = (37530/Re)**16
                    var f = 8*((((8/Re)**(12))+(1/((B+C)**(1.5))))**(1/12))
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M2"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = (-2*(Math.log10((r/(d*3.7065))-(5.0452/Re)*Math.log10((1/2.8257)*((r/d)**1.1098)+(5.8506/(Re**0.8981))))))**(-2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M3"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = (-0.782*Math.log((6.9/Re)+(r/(d*3.7))**(1.11)))**(-2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M4"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = 0.25/((Math.log10((r/(d*3.7))+5.74/(Re**0.9)))**2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }
        }

        if(sel == "v-6"){

            var vo = Number(viscosidade_cinetica.value)
            var Re = (v*(d*0.001)/(vo*0.000001))
            var selec = opera.options[opera.selectedIndex].value

            if(selec === "M1"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var B = (2.457*Math.log(1/(((7/Re)**(0.9))+(0.27*r/d))))**(16)
                    var C = (37530/Re)**16
                    var f = 8*((((8/Re)**(12))+(1/((B+C)**(1.5))))**(1/12))
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M2"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = (-2*(Math.log10((r/(d*3.7065))-(5.0452/Re)*Math.log10((1/2.8257)*((r/d)**1.1098)+(5.8506/(Re**0.8981))))))**(-2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M3"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = (-0.782*Math.log((6.9/Re)+(r/(d*3.7))**(1.11)))**(-2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M4"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = 0.25/((Math.log10((r/(d*3.7))+5.74/(Re**0.9)))**2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }
        }

        if(sel == "v-3"){

            var vo = Number(viscosidade_cinetica.value)
            var Re = (v*(d*0.001)/(vo*0.001))
            var selec = opera.options[opera.selectedIndex].value

            if(selec === "M1"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var B = (2.457*Math.log(1/(((7/Re)**(0.9))+(0.27*r/d))))**(16)
                    var C = (37530/Re)**16
                    var f = 8*((((8/Re)**(12))+(1/((B+C)**(1.5))))**(1/12))
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M2"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = (-2*(Math.log10((r/(d*3.7065))-(5.0452/Re)*Math.log10((1/2.8257)*((r/d)**1.1098)+(5.8506/(Re**0.8981))))))**(-2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M3"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = (-0.782*Math.log((6.9/Re)+(r/(d*3.7))**(1.11)))**(-2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }

            if(selec === "M4"){
                res.innerHTML += Re + "<br>"
                if(Re<2000){
                    res.innerHTML +="Escoamento é laminar <br>"
                    var f = 64/Re
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f
                }
                if(Re>=2000 & Re<=10000){
                    res.innerHTML +="Escoamento está em regime de transição"
                }
                if(Re>10000){
                    res.innerHTML +="Escoamento é turbulento <br>"
                    var f = 0.25/((Math.log10((r/(d*3.7))+5.74/(Re**0.9)))**2)
                    res.innerHTML += "Fator de fricção de Darcy (f): " + f 
                }
            }
        } 
    }
}