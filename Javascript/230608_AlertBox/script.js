document.getElementById('open-btn').addEventListener('click', function(){
  document.getElementById('alert').style.display = 'flex';
})

function closeAlert(){
  document.getElementById('alert').style.display = 'none';
}

// document.getElementById('close-btn').addEventListener('click', closeAlert);