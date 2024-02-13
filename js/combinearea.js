//triangle area
function calculateTriangleArea(){
    const base = inputValueConverter('input-base');
    const height = inputValueConverter('input-height');
    const area = 0.5 * base * height;
    resultUpdate('triangle-area' , area);
}
//rectangle area
function calculateRectangleFunction(){
    const width = inputValueConverter('rectangle-width');
    const length = inputValueConverter('rectangle-length');
    const area =width * length;
    resultUpdate('rectangle-area' , area);
}
//Parallelogram area
function calculateParallelogramFunction(){
    const base = inputValueConverter('parallelogram-base');
    const height = inputValueConverter('parallelogram-heigth');
    const area = base * height;
    resultUpdate('parallelogram-area' , area);
}
//Rhombus area
function calculateRhombusArea(){
    const d1 = inputValueConverter('rhombus-d1');
    const d2 = inputValueConverter('rhombus-d2');
    const area = 0.5 * d1 * d2;
    resultUpdate('rhombus-area', area);
}
//Pentagon area
function calculatePentagonArea(){
    const perimeter = inputValueConverter('pentagon-perimeter');
    const apothem = inputValueConverter('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    resultUpdate('pentagon-area' , area);
}
//Ellipse area
function calculateEllipseArea(){
    const aAxis = inputValueConverter('a-axis');
    const bAxis = inputValueConverter('b-axis');
    const tempArea = Math.PI * aAxis * bAxis;
    const area = parseFloat(tempArea.toFixed(6));
    resultUpdate('ellipse-area' , area);
}

function inputValueConverter(converterId){
    const inputId = document.getElementById(converterId);
    const inputValue = inputId.value;
    const convertedValue = parseFloat(inputValue);
    return convertedValue;
}

function resultUpdate(reusltId , area){
    const resultArea = document.getElementById(reusltId);
    resultArea.innerText = area;
}