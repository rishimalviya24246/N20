var images = {
   img1 : "https://mooders.net/wp-content/uploads/2024/03/lebercail-12-1200x799.jpeg",
   img2 : "https://mooders.net/wp-content/uploads/2024/03/lebercail-12-1200x799.jpeg",
   img3 : "https://mooders.net/wp-content/uploads/2024/02/Capture-decran-2024-05-02-a-16.15-scaled-e1714660268550-1200x659.jpg",
   img4 : "https://mooders.net/wp-content/uploads/2024/02/cartier-sound-design-1.jpg",
   img5 : "https://mooders.net/wp-content/uploads/2024/02/Capture-decran-2024-03-19-a-00.25.07-1200x672.png"
}

var text1 = {
    text1: "CARTIER",
    text1: "URWEEK",
    text1 :"RIOT GAMES",
    text1 :"SALAMON",
    text1 :"COMPOSTION(S)"
}
var text2 = {
    text1: "TIME PROJECT",
    text1: "UR-220",
    text1 :"TFT MONSTER ATTACK",
    text1 :"A YEAR IN REVIEW",
    text1 :"BRING MUSIC TO THE TABLE"
}


var text = document.querySelector(".text2");
var text = document.querySelector(".images");
var text = document.querySelector(".text1");
var clutter = "";
text.addEventListener("mousemove",function(){
var final = clutter = ` <div class="text-1 flex w-[full] ">
                        <h1 class="text-7xl font-semibold  ">${text-1}</h1>
                        <h1 class="text-sm font-semibold flex items-end justify-center"> ${text-2}</h1>
                        <div class="image"> 
                            <img src="${images}" alt="">
                        </div>
                    </div>`
})

