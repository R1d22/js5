/*let test = [
    5, 7, 'theWord', true, ['sss']
]


for(let words of test){
   // console.log(words)
   setTimeout(() => {
       console.log(words)
   }, 2000);
}
//console.log (test[4]*/


    //let person = {name: 'Yehor', surname: 'Rudenko', height: '176'};
    //console.log(person['name'], person['surname'] );

const form = document.forms.studentsForm;
const res = document.querySelector('.res');
const btnSubmit = document.querySelector('.btn-submit')

let proCodeClassroom = [
    {name:'Иванна', surname:'Зимина', homework: 7},
    {name: 'Егор', surname: 'Руденко' , homework: 9},
    {name: 'Артем', surname: 'Шевчук', homework: 4},
    {name: 'Александр', surname: 'Гетьманский', homework: 1},
    {name: 'Натилия', surname: 'Горошко', homework: 8}
];

for(let studenst of proCodeClassroom){
    console.log(studenst);
}

/*const filterClass = proCodeClassroom.filter((person) =>{
    return person.homework > a
});

btnSubmit.addEventListener ('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData (ev.target);
    const number = formData.get(homework)
    let b = number;
    let a = 9 / b * 100 ;
    
    const html = `
        <div>
            <div> {name} {surname} {homework}</div>
        </div>
    `

    res.insertAdjacentHTML('afterbegin', html);
});

console.log(a)
    
   // console.log( proCodeClassRoom['name'], proCodeClassRoom['surname'] );*/
