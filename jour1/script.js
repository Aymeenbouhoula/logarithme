// const circle1 = {
//     radius : 10,
//     color : 'red',

//     // Method 1
//     draw : function() {
//         console.log('draw circle');
//     },

//     //Method 2 meme function 
//     area : function(){
//         return Math.PI * Math.pow(this.radius,2)
//     },

//     //Method 3 meme function 
//     walk (){
//         console.log('walk')
//     },

//     //Method 4 
//     eat (){
//         console.log('eat');
//     },

//     // Method 5 
//     All (){
//         this.eat()
//         this.walk()
//         this.draw()
//     }
// }




// console.log(circle1.area())
// console.log(circle1)
// circle1.All()





// const circle1 = {
//     radius : 10,
//     color : 'red',
// }

// const circle2 = {}

// for (let key in circle1){
//     circle2[key]= circle1[key]
// }
// circle2.name = 'circle2'

// console.log(circle2)
// const circle3 = {... circle2}
// console.log('circle3',circle3)



// const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }];
// function findPerson(name){
// for (let person of people){
//     if (person.name === name){
//         return person
//     }
//     else{
//         return 'Not Found'
//     }
// }
// }
// console.log(findPerson("Max"))


// function findName(name){
//    return people.find(person => person.name === name)
// }

// console.log(findName('Marry'))








// FUNCTION FIND  **************************************
// const numbers = [1,10,-4,30]
// const rslt = numbers.find((number) => number < 0 )
// console.log(rslt);


// // FIND 2 **********************************************
// const numbers = [1,10,-4,30]
// function negNumber (){
//     return numbers.find(val => val < 0)
// }
// console.log(negNumber());





// //FOREACH ===== LOOP (for )
// const numbers = [1,10,-4, , -7, 30]
// numbers.forEach((nb) => {
//     if (nb < 0) {
//         console.log (nb)
//     }
// })


// let numbers = [2,4,3,13,22,50]
// // function filtre 1**************************************
// // let Evennumber = []
// // function filtre (){
// //     for (let number of numbers){
// //         if (number % 2 === 0 ) {
// //             Evennumber.push(number)
// //         }
// //     }
// //     return Evennumber    
// // }
// // filtre()
// // console.log(Evennumber)

// //function filtre2 ***************************************
// let rslt =  numbers.filter((number) => number % 2 === 0)
// console.log(rslt);









// comment transformaer en <h1>1</h1> <h1>4</h1> <h1>10</h1>
// let ab = [1,4,10]
// let rslt = ab.map((ab) => `<h1>${ab}</h1>`)
// console.log(rslt);



//-------------------------------------------------------------
// const car = {
//         color : 'blue ',
//         manufactor : 'ford',
//         price : 25000,
//         maxSpeed : 250
// }
// // copy et modification d'objet
// const car2 = {...car , maxSpeed:300, color : 'red'}
// console.log(car2);
//-------------------------------------------------------------

// on veut ajouter price +2 ---------------------------------------------------
// products = [
//     { name: 'Milk', price: 15 },
//     { name: 'Water', price: 9 },
//     { name: 'Bread', price: 5 },
//    ]

// let rslt = products.map((product)=> ({...product, price : product.price +2 }))
// console.log(rslt)
// //-------------------------------------------------------------------------------


// // somme ou factoriel ou minus -----------------
// numbers2 = [1,2,3,4,5]
// const r2 = numbers2.reduce ((a,b) => a+b )
// console.log(r2);
// //----------------------------------------------






// let car = {
//     color : 'black',
//     model : 'Golf6',
//     price : 35,
// }


// let {color,price,model} = car // == let color = car.color -- let price = car.price -- let model = car.model 
// console.log(color); 
// console.log(model);
// console.log(price);




// object
// let person0 = {
//     name : 'aymen',
//     lastName : 'Bouhoula',
//     adress : {
//             street: 'afh',
//             zipCode : 3100
//     }
// }


// // let {adress} = person0
// // console.log(adress);
// let {name,lastName}= person0
// console.log(lastName);
// let {street,zipCode}= person0.adress
// console.log(zipCode);





// let array1 = [1,2,3,4]
// let array2 = [5,6,7,8]
// let array3 = [...array2,...array1]
// console.log(array3);
// let rslt = array3.reduce((a,b) => a+b)
// console.log(rslt);





// array MIN ----- MAX
// function arrMinMax(min,max){
//     let ar = []
//     for(let i = min ; i<= max ; i++ ){
//         ar.push(i)
//     }
//     return ar 
// }

// let rr = arrMinMax(1,7)
// console.log(rr);



// array1 = [1,2,5]
// array1.includes (2)
// console.log(array1);


// let arra1= [1,2,3]
// let arra2 = []

// function ob(arra1,nb){
//     for (e of arra1){
//         if (e === nb){
//            return arra2.push(e)
//         }
//     }
//     return arra2
// }
// let rslt = ob(arra1,'1')
// console.log(rslt);


//function SWAP 
// arra1 = [1,2,3,4]
// function swap(arra1,index1,index2){
//     let temp = arra1[index1]; 
//     arra1[index1] = arra1[index2] 
//     arra1[index2] = temp
// }
// swap(arra1,0,1)
// console.log(arra1);


// Calcul de Length
function length(sentence){
    let count = 0
    let i = 0
    while (sentence[i]){
        count ++;
        i ++;
    }
    
    return count
}
console.log(length('Aymen Bouhoula'));


//numberOfSpace = numberOfWord - 1 ( wel 3aks bel 3aks )
function numberOfWord (sentence){
    let count = 0
    for (let i =0 ; i < sentence.length ; i++ ) {
        if (sentence[i] === ' '){
            count++
        }
    }
    return count + 1 
}
console.log(numberOfWord("Aymen Bouhoula"));


// a e i u o 
function CalculOfVowels(sentence){
    let count = 0 ;
    for (let i = 0 ; i < sentence.length ; i ++){
        if(
            sentence[i].toLowerCase() === 'a' || sentence[i].toLowerCase() === 'e' || sentence[i].toLowerCase() === 'o' || sentence[i].toLowerCase() === 'i' || sentence[i].toLowerCase() === 'u'
        ){
            count ++
        }
    }
    return count
}

console.log(CalculOfVowels('aymen bouhoula'))








