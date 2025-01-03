 // Sample data
 const vegetables = [
    {
      name: "Carrot",
      image: "carrots image.jpeg",
      details: " Carrots are a good source of fiber, potassium, vitamin K1, beta-carotene, and antioxidants.Carrots can help with eye health, weight loss, digestion, and lowering blood pressure. They can also improve skin health and boost immunity. Carrots can be eaten raw in salads, or used to make carrot juice. "
    },
    {
      name: "Broccoli",
      image: "broccoli image.jpeg",
      details: "Broccoli has a thick, edible stalk, and large, fleshy, dark green flower heads that branch out from the stalk in a tree-like structure. The flower heads are surrounded by leaves.Fresh, raw broccoli has a mild bitterness and subtle sweetness, with a satisfying crunch. Some say it has an earthy or grassy taste .Broccoli is a cruciferous vegetable that's rich in nutrients, including vitamins C, K, and A, as well as potassium, calcium, and iron. It also contains antioxidants like vitamins C and E, β-carotene, and flavonoids. "
    },
    {
      name: "Spinach",
      image: "palak image.jpeg",
      details: "Spinach is a leafy green vegetable that can have smooth or crinkly leaves. The leaves can be ovate to triangular in shape, and can range in size from 1–12 in long and 1⁄2–6 in broad.Spinach can be eaten raw or cooked, and the taste varies depending on how it's prepared.Spinach is high in iron and vitamins A and C. It also contains antioxidants like vitamin C, vitamin E, and beta carotene."
    },
    {
        name: "Lady Finger",
        image: "ladyfinger image.jpeg",
        details: "Lady's finger, also known as okra or bhindi, is a green, pod-like vegetable with a spongy texture and mild flavor.Lady's fingers are slender, elongated, and tapered towards one side. They have a pale green flesh with small, round seeds.Lady's fingers have a mild, slightly grassy taste. Lady's fingers are high in vitamins K and C, manganese, and folate. They are also a good source of dietary fiber and a mucilage substance that can help with digestion. "
      },
      {
        name: "Tomato",
        image: "tomato image.jpeg",
        details: "Tomatoes originated in the western coastal plain of South America. The Spanish introduced them to Europe in the mid-1500s, and to the United States in 1710.Tomatoes are part of the nightshade family, which also includes potatoes, eggplants, and peppers.Tomato plants can grow to be 3–10 feet tall and 1–4 feet wide. They have a taproot system, but can also have fibrous roots depending on how they grow.All parts of the tomato plant are poisonous, except for the fruit. The leaves, stems, and unripe green fruits contain small amounts of tomatine and solanine, which are toxin alkaloids.Tomatoes are a good source of vitamin C, potassium, vitamin K, and folate. A medium-sized tomato contains about 28% of the Reference Daily Intake (RDI) of vitamin C. Tomatoes can be eaten raw in salads, stewed, or processed into ketchup or tomato soup. Unripe green tomatoes can be breaded and fried, used to make salsa, or pickled."
      },
      {
        name: "Potato",
        image: "potato images.jpeg",
        details:"Potatoes originated in South America and were introduced to Europe in the 16th century. They came to India in the 17th century. Potato plants can grow up to 1 meter tall and have hairy stems and leaves. The flowers can be white, pink, purple, or blue with yellow centers. The edible root forms a tuber that can vary in color, size, and shape.Potatoes are a good source of vitamins, minerals, and fiber. They are low in calories, contain no fat or cholesterol, and are sodium-free. A medium potato contains about 145 calories. "
      },
      {
        name: "Bitter Gourd",
        image: "bitter gourd image.jpeg",
        details:"Bitter gourd is a climbing vine with dark green leaves and yellow flowers. The fruit has a green skin and white to translucent flesh. Bitter gourd is rich in vitamins and minerals, including vitamin A, vitamin C, calcium, iron, and potassium. It also contains antioxidants, flavonoids, and other polyphenol compounds.Bitter gourd is used in folk medicine to treat diabetes, asthma, blood diseases, and rheumatism. The roots, leaves, and vines are used to treat toothaches, diarrhea, and furuncles. Bitter gourd is used in many Asian dishes, often cooked with other vegetables or in soups. In Indian cuisine, bitter gourd is often blanched, par boiled, or soaked in salt water to reduce its bitterness. "
    },
    {
        name: " Green Peas",
        image: "peas image.jpeg",
        details:"Peas grow best in a cool climate with an average temperature of 10–18°C. They can tolerate frost early in their growth, but seed germination is hampered if the temperature is below 5°C.Green peas can be stored in the fridge for 3–4 days if wrapped in a paper towel and placed in an airtight bag. They can also be frozen for longer storage. "
    },
    {
        name: " Cauliflower ",
        image: "coliflower image.jpeg",
        details:"Cauliflower is a cruciferous vegetable that is related to broccoli, cabbage, and Brussels sprouts.Cauliflower is high in vitamins C and K, and also contains minerals like potassium, sodium, iron, phosphorus, calcium, and magnesium. It is a good source of protein, and the vitamin C remains stable even after cooking.Cauliflower is a cool-weather crop that grows best in moist, nitrogen-rich soil with a pH of 6 to 7."
    },
    {
        name: " Brinjal",
        image: "brinjal image.jpeg",
        details:"Brinjal plants are erect, semi-erect, or prostate, with large, ovate, slightly lobed leaves. The flowers are solitary, violet, and about 5 cm (2 inches) across.Brinjal is a moderate source of vitamins and minerals like phosphorous, calcium, and iron. It also contains phytonutrients, including chlorogenic acid and nasunin, which are antioxidants that may have anti-cancerous, antimicrobial, and antiviral properties. "

    },
    {
        name: " Onion",
        image: "onion image.jpeg",
        details:"Onions are a temperate crop that can grow in a wide range of climates, including tropical and subtropical.Onions can grow in a variety of soils, including sandy loam, clay loam, silt loam, and heavy soils.Onions are used in cooking, and also have non-culinary uses. For example, their pungent juice can be used as a moth repellent, and concentrated onion water can be sprayed on plants to increase their pest resistance "
    },
    {
        name: " Cucumber",
        image: "cucumber image.jpeg",
        details:"Botanically, cucumbers are berries, specifically pipes, because they develop from a flower and have enclosed seeds. Cucumbers are mostly water, making them a good way to stay hydrated. They also contain some vitamins and minerals, including: Thiamin (Vit. B1) ,Riboflavin (Vit. B2), Niacin (Vit. B3) ,Pantothenic acid (B5), Vitamin B6 ,Folate (Vit. B9) ,Vitamin C ."
    },
    {
        name: " DrumStick",
        image: "drumsticks image.jpeg",
        details:"Drumstick is a slender, elongated vegetable that is 40–45 cm long and has slight ridges. When young, the pods are green, but turn brownish as they mature.Drumstick pods are rich in nutrients like vitamin C, iron, beta-carotene, copper, and iodine. The tender leaves and flowers are comparable to colocasia in terms of vitamins and minerals. Drumstick trees grow best in temperatures of 25–35°C. The seeds should be soaked for 24 hours and dried in the shade before planting.  "
    },
    {
        name: " Sponge Gourd",
        image: "gilkhi image.jpeg",
        details:"Sponge gourd is a large vine that produces cylindrical, green fruits that are usually harvested when they are young and about 20 cm long. The fruits can grow to be about 40 cm long when fully mature.Sponge gourd is high in dietary fiber, vitamin C, and antioxidants. When cooked, sponge gourd is soft and has a pleasant mouthfeel in soups and curries.  "
    },
    {
        name: " Cabbage",
        image: "cabbage image.jpeg",
        details:"Cabbage is a leafy green, red, or white plant that produces a compact head of leaves. The leaves are smooth or crinkled, and the outer leaves are usually larger than the inner ones.Cabbage grows best in mild to cool climates and can tolerate frost. Hot weather can impair growth and quality.Cabbage was most likely domesticated in Europe before 1000 BC. It was described as a table luxury in the Roman Empire. "
    },
    {
        name: " Garlic",
        image: "garlic image.jpeg",
        details:"Garlic is a vegetable that is part of the onion family and is a member of the genus Allium.Garlic is native to Central Asia, South Asia, and northeastern Iran. It is grown all over the world, with China being the largest producer. "
    },
    {
        name: " Pumpkin",
        image: "pumpkin image.jpeg",
        details:"Pumpkins are low in calories but high in vitamins and minerals. They contain vitamins A and C, which are important for the immune system, and potassium and magnesium, which are essential for heart health. Pumpkins also contain carotenoids like lutein, which can help reduce the risk of cataracts.Pumpkins are native to North America, and the term pumpkin is thought to have originated in New England. Evidence suggests that C. pepo pumpkins were cultivated between 7000 BCE and 5500 BCE, making them among the oldest known domesticated plants.  "
    },
    {
        name: " Radish",
        image: "radish image.jpeg",
        details:"Radishes are a root vegetable with many health benefits and a variety of characteristics, including.Radishes can be white, pink, red, purple, yellow, green, or black. The skin color comes from anthocyanins, while the flesh is usually white.Radishes contain antioxidants, calcium, potassium, vitamin C, CoQ10, and B vitamins.Radishes may help with blood glucose levels, as they contain compounds that improve insulin sensitivity and trigger insulin secretion. They may also slow sugar absorption and reduce the glycemic load after a meal.   "
    },
    {
        name: " Turnips(Salgam)",
        image: "salgam image.jpeg",
        details:" Turnips have rounded, white or white-with-a-purple-top roots, and fuzzy, green leaves with succulent stems that may be purple. Turnips are a good source of vitamin C, folate, iron, and calcium. The greens also contain vitamin E.Turnips may have anticancer properties, help control blood sugar levels, provide anti-inflammatory effects, and protect against harmful bacteria. "
    },
    {
        name: " Green Bean",
        image: "green beans image.jpeg",
        details:"Green beans are a good source of protein, fiber, folate, and potassium. They are low in fat and calories, and contain complex carbohydrates. Green beans can help fight inflammation, regulate blood pressure, and lower cholesterol."
    },
    {
        name: "Methi",
        image: "methii (fenugreek leaves) image.jpeg",
        details:""
    },
    {
        name: " Ginger",
        image: "ginger image.jpeg",
        details:"Methi, also known as fenugreek, is a vegetable that comes from the leaves of an annual plant that is native to West Asia and South Eastern Europe: The leaves of the methi plant are rich in nutrients like carotene, vitamin A, ascorbic acid, calcium, and iron. The seeds contain protein, starch, sugar, mucilage, minerals, volatile oil, fixed oil, vitamins, and enzymes. "
    },
    {
        name: " Chilli",
        image: "chillis image.jpeg",
        details:"The dried, ripe fruit of the Capsicum genus, chilies are hollow and contain many seeds. They can be green, orange, white, yellow, or red, and vary in shape from round to elongated.Chilies may help with weight loss and relieve pain from acid reflux. They may also help with digestion by stimulating gastric juices and reducing flatulence. "
    },
    {
        name: " Coriander",
        image: "coriander leaves image.jpeg",
        details:"Coriander is a small, bushy, annual herb with thin stems, many branches, and compound leaves. It is native to the Mediterranean and Middle East, but is now grown in many places around the world.Coriander contains vitamin C, calcium, magnesium, potassium, and iron. It may also have antibacterial, anti-inflammatory, and antioxidant properties. "
    },
    {
        name: " Lemon",
        image: "lemon image.jpeg",
        details:"Lemons are tart because of their high citric acid content, which is about 5–6%.Lemons are high in vitamin C, fiber, and other plant compounds that may help with wound healing, tissue development, and cardiovascular health. They may also help with weight control, digestive health, and protecting against kidney stones and anemia. "
    },
    {
        name: " Mashroom",
        image: "mashroom image.jpeg",
        details:"Mushrooms are a type of fungi, but they are often considered a vegetable for nutritional purposes. Here are some details about mushrooms:Mushrooms are a good source of nutrients like niacin, pantothenic acid, selenium, copper, riboflavin, potassium, dietary fiber, vitamin D, and calcium. They are also low in calories and contain fiber. "
    },
    {
        name: " BeetRoot",
        image: "beetroot image.jpeg",
        details:"Beetroot, also known as chukandar, is a root vegetable that is full of nutrients and has many health benefits: Nutrition: Beetroot is low in calories, fat, and cholesterol, and contains many vitamins and minerals, including calcium, iron, magnesium, potassium, and vitamins B and C.Beetroot can improve digestion, energy levels, and liver health. It also contains antioxidants and betaine, which can help thin bile and move it smoothly through the liver. "
    },
    {
        name: " Sweet Potato",
        image: "sweet potato.jpeg",
        details:"Sweet potatoes have a naturally sweet flavor that can be enhanced by cooking methods like roasting.Sweet potatoes are high in beta-carotene, potassium, fiber, and vitamins A and C. Sweet potatoes with dark orange flesh have more beta-carotene than those with light-colored flesh.  "
    },
    
  ];

  // Populate vegetable cards on the front page
  const vegetableContainer = document.getElementById('vegetable-container');
  const detailsContainer = document.getElementById('details-container');
  const vegName = document.getElementById('veg-name');
  const vegImage = document.getElementById('veg-image');
  const vegDetails = document.getElementById('veg-details');
  const closeButton = document.getElementById('close-btn');

  vegetables.forEach((veg, index) => {
    const card = document.createElement('div');
    card.className = 'vegetable-card';
    card.innerHTML = `
      <img src="${veg.image}" alt="${veg.name}">
      <h3>${veg.name}</h3>
    `;
    card.onclick = () => {
      showDetails(veg);
    };
    vegetableContainer.appendChild(card);
  });

  // Function to show details
  function showDetails(veg) {
    vegName.textContent = veg.name;
    vegImage.src = veg.image;
    vegDetails.textContent = veg.details;
    vegetableContainer.style.display = 'none';
    detailsContainer.style.display = 'flex';
  }

  // Close details view and return to front page
  closeButton.onclick = () => {
    vegetableContainer.style.display = 'flex';
    detailsContainer.style.display = 'none';
  };