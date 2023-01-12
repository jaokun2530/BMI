function myalert1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;
    alert(sum);
}

function myalert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;
    alert(sum);
}

function myalert3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;
    alert(sum);
}

function myalert4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;
    alert(sum);
}

function myBMI(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var hight =  parseInt(num2)/100;
    var hight = parseFloat(hight) * parseFloat(hight)


    var bmi = parseInt(num1) /  parseFloat(hight)
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + bmi.toFixed(2);
    alert(bmi);
}




const img = document.createElement("img")
img.src = "img/1.jpg";


document.getElementById("mydiv").appendChild(img);