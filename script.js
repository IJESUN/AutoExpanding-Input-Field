const textArea =document.querySelector('textarea');

function autoResizing(){
    this.style.height='auto'
    this.style.height= this.scrollHeight +'px'
}

textArea.addEventListener('input',autoResizing)