
function bwiCalc(){

    let height = +inputHeight.value;
    let weight = +inputWeight.value;

    if(height > 3){
        height = height / 100;
    }

    let bwi = weight / (height ** 2);

    bwi = Math.floor(bwi*10) / 10;

    bwiValue.innerHTML = `Ваш индекс: ${bwi}`;

    if(bwi < 16){
        bwiMeaning.innerHTML = "Это означает: Выраженный дефицит массы тела";
    } else if(bwi >= 16 && bwi < 18.5){
        bwiMeaning.innerHTML = "Это означает: Недостаточная (дефицит) масса тела";
    } else if(bwi >= 18.5 && bwi < 25){
        bwiMeaning.innerHTML = "Это означает: Норма";
    } else if(bwi >= 25 && bwi < 30){
        bwiMeaning.innerHTML = "Это означает: Избыточная масса тела (предожирение)";
    } else if(bwi >= 30 && bwi < 35){
        bwiMeaning.innerHTML = "Это означает: Ожирение 1 степени";
    } else if(bwi >= 35 && bwi < 40){
        bwiMeaning.innerHTML = "Это означает: Ожирение 2 степени";
    } else{
        bwiMeaning.innerHTML = "Это означает: Ожирение 3 степени";
    }

}



