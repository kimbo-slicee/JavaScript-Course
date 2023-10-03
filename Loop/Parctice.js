/* Practice - Add Products To Page */
let Products=['Keyboard','Mouse','Pen','Monitor','IPhone'];
let Colors=['Red','Green','Blue'];
let count=5;
document.write(`<h1> Show ${count} Products </h1>`);
MainLoop:for(let i=0 ; i<count ; i++ ){
    document.write(`<div><h3> [${i+1}] ${Products[i]}
    </h3> </div>`)
    SecondeLoop:for(let n=0; n<Colors.length; n++){
        document.write(`<p> ${Colors[n]} </p>`)
    }
}