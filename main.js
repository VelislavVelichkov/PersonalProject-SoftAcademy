(function() {

    let myImageAr = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg"
    ];
    let countImage = 0;

    setInterval(chgImage,2000);

    function chgImage() {
        document
        .getElementById("changepics")
        .setAttribute("src","innovation-gallery/"+ myImageAr[countImage]);
        countImage++;
        if (countImage===myImageAr.length){
            countImage=0;
        }
    }
})();