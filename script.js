const infoTopo = [
    {
        urls: ["imagens/tenis1.jpg", "imagens/tenis2.jpg", "imagens/tenis3.png"]

    },
    {
        urls: ["imagens/shorts1.png", "imagens/shorts2.jpg", "imagens/shorts3.png"]

    },
    {
        urls: ["imagens/joelheiras1.jpg", "imagens/joelheiras2.jpg", "imagens/joelheiras3.png"]

    },
    {
        urls: ["imagens/manguito1.png", "imagens/manguito2.png", "imagens/manguito3.jpg"]

    },
    {
        urls: ["imagens/outros1.png", "imagens/outros2.png", "imagens/outros3.png"]

    }
]

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");

button1.onclick = () => mostrarImagem(infoTopo[0].urls, button1, 1);
button2.onclick = () => mostrarImagem(infoTopo[1].urls, button2, 2);
button3.onclick = () => mostrarImagem(infoTopo[2].urls, button3, 3);
button4.onclick = () => mostrarImagem(infoTopo[3].urls, button4, 4);
button5.onclick = () => mostrarImagem(infoTopo[4].urls, button5, 5);

let count = 0;

function mostrarImagem(url, but, number){
    mid[0].style.top = "40%";
    mid[1].style.top = "40%";
    const img = document.getElementsByClassName(`img-details-topo-${number}`);
    const bord = document.getElementsByClassName(`div-${number}`);
    
    
        for(let i = 0; i < 1; i++){
            if(img[i].style.display === ""){
                
    img[i].src = url[i];
    img[i+1].src = url[i+1];
    img[i+2].src = url[i+2];

    img[i].style.display = "block";
    img[i+1].style.display = "block";
    img[i+2].style.display = "block";
    count += 1;

    bord[0].style.display = "block";

    }else{
count -= 1;

        img[i].src = '';
        img[i].style.display = ""

        img[i+1].src = '';
        img[i+1].style.display = ""

        img[i+2].src = '';
        img[i+2].style.display = ""

        bord[0].style.display = "none"

    if(count === 0){
        mid[0].style.top = "20%";
        mid[1].style.top = "20%";
        }
    }
}
}

const imgsTopo = document.getElementsByClassName("img-topo");

const mainArray = [
    //Tenis
{
    background:["(to right, #ff7e5f, #feb47b)", ],
    ulBackground:["(to left, #ff7e5f, #feb47b)"],
    mainImage:["imagens/tenis1.jpg"],
    tittle:["Tenis 01"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]
},
{
    background:["(to right, #ff7e5f, #feb47b)", ],
    ulBackground:["(to left, #ff7e5f, #feb47b)"],
    mainImage:["imagens/tenis2.jpg"],
    tittle:["Tenis 02"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
{
    background:["(to right, #ff7e5f, #feb47b)", ],
    ulBackground:["(to left, #ff7e5f, #feb47b)"],
    mainImage:["imagens/tenis3.png"],
    tittle:["Tenis 03"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
//Shorts
{
    background:["(to right, #406bbb, #feb47b)" ],
    ulBackground:["(to left, #406bbb, #feb47b)"],
    mainImage:["imagens/shorts1.png"],
    tittle:["Shorts 01"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]
},
{
    background:["(to right, #406bbb, #feb47b)" ],
    ulBackground:["(to left, #406bbb, #feb47b)"],
    mainImage:["imagens/shorts2.jpg"],
    tittle:["Shorts 02"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
{
    background:["(to right, #406bbb, #feb47b)" ],
    ulBackground:["(to left, #406bbb, #feb47b)"],
    mainImage:["imagens/shorts3.png"],
    tittle:["Shorts 03"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
//Joelheiras
{
    background:["(to right, #406bbb, #2d2f61)" ],
    ulBackground:["(to left, #406bbb, #2d2f61)"],
    mainImage:["imagens/joelheiras1.jpg"],
    tittle:["Joelheiras 01"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]
},
{
    background:["(to right, #406bbb, #2d2f61)" ],
    ulBackground:["(to left, #406bbb, #2d2f61)"],
    mainImage:["imagens/joelheiras2.jpg"],
    tittle:["Joelheiras 02"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
{
    background:["(to right, #406bbb, #2d2f61)" ],
    ulBackground:["(to left, #406bbb, #2d2f61)"],
    mainImage:["imagens/joelheiras3.png"],
    tittle:["Joelheiras 03"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
//Manguito
{
    background:["(to right, #b975f4, #2d2f61)" ],
    ulBackground:["(to left, #b975f4, #2d2f61)"],
    mainImage:["imagens/manguito1.png"],
    tittle:["Manguito 01"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]
},
{
    background:["(to right, #b975f4, #2d2f61)" ],
    ulBackground:["(to left, #b975f4, #2d2f61)"],
    mainImage:["imagens/manguito2.png"],
    tittle:["Manguito 02"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
{
    background:["(to right, #b975f4, #2d2f61)" ],
    ulBackground:["(to left, #b975f4, #2d2f61)"],
    mainImage:["imagens/manguito3.jpg"],
    tittle:["Manguito 03"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
//Outros
{
    background:["(to right, #b975f4, #612d3e)" ],
    ulBackground:["(to left, #b975f4, #612d3e)"],
    mainImage:["imagens/outros1.png"],
    tittle:["Outros 01"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]
},
{
    background:["(to right, #b975f4, #612d3e)" ],
    ulBackground:["(to left, #b975f4, #612d3e)"],
    mainImage:["imagens/outros2.png"],
    tittle:["Outros 02"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

},
{
    background:["(to right, #b975f4, #612d3e)" ],
    ulBackground:["(to left, #b975f4, #612d3e)"],
    mainImage:["imagens/outros3.png"],
    tittle:["Outros 03"],
    text:["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, hic! Modi aut provident tenetur eaque similique"],
    colorTwo:["#fed3b2"],
    colorOne:["#ffecdd"]

}
]

for(let i = 0; i < imgsTopo.length; i++){
imgsTopo[i].onclick = () => appearMainPage(mainArray, i);
}

const bigOne = document.getElementById("mid-one");
const bigTwo = document.getElementById("mid-two");
const imgTwo = document.getElementById("img-mid-two");
const h1Txt = document.getElementById("h1-mid");
const mid = document.getElementsByClassName("mid");
const body = document.getElementById("bodyy");
const topo = document.getElementById("topo");

function appearMainPage(mainArray, i){

    mid[0].style.top = "40%";
    mid[1].style.top = "40%";
    mid[0].style.display = "flex";
    mid[1].style.display = "flex";
    bigOne.style.backgroundColor = mainArray[i].colorOne[0];
    bigTwo.style.backgroundColor = mainArray[i].colorTwo[0];
    imgTwo.src = mainArray[i].mainImage[0];
    h1Txt.innerText = mainArray[i].tittle[0];
    body.style.background = `linear-gradient${mainArray[i].background[0]}`;
    topo.style.background = `linear-gradient${mainArray[i].ulBackground[0]}`;
}