/**
---Arrays Mathods [Adding And Removing]
---unshift("","") Add Element To the First 
---push("","") Add Eelemnt to The End 
---shift() Remove First Eelement From Array 
---pop() Remove Last Elemnt From Array 
*/ 
let userList =['user_1', 'user_2','user_3','user_4'];
//[1]:Inserts new elements at the start of an array
userList.unshift('user_0')
console.log((userList));
//[2]:Appends new elements to the end of an array
userList.push('user_5');
//[3]:shift Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log((userList));
let FirstUser=userList.shift();
console.log(FirstUser);
console.log((userList));
//[4]pop():Removes the last element from an array and returns it.
let LastUser=userList.pop()
console.log(LastUser);
/**
---Searching-Array---
-----indexOf(Search Element , From Index [Opt])
-----LastIndexOf(Search Element< From Index[opt])
-----inculdes(valuesToFind,fromIndex[opt])[Es7]
*/ 
let Colors=['Gray','Yellow','white','Blue','Orange'];
console.log(Colors.indexOf('white',2))//2 if Note existe returne -1
console.log(Colors.includes('Blue'))
/**
----Sorting Arrays------
A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure
--sort methode accepte the compareFnction
*/
let Data=[10,'teste_1',-20,'teste_2',30,1000,'beta','Lorem',5,-102,3000,56]
console.log(Data.sort())
//[-102, -20, 10, 1000, 30, 3000, 5, 56, 'Lorem', 'beta', 'teste_1', 'teste_2']
console.log(Data.reverse())//sorting Array Are reversed 
/**
Array Methods [Slicing]
---slice(Start[Opt],End[Opt] Not Including End Return New Array )
---slice()=>All Array
---if start is Undefinde => 0
---Negative Count From End 
---If End Is Undefinde || > Indexes => Slice To The End Array.lenght
---splice(Start[Mand],DeleCount[Opt][0 No remove],The Items To Add [Opt] changed the Orginal Array)
---If Negative => Start From The End 
*/ 
let P=['P1','P2','P3','P4'];
// P=Products
console.log(P.slice('0','3'))
console.log(P.slice(-3))//Form the end 
console.log(P.slice(-4,-2)) 
console.log(P)
let N=['N1','N2','N3','N4','N5','N6','N7','N8'];
console.log(N.splice(-1,4,'N9'));//the copy part of the array 
console.log(N)// the orginal Array
/**
--Array Methods [Joining]--
---Concat(array,array)===> Returne A New Array 
---Join(Separator) <> splite()
*/ 
// PNL😁
let L=P.concat(N,['T1','T2']);
console.log(L);
console.log(P.join(' '))// Return String 










































