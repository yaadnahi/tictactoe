let cells = document.getElementsByClassName('cell');
let counter = 0;


for(let i=0; i<cells.length; i++) {
    cells[i].addEventListener('click', changeColor);

    function changeColor() {
        cells[i].style.backgroundColor = 'yellow';
        
    }

}





