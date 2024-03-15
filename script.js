let boxes=document.querySelectorAll(".grid");
let resetButton=document.querySelector(".reset-button");
let NewGameButton=document.querySelector(".newgame-button");
let result=document.querySelector(".result");
let result_div=document.querySelector(".result-div");
let gamediv=document.querySelector(".game");
let theme_button=document.querySelector(".theme");
let body=document.querySelector("body");

console.log(body);


let turnX=true;
let theme_dark=true;

let wincount_O=0;
let wincount_X=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX)
        {
            box.innerText='X';
            // box.classList.add("glowgreen");
            turnX=false;
        }
        else
        {
            box.innerText='O';
            // box.classList.add("glowred");
            turnX=true;
        }  
        box.disabled=true;
        winner=checkwinner();
    })
});


let showWinner=(winner)=>{
    if(winner==='X')
    {
        wincount_X++;
    }
    else
    {
        wincount_O++;     
    }
    result.innerText=`Congratulation, Winner is ${winner}\n X | O\n ${wincount_X} | ${wincount_O}`;
    setTimeout(()=> {
    result_div.classList.remove("hide");
    gamediv.classList.add("hide");
    resetButton.classList.add("hide");
    console.log("hii")},2000);
    
   
}



const checkwinner=()=>{
    for(pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
     if(pos1val!=''&&pos2val!=''&&pos3val!='')
     {
        if(pos1val===pos2val&&pos2val===pos3val)
        {
           
            boxes[pattern[0]].classList.add("glowgreen");
            boxes[pattern[1]].classList.add("glowgreen");
            boxes[pattern[2]].classList.add("glowgreen");
            showWinner(pos1val);
        }
     }
    }

}

resetButton.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText='';
        boxes.forEach(box=>{
            box.classList.remove("glowgreen");
            box.classList.remove("glowred");
        })
    })
    result_div.classList.add("hide");
    gamediv.classList.remove("hide");
    resetButton.classList.remove("hide");
} );

NewGameButton.addEventListener('click',()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText='';
        boxes.forEach(box=>{
            box.classList.remove("glowgreen");
            box.classList.remove("glowred");
        })
    })
    result_div.classList.add("hide");
    gamediv.classList.remove("hide");
    resetButton.classList.remove("hide");
} );


 theme_button.addEventListener("click",()=>{
   if(theme_dark)
   {
       theme_button.classList.remove("themeDark");
       theme_button.innerText="Light";
       body.classList.remove("body_dark");
       gamediv.classList.remove("gameDark");
    //    boxes.classList.remove("gridDark")
       resetButton.classList.remove("restButtonDark");
       NewGameButton.classList.remove("newgame-buttonDark");
       result_div.classList.remove("result-divDark");
       result.classList.remove("Darkresult");
       theme_dark=false;

   }
   else
   {
        theme_button.classList.add("themeDark");
        theme_button.innerText="Dark";
        body.classList.add("body_dark");
        gamediv.classList.add("gameDark");
        result.classList.add("Darkresult");
        // boxes.classList.add("gridDark")
        resetButton.classList.add("restButtonDark");
        NewGameButton.classList.add("newgame-buttonDark");
        result_div.classList.add("result-divDark");
        theme_dark=true;
   } 
}
 );