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