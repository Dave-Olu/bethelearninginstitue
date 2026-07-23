document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('regForm');
  const confirmPanel = document.getElementById('confirmPanel');
  const confirmName = document.getElementById('confirmName');
  const refCode = document.getElementById('refCode');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('fullName').value.trim() || 'there';
    const firstName = name.split(' ')[0];
    const code = 'BLI-' + Math.floor(100000 + Math.random()*900000);

    confirmName.textContent = "You're on the list, " + firstName + ".";
    refCode.textContent = code;

    form.classList.add('hide');
    confirmPanel.classList.add('show');
  });