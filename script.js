const list = [];
// ===================================================
for (var i = 0; i < localStorage.length; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
const storageList = (val) => {
  // let result = val;
  const getList = window.localStorage.getItem('acess');
  list.push(getList);
  console.log(list);
  document.querySelector(
    '.result'
  ).innerHTML = `Valor Armazenado em list e: ${list}`;
};

document.getElementById('add').addEventListener('click', () => {
  storageList();
});

document.getElementById('Input').addEventListener('input', (e) => {
  const Event = e.target.value;
  const savelist = window.localStorage.setItem('acess', Event);
});

document.getElementById('clr').addEventListener('click', () => {
  document.querySelector('.result').innerHTML = '';
  window.localStorage.removeItem('acess');
  window.location.reload();
});
