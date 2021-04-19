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
const formGood = document.forms.goodStudents
const res = document.querySelector('.container');
const btnSubmit = document.querySelector('.btn-submit')
const btnSubmitGood = document.querySelector('.btn-submit__goodStudents')
const container = document.querySelector('.container-good');

let proCodeClassroom = [
    {name:'Иванна', surname:'Зимина', homework: 7},
    {name: 'Егор', surname: 'Руденко' , homework: 9},
    {name: 'Артем', surname: 'Шевчук', homework: 4},
    {name: 'Александр', surname: 'Гетьманский', homework: 1},
    {name: 'Натилия', surname: 'Горошко', homework: 8}
];

form.addEventListener('submit', (ev) => {

    ev.preventDefault();
    for(const fullname of proCodeClassroom) {
        const html = `
            
            <div>
                <div>Student: ${fullname['name']} ${fullname['surname']}, ${fullname['homework']}</div>
                
            </div>
        `;
        res.insertAdjacentHTML('beforeend', html);
    };
});



formGood.addEventListener('submit', (ev) => {

    ev.preventDefault();
    //for(const goodStudenst of proCodeClassroom) {

    const filterClass = proCodeClassroom.filter((person) => {
        return person.homework > 8;
    });
    console.log(filterClass)
    for(const pers of proCodeClassroom) {
        const html = `
            
            <div>
                <div>Student: ${pers['name']} ${pers['surname']}, ${pers['homework']}</div>
                
            </div>
        `;
        container.insertAdjacentHTML('afterend', html);
    };
});
//<input type="hidden" name="fullname" value="${fullname}">
//<button type="submit">ok</button>



//console.log (proCodeClassroom)
/*for(let studenst of proCodeClassroom){
    console.log(studenst);
}*/

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
