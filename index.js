function handleCalcSalary() {
    const span = document.getElementById ('result');

    const days = document.getElementById('working-days').value;
    const baseSalary = document.getElementById('salary').value;

if (days && salary) {
    const result = (days) * (baseSalary);

    span.innerHTML = `${result.toLocaleString()} VND`;
    span.setAttribute('style', 'color: red ');
    
} else {
    alert('Please enter your working days and your base salary')
}

}

function handleCalcTotalSum() {
    const nums = [];
    for (let index = 1; index < 6; index++) {
        const num = document.getElementById(`num${index}`).value;
        if (num && typeof parseInt(num) === 'number') {
            nums.push(parseInt(num));
        }
    } 
    const average = document.getElementById('list-number');
    const total = nums.reduce((a,b) => a+b);
    average.setAttribute('class','text-warning');
    average.innerHTML = `${(total/5).toFixed(1).toLocaleString()}`;
}

function handleChangeCurrency() {
    const dollar = document.getElementById('inp-dollar').value;
    const changingRate = 23656;
    if (dollar) {
        const vietNamDong = dollar*changingRate;
        const h2 = document.getElementById('change');
        h2.setAttribute('class','text-success');
        h2.innerHTML = `${(vietNamDong).toLocaleString(1)} VND`;
        
    } else{
        alert('How many dollar you want to change?');
    }
}

function handlePrintList(){
for (let index = 0; index <= 10; index++) {
    
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.innerHTML= `Index: ${index}`;
    p.setAttribute('style', 'margin:0px');
    div.appendChild(p);

    div.setAttribute('style','padding: 10px; margin: 10px 10px');
    div.setAttribute('class', index % 2 === 0 ? 'bg-danger': 'bg-success');
    handlePrintElement('items-container', div);
}
}



function handleCalcSize(){
    const dai = document.getElementById('length').value;
    const rong = document.getElementById('width').value;
    
    const chuVi = document.getElementById('chu-vi');
    
    if (dai && rong) {
        const chuViHcn = (parseInt(dai)+parseInt(rong))/2;
    
        chuVi.innerHTML = `${chuViHcn.toLocaleString()} cm`;
        chuVi.setAttribute('style', 'color: red ');
        
    } else {
        alert('Please enter length and width for size')
    }
}

function handleCalcArea(){
    const dai = document.getElementById('length').value;
    const rong = document.getElementById('width').value;

    const dienTich= document.getElementById('dien-tich');
    
    if (dai && rong) {
        const dienTichHcn = (dai)*(rong);
    
        dienTich.innerHTML = `${dienTichHcn.toLocaleString()} cm2`;
        dienTich.setAttribute('style', 'color: red ');
        
    } else {
        alert('Please enter length and width for area')
    }
}



function handlePrintElement (elementId, element){
    document.getElementById(elementId).appendChild(element);
}

