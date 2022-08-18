
function BMI(weight = 50, height = 1.6){
    let result = weight / (height * height);
    return result
}
console.log(BMI(5,4))



function Status(bmi){
    if (bmi < 18.5){
        change.style.color = "orange"
         "لديك نقص في الوزن"
    }else if (bmi >= 18.5 && bmi < 25){
         "وزنك صحي"
        change.style.color = "green"
    }else if (bmi >= 25){
        change.style.color = "red"
        return "لديك زيادة في الوزن"
    }
}

function calculate(){
    let weight = document.getElementById(`weight`).value
    let height = document.getElementById(`height`).value
    let bmi = BMI(weight,height) 
    let desc = Status(bmi)
    let div = document.getElementById('result')
    div.innerText = bmi + `==` + desc
}
let change = document.getElementById(`result`)

function color (){
    if (bmi < 18.5){
        change.style.color = "orange"
}else if ((bmi >= 18.5 && bmi < 25)){
        change.style.color = "green"
}else if (bmi >= 25){
        change.style.color = "red"
}
}