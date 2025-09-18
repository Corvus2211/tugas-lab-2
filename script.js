function Random(){
    var rand1 = Math.floor(Math.random() * 6)+1;
    var rand2 = Math.floor(Math.random() * 6)+1;
    var imagePath1 = "images/dice" + rand1 + ".png";
    var imagePath2 = "images/dice" + rand2 + ".png";
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", imagePath1);
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", imagePath2);
    var title = document.querySelector(".Winner")

    if(rand1 == rand2){
        title.textContent='Draw';
    }

    if(rand1 < rand2){
        title.textContent='Player 2 Wins!';
    }

    if(rand1 > rand2){
        title.textContent='Player 1 Wins!';
    }
}

function Reset(){
    var imagePath1 = "images/dice" + 1 + ".png";
    var imagePath2 = "images/dice" + 1 + ".png";
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src", imagePath1);
    var image2 = document.querySelector(".img2");
    image2.setAttribute("src", imagePath2);
    var title = document.querySelector(".Winner")
    title.textContent='Roll Me';
}

