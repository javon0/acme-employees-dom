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

const list = document.querySelector('div')

list.addEventListener('toggle', ev => {
    const target = ev.target;
    const employee = document.getElementsByClassName('employee');
    const favorite = document.getElementsByClassName('favorite');;
    if (target.tagName === 'DIV' && target.employee) {
        target // update class name to favorite
    } else {
        // update class name to employee
    }
})

const render = () => {
    const html = employees.map(employee => {
        return `<div class = 'employee'>${employee.name}</div>`
    }).join('')

    list.innerHTML = html
}

render()
