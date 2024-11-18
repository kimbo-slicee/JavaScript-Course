var MainTitle='UserName',
    MainDesc='jinur full stack Web developer',
    MainDate='25/10';
    var div=`<div class="Card">
            <H3> hello ${MainTitle}</H3>
            <p>${MainDesc} </p>
            <span>${MainDate}</span>
            </div> `
document.write(div.repeat(3));
