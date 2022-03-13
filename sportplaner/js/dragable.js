// ---------------------- Other Drag Variant --------------
// --------------------------------------------------------
document.addEventListener('DOMContentLoaded', (event) => {

  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
	
	calculateNewTimes();
  }
  
  
  let items = document.querySelectorAll('.container .box');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});

function calculateNewTimes(){
	calculateNewTimesInEinstieg();
	calculateNewTimesInErarbeitung();
	calculateNewTimesInSicherung();
}
  
function calculateNewTimesInEinstieg(){
	
	let items = document.querySelectorAll('.container .einstiegDisplay .box div');
	let x = 0;
	items.forEach(function(item) {
		x += parseFloat(item.dataset.value);
		console.log(x);
		const content = 'benötigte Zeit: ' + x + ' Minuten';
		document.getElementById('einstiegZeitgesamt').innerHTML = content;
  });
}  
function calculateNewTimesInErarbeitung(){
	
	let items = document.querySelectorAll('.container .erarbeitungDisplay .box div');
	let x = 0;
	items.forEach(function(item) {
		x += parseFloat(item.dataset.value);
		console.log(x);
		const content = 'benötigte Zeit: ' + x + ' Minuten';
		document.getElementById('erarbeitungZeitgesamt').innerHTML = content;
  });
}  
function calculateNewTimesInSicherung(){
	
	let items = document.querySelectorAll('.container .sicherungDisplay .box div');
	let x = 0;
	items.forEach(function(item) {
		x += parseFloat(item.dataset.value);
		console.log(x);
		const content = 'benötigte Zeit: ' + x + ' Minuten';
		document.getElementById('sicherungZeitgesamt').innerHTML = content;
  });
}
	
	
	
	
	
	
	
  
  
  