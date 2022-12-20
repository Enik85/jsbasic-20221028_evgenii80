/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
 export default class UserTable {
    constructor(rows) {
        this.elem = document.createElement('table');
        this.elem.insertAdjacentHTML(
            'beforeend',
            `<thead>
                <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Зарплата</th>
                    <th>Город</th>
                    <th></th>
                </tr>
            </thead>
            <tbody></tbody>`
        );
        let tbody = this.elem.querySelector('tbody');
        for(let row of rows) {
            let tr = document.createElement('tr');
            tr.insertAdjacentHTML('beforeend', 
            `   <td>${row.name}</td>
                <td>${row.age}</td>
                <td>${row.salary}</td>
                <td>${row.city}</td>
                <td><button>X</button></td>`
            );

            tbody.append(tr);
            tr.querySelector('button').addEventListener('click', () => tr.remove());
        }
        
    }

  }