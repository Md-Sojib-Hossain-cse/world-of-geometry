function calculateTriangleArea(){
    const inputBase = document.getElementById('input-base');
    const baseValue = inputBase.value;
    const base = parseFloat(baseValue);

    const inputHeight = document.getElementById('input-height');
    const heightValue = inputHeight.value;
    const height = heightValue;

    const area = 0.5* base * height;
    
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleFunction(){
    const inputWidth = document.getElementById('rectangle-width');
    const widthValue = inputWidth.value;
    const width = parseFloat(widthValue);
    
    const inputLength = document.getElementById('rectangle-length');
    const lengthValue = inputLength.value;
    const length = parseFloat(lengthValue);

    const area = width * length;
    document.getElementById('rectangle-area').innerText = area;
}