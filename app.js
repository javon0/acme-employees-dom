const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];
  
  let counter = 0
  const list = document.querySelector('#employees');
  
  list.addEventListener('click', (ev)=> {
    const target = ev.target;
    const idx = [...list.children].indexOf(target);

    if (counter > 2 && employees[idx].favorite !== true){
      alert('Only 3 favorites')
    }else{
      counter = 0
    if(target.tagName === 'LI'){
      employees[idx].favorite = !employees[idx].favorite;
    }

    for (let key in employees){
     
      if (employees[key].favorite){
        counter++
      }}}
    render();
  });
  
  const render = ()=> {
    const html = employees.map( employee => {
      return `
        <li data-id='${employee.id}' ${ employee.favorite ? "class='favorite'": ''}>${ employee.name }</li>
      `;
    }).join('');
  
    list.innerHTML = html;
  };
  
  render();