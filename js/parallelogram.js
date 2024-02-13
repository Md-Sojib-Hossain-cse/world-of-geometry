function calculateParallelogramFunction(){
    const inputBase = document.getElementById('parallelogram-base');
    const baseValue = inputBase.value;
    const base = parseFloat(baseValue);

    const inputHeight = document.getElementById('parallelogram-heigth');
    const heightValue = inputHeight.value;
    const height = parseFloat(heightValue);

    const area = base * height ;
    document.getElementById('parallelogram-area').innerText = area;
}