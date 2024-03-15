//Инпутот за пушење на пораките
let inputMessages = document.querySelector('#inputField');
//Копчето за додавање на пораки
let addmessage = document.querySelector('#add');
//Контејнер во кој ќе ни се прикажуваат пораките и копчето за бришење на истите
let container = document.querySelector('#messageAndRemove')

//Му поставуваме команда на копчето (за додавање на пораки) да слуша за кликови
addmessage.addEventListener('click', ()=>{
/**
Креираме услов! Ако нема ништо напишано во инпутот, а притиснеме на копчето за додавање да ни се испише како внимание дека немаме ништо напишано.
А доколку имаме порака да ни се испише пораката.. 
**/
    if(inputMessages.value == ""){
        alert("Ве молиме внесете некаква порака..");
    }else{
        var newElement = document.createElement('div')
        newElement.classList.add('main_messageAndRemove');
        newElement.innerHTML = 
        `
        <div><p>${inputMessages.value}</p></div>
        <div><i class='bx bx-trash'></i></div>
        `
        container.appendChild(newElement);
        inputMessages.value = "";
        //Креираме услов за копчето шо треба да ни ги бриши пораките
        newElement.querySelector('i').addEventListener('click', ()=>{
            newElement.remove();
        });
    }
});