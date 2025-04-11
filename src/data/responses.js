const responses = [
  {
    key: "roxana_info",
    question: {
      ro: "Cine este Roxana?",
      en: "Who is Roxana?"
    },
    answer: {
      ro: "Roxana este o bucătăreasă pasionată care trăiește în Văratica, un sat mic de lângă râul Olt, în orașul Brezoi. Iubește să gătească și să ofere mese folosind ingrediente din grădina proprie și de la fermele locale.",
      en: "Roxana is a passionate cook who lives in Văratica, a small village near the Olt River in Brezoi town. She loves cooking and providing meals using ingredients from her garden and local farms."
    }
  },
  {
    key: "tibi_info",
    question: {
      ro: "Cine este Tibi?",
      en: "Who is Tibi?"
    },
    answer: {
      ro: "Tibi este soțul Roxanei, un bărbat amabil și ajutător.",
      en: "Tibi is Roxana's kind and helpful husband."
    }
  },
  {
    key: "menu_today",
    question: {
      ro: "Ce mâncare se servește azi?",
      en: "What's on the menu today?"
    },
    answer: {
      ro: `Meniul zilnic este o surpriză! Roxana gătește în funcție de ce este proaspăt în acea zi. Iată câteva exemple:

🍽️ Meniul 1
- Ciorbă de legume
- Cartofi gratinați cu șnițele
- Turte cu spanac

🍽️ Meniul 2
- Ciorbă de vițel
- Pâine de casă
- Sărmăluțe cu varză murată

🍽️ Meniul 3
- Ciorbă de lobodă cu omletă
- Tartă de spanac
- Pâinici de casă

🍽️ Meniul 4
- Ciorbă din os afumat
- Budincă de conopidă
- Pâinici de casă

🍽️ Meniul 5
- Supă de rață cu găluște
- Piure de cartofi cu carne la garnită
- Pâinici de casă

🍽️ Meniul 6
- Supă cremă de dovlecel
- Ciulama de hribi cu leurdă
- Pâinici de casă

🍽️ Meniul 7
- Ciorbă de cartofi cu tarhon
- Ciulama de hribi cu sos pesto
`,
      en: `The daily menu is a surprise! Roxana cooks based on what’s fresh that day. Here are a few examples:

🍽️ Menu 1
- Vegetable soup
- Gratinated potatoes with chicken schnitzel
- Spinach flatbread

🍽️ Menu 2
- Veal soup
- Homemade bread
- Stuffed cabbage rolls

🍽️ Menu 3
- Sorrel soup with omelet
- Spinach tart
- Homemade rolls

🍽️ Menu 4
- Smoked bone soup
- Cauliflower pudding with veal
- Homemade rolls

🍽️ Menu 5
- Duck meat soup with dumplings
- Mashed potatoes with pork
- Homemade rolls

🍽️ Menu 6
- Zucchini cream soup
- Mushroom stew with wild garlic pesto
- Homemade rolls

🍽️ Menu 7
- Potato soup with tarragon
- Mushroom stew with pesto
`
    }
  },
  {
    key: "desserts",
    question: {
      ro: "Ce deserturi sunt disponibile?",
      en: "What desserts are available?"
    },
    answer: {
      ro: `Deserturile se schimbă zilnic, dar pot include:

🍰 Prăjituri de casă  
🥧 Tarte cu fructe de sezon  
🍎 Compoturi din fructe de grădină  
🍯 Dulceață de casă  
🥞 Clătite cu dulceață sau brânză dulce  

Toate sunt făcute cu ingrediente naturale.`,
      en: `Desserts change daily, but may include:

🍰 Homemade cakes  
🥧 Seasonal fruit tarts  
🍎 Fruit compote from the garden  
🍯 Homemade jam  
🥞 Crepes with jam or sweet cheese  

Everything is made with natural ingredients.`
    }
  },
  {
    key: "drinks",
    question: {
      ro: "Ce băuturi pot comanda?",
      en: "What drinks can I order?"
    },
    answer: {
      ro: `Băuturile sunt naturale și făcute în casă:
  
  🍋 Limonadă de casă cu sirop de zmeură  
  🍒 Vișinată  
  🫐 Afinată  
  🔥 Țuică  
  🍑 Compot  
  🌿 Ceai din plante adunate din flora spontană  
  ☕ Cafea (espresso sau la ibric, în funcție de preferință)`,
      en: `All drinks are natural and homemade:
  
  🍋 Homemade lemonade with raspberry syrup  
  🍒 Sour cherry liqueur (vișinată)  
  🫐 Blueberry liqueur (afinată)  
  🔥 Plum brandy (țuică)  
  🍑 Fruit compote  
  🌿 Herbal tea from wild herbs  
  ☕ Coffee (espresso or traditional pot-style, depending on your preference)`
    }
  },
  {
    key: "coffee",
    question: {
      ro: "Ce tip de cafea pot comanda?",
      en: "What type of coffee can I order?"
    },
    answer: {
      ro: "Poți comanda espresso sau cafea la ibric, în funcție de preferință.",
      en: "You can order espresso or traditional pot-style coffee, depending on your preference."
    }
  },
  { key: "how_to_get_there",
    question: {
      ro: "Cum pot ajunge la Casa Coziei?",
      en: "How can I get to Casa Coziei?"
    },
    answer: {
      ro: "Casa Coziei se află în satul Văratica, aproape de orașul Brezoi. După ce treci de Brezoi, urmează indicatoarele spre Văratica. Poți folosi Google Maps pentru 'Casa Coziei' și vei ajunge direct.",
      en: "Casa Coziei is located in the village of Văratica, near the town of Brezoi. After passing through Brezoi, follow signs to Văratica. You can use Google Maps and search for 'Casa Coziei' to get there directly."
    }
  },
   
  {
    key: "parking",
    question: {
      ro: "Unde pot parca?",
      en: "Where can I park?"
    },
    answer: {
      ro: "Avem locuri de parcare gratuite chiar în fața casei. Este spațiu suficient pentru mașinile oaspeților.",
      en: "We have free parking spots right in front of the house. There’s plenty of room for guests' cars."
    }
  },
  {
    key: "vegetarian_options",
    question: {
      ro: "Există opțiuni vegetariene?",
      en: "Are there vegetarian options?"
    },
    answer: {
      ro: "Da! Gătim cu drag și pentru vegetarieni – folosim legume proaspete din grădină și avem mereu opțiuni delicioase fără carne.",
      en: "Yes! We love cooking for vegetarians too – we use fresh veggies from the garden and always have delicious meat-free options."
    }
  },
  {
    key: "reservations",
    question: {
      ro: "Se pot face rezervări?",
      en: "Can I make a reservation?"
    },
    answer: {
      ro: "Desigur! Ne poți contacta pe WhatsApp pentru a face o rezervare. Ne bucurăm să știm din timp că vii!",
      en: "Of course! You can contact us on Facebook or by phone to make a reservation. We're happy to know in advance you're coming!"
    }
  },

];

export default responses;
