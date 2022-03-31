$(function () {
    const clothes = [
        {
            title: "Audi T-shirt Rings #1",
            image: "../men-clothes/black-shirt.jpg",
            image2: "../men-clothes/black-shirt2.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 19.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "Black Audi T-shirt #2",
            image: "../men-clothes/blackshirt.jpg",
            image2: "../men-clothes/blackshirt2.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 14.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "Audi Sport Polo T-shirt #3",
            image: "../men-clothes/polo1.jpg",
            image2: "../men-clothes/polo2.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 23.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"

        },
        {
            title: "Audi '84 T-shirt #4",
            image: "../men-clothes/845.jpg",
            image2: "../men-clothes/84.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 14.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "Audi Grey Hoodie #5",
            image: "../men-clothes/hoodie2.jpg",
            image2: "../men-clothes/hoodie2.1.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 24.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "Audi Quattro T-shirt #6",
            image: "../men-clothes/quattro.jpg",
            image2: "../men-clothes/t-shirt-quattro.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 14.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "In TURBO WE TRUST Premium T-Shirt in 2 Colours #7",
            image: "../men-clothes/inturbo.jpg",
            image2: "../men-clothes/inturbo2.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 17.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "BLOW ME Premium T-shirt in 2 colours #8",
            image: "../men-clothes/blowme.jpg",
            image2: "../men-clothes/blowme2.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 17.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "Audi Quattro Sweatshirt #9",
            image: "../men-clothes/hoodie1.jpg",
            image2: "../men-clothes/hoodie1.1.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 25.99,
            LiChlothes0: "In 2 colours : black and dark purple",
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "Audi Jacket #10",
            image: "../men-clothes/jacket.png",
            image2: "../men-clothes/jacket1.1.png",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 39.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "White Audi T-shirt #11",
            image: "../men-clothes/whiteshirt.jpg",
            image2: "../men-clothes/whiteshirt2.jpg",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 14.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {
            title: "Audi Heartbeat T-shirt #12",
            image: "../men-clothes/il_794xN.3182268357_6l88.jpg",
            image2: "../men-clothes/heart.avif",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            price: 14.99,
            LiClothes: "Size: S M L XL 2XL 3XL 4XL 5XL",
            LiClothes2: "Chest: 51 55 56 60 63 65 68 72",
            LiClothes3: "Body: 60 63 64 65 66 68 71 72",
            LiClothes4: "100% cotton",
            type: "Men"
        },
        {

            title: "Audi One Love Ring T-shirt #1",
            image: "../women-clothes/love-rings.jpg",
            image2: "../women-clothes/love-rings2.jpg",
            price: 15.99,
            type: "Women",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            LiClothes: "In 2 colors - BLACK and WHITE",
            LiClothes2: "Size: XXS XS S M L XL",
            LiClothes3: "Size: 34 36 38 40 42 44",
            LiClothes4: "100% cotton",
        },
        {
            title: "Audi Love Rings T-shirt #2",
            image: "../women-clothes/zajs1.jpg",
            image2: "../women-clothes/zajs2.jpg",
            price: 15.99,
            type: "Women",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            LiClothes: "In 2 colors - BLUE and GREY",
            LiClothes2: "Size: XXS XS S M L XL",
            LiClothes3: "Size: 34 36 38 40 42 44",
            LiClothes4: "100% cotton",
        },
        {
            title: "Audi Women's Tank Top #3",
            image: "../women-clothes/tanktop.webp",
            image2: "../women-clothes/tanktop2.webp",
            price: 12.99,
            type: "Women",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            LiClothes: "In 2 colors - BLUE and GREY",
            LiClothes2: "Size: XXS XS S M L XL",
            LiClothes3: "Size: 34 36 38 40 42 44",
            LiClothes4: "100% cotton",
        },
        {
            title: "Grey Audi T-shirt #4",
            image: "../women-clothes/ssrco,classic_tee,womens,fafafa_ca443f4786,front_alt,square_product,600x600.jpg",
            image2: "../women-clothes/ssrco,classic_tee,womens,fafafa_ca443f4786,front_alt,square_product,600x600.jpg",
            price: 14.99,
            type: "Women",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            LiClothes: "Unique Design",
            LiClothes2: "Size: XXS XS S M L XL",
            LiClothes3: "Size: 34 36 38 40 42 44",
            LiClothes4: "100% cotton",
        },
        {
            title: "Audi Flower Rings #5",
            image: "../women-clothes/Yes-Im-A-Woman-Yes-I-Drive-An-Audi-No-You-Cant-Drive-It-Flower-Unisex.png",
            image2: "../women-clothes/Yes-Im-A-Woman-Yes-I-Drive-An-Audi-No-You-Cant-Drive-It-Flower-Unisex.png",
            price: 17.99,
            type: "Women",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            LiClothes: "Unique Design",
            LiClothes2: "Size: XXS XS S M L XL",
            LiClothes3: "Size: 34 36 38 40 42 44",
            LiClothes4: "100% cotton",
        },
        {
            title: "Audi Women Black Hoodie #6",
            image: "../women-clothes/919Q0HGQB5L._AC_UX385_.jpg",
            image2: "../women-clothes/919Q0HGQB5L._AC_UX385_.jpg",
            price: 25.99,
            type: "Women",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            LiClothes: "Unique Design",
            LiClothes2: "Size: XXS XS S M L XL",
            LiClothes3: "Size: 34 36 38 40 42 44",
            LiClothes4: "100% cotton",
        },
        {
            title: "Audi Women Pink Hoodie #7",
            image: "../women-clothes/two-people-audi-hoodie-babypink-500x500.jpg",
            image2: "../women-clothes/two-people-audi-hoodie-babypink-500x500.jpg",
            price: 25.99,
            type: "Women",
            description: "( all sizes are UK size in cm/ tolerance -+ 2cm )",
            LiClothes: "Unique Design",
            LiClothes2: "Size: XXS XS S M L XL",
            LiClothes3: "Size: 34 36 38 40 42 44",
            LiClothes4: "100% cotton",
        },
    ];
    const $clothesTemplate = $('#cloth-template');
    const $clothesList = $('#clothes-list');
    const MoneyMetric = '$';
    function renderClothes(clothesArray) {
        $clothesList.html('');
        clothesArray.forEach(function (wear) {
            const $templateClone = $clothesTemplate.clone();
            $templateClone.attr('id', '');
            $templateClone.find('.card-title').text(wear.title);
            $templateClone.find('.card-img-top').attr('src', wear.image);
            $templateClone.find('.img-back').attr('src', wear.image2);
            $templateClone.find('.shop-footer').text(wear.price);
            $templateClone.find('.li-clothes').text(wear.description);
            $templateClone.find('.li-clothes2').text(wear.LiClothes);
            $templateClone.find('.li-clothes3').text(wear.LiClothes2);
            $templateClone.find('.li-clothes4').text(wear.LiClothes3);
            $templateClone.find('.li-clothes5').text(wear.LiClothes4);

            $clothesList.append($templateClone);
        });
    }
    renderClothes(clothes);



    // filter by type 

    const $clothesTypeSelect = $('#clothes-type');
    $clothesTypeSelect.change(function () {
        const selectedType = $clothesTypeSelect.val();
        if (selectedType) {
            const filteredClothes = clothes.filter(wear => wear.type === selectedType);
            renderClothes(filteredClothes);
        } else {
            renderClothes(clothes);
        }
    })

    //   price range 
    const $sliderRange = $("#slider-range");
    $sliderRange.slider({
        range: true,
        min: 0,
        max: 50,
        values: [0, 50],
        slide: function (_, ui) {
            $("#amount").text(`${ui.values[0]} - ${ui.values[1]} ${MoneyMetric}`);
        },
        change: function (_, ui) {
            const [min, max] = ui.values;
            const filteredClothes = clothes.filter(wear => wear.price >= min && wear.price <= max)
            renderClothes(filteredClothes);
        }
    });
    $("#amount").text(`${$sliderRange.slider("values", 0)} - ${$sliderRange.slider("values", 1)} ${MoneyMetric}`);

});