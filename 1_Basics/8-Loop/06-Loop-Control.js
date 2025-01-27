/*
* Sometimes, we need to control our loops, such as breaking the loop when depending on some condition, skipping
* an element in the loop, or controlling one of the loops if we have nested or multiple loops. That’s why now we
* will talk about loop control. For more details, please check the README file.
* */
// Break
    let cars= ["Audi", "Mercedes", "Toyota","BMW","Volkswagen","Ferrari"]
for (let i=0;i<cars.length;i++){
    console.log(cars[i])// Audi Mercedes Toyota BMW
    if (cars[i]==="BMW"){
    break
    }
}
// continue
let validName =["userName","#user","12334me","user_1","$Boos"];
let colors=["black","white","red","gray"];

for (let i = 0; i <validName.length ; i++) {
    if(!validName[i].startsWith("u")){
        continue
    }
    console.log(validName[i])

}
// Label (it's like identifier for the your Loops but u will not need it a lot  )
mainLoop:for (let i = 0; i <cars.length ; i++) {
    nestedLoop:for (let j=0;j<colors,length ; j++){
        if(colors[i]==="whit"){
           break mainLoop;
        }
    }
}