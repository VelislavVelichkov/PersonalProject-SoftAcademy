$(function () {
    const accesories = [
        {
            title: "Audi Cap #1",
            image: "../accesories/cap1.jpg",
            image2: "../accesories/cap2.jpg",
            description: "Black and White colours",
            price: 19.99,
            description2: "Universal Size",
            description3: "The perfect accesories for your sport/casual style",
            type: "Hats"
        },
        {
            title: "Winter Audi Hat #2",
            image: "../accesories/winterhat.jpg",
            image2: "../accesories/winterhat.jpg",
            description: "Cozy winter audi hat",
            price: 19.99,
            description2: "Perfect for the winter",
            description3: "100% cotton",
            type: "Hats"
        },
        {
            title: "Audi sunglasses #1",
            image: "../accesories/sunglasses.jpg",
            image2: "../accesories/sunglasses2.jpg",
            description: "Matte black and red design",
            price: 99.99,
            description2: "Grey lenses with SPF3 and UV 400 protection",
            description3: "Material: unbreakable plastic",
            type: "Sunglasses"
        },
        {
            title: "Audi Black Silicone Strap Watch #1",
            image: "../accesories/watch1.jpg",
            image2: "../accesories/watch1.1.jpg",
            description: "Analogue quartz movement, date display and centre second hand",
            price: 59.99,
            description2: "Case dimensions: Diameter: 42 mm, Height: 10.1 mm",
            description3: "Waterproof to 5 ATM",
            type: "Watch"
        },
        {
            title: "Audi Stainless Steel Women's watch #2",
            image: "../accesories/watch2.jpg",
            image2: "../accesories/watch2.1.jpg",
            description: "Ultra-flat stainless steel case with a galvanised brushed anthracite dial",
            price: 109.99,
            description2: "Dimensions: 34.5mm. Height: 6.5mm",
            description3: "Materials: Fine calfskin leather strap lining and stainlesssteel",
            type: "Watch"
        },
        {
            title: "Audi Backpack #1",
            image: "../accesories/bag1.jpg",
            image2: "../accesories/bag1.1.jpg",
            description: "Foldable design",
            price: 22.99,
            description2: "Separate compartments with zip fastener",
            description3: "Materials: 100% nylon",
            type: "Bag"
        },
        {
            title: "Audi Rings Leather Keyring #1",
            image: "../accesories/keyring1.jpg",
            image2: "../accesories/keyring1.1.jpg",
            description: "Embosed rings",
            price: 15.99,
            description2: "Presented in a box",
            description3: "Materials: Cowhide leather and metal",
            type: "Keyring"
        },
        {
            title: "Audi Rings Stainless Steel Keyring #2",
            image: "../accesories/keyring2.jpg",
            image2: "../accesories/keyring2.1.jpg",
            description: "Matte surface and raised Audi rings",
            price: 12.99,
            description2: "Presented in a box",
            description3: "Materials: 100% stainless steel",
            type: "Keyring"
        },
        {
            title: "Audi Stainless Steel Keyring #3",
            image: "../accesories/keyring3.jpg",
            image2: "../accesories/keyring3.1.jpg",
            description: "Matte black coating",
            price: 35.99,
            description2: "Red inlay for a true Audi Sport look",
            description3: "Materials: Stainless steel",
            type: "Keyring"
        },
        {
            title: "White Audi Case #1",
            image: "../accesories/case1.jpg",
            image2: "../accesories/case1.jpg",
            description: "White audi case suitable for Iphone 11/12/13",
            price: 10.99,
            description2: "Gives an elegant touch on your phone",
            description3: "Materials: rubber",
            type: "Case"
        },
        {
            title: "Black Audi Case #2",
            image: "../accesories/case2.jpg",
            image2: "../accesories/case2.jpg",
            description: "Black audi case suitable for Iphone 11/12/13",
            price: 10.99,
            description2: "Gives an elegant touch on your phone",
            description3: "Materials: rubber",
            type: "Case"
        },
        {
            title: "Audi Case with text #3",
            image: "../accesories/case3.jpg",
            image2: "../accesories/case3.jpg",
            description: "Black audi case suitable for Iphone 11/12/13 Pro",
            price: 10.99,
            description2: "Gives an elegant touch on your phone",
            description3: "Materials: rubber",
            type: "Case"
        },
        {
            title: "Audi Mug #1",
            image: "../accesories/mug.jpg",
            image2: "../accesories/mug1.1.jpg",
            description: "Audi mug made of porcelain",
            price: 9.99,
            description2: "Dishwasher and microwave safe",
            description3: "Perfect for your daily coffee routine",
            type: "Mug"
        },
        {
            title: "Audi Travel Mug #2",
            image: "../accesories/travelmug.jpg",
            image2: "../accesories/travelmug1.1.jpg",
            description: "Double-walled Audi mug made of plastic",
            price: 19.99,
            description2: "Suitabl for hot and cold drinks",
            description3: "Volume capacity: 0.35l ( Made of plastic )",
            type: "Mug"
        },
        {
            title: "Audi Black Ballpoint Pen #1",
            image: "../accesories/pen.jpg",
            image2: "../accesories/pen.jpg",
            description: "High quality Audi metal twist ballpoint pen",
            price: 9.99,
            description2: "Gloss black in Audi rings design",
            description3: "With stainless steel writing tip and black refill",
            type: "Pen"
        },
        {
            title: "Audi Black Umbrella #1",
            image: "../accesories/umbrella.jpg",
            image2: "../accesories/umbrella.jpg",
            description: "Steel stick (12mm) with black plastic sheathing",
            price: 19.99,
            description2: "Plastic handle with trigger button",
            description3: "Dimensions: 130cm diameter, umbrella stick length 101cm",
            type: "Umbrella"
        },
        {
            title: "Audi Sport wallet #1",
            image: "../accesories/wallet.jpg",
            image2: "../accesories/wallet.jpg",
            description: "Velcro fastening",
            price: 14.99,
            description2: "Dimensions: Height 10cm, Weight 14.5cm, Depth 1cm",
            description3: "Materials: 100%polyester",
            type: "Wallet"
        },
    ];
    const $accesoriesTemplate = $('#accesories-template');
    const $accesoriesList = $('#accesories-list');
    const MoneyMetric = '$';
    function renderAccesories(accesoriesArray) {
        $accesoriesList.html('');
        accesoriesArray.forEach(function (wear) {
            const $templateClone = $accesoriesTemplate.clone();
            $templateClone.attr('id', '');
            $templateClone.find('.card-title').text(wear.title);
            $templateClone.find('.card-img-top').attr('src', wear.image);
            $templateClone.find('.img-back').attr('src', wear.image2);
            $templateClone.find('.shop-footer').text(wear.price);
            $templateClone.find('.li-description').text(wear.description);
            $templateClone.find('.li-description2').text(wear.description2);
            $templateClone.find('.li-description3').text(wear.description3);

            $accesoriesList.append($templateClone);
        });
    }
    renderAccesories(accesories);



    // filter by type 

    const $accesoriesTypeSelect = $('#accesories-type');
    $accesoriesTypeSelect.change(function () {
        const selectedType = $accesoriesTypeSelect.val();
        if (selectedType) {
            const filteredAccesories = accesories.filter(wear => wear.type === selectedType);
            renderAccesories(filteredAccesories);
        } else {
            renderAccesories(accesories);
        }
    })

    //   price range 
    const $sliderRange = $("#slider-range");
    $sliderRange.slider({
        range: true,
        min: 0,
        max: 110,
        values: [0, 110],
        slide: function (_, ui) {
            $("#amount").text(`${ui.values[0]} - ${ui.values[1]} ${MoneyMetric}`);
        },
        change: function (_, ui) {
            const [min, max] = ui.values;
            const filteredAccesories = accesories.filter(wear => wear.price >= min && wear.price <= max)
            renderAccesories(filteredAccesories);
        }
    });
    $("#amount").text(`${$sliderRange.slider("values", 0)} - ${$sliderRange.slider("values", 1)} ${MoneyMetric}`);

});