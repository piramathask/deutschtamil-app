// lessons.js — DeutschTamil Learn (Deutsch + Tamil + große Übungen + Erklärung)
window.LESSONS = {
  A1: [
    // =========================
    // A1-L1: Artikel (60)
    // =========================
    {
      id: "A1-L1",
      title: "Artikel: der / die / das (60 Übungen)",
      de: [
        "Nomen haben Artikel: der (maskulin), die (feminin), das (neutral).",
        "Beispiele: der Mann, die Frau, das Kind.",
        "Viele Artikel muss man auswendig lernen."
      ],
      ta: [
        "ஜெர்மனில் Nomen-க்கு முன் Artikel வரும்.",
        "der = ஆண் பாலம், die = பெண் பாலம், das = நடுநிலை.",
        "பல சொற்களின் Artikel-ஐ மனப்பாடம் செய்ய வேண்டும்."
      ],
      explain_de: [
        "Regel: Maskulin → der, Feminin → die, Neutral → das.",
        "Beispiele: der Mann, die Frau, das Kind.",
        "Tipp: Wörter immer mit Artikel lernen (z.B. der Tisch, die Lampe, das Buch).",
        "Plural ist immer: die (die Männer, die Frauen, die Kinder)."
      ],
      explain_en: [
        "Rule: masculine → der, feminine → die, neutral → das.",
        "Examples: der Mann, die Frau, das Kind.",
        "Tip: learn nouns with the article (der Tisch, die Lampe, das Buch).",
        "Plural is always: die (die Männer, die Frauen, die Kinder)."
      ],
      explain_ta: [
        "விதி: ஆண் பாலம் → der, பெண் பாலம் → die, நடுநிலை → das.",
        "உதாரணம்: der Mann, die Frau, das Kind.",
        "குறிப்பு: சொற்களை எப்போதும் Artikel-உடன் கற்றுக்கொள்ளுங்கள் (der Tisch / die Lampe / das Buch).",
        "Plural-க்கு பொதுவாக die வரும்."
      ],
      quiz: [
        // 1–20 basics
        { q: "___ Mann ist hier.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Frau ist hier.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Kind ist hier.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Auto ist neu.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Apfel ist rot.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Schule ist groß.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Wasser ist kalt.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Bruder ist nett.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Mutter ist hier.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Haus ist groß.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Tisch ist dort.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Lampe ist hell.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Buch ist interessant.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Hund ist klein.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Katze ist süß.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Fenster ist offen.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Stuhl ist kaputt.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Tür ist zu.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Bett ist bequem.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Ball ist rund.", options: ["Der","Die","Das"], answer: "Der" },

        // 21–40 Alltag
        { q: "___ Uhr ist teuer.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Brot ist frisch.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Kaffee ist heiß.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Milch ist kalt.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Handy ist neu.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Tasche ist schwer.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Computer ist schnell.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Spiegel ist sauber.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Küche ist klein.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Badezimmer ist groß.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Supermarkt ist nah.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Straße ist lang.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Restaurant ist gut.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Bahnhof ist voll.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Schule beginnt.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Kino ist offen.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Lehrer kommt.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Lehrerin kommt.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Baby schläft.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Zug ist pünktlich.", options: ["Der","Die","Das"], answer: "Der" },

        // 41–60 mehr Wörter
        { q: "___ Arzt ist freundlich.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Ärztin ist freundlich.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Telefon klingelt.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Bild ist schön.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Stift ist blau.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Flasche ist leer.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Glas ist voll.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Markt ist groß.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Zeitung ist alt.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Radio ist laut.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Film ist spannend.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Musik ist schön.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Wetter ist gut.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Regen ist stark.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Sonne scheint.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Licht ist an.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Boden ist sauber.", options: ["Der","Die","Das"], answer: "Der" },
        { q: "___ Wand ist weiß.", options: ["Der","Die","Das"], answer: "Die" },
        { q: "___ Dach ist hoch.", options: ["Der","Die","Das"], answer: "Das" },
        { q: "___ Garten ist schön.", options: ["Der","Die","Das"], answer: "Der" }
        
      ]
      
    },
    

    // =========================
    // A1-L2: Pronomen + sein (60)
    // =========================
    {
      id: "A1-L2",
      title: "Personalpronomen + sein (60 Übungen)",
      de: [
        "Pronomen: ich, du, er, sie, es, wir, ihr, Sie.",
        "sein: bin, bist, ist, sind, seid."
      ],
      ta: [
        "Pronomen: ich/du/er/sie/es/wir/ihr/Sie.",
        "sein: bin/bist/ist/sind/seid."
      ],
      explain_de: [
        "Ich bin, du bist, er/sie/es ist, wir sind, ihr seid, Sie sind.",
        "Sie (groß) = höflich (formal).",
        "Verb steht oft an Position 2: Heute bin ich müde."
      ],
      explain_en: [
        "I am, you are, he/she/it is, we are, you (pl.) are, you (formal) are.",
        "Sie (capital) is polite/formal.",
        "The verb is often in position 2: Heute bin ich müde."
      ],
      explain_ta: [
        "ich bin / du bist / er-sie-es ist / wir sind / ihr seid / Sie sind.",
        "Sie (S பெரிய எழுத்து) = மரியாதை (formal).",
        "வாக்கியத்தில் verb பெரும்பாலும் 2-வது இடத்தில் வரும்."
      ],
      quiz: [
        // 1–20 Pronomen
        { q: "___ bin Pirama.", options: ["Ich","Du","Er"], answer: "Ich" },
        { q: "___ bist hier.", options: ["Ich","Du","Sie"], answer: "Du" },
        { q: "___ ist Maria.", options: ["Er","Sie","Es"], answer: "Sie" },
        { q: "___ ist ein Kind.", options: ["Er","Sie","Es"], answer: "Es" },
        { q: "Du und ich = ___", options: ["wir","ihr","Sie"], answer: "wir" },
        { q: "Du und Maria = ___", options: ["wir","ihr","sie"], answer: "ihr" },
        { q: "Maria und Ali = ___", options: ["sie","wir","ihr"], answer: "sie" },
        { q: "Formell: ___ sind nett.", options: ["Sie","wir","ich"], answer: "Sie" },
        { q: "___ heißt Tom.", options: ["Ich","Er","Wir"], answer: "Er" },
        { q: "___ wohnen in Essen. (wir)", options: ["Wir","Ihr","Sie"], answer: "Wir" },
        { q: "___ seid müde. (ihr)", options: ["Wir","Ihr","Sie"], answer: "Ihr" },
        { q: "___ komme aus Sri Lanka.", options: ["Ich","Du","Sie"], answer: "Ich" },
        { q: "___ kommst aus Deutschland.", options: ["Ich","Du","Er"], answer: "Du" },
        { q: "___ kommt aus Indien. (he)", options: ["Er","Sie","Es"], answer: "Er" },
        { q: "___ kommt aus Spanien. (she)", options: ["Er","Sie","Es"], answer: "Sie" },
        { q: "___ ist kalt. (it)", options: ["Er","Sie","Es"], answer: "Es" },
        { q: "Du und dein Freund = ___", options: ["wir","ihr","sie"], answer: "ihr" },
        { q: "Er und ich = ___", options: ["wir","ihr","sie"], answer: "wir" },
        { q: "Sie und ich = ___", options: ["wir","ihr","sie"], answer: "wir" },
        { q: "Tom und Anna = ___", options: ["sie","wir","ihr"], answer: "sie" },

        // 21–60 sein
        { q: "Ich ___ müde.", options: ["bin","bist","ist"], answer: "bin" },
        { q: "Du ___ hier.", options: ["bin","bist","ist"], answer: "bist" },
        { q: "Er ___ in Essen.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Sie ___ nett. (Maria)", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Es ___ kalt.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Wir ___ zusammen.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ihr ___ müde.", options: ["sind","seid","bin"], answer: "seid" },
        { q: "Sie (formal) ___ da.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Heute ___ ich glücklich.", options: ["bin","bist","ist"], answer: "bin" },
        { q: "Heute ___ du zu Hause.", options: ["bin","bist","ist"], answer: "bist" },
        { q: "Heute ___ er krank.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Wir ___ in Deutschland.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ihr ___ in Duisburg.", options: ["sind","seid","ist"], answer: "seid" },
        { q: "Sie ___ freundlich. (formal)", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ich ___ nicht müde.", options: ["bin","bist","ist"], answer: "bin" },
        { q: "Du ___ sehr nett.", options: ["bin","bist","ist"], answer: "bist" },
        { q: "Er ___ sehr schnell.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Sie ___ heute da. (plural)", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Wir ___ bereit.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ihr ___ bereit.", options: ["sind","seid","ist"], answer: "seid" },
        { q: "Sie (formal) ___ bereit.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Es ___ warm.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Heute ___ wir frei.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Heute ___ ihr frei.", options: ["sind","seid","ist"], answer: "seid" },
        { q: "Heute ___ Sie frei. (formal)", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ich ___ in Essen.", options: ["bin","bist","ist"], answer: "bin" },
        { q: "Du ___ in Köln.", options: ["bin","bist","ist"], answer: "bist" },
        { q: "Er ___ in Berlin.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Wir ___ in Duisburg.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ihr ___ in Bonn.", options: ["sind","seid","ist"], answer: "seid" },
        { q: "Sie ___ in Hamburg. (formal)", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ich ___ Pirama.", options: ["bin","bist","ist"], answer: "bin" },
        { q: "Du ___ Mohan.", options: ["bin","bist","ist"], answer: "bist" },
        { q: "Er ___ Ali.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Wir ___ Freunde.", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Ihr ___ Schüler.", options: ["sind","seid","ist"], answer: "seid" },
        { q: "Sie ___ Lehrer. (formal)", options: ["sind","seid","ist"], answer: "sind" },
        { q: "Es ___ schwierig.", options: ["bin","bist","ist"], answer: "ist" },
        { q: "Es ___ einfach.", options: ["bin","bist","ist"], answer: "ist" }
      ]
    },

 {
  id: "A1-L3",
  title: "Satzbau: Verb auf Position 2 (30 Übungen)",
  de: [
    "Im Aussagesatz steht das Verb meistens auf Position 2.",
    "Beispiel: Ich lerne Deutsch. / Heute lerne ich Deutsch."
  ],
  ta: [
    "சாதாரண வாக்கியத்தில் Verb பெரும்பாலும் 2-வது இடத்தில் வரும்.",
    "உதாரணம்: Ich lerne Deutsch. / Heute lerne ich Deutsch."
  ],
  explain_de: [
    "Merke: 1. Teil (Subjekt oder Zeit) + Verb + Rest.",
    "Wenn ein Wort vorne steht (Heute / Morgen / In Essen), kommt das Verb trotzdem auf Position 2.",
    "Konjugation: gehen (Präsens)",
    "ich gehe nach Hause.",
    "du gehst nach Hause.",
    "er/sie/es geht nach Hause.",
    "wir gehen nach Hause.",
    "ihr geht nach Hause.",
    "sie/Sie gehen nach Hause.",
    "Regel: Stamm „geh-“ + Endungen: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
    "Konjugation: lernen (Präsens)",
    "ich lerne Deutsch.",
    "du lernst Deutsch.",
    "er/sie/es lernt Deutsch.",
    "wir lernen Deutsch.",
    "ihr lernt Deutsch.",
    "sie/Sie lernen Deutsch."
  ],
  explain_en: [
    "Remember: first part (subject or time) + verb + rest.",
    "If a word comes first (Heute / Morgen / In Essen), the verb is still in position 2.",
    "Conjugation: gehen (present)",
    "I go home. / You go home. / He-she-it goes home.",
    "We go home. / You (pl.) go home. / They-you (formal) go home.",
    "Rule: stem “geh-” + endings: I -e, you -st, he/she/it -t, we -en, you (pl.) -t, they/you -en.",
    "Conjugation: lernen (present)",
    "I learn German. / You learn German. / He-she-it learns German.",
    "We learn German. / You (pl.) learn German. / They-you (formal) learn German."
  ],
  explain_ta: [
    "விதி: முதல் பகுதி (Ich / Heute / Morgen) + Verb (2-வது இடம்) + மீதி வார்த்தைகள்.",
    "முன்னால் Heute/Morgen வந்தாலும் Verb 2-வது இடத்தில் தான் வரும்.",
    "gehen (Präsens) வினை மாற்றம்:",
    "ich gehe, du gehst, er/sie/es geht, wir gehen, ihr geht, sie/Sie gehen.",
    "விதி: Stamm “geh-” + Endungen: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",
    "lernen (Präsens) வினை மாற்றம்:",
    "ich lerne, du lernst, er/sie/es lernt, wir lernen, ihr lernt, sie/Sie lernen."
  ],
  quiz: [
    { q: "Heute ___ ich Deutsch.", options: ["lerne", "lernen", "lernt"], answer: "lerne" },
    { q: "Morgen ___ er nach Essen.", options: ["kommt", "komme", "kommen"], answer: "kommt" },
    { q: "Jetzt ___ wir Kaffee.", options: ["trinken", "trinkt", "trinke"], answer: "trinken" },
    { q: "In Duisburg ___ ich.", options: ["wohne", "wohnt", "wohnen"], answer: "wohne" },
    { q: "Am Montag ___ sie.", options: ["arbeitet", "arbeite", "arbeiten"], answer: "arbeitet" },

    { q: "Heute ___ du müde.", options: ["bist", "bin", "ist"], answer: "bist" },
    { q: "In Deutschland ___ wir.", options: ["sind", "seid", "ist"], answer: "sind" },
    { q: "Jetzt ___ ich Zeit.", options: ["habe", "hast", "hat"], answer: "habe" },
    { q: "Morgen ___ du ein Auto.", options: ["hast", "habe", "hat"], answer: "hast" },
    { q: "Heute ___ er Hunger.", options: ["hat", "habe", "haben"], answer: "hat" },

    { q: "Jeden Tag ___ ich Deutsch.", options: ["lerne", "lernt", "lernen"], answer: "lerne" },
    { q: "Heute ___ wir zu Hause.", options: ["bleiben", "bleibt", "bleibe"], answer: "bleiben" },
    { q: "In Essen ___ er.", options: ["arbeitet", "arbeiten", "arbeite"], answer: "arbeitet" },
    { q: "Jetzt ___ sie Musik.", options: ["hört", "höre", "hören"], answer: "hört" },
    { q: "Heute ___ ihr spät.", options: ["kommt", "kommen", "komme"], answer: "kommen" },

    { q: "Am Abend ___ ich müde.", options: ["bin", "bist", "ist"], answer: "bin" },
    { q: "In der Schule ___ das Kind.", options: ["ist", "bin", "seid"], answer: "ist" },
    { q: "Heute ___ wir einen Termin.", options: ["haben", "hat", "habt"], answer: "haben" },
    { q: "Morgen ___ ihr Zeit.", options: ["habt", "haben", "hat"], answer: "habt" },
    { q: "Jetzt ___ sie da.", options: ["sind", "ist", "seid"], answer: "sind" },

    { q: "Heute ___ ich Brot.", options: ["kaufe", "kauft", "kaufen"], answer: "kaufe" },
    { q: "Morgen ___ du Wasser.", options: ["kaufst", "kaufe", "kauft"], answer: "kaufst" },
    { q: "Jetzt ___ er Kaffee.", options: ["kauft", "kaufen", "kaufe"], answer: "kauft" },
    { q: "Heute ___ wir schnell.", options: ["laufen", "läuft", "laufe"], answer: "laufen" },
    { q: "Jetzt ___ ihr laut.", options: ["sprecht", "sprechen", "sprichst"], answer: "sprecht" },

    { q: "Am Morgen ___ ich früh.", options: ["stehe", "steht", "stehen"], answer: "stehe" },
    { q: "Heute ___ du langsam.", options: ["gehst", "gehen", "geht"], answer: "gehst" },
    { q: "Jetzt ___ er Deutsch.", options: ["spricht", "spreche", "sprechen"], answer: "spricht" },
    { q: "Heute ___ wir zusammen.", options: ["lernen", "lernt", "lerne"], answer: "lernen" },
    { q: "Morgen ___ ihr hier.", options: ["seid", "sind", "ist"], answer: "seid" },

  ]
},

 {
  id: "A1-L4-ORDER",
  title: "Wörter sortieren: Satz bauen (30 Übungen)",
  de: [
    "Baue den Satz aus den Wörtern.",
    "Regel: Verb steht meistens auf Position 2."
  ],
  ta: [
    "வார்த்தைகளை சரியான வரிசையில் வைத்து வாக்கியம் அமைக்கவும்.",
    "விதி: Verb பெரும்பாலும் 2-வது இடத்தில் வரும்."
  ],
  explain_de: [
    "Merke: 1. Teil (Zeit/Subjekt) + Verb + Rest.",
    "Beispiel: Heute lerne ich Deutsch."
  ],
  explain_en: [
    "Rule: first part (time/subject) + verb + rest.",
    "Example: Heute lerne ich Deutsch."
  ],
  explain_ta: [
    "விதி: முதல் பகுதி (Zeit/Subjekt) + Verb (2-வது இடம்) + மீதி.",
    "உதாரணம்: Heute lerne ich Deutsch."
  ],
  quiz: [
    { type:"wordorder", q:"Bilde den Satz:", words:["Heute","lerne","ich","Deutsch","."], answer:"Heute lerne ich Deutsch." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Morgen","gehe","ich","zur","Schule","."], answer:"Morgen gehe ich zur Schule." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Jetzt","trinkt","er","Kaffee","."], answer:"Jetzt trinkt er Kaffee." },
    { type:"wordorder", q:"Bilde den Satz:", words:["In","Essen","arbeite","ich","."], answer:"In Essen arbeite ich." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Am","Abend","sehen","wir","einen","Film","."], answer:"Am Abend sehen wir einen Film." },

    { type:"wordorder", q:"Bilde den Satz:", words:["Heute","kauft","sie","Brot","."], answer:"Heute kauft sie Brot." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Jetzt","haben","wir","Zeit","."], answer:"Jetzt haben wir Zeit." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Morgen","ist","er","in","Duisburg","."], answer:"Morgen ist er in Duisburg." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Heute","sind","wir","zu","Hause","."], answer:"Heute sind wir zu Hause." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Jetzt","lernt","das","Kind","Deutsch","."], answer:"Jetzt lernt das Kind Deutsch." },

    { type:"wordorder", q:"Bilde den Satz:", words:["Am","Montag","arbeitet","er","."], answer:"Am Montag arbeitet er." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Heute","gehe","ich","früh","."], answer:"Heute gehe ich früh." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Morgen","kommen","ihr","."], answer:"Morgen kommt ihr." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Jetzt","sprechen","wir","Deutsch","."], answer:"Jetzt sprechen wir Deutsch." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Heute","trinkst","du","Wasser","."], answer:"Heute trinkst du Wasser." },

  ]
},
    {
      id: "A1-L5",
      title: "Akkusativ + Dativ (2 Objekte – A1)",
      de: [
        "Manche Sätze haben zwei Objekte: Dativ + Akkusativ.",
        "Dativ = wem? | Akkusativ = wen / was?",
        "Meistens: Dativ vor Akkusativ."
      ],
      ta: [
        "ஒரு வாக்கியத்தில் இரண்டு object இருக்கலாம்.",
        "Dativ = யாருக்கு? | Akkusativ = யாரை / என்ன?",
        "பொதுவாக: Dativ முதலில், Akkusativ பிறகு."
      ],
      explain_de: [
        "Zwei Objekte: Dativ (wem?) + Akkusativ (wen/was?).",
        "Meistens steht Dativ vor Akkusativ.",
        "Beispiele: Ich gebe dem Mann den Apfel. / Sie schenkt der Frau eine Blume."
      ],
      explain_en: [
        "Two objects: dative (to whom?) + accusative (who/what?).",
        "Usually dative comes before accusative.",
        "Examples: Ich gebe dem Mann den Apfel. / Sie schenkt der Frau eine Blume."
      ],
      explain_ta: [
        "இரண்டு பொருள்கள்: Dativ (யாருக்கு?) + Akkusativ (யாரை/என்ன?).",
        "பொதுவாக Dativ முதலில், Akkusativ பிறகு வருகிறது.",
        "உதாரணம்: Ich gebe dem Mann den Apfel. / Sie schenkt der Frau eine Blume."
      ],
      quiz: [
  {
    q: "Ich gebe dem Mann ___ Apfel.",
    options: ["den", "dem", "der", "das"],
    answer: "den",
    hint: "geben + Person (Dativ) + Sache (Akkusativ)"
  },
  {
    q: "Sie schenkt der Frau ___ Blume.",
    options: ["die", "der", "dem", "den"],
    answer: "die",
    hint: "der Frau = Dativ | die Blume = Akkusativ"
  },
  {
    q: "Wir zeigen dem Kind ___ Buch.",
    options: ["das", "dem", "den", "die"],
    answer: "das",
    hint: "dem Kind = Dativ | das Buch = Akkusativ"
  },
  {
    q: "Ich bringe der Frau ___ Kaffee.",
    options: ["den", "dem", "die", "das"],
    answer: "den",
    hint: "bringen + Dativ + Akkusativ"
  },
  {
    q: "Er gibt dem Kind ___ Ball.",
    options: ["den", "dem", "die", "das"],
    answer: "den",
    hint: "der Ball → Akkusativ: den"
  },
  {
    q: "Wir schenken dem Mann ___ Geschenk.",
    options: ["das", "dem", "den", "die"],
    answer: "das",
    hint: "das Geschenk bleibt im Akkusativ"
  },
  {
    q: "Sie erklärt dem Schüler ___ Aufgabe.",
    options: ["die", "der", "dem", "den"],
    answer: "die",
    hint: "die Aufgabe = Akkusativ"
  },
  {
    q: "Ich zeige der Mutter ___ Foto.",
    options: ["das", "dem", "die", "den"],
    answer: "das",
    hint: "das Foto = Akkusativ"
  },
]
 },

{
  id: "A1-L5a",
  title: "Akkusativ – Teil 2 (A1)",
  explain_de: [
    "Akkusativ fragt: wen/was?",
    "Wähle den passenden Artikel zum Objekt."
  ],
  explain_ta: [
    "Akkusativ என்பது: யாரை/என்ன?",
    "பொருளுக்கு சரியான Artikel தேர்வு செய்யவும்."
  ],
  explain_en: [
    "Akkusativ answers: who/what? Choose the correct article for the object.",
    "For der-nouns, accusative is den."
  ],
  quiz: [
  {
    q: "Ich sehe ___ Mann.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
  {
    q: "Sie kauft ___ Apfel.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
  {
    q: "Wir haben ___ Auto.",
    options: ["das", "dem", "der", "den"],
    answer: "das"
  },
  {
    q: "Er liest ___ Buch.",
    options: ["das", "dem", "der", "den"],
    answer: "das"
  },
  {
    q: "Ich höre ___ Musik.",
    options: ["die", "der", "dem", "den"],
    answer: "die"
  },
  {
    q: "Sie trinkt ___ Kaffee.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
  {
    q: "Wir besuchen ___ Freund.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
  {
    q: "Er öffnet ___ Tür.",
    options: ["die", "der", "dem", "den"],
    answer: "die"
  },
  {
    q: "Ich mag ___ Film.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
  {
    q: "Sie findet ___ Tasche.",
    options: ["die", "der", "dem", "den"],
    answer: "die"
  },
]

 },
{
  id: "A1-L5b",
  title: "Akkusativ – Teil 3 (A1)",
  explain_de: [
    "Akkusativ fragt: wen/was?",
    "Wähle den passenden Artikel zum Objekt."
  ],
  explain_ta: [
    "Akkusativ என்பது: யாரை/என்ன?",
    "பொருளுக்கு சரியான Artikel தேர்வு செய்யவும்."
  ],
  explain_en: [
    "Akkusativ answers: who/what? Choose the correct article for the object.",
    "For der-nouns, accusative is den."
  ],
  quiz: [
  {
    q: "Ich esse ___ Brot.",
    options: ["das", "dem", "der", "den"],
    answer: "das"
  },
  {
    q: "Sie sucht ___ Schlüssel.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
  {
    q: "Wir brauchen ___ Hilfe.",
    options: ["die", "der", "dem", "den"],
    answer: "die"
  },
  {
    q: "Er repariert ___ Fahrrad.",
    options: ["das", "dem", "der", "den"],
    answer: "das"
  },
  {
    q: "Ich schreibe ___ Brief.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
  {
    q: "Sie hört ___ Radio.",
    options: ["das", "dem", "der", "den"],
    answer: "das"
  },
  {
    q: "Wir sehen ___ Kind.",
    options: ["das", "dem", "der", "den"],
    answer: "das"
  },
  {
    q: "Er kauft ___ Hose.",
    options: ["die", "der", "dem", "den"],
    answer: "die"
  },
  {
    q: "Ich lerne ___ Sprache.",
    options: ["die", "der", "dem", "den"],
    answer: "die"
  },
  {
    q: "Sie nimmt ___ Bus.",
    options: ["den", "dem", "der", "das"],
    answer: "den"
  },
]
},
{
  id: "A1-L5c",
  title: "Akkusativ mit Pronomen (A1)",
  de: [
    "Im Akkusativ benutzt man Pronomen.",
    "der → ihn, die → sie, das → es"
  ],
  explain_de: [
    "Akkusativ-Pronomen ersetzen das Nomen.",
    "der → ihn, die → sie, das → es"
  ],
  explain_en: [
    "In accusative, use pronouns.",
    "der → ihn, die → sie, das → es"
  ],
  ta: [
    "Akkusativ-ல் Pronomen பயன்படுத்தப்படும்.",
    "der → ihn, die → sie, das → es"
  ],
  explain_ta: [
    "Akkusativ Pronomen Nomen-ஐ மாற்றும்.",
    "der → ihn, die → sie, das → es"
  ],
  quiz: [
    { q: "Ich sehe den Mann. Ich sehe ___ .", options: ["ihn","sie","es","ihm"], answer: "ihn" },
    { q: "Ich kaufe die Tasche. Ich kaufe ___ .", options: ["sie","ihn","es","ihr"], answer: "sie" },
    { q: "Er liest das Buch. Er liest ___ .", options: ["es","ihn","sie","ihm"], answer: "es" },
    { q: "Wir hören die Musik. Wir hören ___ .", options: ["sie","ihn","es","ihr"], answer: "sie" },
    { q: "Ich trinke den Kaffee. Ich trinke ___ .", options: ["ihn","sie","es","ihm"], answer: "ihn" },
    { q: "Sie sieht das Kind. Sie sieht ___ .", options: ["es","ihn","sie","ihm"], answer: "es" },
    { q: "Wir mögen den Film. Wir mögen ___ .", options: ["ihn","sie","es","ihm"], answer: "ihn" },
    { q: "Er kauft die Hose. Er kauft ___ .", options: ["sie","ihn","es","ihr"], answer: "sie" },
    { q: "Ich esse das Brot. Ich esse ___ .", options: ["es","ihn","sie","ihm"], answer: "es" },
    { q: "Sie findet die Schlüssel. Sie findet ___ .", options: ["sie","ihn","es","ihr"], answer: "sie" }
  ]
},
{
  id: "A1-L6",
  title: "Dativ mit Pronomen (A1)",
  de: [
    "Dativ fragt: wem?",
    "Nomen im Dativ kann durch ein Pronomen ersetzt werden.",
    "helfen, danken, gehören → immer Dativ"
  ],
  ta: [
    "Dativ = யாருக்கு?",
    "Dativ noun → pronomen ஆக மாறும்",
    "helfen, danken, gehören → எப்போதும் Dativ"
  ],
  explain_de: [
    "Dativ-Pronomen ersetzen das Nomen im Dativ (wem?).",
    "Formen: mir/dir/ihm/ihr/uns/euch.",
    "Bei Verben wie helfen, danken, gehören steht immer Dativ.",
    "Beispiele: Ich helfe ihm. Ich danke ihr. Das Buch gehört mir."
  ],
  explain_ta: [
    "Dativ Pronomen Dativ Nomen-ஐ மாற்றும் (யாருக்கு?).",
    "வடிவங்கள்: mir/dir/ihm/ihr/uns/euch.",
    "helfen, danken, gehören போன்ற verb-களில் எப்போதும் Dativ வரும்.",
    "உதாரணம்: Ich helfe ihm. Ich danke ihr. Das Buch gehört mir."
  ],
  explain_en: [
    "Dative pronouns replace a noun in the dative case (to whom?).",
    "Forms: mir/dir/ihm/ihr/uns/euch.",
    "Verbs like helfen, danken, gehören always take dative.",
    "Examples: Ich helfe ihm. Ich danke ihr. Das Buch gehört mir."
  ],
  quiz: [

    {
      q: "Ich helfe ___ . (dem Mann)",
      options: ["ihm", "ihn", "er", "sein"],
      answer: "ihm"
    },
    {
      q: "Wir danken ___ . (der Frau)",
      options: ["ihr", "sie", "ihre", "der"],
      answer: "ihr"
    },
    {
      q: "Das Geschenk gehört ___ . (dem Kind)",
      options: ["ihm", "es", "sein", "den"],
      answer: "ihm"
    },
    {
      q: "Kannst du ___ helfen? (ich)",
      options: ["mir", "mich", "mein", "ich"],
      answer: "mir"
    },
    {
      q: "Ich danke ___ . (du)",
      options: ["dir", "dich", "dein", "du"],
      answer: "dir"
    },
    {
      q: "Wir helfen ___ . (die Frau)",
      options: ["ihr", "sie", "der", "ihre"],
      answer: "ihr"
    },
    {
      q: "Das Handy gehört ___ . (ich)",
      options: ["mir", "mich", "mein", "ich"],
      answer: "mir"
    },
    {
      q: "Er hilft ___ . (wir)",
      options: ["uns", "wir", "unser", "unsere"],
      answer: "uns"
    },
    {
      q: "Ich danke ___ sehr. (ihr)",
      options: ["ihr", "sie", "ihre", "der"],
      answer: "ihr"
    },
    {
      q: "Das Auto gehört ___ . (du)",
      options: ["dir", "dich", "dein", "du"],
      answer: "dir"
    }

  ]
},

{
  id: "A1-L6",
  title: "Dativ-Verben (A1)",
  de: [
    "Manche Verben haben immer Dativ.",
    "Frage: wem?"
  ],
  ta: [
    "சில verb-கள் எப்போதும் Dativ எடுக்கும்.",
    "கேள்வி: யாருக்கு?"
  ],
  explain_de: [
    "Ich helfe dem Mann.",
    "Das Buch gehört der Frau.",
    "Der Film gefällt dem Kind."
  ],
  explain_en: [
    "Ich helfe dem Mann.",
    "Das Buch gehört der Frau.",
    "Der Film gefällt dem Kind."
  ],
  explain_ta: [
    "Ich helfe dem Mann.",
    "Das Buch gehört der Frau.",
    "Der Film gefällt dem Kind."
  ],
  quiz: [
    { q: "Ich helfe ___ Mann.", options: ["dem","den","der","das"], answer: "dem" },
    { q: "Wir danken ___ Frau.", options: ["der","die","dem","den"], answer: "der" },
    { q: "Er antwortet ___ Lehrer.", options: ["dem","den","der","das"], answer: "dem" },
    { q: "Das Buch gehört ___ Kind.", options: ["dem","den","der","das"], answer: "dem" },
    { q: "Die Jacke passt ___ Frau.", options: ["der","die","dem","den"], answer: "der" },
    { q: "Der Film gefällt ___ Mann.", options: ["dem","den","der","das"], answer: "dem" },
    { q: "Ich glaube ___ Freund.", options: ["dem","den","der","das"], answer: "dem" },
    { q: "Das Handy gehört ___ Mutter.", options: ["der","die","dem","den"], answer: "der" },
    { q: "Wir helfen ___ Kind.", options: ["dem","den","der","das"], answer: "dem" },
    { q: "Sie dankt ___ Lehrer.", options: ["dem","den","der","das"], answer: "dem" }
  ]
},
{
  id: "A1-Test",
  title: "A1 Mini-Test – Akkusativ & Dativ",
  de: [
    "Mini-Test für A1.",
    "Akkusativ, Dativ und Pronomen."
  ],
  ta: [
    "A1 சிறிய தேர்வு.",
    "Akkusativ, Dativ மற்றும் Pronomen."
  ],
  explain_de: [
    "Mini-Test: Akkusativ (wen/was) und Dativ (wem) + Pronomen.",
    "Achte auf die Artikel: der→den (Akk), die→die, das→das.",
    "Dativ-Pronomen: mir/dir/ihm/ihr/uns/euch.",
    "Beispiel: Ich sehe den Mann. Ich helfe dem Mann."
  ],
  explain_en: [
    "Mini test: accusative (who/what) and dative (to whom) + pronouns.",
    "Watch the articles: der→den (acc), die→die, das→das.",
    "Dative pronouns: mir/dir/ihm/ihr/uns/euch.",
    "Example: Ich sehe den Mann. Ich helfe dem Mann."
  ],
  explain_ta: [
    "சிறிய தேர்வு: Akkusativ (யாரை/என்ன) மற்றும் Dativ (யாருக்கு) + Pronomen.",
    "Artikel மாற்றம்: der→den (Akk), die→die, das→das.",
    "Dativ pronomen: mir/dir/ihm/ihr/uns/euch.",
    "உதாரணம்: Ich sehe den Mann. Ich helfe dem Mann."
  ],
  quiz: [
    { q: "Ich sehe ___ Mann.", options: ["den","dem","der","das"], answer: "den" },
    { q: "Sie kauft ___ Tasche.", options: ["die","der","dem","den"], answer: "die" },
    { q: "Wir haben ___ Auto.", options: ["das","dem","der","den"], answer: "das" },

    { q: "Ich gebe dem Mann ___ Apfel.", options: ["den","dem","der","das"], answer: "den" },
    { q: "Sie schenkt der Frau ___ Blume.", options: ["die","der","dem","den"], answer: "die" },
    { q: "Wir zeigen dem Kind ___ Buch.", options: ["das","dem","den","die"], answer: "das" },

    { q: "Ich sehe den Mann. Ich sehe ___ .", options: ["ihn","sie","es","ihm"], answer: "ihn" },
    { q: "Er liest das Buch. Er liest ___ .", options: ["es","ihn","sie","ihm"], answer: "es" },
    { q: "Sie kauft die Tasche. Sie kauft ___ .", options: ["sie","ihn","es","ihr"], answer: "sie" },

    { q: "Ich helfe ___ Mann.", options: ["dem","den","der","das"], answer: "dem" },
    { q: "Wir danken ___ Frau.", options: ["der","die","dem","den"], answer: "der" },
    { q: "Der Film gefällt ___ Kind.", options: ["dem","den","der","das"], answer: "dem" },

    { q: "Ich bringe der Mutter ___ Geschenk.", options: ["das","dem","den","die"], answer: "das" },
    { q: "Er gibt dem Kind ___ Ball.", options: ["den","dem","die","das"], answer: "den" },

    { q: "Ich esse ___ Brot.", options: ["das","dem","der","den"], answer: "das" },
    { q: "Sie hört ___ Musik.", options: ["die","der","dem","den"], answer: "die" },

    { q: "Das Handy gehört ___ Mutter.", options: ["der","die","dem","den"], answer: "der" },
    { q: "Die Jacke passt ___ Mann.", options: ["dem","den","der","das"], answer: "dem" },

    { q: "Ich mag ___ Film.", options: ["den","dem","der","das"], answer: "den" },
    { q: "Wir helfen ___ Kind.", options: ["dem","den","der","das"], answer: "dem" }
  ]
},
{
  id: "A1-L8",
  title: "Dativ mit Pronomen (A1)",
  de: [
    "Dativ-Pronomen antworten auf die Frage: wem?",
    "mir, dir, ihm, ihr, uns, euch"
  ],
  ta: [
    "Dativ Pronomen = யாருக்கு?",
    "mir, dir, ihm, ihr"
  ],
  explain_de: [
    "Dativ-Pronomen ersetzen das Nomen im Dativ (wem?).",
    "Formen: mir/dir/ihm/ihr/uns/euch.",
    "Bei Verben wie helfen, danken, gehören steht immer Dativ.",
    "Beispiele: Ich helfe ihm. Ich danke ihr. Das Buch gehört mir."
  ],
  explain_en: [
    "Dative pronouns replace a noun in the dative case (to whom?).",
    "Forms: mir/dir/ihm/ihr/uns/euch.",
    "Verbs like helfen, danken, gehören always take dative.",
    "Examples: Ich helfe ihm. Ich danke ihr. Das Buch gehört mir."
  ],
  explain_ta: [
    "Dativ Pronomen Dativ Nomen-ஐ மாற்றும் (யாருக்கு?).",
    "வடிவங்கள்: mir/dir/ihm/ihr/uns/euch.",
    "helfen, danken, gehören போன்ற verb-களில் எப்போதும் Dativ வரும்.",
    "உதாரணம்: Ich helfe ihm. Ich danke ihr. Das Buch gehört mir."
  ],
  quiz: [
    {
      q: "Ich helfe ___ . ",
      options: ["ihm", "ihn", "er", "sein"],
      answer: "ihm",
      hint: "helfen + Dativ"
    },
    {
      q: "Wir danken ___ . ",
      options: ["ihr", "sie", "ihn", "dir"],
      answer: "ihr",
      hint: "danken + Dativ"
    },
    {
      q: "Das Buch gehört ___ . ",
      options: ["mir", "mich", "mein", "ich"],
      answer: "mir",
      hint: "gehören + Dativ"
    },
    {
      q: "Ich helfe ___ . ",
      options: ["dir", "dich", "du", "dein"],
      answer: "dir",
      hint: "du → dir (Dativ)"
    }
  ]
},

{
  id: "A1-L9",
  title: "Akkusativ + Dativ mit Pronomen (A1)",
  de: [
    "Dativ steht meistens vor Akkusativ.",
    "Person = Dativ | Sache = Akkusativ"
  ],
  ta: [
    "பொதுவாக Dativ முதலில் வரும்.",
    "நபர் = Dativ | பொருள் = Akkusativ"
  ],
  explain_de: [
    "Zwei Objekte: Dativ-Person + Akkusativ-Sache.",
    "Dativ-Pronomen: mir/dir/ihm/ihr/uns/euch.",
    "Akkusativ-Pronomen: mich/dich/ihn/sie/es/uns/euch.",
    "Beispiele: Ich gebe ihm den Apfel. Sie schenkt ihr die Blume."
  ],
  explain_en: [
    "Two objects: dative person + accusative thing.",
    "Dative pronouns: mir/dir/ihm/ihr/uns/euch.",
    "Accusative pronouns: mich/dich/ihn/sie/es/uns/euch.",
    "Examples: Ich gebe ihm den Apfel. Sie schenkt ihr die Blume."
  ],
  explain_ta: [
    "இரண்டு பொருள்கள்: Dativ நபர் + Akkusativ பொருள்.",
    "Dativ pronomen: mir/dir/ihm/ihr/uns/euch.",
    "Akkusativ pronomen: mich/dich/ihn/sie/es/uns/euch.",
    "உதாரணம்: Ich gebe ihm den Apfel. Sie schenkt ihr die Blume."
  ],
  quiz: [
    {
      q: "Ich gebe ___ den Apfel. ",
      options: ["ihm", "ihn", "er", "sein"],
      answer: "ihm",
      hint: "geben + Dativ + Akkusativ"
    },
    {
      q: "Sie schenkt ___ die Blume. ",
      options: ["ihr", "sie", "ihn", "dir"],
      answer: "ihr",
      hint: "Dativ = ihr"
    },
    {
      q: "Wir zeigen ___ das Buch. ",
      options: ["ihm", "ihn", "er", "sein"],
      answer: "ihm",
      hint: "zeigen + Dativ"
    },
    {
      q: "Ich bringe ___ den Kaffee. ",
      options: ["dir", "dich", "du", "dein"],
      answer: "dir",
      hint: "du → dir"
    }
  ]
},
{
  id: "A1-L10",
  title: "A1 Mini-Test – Akkusativ & Dativ",
  de: [
    "Wiederholung: Akkusativ, Dativ, Pronomen, Satzbau"
  ],
  ta: [
    "A1 முழு சோதனை"
  ],
  explain_de: [
    "Wiederholungstest: Akkusativ (wen/was), Dativ (wem) und Satzbau.",
    "Artikel prüfen: der→den (Akk), der→dem (Dat).",
    "Pronomen prüfen: ihn/sie/es (Akk) und ihm/ihr/ihnen (Dat).",
    "Wähle die richtige Form im Satz."
  ],
  explain_en: [
    "Review test: accusative (who/what), dative (to whom), and word order.",
    "Check articles: der→den (acc), der→dem (dat).",
    "Check pronouns: ihn/sie/es (acc) and ihm/ihr/ihnen (dat).",
    "Choose the correct form in the sentence."
  ],
  explain_ta: [
    "மீள்பரிசோதனை: Akkusativ (யாரை/என்ன), Dativ (யாருக்கு), Satzbau.",
    "Artikel: der→den (Akk), der→dem (Dat) சரிபார்க்கவும்.",
    "Pronomen: ihn/sie/es (Akk) மற்றும் ihm/ihr/ihnen (Dat) கவனிக்கவும்.",
    "வாக்கியத்தில் சரியான வடிவத்தை தேர்வு செய்யவும்."
  ],
  quiz: [
    {
      q: "Ich sehe ___ Mann.",
      options: ["den", "dem", "der", "das"],
      answer: "den"
    },
    {
      q: "Ich helfe ___ Frau.",
      options: ["der", "die", "den", "das"],
      answer: "der"
    },
    {
      q: "Ich gebe dem Mann ___ Apfel.",
      options: ["den", "dem", "die", "das"],
      answer: "den"
    },
    {
      q: "Ich danke ___ . (sie)",
      options: ["ihr", "sie", "ihn", "dir"],
      answer: "ihr"
    },
    {
      q: "Wir zeigen ___ das Buch. (er)",
      options: ["ihm", "ihn", "er", "sein"],
      answer: "ihm"
    },
    {
      q: "Heute ___ ich einen Apfel.",
      options: ["esse", "isst", "essen", "esst"],
      answer: "esse"
    }
  ]
},


{
  id: "A1-L7",
  title: "Satzbau & Wortstellung (A1)",
  de: [
    "Das Verb steht im Hauptsatz auf Position 2.",
    "Position 1 kann Subjekt oder Zeit sein."
  ],
  ta: [
    "முக்கிய வாக்கியத்தில் verb இரண்டாம் இடத்தில் இருக்கும்.",
    "முதல் இடத்தில் subject அல்லது நேரம் இருக்கலாம்."
  ],
  explain_de: [
    "Ich esse einen Apfel.",
    "Heute esse ich einen Apfel.",
    "Dem Mann gebe ich den Apfel."
  ],
  explain_en: [
    "Ich esse einen Apfel.",
    "Heute esse ich einen Apfel.",
    "Dem Mann gebe ich den Apfel."
  ],
  explain_ta: [
    "Ich esse einen Apfel.",
    "Heute esse ich einen Apfel.",
    "Dem Mann gebe ich den Apfel."
  ],
  quiz: [
    {
      q: "Ich ___ einen Apfel. ",
      options: ["esse","essen","isst","esst"],
      answer: "esse"
    },
    {
      q: "Heute ___ ich einen Kaffee. ",
      options: ["trinke","trinkst","trinkt","trinken"],
      answer: "trinke"
    },
    {
      q: "Der Mann ___ das Buch. ",
      options: ["liest","lesen","lese","lest"],
      answer: "liest"
    },
    {
      q: "Jetzt ___ wir nach Hause. ",
      options: ["gehen","geht","gehst","gehe"],
      answer: "gehen"
    },
    {
      q: "Dem Kind ___ ich den Ball. ",
      options: ["gebe","gibt","geben","gibst"],
      answer: "gebe"
    },
    {
      q: "Morgen ___ sie einen Test. ",
      options: ["schreibt","schreibe","schreiben","schreibst"],
      answer: "schreibt"
    },
    {
      q: "Zu Hause ___ er Kaffee. ",
      options: ["trinkt","trinken","trinke","trinkst"],
      answer: "trinkt"
    },
    {
      q: "Heute ___ wir Deutsch. ",
      options: ["lernen","lernt","lerne","lernst"],
      answer: "lernen"
    }
  ]
},

{
  id: "A1-L11",
  title: "Trennbare Verben (A1)",
  de: [
    "Trennbare Verben haben eine Vorsilbe (an-, auf-, ein-, aus-).",
    "Im Satz steht die Vorsilbe am Ende: Ich rufe dich an."
  ],
  ta: [
    "Trennbare verb-களில் Vorsilbe இருக்கும் (an-, auf-, ein-, aus-).",
    "வாக்கியத்தில் Vorsilbe கடைசியில் வரும்: Ich rufe dich an."
  ],
  explain_de: [
    "Trennbare Verben = Verb + Vorsilbe (anrufen, aufstehen, einkaufen).",
    "Im Hauptsatz: Verb an Position 2, Vorsilbe am Ende.",
    "Beispiel: Ich rufe ihn an. / Wir stehen um 6 Uhr auf.",
    "Im Infinitiv bleibt es zusammen: anrufen, aufstehen."
  ],
  explain_en: [
    "Separable verbs = verb + prefix (anrufen, aufstehen, einkaufen).",
    "In a main clause: verb in position 2, prefix at the end.",
    "Example: Ich rufe ihn an. / Wir stehen um 6 Uhr auf.",
    "In the infinitive they stay together: anrufen, aufstehen."
  ],
  explain_ta: [
    "Trennbare verb-கள் = verb + Vorsilbe (anrufen, aufstehen, einkaufen).",
    "முக்கிய வாக்கியத்தில் verb இடம் 2; Vorsilbe கடைசியில் வரும்.",
    "உதாரணம்: Ich rufe ihn an. / Wir stehen um 6 Uhr auf.",
    "Infinitiv-ல் ஒன்றாக இருக்கும்: anrufen, aufstehen."
  ],
  diagram_de: `Trennbares Verb

anrufen

Ich   rufe   ihn   an.
     └─────────────┘
        Verb + Vorsilbe

aufstehen

Wir   stehen   um 6 Uhr   auf.
      └──────────────────────┘
         Verb + Vorsilbe

einkaufen

Ich   kaufe   im Supermarkt   ein.
     └──────────────────────────┘
        Verb + Vorsilbe`,
  quiz: [
    { q: "Ich rufe ihn ___.", options: ["an","auf","ein"], answer: "an" },
    { q: "Ich stehe um 7 Uhr ___.", options: ["auf","an","ein"], answer: "auf" },
    { q: "Wir kaufen im Supermarkt ___.", options: ["ein","an","mit"], answer: "ein" },
    { q: "Der Kurs fängt um 9 Uhr ___.", options: ["an","aus","ein"], answer: "an" },
    { q: "Hör mir bitte ___.", options: ["zu","an","aus"], answer: "zu" },
    { q: "Ich mache die Tür ___.", options: ["auf","ab","ein"], answer: "auf" },
    { q: "Mach das Licht ___.", options: ["an","aus","auf"], answer: "an" },
    { q: "Ich mache den Computer ___.", options: ["aus","auf","an"], answer: "aus" },
    { q: "Ich lade dich ___.", options: ["ein","aus","an"], answer: "ein" },
    { q: "Der Bus kommt um 8 Uhr ___.", options: ["an","aus","ein"], answer: "an" },
    { q: "Wir steigen an der Haltestelle ___.", options: ["aus","ein","auf"], answer: "aus" },
    { q: "Ich hole dich um 5 Uhr ___.", options: ["ab","an","auf"], answer: "ab" },
    { q: "Bitte ruf mich später ___.", options: ["an","auf","zu"], answer: "an" },
    { q: "Wir räumen das Zimmer ___.", options: ["auf","ab","ein"], answer: "auf" },
    { q: "Ich schalte den Fernseher ___.", options: ["ein","aus","an"], answer: "ein" },
    { q: "Ich schalte das Radio ___.", options: ["aus","ein","ab"], answer: "aus" },

    { q: "Ich ___ dich an.", options: ["rufe","besuche","verstehe"], answer: "rufe" },
    { q: "Er ___ um 6 Uhr auf.", options: ["steht","geht","macht"], answer: "steht" },
    { q: "Wir ___ im Supermarkt ein.", options: ["kaufen","machen","lernen"], answer: "kaufen" },
    { q: "Der Film ___ um 20 Uhr an.", options: ["fängt","lernt","geht"], answer: "fängt" },
    { q: "Sie ___ die Fenster zu.", options: ["macht","ruft","geht"], answer: "macht" },
    { q: "Ich ___ die Jacke an.", options: ["ziehe","nehme","höre"], answer: "ziehe" },
    { q: "Wir ___ nach Hause zurück.", options: ["kommen","lernen","machen"], answer: "kommen" },
    { q: "Er ___ das Handy aus.", options: ["macht","ruft","kauft"], answer: "macht" }
  ]
},


{
  id: "A1-TA-Explain",
  title: "A1 – Grammatik Erklärung (Tamil)",
  de: [
    "A1 Übersicht: Akkusativ, Dativ, Pronomen und Satzbau."
  ],
  ta: [
    "இந்த பாடத்தில் A1 நிலைக்கான முக்கியமான இலக்கணங்கள் எளிமையாக விளக்கப்படுகின்றன."
  ],
  explain_de: [
    "Akkusativ = wen / was?",
    "Dativ = wem?",
    "Verb steht auf Position 2."
  ],
  explain_en: [
    "Akkusativ = who/what?",
    "Dativ = to whom?",
    "The verb is in position 2."
  ],
  explain_ta: [
    "🔹 **Akkusativ (யாரை? என்ன?)**",
    "ஒரு செயல் நேரடியாக எதற்கு/யாருக்கு நடக்கிறது என்பதை Akkusativ காட்டுகிறது.",
    "உதாரணம்:",
    "Ich sehe **den Mann**. (நான் அந்த மனிதனை பார்க்கிறேன்)",
    "Ich kaufe **das Brot**. (நான் அந்த ரொட்டியை வாங்குகிறேன்)",
    "",
    "🔹 **Akkusativ – Artikel மாற்றம்**",
    "der → **den**",
    "die → **die**",
    "das → **das**",
    "",
    "🔹 **Akkusativ – Pronomen**",
    "den Mann → **ihn**",
    "die Tasche → **sie**",
    "das Buch → **es**",
    "",
    "🔹 **Dativ (யாருக்கு?)**",
    "ஒரு செயல் யாருக்கு பயன் தருகிறது என்பதை Dativ காட்டுகிறது.",
    "உதாரணம்:",
    "Ich helfe **dem Mann**. (நான் அந்த மனிதருக்கு உதவுகிறேன்)",
    "Das Buch gehört **der Frau**. (அந்த புத்தகம் அந்த பெண்ணுக்குச் சொந்தம்)",
    "",
    "🔹 **Dativ எப்போதும் வரும் verb-கள்**",
    "helfen, danken, antworten, gehören, gefallen, passen",
    "",
    "🔹 **Akkusativ + Dativ (2 object)**",
    "Person = Dativ | Sache = Akkusativ",
    "Ich gebe **dem Mann** **den Apfel**.",
    "(நான் அந்த மனிதருக்கு அந்த ஆப்பிளை கொடுக்கிறேன்)",
    "",
    "🔹 **Satzbau (வாக்கிய அமைப்பு)**",
    "முக்கிய வாக்கியத்தில் verb எப்போதும் 2-வது இடத்தில் வரும்.",
    "Ich **esse** einen Apfel.",
    "Heute **esse** ich einen Apfel."
  ],
  quiz: [
    {
      q: "Akkusativ bedeutet?",
      options: ["யாரை / என்ன", "யாருக்கு", "எப்போது", "எங்கே"],
      answer: "யாரை / என்ன"
    },
    {
      q: "Dativ bedeutet?",
      options: ["யாருக்கு", "யாரை", "என்ன", "எப்போது"],
      answer: "யாருக்கு"
    },
    {
      q: "der Mann → Pronomen?",
      options: ["ihn", "ihm", "er", "sie"],
      answer: "ihn"
    },
    {
      q: "helfen nimmt?",
      options: ["Dativ", "Akkusativ", "beide", "keinen"],
      answer: "Dativ"
    },
    {
      q: "Verb steht im Hauptsatz auf Position?",
      options: ["2", "1", "3", "4"],
      answer: "2"
    }
  ]
},
  ],


  A2: [
    {
  id: "A2-L2",
  title: "A2 Perfekt – haben oder sein",
  de: ["Perfekt mit haben oder sein"],
  ta: ["Perfekt (haben / sein)"],
  explain_de: [
    "Bewegung / Zustandsänderung → sein",
    "Alle anderen Verben → haben"
  ],
  explain_en: [
    "Movement / change of state → sein",
    "All other verbs → haben"
  ],
  explain_ta: [
    "நகர்வு / நிலைமாற்றம் → sein",
    "மற்றவை → haben"
  ],
  quiz: [
    { type:"mc", q:"Ich ___ nach Hause gegangen.", options:["habe","bin"], answer:"bin" },
    { type:"mc", q:"Wir ___ Deutsch gelernt.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Er ___ gestern spät gekommen.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Sie ___ einen Kaffee getrunken.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ lange gearbeitet.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Wir ___ nach Berlin gefahren.", options:["haben","sind"], answer:"sind" },
    { type:"mc", q:"Er ___ das Buch gelesen.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Sie ___ früh aufgestanden.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Ich ___ zu Hause geblieben.", options:["habe","bin"], answer:"bin" },
    { type:"mc", q:"Wir ___ viel gegessen.", options:["haben","sind"], answer:"haben" },

    { type:"mc", q:"Er ___ krank geworden.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Sie ___ mir geholfen.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ schnell gelaufen.", options:["habe","bin"], answer:"bin" },
    { type:"mc", q:"Wir ___ ein Auto gekauft.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Er ___ lange geschlafen.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Sie ___ nach Deutschland gezogen.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Ich ___ meine Hausaufgaben gemacht.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Wir ___ im Hotel geblieben.", options:["haben","sind"], answer:"sind" },
    { type:"mc", q:"Er ___ das Fenster geöffnet.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Sie ___ nach Hause zurückgekommen.", options:["hat","ist"], answer:"ist" }
  ]
},
{
  id: "A2-L3",
  title: "A2 Perfekt – haben oder sein (Teil 2)",
  de: ["Perfekt Übung – Teil 2"],
  ta: ["Perfekt பயிற்சி – பகுதி 2"],
  explain_de: ["haben oder sein im Perfekt"],
  explain_en: ["haben or sein in Perfekt"],
  explain_ta: ["Perfekt – haben / sein"],
  quiz: [
    { type:"mc", q:"Ich ___ gestern sehr müde gewesen.", options:["habe","bin"], answer:"bin" },
    { type:"mc", q:"Wir ___ den ganzen Tag gearbeitet.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Er ___ früh eingeschlafen.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Sie ___ viel Wasser getrunken.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ mit dem Bus gefahren.", options:["habe","bin"], answer:"bin" },

    { type:"mc", q:"Wir ___ lange gewartet.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Er ___ zu spät angekommen.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Sie ___ einen Fehler gemacht.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ im Büro geblieben.", options:["habe","bin"], answer:"bin" },
    { type:"mc", q:"Wir ___ das Problem verstanden.", options:["haben","sind"], answer:"haben" },

    { type:"mc", q:"Er ___ sehr schnell gelaufen.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Sie ___ ihre Mutter angerufen.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ nach der Arbeit eingekauft.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Wir ___ spät nach Hause gekommen.", options:["haben","sind"], answer:"sind" },
    { type:"mc", q:"Er ___ den Termin vergessen.", options:["hat","ist"], answer:"hat" },

    { type:"mc", q:"Sie ___ sehr nervös gewesen.", options:["hat","ist"], answer:"ist" },
    { type:"mc", q:"Ich ___ das Formular ausgefüllt.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Wir ___ ins Kino gegangen.", options:["haben","sind"], answer:"sind" },
    { type:"mc", q:"Er ___ das Auto repariert.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Sie ___ plötzlich eingeschlafen.", options:["hat","ist"], answer:"ist" }
  ]
},
{
  id: "A2-L3",
  title: "A2 Nebensatz – weil",
  de: ["Nebensatz mit weil"],
  ta: ["weil உடன் துணை வாக்கியம்"],
  explain_de: [
    "weil = Grund",
    "Im Nebensatz steht das Verb am Ende"
  ],
  explain_en: [
    "weil = reason",
    "In a subordinate clause, the verb goes to the end"
  ],
  explain_ta: [
    "weil = காரணம்",
    "Nebensatz-ல் verb கடைசியில் வரும்"
  ],
  quiz: [
    { type:"mc", q:"Ich bleibe zu Hause, ___ ich krank bin.", options:["weil","dass","und"], answer:"weil" },
    { type:"mc", q:"Er lernt Deutsch, ___ er in Deutschland lebt.", options:["weil","dass","oder"], answer:"weil" },
    { type:"mc", q:"Wir gehen nicht raus, ___ es regnet.", options:["weil","dass","aber"], answer:"weil" },
    { type:"mc", q:"Sie arbeitet viel, ___ sie Geld braucht.", options:["weil","dass","und"], answer:"weil" },
    { type:"mc", q:"Ich bin müde, ___ ich wenig geschlafen habe.", options:["weil","dass","oder"], answer:"weil" },

    { type:"mc", q:"Er kommt spät, ___ der Bus Verspätung hat.", options:["weil","dass","und"], answer:"weil" },
    { type:"mc", q:"Wir bleiben hier, ___ das Wetter schlecht ist.", options:["weil","dass","aber"], answer:"weil" },
    { type:"mc", q:"Sie lernt viel, ___ sie die Prüfung bestehen will.", options:["weil","dass","oder"], answer:"weil" },
    { type:"mc", q:"Ich esse nichts, ___ ich keinen Hunger habe.", options:["weil","dass","und"], answer:"weil" },
    { type:"mc", q:"Er fährt mit dem Auto, ___ der Zug ausfällt.", options:["weil","dass","aber"], answer:"weil" },

    { type:"mc", q:"Wir lachen, ___ der Film lustig ist.", options:["weil","dass","oder"], answer:"weil" },
    { type:"mc", q:"Sie bleibt im Bett, ___ sie Fieber hat.", options:["weil","dass","und"], answer:"weil" },
    { type:"mc", q:"Ich lerne Deutsch, ___ ich hier arbeiten möchte.", options:["weil","dass","aber"], answer:"weil" },
    { type:"mc", q:"Er ist nervös, ___ er einen Test schreibt.", options:["weil","dass","oder"], answer:"weil" },
    { type:"mc", q:"Wir kochen zu Hause, ___ das Restaurant geschlossen ist.", options:["weil","dass","und"], answer:"weil" },

    { type:"mc", q:"Sie ruft an, ___ sie Hilfe braucht.", options:["weil","dass","aber"], answer:"weil" },
    { type:"mc", q:"Ich komme nicht, ___ ich arbeiten muss.", options:["weil","dass","oder"], answer:"weil" },
    { type:"mc", q:"Er lernt abends, ___ er tagsüber arbeitet.", options:["weil","dass","und"], answer:"weil" },
    { type:"mc", q:"Wir bleiben ruhig, ___ alles okay ist.", options:["weil","dass","aber"], answer:"weil" },
    { type:"mc", q:"Sie geht früher, ___ sie müde ist.", options:["weil","dass","oder"], answer:"weil" }
  ]
},
{
  id: "A2-L4",
  title: "A2 Nebensatz – dass",
  de: ["Nebensatz mit dass"],
  ta: ["dass உடன் துணை வாக்கியம்"],
  explain_de: [
    "dass = Gedanke oder Meinung",
    "Verb steht am Ende"
  ],
  explain_en: [
    "dass = thought or opinion",
    "The verb goes to the end"
  ],
  explain_ta: [
    "dass = எண்ணம் / கருத்து",
    "verb கடைசியில் வரும்"
  ],
  quiz: [
    { type:"mc", q:"Ich denke, ___ er heute kommt.", options:["dass","weil","und"], answer:"dass" },
    { type:"mc", q:"Sie sagt, ___ sie müde ist.", options:["dass","weil","oder"], answer:"dass" },
    { type:"mc", q:"Wir wissen, ___ der Kurs beginnt.", options:["dass","weil","aber"], answer:"dass" },
    { type:"mc", q:"Er glaubt, ___ das richtig ist.", options:["dass","weil","und"], answer:"dass" },
    { type:"mc", q:"Ich hoffe, ___ du Zeit hast.", options:["dass","weil","oder"], answer:"dass" },

    { type:"mc", q:"Sie meint, ___ er krank ist.", options:["dass","weil","aber"], answer:"dass" },
    { type:"mc", q:"Wir hören, ___ der Zug ausfällt.", options:["dass","weil","und"], answer:"dass" },
    { type:"mc", q:"Er sagt, ___ er morgen arbeitet.", options:["dass","weil","oder"], answer:"dass" },
    { type:"mc", q:"Ich weiß, ___ sie Deutsch lernt.", options:["dass","weil","aber"], answer:"dass" },
    { type:"mc", q:"Sie glaubt, ___ alles gut wird.", options:["dass","weil","und"], answer:"dass" },

    { type:"mc", q:"Wir denken, ___ das Wetter besser wird.", options:["dass","weil","oder"], answer:"dass" },
    { type:"mc", q:"Er hört, ___ der Kurs endet.", options:["dass","weil","aber"], answer:"dass" },
    { type:"mc", q:"Ich sage, ___ ich später komme.", options:["dass","weil","und"], answer:"dass" },
    { type:"mc", q:"Sie weiß, ___ er Hilfe braucht.", options:["dass","weil","oder"], answer:"dass" },
    { type:"mc", q:"Wir hoffen, ___ der Test leicht ist.", options:["dass","weil","aber"], answer:"dass" },

    { type:"mc", q:"Er denkt, ___ sie Recht hat.", options:["dass","weil","und"], answer:"dass" },
    { type:"mc", q:"Ich glaube, ___ wir Zeit haben.", options:["dass","weil","oder"], answer:"dass" },
    { type:"mc", q:"Sie sagt, ___ der Film gut ist.", options:["dass","weil","aber"], answer:"dass" },
    { type:"mc", q:"Wir wissen, ___ er hier wohnt.", options:["dass","weil","und"], answer:"dass" },
    { type:"mc", q:"Er meint, ___ alles stimmt.", options:["dass","weil","oder"], answer:"dass" }
  ]
},
{
  id: "A2-L5",
  title: "A2 Nebensatz – wenn",
  de: ["Nebensatz mit wenn"],
  ta: ["wenn உடன் துணை வாக்கியம்"],
  explain_de: [
    "wenn = Bedingung oder Zeit",
    "Im Nebensatz steht das Verb am Ende"
  ],
  explain_en: [
    "wenn = condition or time",
    "In a subordinate clause, the verb goes to the end"
  ],
  explain_ta: [
    "wenn = நிபந்தனை / நேரம்",
    "Nebensatz-ல் verb கடைசியில் வரும்"
  ],
  quiz: [
    { type:"mc", q:"___ ich Zeit habe, komme ich.", options:["Wenn","Dass","Weil"], answer:"Wenn" },
    { type:"mc", q:"Ich bleibe zu Hause, ___ es regnet.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ du willst, helfe ich dir.", options:["Wenn","Dass","Oder"], answer:"Wenn" },
    { type:"mc", q:"Wir gehen spazieren, ___ das Wetter gut ist.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ er arbeitet, ist er müde.", options:["Wenn","Dass","Aber"], answer:"Wenn" },

    { type:"mc", q:"Ich rufe dich an, ___ ich fertig bin.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ sie kommt, beginnen wir.", options:["Wenn","Dass","Oder"], answer:"Wenn" },
    { type:"mc", q:"Er fährt mit dem Auto, ___ es spät ist.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ wir lernen, bestehen wir den Test.", options:["Wenn","Dass","Aber"], answer:"Wenn" },
    { type:"mc", q:"Ich kaufe Brot, ___ der Laden offen ist.", options:["wenn","dass","weil"], answer:"wenn" },

    { type:"mc", q:"___ du Fragen hast, sag Bescheid.", options:["Wenn","Dass","Oder"], answer:"Wenn" },
    { type:"mc", q:"Sie bleibt zu Hause, ___ sie krank ist.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ es schneit, fahren wir nicht.", options:["Wenn","Dass","Aber"], answer:"Wenn" },
    { type:"mc", q:"Ich komme morgen, ___ ich frei habe.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ er Zeit findet, ruft er an.", options:["Wenn","Dass","Oder"], answer:"Wenn" },

    { type:"mc", q:"Wir essen draußen, ___ das Wetter passt.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ ich müde bin, schlafe ich früh.", options:["Wenn","Dass","Aber"], answer:"Wenn" },
    { type:"mc", q:"Sie lernt viel, ___ sie Zeit hat.", options:["wenn","dass","weil"], answer:"wenn" },
    { type:"mc", q:"___ der Bus kommt, fahren wir los.", options:["Wenn","Dass","Oder"], answer:"Wenn" },
    { type:"mc", q:"Ich freue mich, ___ du kommst.", options:["wenn","dass","weil"], answer:"wenn" }
  ]
},
{
  id: "A2-L6",
  title: "A2 Nebensatz – MIX Test (weil / dass / wenn)",
  de: ["Nebensatz Mix-Test"],
  ta: ["Nebensatz கலப்பு பயிற்சி"],
  explain_de: [
    "weil = Grund",
    "dass = Gedanke",
    "wenn = Bedingung / Zeit",
    "Verb steht am Ende"
  ],
  explain_en: [
    "weil = reason",
    "dass = thought",
    "wenn = condition / time",
    "The verb goes to the end"
  ],
  explain_ta: [
    "weil = காரணம்",
    "dass = எண்ணம்",
    "wenn = நிபந்தனை / நேரம்",
    "verb கடைசியில்"
  ],
  quiz: [
    { type:"mc", q:"Ich bleibe zu Hause, ___ ich krank bin.", options:["weil","dass","wenn"], answer:"weil" },
    { type:"mc", q:"Ich denke, ___ er heute kommt.", options:["weil","dass","wenn"], answer:"dass" },
    { type:"mc", q:"___ ich Zeit habe, rufe ich dich an.", options:["Wenn","Dass","Weil"], answer:"Wenn" },
    { type:"mc", q:"Er lernt Deutsch, ___ er in Deutschland lebt.", options:["weil","dass","wenn"], answer:"weil" },
    { type:"mc", q:"Sie sagt, ___ sie müde ist.", options:["weil","dass","wenn"], answer:"dass" },

    { type:"mc", q:"___ es regnet, bleiben wir zu Hause.", options:["Wenn","Dass","Weil"], answer:"Wenn" },
    { type:"mc", q:"Ich weiß, ___ der Kurs morgen beginnt.", options:["weil","dass","wenn"], answer:"dass" },
    { type:"mc", q:"Wir gehen nicht raus, ___ es kalt ist.", options:["weil","dass","wenn"], answer:"weil" },
    { type:"mc", q:"___ du willst, helfe ich dir.", options:["Wenn","Dass","Weil"], answer:"Wenn" },
    { type:"mc", q:"Er glaubt, ___ alles gut wird.", options:["weil","dass","wenn"], answer:"dass" },

    { type:"mc", q:"Ich komme morgen, ___ ich frei habe.", options:["weil","dass","wenn"], answer:"wenn" },
    { type:"mc", q:"Sie bleibt im Bett, ___ sie Fieber hat.", options:["weil","dass","wenn"], answer:"weil" },
    { type:"mc", q:"Wir hoffen, ___ der Test leicht ist.", options:["weil","dass","wenn"], answer:"dass" },
    { type:"mc", q:"___ ich müde bin, schlafe ich früh.", options:["Wenn","Dass","Weil"], answer:"Wenn" },
    { type:"mc", q:"Er arbeitet viel, ___ er Geld braucht.", options:["weil","dass","wenn"], answer:"weil" },

    { type:"mc", q:"Ich denke, ___ wir genug Zeit haben.", options:["weil","dass","wenn"], answer:"dass" },
    { type:"mc", q:"___ der Bus kommt, fahren wir los.", options:["Wenn","Dass","Weil"], answer:"Wenn" },
    { type:"mc", q:"Sie lernt viel, ___ sie die Prüfung bestehen will.", options:["weil","dass","wenn"], answer:"weil" },
    { type:"mc", q:"Er sagt, ___ er später kommt.", options:["weil","dass","wenn"], answer:"dass" },
    { type:"mc", q:"___ es schneit, fahren wir nicht.", options:["Wenn","Dass","Weil"], answer:"Wenn" }
  ]
},
{
  id: "A2-L7",
  title: "A2 Nebensatz – Übungen (MC)",
  de: ["Nebensatz: weil / dass / wenn – Verb am Ende"],
  ta: ["Nebensatz: weil / dass / wenn – verb கடைசியில்"],
  explain_de: [
    "weil = Grund (Antwort auf: Warum?).",
    "dass = Gedanke/Meinung (nach sagen, denken, glauben).",
    "wenn = Bedingung oder Zeit (Falls / immer wenn).",
    "Im Nebensatz steht das Verb am Ende: ..., weil er krank ist.",
    "Hauptsatz bleibt normal: Ich komme nicht, weil ich arbeiten muss."
  ],
  explain_en: [
    "weil = reason (answers: why?).",
    "dass = thought/opinion (after say/think/believe).",
    "wenn = condition or time (if / whenever).",
    "In a subordinate clause, the verb goes to the end: ..., weil er krank ist.",
    "The main clause stays normal: Ich komme nicht, weil ich arbeiten muss."
  ],
  explain_ta: [
    "weil = காரணம் (ஏன்?).",
    "dass = எண்ணம்/கருத்து (sagen/denken/glauben பிறகு).",
    "wenn = நிபந்தனை அல்லது நேரம் (if / whenever).",
    "Nebensatz-ல் வினைச்சொல் கடைசியில் வரும்: ..., weil er krank ist.",
    "முக்கிய வாக்கியம் சாதாரணமாக இருக்கும்: Ich komme nicht, weil ich arbeiten muss."
  ],
  quiz: [
    { type:"mc", q:"Ich bleibe zu Hause, weil ___.", options:["ich krank bin","bin ich krank","ich bin krank"], answer:"ich krank bin" },
    { type:"mc", q:"Ich denke, dass ___.", options:["er heute kommt","kommt er heute","er kommt heute"], answer:"er heute kommt" },
    { type:"mc", q:"Wenn ___, rufe ich dich an.", options:["ich Zeit habe","habe ich Zeit","ich habe Zeit"], answer:"ich Zeit habe" },
    { type:"mc", q:"Wir gehen nicht raus, weil ___.", options:["es regnet","regnet es","es regnen"], answer:"es regnet" },
    { type:"mc", q:"Sie sagt, dass ___.", options:["sie müde ist","ist sie müde","sie ist müde"], answer:"sie müde ist" },

    { type:"mc", q:"Wenn ___, bleiben wir zu Hause.", options:["es kalt ist","ist es kalt","es ist kalt"], answer:"es kalt ist" },
    { type:"mc", q:"Er lernt Deutsch, weil ___.", options:["er in Deutschland lebt","lebt er in Deutschland","er lebt in Deutschland"], answer:"er in Deutschland lebt" },
    { type:"mc", q:"Ich hoffe, dass ___.", options:["du Zeit hast","hast du Zeit","du hast Zeit"], answer:"du Zeit hast" },
    { type:"mc", q:"Wenn ___, gehe ich nach Hause.", options:["ich fertig bin","bin ich fertig","ich bin fertig"], answer:"ich fertig bin" },
    { type:"mc", q:"Wir bleiben hier, weil ___.", options:["das Wetter schlecht ist","ist das Wetter schlecht","das Wetter ist schlecht"], answer:"das Wetter schlecht ist" },

    { type:"mc", q:"Er glaubt, dass ___.", options:["alles gut ist","ist alles gut","alles ist gut"], answer:"alles gut ist" },
    { type:"mc", q:"Wenn ___, sag Bescheid.", options:["du Hilfe brauchst","brauchst du Hilfe","du brauchst Hilfe"], answer:"du Hilfe brauchst" },
    { type:"mc", q:"Ich komme nicht, weil ___.", options:["ich arbeiten muss","muss ich arbeiten","ich muss arbeiten"], answer:"ich arbeiten muss" },
    { type:"mc", q:"Sie weiß, dass ___.", options:["der Kurs heute beginnt","beginnt der Kurs heute","der Kurs beginnt heute"], answer:"der Kurs heute beginnt" },
    { type:"mc", q:"Wenn ___, bestehen wir den Test.", options:["wir lernen","lernen wir","wir lernen es"], answer:"wir lernen" },

    { type:"mc", q:"Er bleibt im Bett, weil ___.", options:["er Fieber hat","hat er Fieber","er hat Fieber"], answer:"er Fieber hat" },
    { type:"mc", q:"Ich denke, dass ___.", options:["wir genug Zeit haben","haben wir genug Zeit","wir haben genug Zeit"], answer:"wir genug Zeit haben" },
    { type:"mc", q:"Wenn ___, fahren wir los.", options:["der Bus kommt","kommt der Bus","der Bus kommen"], answer:"der Bus kommt" },
    { type:"mc", q:"Sie lernt viel, weil ___.", options:["sie die Prüfung bestehen will","will sie die Prüfung bestehen","sie will die Prüfung bestehen"], answer:"sie die Prüfung bestehen will" },
    { type:"mc", q:"Er sagt, dass ___.", options:["er später kommt","kommt er später","er kommt später"], answer:"er später kommt" }
  ]
},
{
  id: "A2-L8",
  title: "A2 Wortschatz – Einkaufen / Arzt / Termin",
  de: [
    "Wichtiger Wortschatz für Alltagssituationen",
    "Einkaufen, Arztbesuch und Termine verstehen"
  ],
  ta: [
    "அன்றாட வாழ்க்கைக்கான முக்கிய சொற்கள்",
    "ஷாப்பிங், மருத்துவர், நேரம் தொடர்பான சொற்கள்"
  ],
  explain_de: [
    "Diese Übungen helfen dir im Alltag.",
    "Achte auf die Bedeutung der Wörter im Satz."
  ],
  explain_en: [
    "These exercises help you in daily life.",
    "Pay attention to the meaning of the words in the sentence."
  ],
  explain_ta: [
    "இந்த பயிற்சிகள் அன்றாட வாழ்க்கைக்கு உதவும்.",
    "வாக்கியத்தில் சொற்களின் பொருளை கவனிக்கவும்."
  ],
  quiz: [
    // 🛒 EINKAUFEN
    { type:"mc", q:"Ich kaufe Brot im ___.", options:["Supermarkt","Krankenhaus","Bahnhof"], answer:"Supermarkt" },
    { type:"mc", q:"Wie viel ___ kostet das?", options:["Geld","Preis","Euro"], answer:"Euro" },
    { type:"mc", q:"Ich möchte ___ bezahlen.", options:["kaufen","zahlen","nehmen"], answer:"zahlen" },
    { type:"mc", q:"Haben Sie das ___ billiger?", options:["Produkt","Arzt","Termin"], answer:"Produkt" },
    { type:"mc", q:"Ich nehme eine ___ Milch.", options:["Flasche","Tablette","Rezept"], answer:"Flasche" },

    // 🏥 ARZT
    { type:"mc", q:"Ich habe ___ und gehe zum Arzt.", options:["Schmerzen","Einkauf","Termin"], answer:"Schmerzen" },
    { type:"mc", q:"Der Arzt gibt mir ein ___.", options:["Rezept","Ticket","Konto"], answer:"Rezept" },
    { type:"mc", q:"Ich habe ___ im Bauch.", options:["Fieber","Schmerzen","Husten"], answer:"Schmerzen" },
    { type:"mc", q:"Ich fühle mich heute nicht ___.", options:["gesund","billig","frei"], answer:"gesund" },
    { type:"mc", q:"Ich muss die ___ in der Apotheke holen.", options:["Medikamente","Lebensmittel","Termine"], answer:"Medikamente" },

    // 📅 TERMIN
    { type:"mc", q:"Ich habe morgen einen ___.", options:["Termin","Preis","Markt"], answer:"Termin" },
    { type:"mc", q:"Der Termin ist um ___ Uhr.", options:["zwei","Montag","früh"], answer:"zwei" },
    { type:"mc", q:"Können wir den Termin ___?", options:["verschieben","kaufen","bezahlen"], answer:"verschieben" },
    { type:"mc", q:"Ich habe heute keine ___.", options:["Zeit","Geld","Apotheke"], answer:"Zeit" },
    { type:"mc", q:"Bitte kommen Sie ___ zum Termin.", options:["pünktlich","krank","leer"], answer:"pünktlich" },

    // 🔁 GEMISCHT
    { type:"mc", q:"Ich gehe zur ___, um Medikamente zu kaufen.", options:["Apotheke","Bäckerei","Bank"], answer:"Apotheke" },
    { type:"mc", q:"Der Arzt ist heute nicht ___.", options:["da","teuer","offen"], answer:"da" },
    { type:"mc", q:"Ich brauche einen neuen ___ beim Arzt.", options:["Termin","Einkauf","Preis"], answer:"Termin" },
    { type:"mc", q:"Das ist mir zu ___.", options:["teuer","krank","spät"], answer:"teuer" },
    { type:"mc", q:"Ich zahle an der ___.", options:["Kasse","Tür","Praxis"], answer:"Kasse" }
  ]
},
{
  id: "A2-L9",
  title: "A2 Wortschatz – Arbeit / Schule / Alltag",
  de: [
    "Wortschatz für Arbeit, Schule und Alltag",
    "Typische Situationen verstehen"
  ],
  ta: [
    "வேலை, பள்ளி மற்றும் அன்றாட வாழ்க்கை சொற்கள்",
    "பொதுவான சூழ்நிலைகள்"
  ],
  explain_de: [
    "Diese Wörter brauchst du im Alltag.",
    "Achte auf die Bedeutung im Kontext."
  ],
  explain_en: [
    "You need these words in daily life.",
    "Pay attention to the meaning in context."
  ],
  explain_ta: [
    "இந்த சொற்கள் அன்றாட வாழ்க்கைக்கு தேவையானவை.",
    "வாக்கியத்தின் பொருளை கவனிக்கவும்."
  ],
  quiz: [
    // 💼 ARBEIT
    { type:"mc", q:"Ich arbeite in einer ___.", options:["Firma","Schule","Wohnung"], answer:"Firma" },
    { type:"mc", q:"Mein Chef gibt mir eine ___.", options:["Aufgabe","Pause","Note"], answer:"Aufgabe" },
    { type:"mc", q:"Ich habe heute viel ___.", options:["Arbeit","Freizeit","Schule"], answer:"Arbeit" },
    { type:"mc", q:"Ich mache um 12 Uhr ___.", options:["Pause","Feier","Termin"], answer:"Pause" },
    { type:"mc", q:"Ich beginne die Arbeit um ___.", options:["acht","gestern","spät"], answer:"acht" },

    // 🎓 SCHULE
    { type:"mc", q:"Ich lerne Deutsch in der ___.", options:["Schule","Firma","Bank"], answer:"Schule" },
    { type:"mc", q:"Der Lehrer erklärt die ___.", options:["Aufgabe","Pause","Arbeit"], answer:"Aufgabe" },
    { type:"mc", q:"Wir schreiben heute einen ___.", options:["Test","Job","Plan"], answer:"Test" },
    { type:"mc", q:"Ich mache meine ___.", options:["Hausaufgaben","Termine","Einkäufe"], answer:"Hausaufgaben" },
    { type:"mc", q:"Der Kurs ist sehr ___.", options:["interessant","krank","leer"], answer:"interessant" },

    // 🏠 ALLTAG
    { type:"mc", q:"Ich stehe morgens früh ___.", options:["auf","ein","mit"], answer:"auf" },
    { type:"mc", q:"Ich fahre mit dem ___ zur Arbeit.", options:["Bus","Brot","Arzt"], answer:"Bus" },
    { type:"mc", q:"Nach der Arbeit gehe ich ___.", options:["nach Hause","zur Schule","zum Arzt"], answer:"nach Hause" },
    { type:"mc", q:"Ich habe am Abend ___.", options:["Zeit","Firma","Chef"], answer:"Zeit" },
    { type:"mc", q:"Ich bin heute sehr ___.", options:["müde","billig","fertig"], answer:"müde" },

    // 🔁 GEMISCHT
    { type:"mc", q:"Ich plane meinen ___.", options:["Tag","Arzt","Preis"], answer:"Tag" },
    { type:"mc", q:"Ich arbeite von Montag bis ___.", options:["Freitag","Uhr","Pause"], answer:"Freitag" },
    { type:"mc", q:"Ich lerne für die ___.", options:["Prüfung","Arbeit","Firma"], answer:"Prüfung" },
    { type:"mc", q:"Ich brauche eine kurze ___.", options:["Pause","Arbeit","Stunde"], answer:"Pause" },
    { type:"mc", q:"Mein Alltag ist sehr ___.", options:["stressig","leer","krank"], answer:"stressig" }
  ]
},
{
  id: "A2-L10",
  title: "A2 Verben – trennbar / untrennbar",
  de: [
    "Trennbare und untrennbare Verben im Alltag",
    "Verbposition im Satz"
  ],
  ta: [
    "பிரிக்கக்கூடிய / பிரிக்க முடியாத வினைகள்",
    "வாக்கியத்தில் வினை இடம்"
  ],
  explain_de: [
    "Trennbare Verben werden im Satz getrennt.",
    "Untrennbare Verben bleiben zusammen."
  ],
  explain_en: [
    "Separable verbs split in the sentence.",
    "Inseparable verbs stay together."
  ],
  explain_ta: [
    "Trennbare verbs வாக்கியத்தில் பிரியும்.",
    "Untrennbare verbs பிரியாது."
  ],
  quiz: [
    // 🔹 TRENNBAR
    { type:"mc", q:"Ich stehe um 7 Uhr ___.", options:["auf","an","ein"], answer:"auf" },
    { type:"mc", q:"Ich rufe meinen Freund ___.", options:["an","auf","mit"], answer:"an" },
    { type:"mc", q:"Ich kaufe im Supermarkt ___.", options:["ein","auf","ab"], answer:"ein" },
    { type:"mc", q:"Der Kurs fängt morgen ___.", options:["an","ein","mit"], answer:"an" },
    { type:"mc", q:"Ich höre dir ___.", options:["zu","an","mit"], answer:"zu" },

    // 🔸 UNTRENNBAR
    { type:"mc", q:"Ich ___. dich gut.", options:["verstehe","stehe","höre"], answer:"verstehe" },
    { type:"mc", q:"Ich ___. Deutsch.", options:["lerne","rufe","stehe"], answer:"lerne" },
    { type:"mc", q:"Wir ___. den Termin.", options:["besprechen","sprechen","brechen"], answer:"besprechen" },
    { type:"mc", q:"Ich ___. das Problem.", options:["erkläre","kläre","stelle"], answer:"erkläre" },
    { type:"mc", q:"Ich ___. dich.", options:["besuche","suche","rufe"], answer:"besuche" },

    // 🔁 MIX
    { type:"mc", q:"Ich ___ um 6 Uhr auf.", options:["stehe","verstehe","besuche"], answer:"stehe" },
    { type:"mc", q:"Ich ___ meine Mutter an.", options:["rufe","verrufe","besuche"], answer:"rufe" },
    { type:"mc", q:"Ich ___ Deutsch.", options:["lerne","stehe","höre"], answer:"lerne" },
    { type:"mc", q:"Der Unterricht ___ um 9 Uhr an.", options:["fängt","verfängt","lernt"], answer:"fängt" },
    { type:"mc", q:"Ich ___ den Text.", options:["verstehe","stehe","rufe"], answer:"verstehe" },

    // 🔂 ALLTAG
    { type:"mc", q:"Ich ___ meine Hausaufgaben.", options:["mache","verstehe","höre"], answer:"mache" },
    { type:"mc", q:"Ich ___ mit dem Lernen an.", options:["fange","verfange","lerne"], answer:"fange" },
    { type:"mc", q:"Ich ___ den Lehrer.", options:["frage","befrage","stehe"], answer:"frage" },
    { type:"mc", q:"Ich ___ einen Termin.", options:["vereinbare","bare","rufe"], answer:"vereinbare" },
    { type:"mc", q:"Ich ___ früh ins Bett.", options:["gehe","vergehe","stehe"], answer:"gehe" }
  ]
},
{
  id: "A2-L11",
  title: "A2 Modalverben – können / müssen / wollen",
  de: [
    "Modalverben im Alltag",
    "Wunsch, Pflicht und Möglichkeit ausdrücken"
  ],
  ta: [
    "Modalverb பயிற்சி",
    "விருப்பு, கட்டாயம், திறன்"
  ],
  explain_de: [
    "Im Deutschen steht das konjugierte Verb immer an Position 2.",
    "Bei Modalverben ist das Modalverb konjugiert.",
    "Das zweite Verb bleibt im Infinitiv und geht ans Satzende.",
    "Beispiele:",
    "Ich kann Deutsch lernen. (kann = Position 2, lernen = am Ende)",
    "Er muss heute arbeiten. (muss = Position 2, arbeiten = am Ende)",
    "Wir wollen nach Deutschland fahren.",
    "❌ Falsch (typischer Fehler): Ich kann lernen Deutsch. / Ich lernen Deutsch kann.",
    "Frageform: Modalverb an Position 1, Infinitiv am Ende.",
    "👉 Kann ich Deutsch lernen?"
  ],
  explain_en: [
    "In German, the conjugated verb is always in position 2.",
    "With modal verbs, the modal verb is conjugated.",
    "The second verb stays in the infinitive and goes to the end of the sentence.",
    "Examples:",
    "I can learn German. (kann = position 2, lernen = at the end)",
    "He must work today. (muss = position 2, arbeiten = at the end)",
    "We want to go to Germany.",
    "❌ Wrong (typical mistake): I can learn German. / I learn German can.",
    "Question form: modal verb in position 1, infinitive at the end.",
    "👉 Can I learn German?"
  ],
  explain_ta: [
    "ஜெர்மனில் மாற்றம் பெறும் verb (konjugiert) எப்போதும் 2‑வது இடத்தில் வரும்.",
    "Modalverb உள்ளால், Modalverb தான் மாற்றம் பெறும்.",
    "இரண்டாவது verb infinitiv‑ல் இருந்து வாக்கியத்தின் இறுதியில் வரும்.",
    "உதாரணங்கள்:",
    "Ich kann Deutsch lernen. (kann = இடம் 2, lernen = கடைசியில்)",
    "Er muss heute arbeiten. (muss = இடம் 2, arbeiten = கடைசியில்)",
    "Wir wollen nach Deutschland fahren.",
    "❌ தவறு (அடிக்கடி பிழை): Ich kann lernen Deutsch. / Ich lernen Deutsch kann.",
    "கேள்வி வடிவம்: Modalverb இடம் 1, infinitiv கடைசியில்.",
    "👉 Kann ich Deutsch lernen?"
  ],
  quiz: [
    // 🔹 KÖNNEN
    { type:"mc", q:"Ich ___ Deutsch sprechen.", options:["kann","muss","will"], answer:"kann" },
    { type:"mc", q:"Wir ___ heute kommen.", options:["können","müssen","wollen"], answer:"können" },
    { type:"mc", q:"Er ___ gut Auto fahren.", options:["kann","muss","will"], answer:"kann" },
    { type:"mc", q:"Ich ___ dir helfen.", options:["kann","muss","will"], answer:"kann" },
    { type:"mc", q:"Sie ___ nicht lesen.", options:["kann","muss","will"], answer:"kann" },

    // 🔸 MÜSSEN
    { type:"mc", q:"Ich ___ heute arbeiten.", options:["muss","kann","will"], answer:"muss" },
    { type:"mc", q:"Wir ___ pünktlich sein.", options:["müssen","können","wollen"], answer:"müssen" },
    { type:"mc", q:"Er ___ zum Arzt gehen.", options:["muss","kann","will"], answer:"muss" },
    { type:"mc", q:"Ich ___ früh aufstehen.", options:["muss","kann","will"], answer:"muss" },
    { type:"mc", q:"Sie ___ die Rechnung bezahlen.", options:["muss","kann","will"], answer:"muss" },

    // 🔹 WOLLEN
    { type:"mc", q:"Ich ___ Deutsch lernen.", options:["will","kann","muss"], answer:"will" },
    { type:"mc", q:"Wir ___ heute essen gehen.", options:["wollen","können","müssen"], answer:"wollen" },
    { type:"mc", q:"Er ___ ein neues Auto kaufen.", options:["will","kann","muss"], answer:"will" },
    { type:"mc", q:"Ich ___ jetzt schlafen.", options:["will","kann","muss"], answer:"will" },
    { type:"mc", q:"Sie ___ morgen kommen.", options:["will","kann","muss"], answer:"will" },

    // 🔁 MIX
    { type:"mc", q:"Ich ___ heute nicht kommen.", options:["kann","muss","will"], answer:"kann" },
    { type:"mc", q:"Wir ___ einen Termin machen.", options:["müssen","können","wollen"], answer:"müssen" },
    { type:"mc", q:"Er ___ nicht arbeiten.", options:["will","kann","muss"], answer:"will" },
    { type:"mc", q:"Ich ___ dir nicht helfen.", options:["kann","muss","will"], answer:"kann" },
    { type:"mc", q:"Sie ___ Deutsch sprechen.", options:["will","kann","muss"], answer:"kann" }
  ]
},
{
  id: "A2-L13",
  title: "A2+ Perfekt MIX – haben / sein + Modalverben",
  de: [
    "Perfekt mit haben und sein",
    "Perfekt mit Modalverben (Doppelinfinitiv)"
  ],
  ta: [
    "Perfekt கலப்பு பயிற்சி",
    "Modalverb Perfekt"
  ],
  explain_de: [
    "Bewegung → sein",
    "Andere Verben → haben",
    "Modalverben im Perfekt: haben + Infinitiv + Modalverb"
  ],
  explain_en: [
    "Movement → sein",
    "Other verbs → haben",
    "Modal verbs in Perfekt: haben + infinitive + modal verb"
  ],
  explain_ta: [
    "நகர்வு → sein",
    "மற்றவை → haben",
    "Modalverb Perfekt: haben + infinitiv + modalverb"
  ],
  quiz: [
    // 🔹 HABEN / SEIN
    { type:"mc", q:"Ich ___ nach Hause gegangen.", options:["bin","habe"], answer:"bin" },
    { type:"mc", q:"Wir ___ Deutsch gelernt.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Er ___ früh aufgestanden.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Sie ___ viel gearbeitet.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ in Berlin gewesen.", options:["bin","habe"], answer:"bin" },

    // 🔸 MODALVERBEN IM PERFEKT
    { type:"mc", q:"Ich ___ heute arbeiten müssen.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Er ___ früh aufstehen müssen.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Wir ___ Deutsch lernen wollen.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Sie ___ nicht kommen können.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ lange warten müssen.", options:["habe","bin"], answer:"habe" },

    // 🔁 MIX
    { type:"mc", q:"Er ___ nach Hause gefahren.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Wir ___ das Problem verstanden.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Sie ___ krank geworden.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Ich ___ früh gehen müssen.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Er ___ den Termin vergessen.", options:["hat","ist"], answer:"hat" },

    // 🔂 ALLTAG
    { type:"mc", q:"Wir ___ im Büro geblieben.", options:["sind","haben"], answer:"sind" },
    { type:"mc", q:"Sie ___ viel Wasser getrunken.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ nicht bleiben können.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Er ___ spät angekommen.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Wir ___ alles erledigt.", options:["haben","sind"], answer:"haben" }
  ]
},
{
  id: "A2-L14",
  title: "A2+ Nebensatz + Perfekt (geprüft)",
  de: ["Nebensatz (weil / dass / wenn) + Perfekt – eine Lücke"],
  ta: ["Nebensatz + Perfekt பயிற்சி"],
  explain_de: [
    "Im Nebensatz steht das Verb am Ende.",
    "In jeder Aufgabe gibt es nur eine Lücke (kein Doppelverb)."
  ],
  explain_en: [
    "In a subordinate clause, the verb goes to the end.",
    "Each task has only one gap (no double verb)."
  ],
  explain_ta: [
    "Nebensatz-ல் வினைச்சொல் கடைசியில் வரும்.",
    "ஒவ்வொரு பணியிலும் ஒரு இடைவெளி மட்டுமே உள்ளது (இரண்டு வினை இல்லை)."
  ],
  quiz: [
    { type:"mc", q:"Ich bleibe zu Hause, weil ich krank ___.", options:["bin","habe","war"], answer:"bin" },
    { type:"mc", q:"Er sagt, dass er spät gekommen ___.", options:["ist","hat","war"], answer:"ist" },
    { type:"mc", q:"Wenn wir Zeit gehabt ___, kommen wir.", options:["haben","sind","waren"], answer:"haben" },
    { type:"mc", q:"Sie bleibt im Bett, weil sie Fieber ___.", options:["hat","ist","war"], answer:"hat" },
    { type:"mc", q:"Ich denke, dass er gut gearbeitet ___.", options:["hat","ist","war"], answer:"hat" },

    { type:"mc", q:"Wenn es geregnet ___, sind wir zu Hause geblieben.", options:["hat","ist","war"], answer:"hat" },
    { type:"mc", q:"Er sagt, dass er früh aufgestanden ___.", options:["ist","hat","war"], answer:"ist" },
    { type:"mc", q:"Wir gehen nicht raus, weil es kalt ___.", options:["ist","war","hat"], answer:"ist" },
    { type:"mc", q:"Ich hoffe, dass sie pünktlich gekommen ___.", options:["ist","hat","war"], answer:"ist" },
    { type:"mc", q:"Wenn ich das gewusst ___, wäre ich gekommen.", options:["hätte","habe","war"], answer:"hätte" },

    { type:"mc", q:"Sie sagt, dass sie viel gelernt ___.", options:["hat","ist","war"], answer:"hat" },
    { type:"mc", q:"Er bleibt zu Hause, weil er müde ___.", options:["ist","war","hat"], answer:"ist" },
    { type:"mc", q:"Wenn wir angekommen ___, rufen wir an.", options:["sind","haben","waren"], answer:"sind" },
    { type:"mc", q:"Ich weiß, dass du recht gehabt ___.", options:["hast","bist","warst"], answer:"hast" },
    { type:"mc", q:"Wir sind geblieben, weil es spät ___.", options:["war","ist","hat"], answer:"war" },

    { type:"mc", q:"Er glaubt, dass alles gut gelaufen ___.", options:["ist","hat","war"], answer:"ist" },
    { type:"mc", q:"Wenn sie Zeit ___, hilft sie.", options:["hat","ist","war"], answer:"hat" },
    { type:"mc", q:"Ich komme nicht, weil ich arbeiten müssen ___.", options:["habe","bin","war"], answer:"habe" },
    { type:"mc", q:"Sie sagt, dass sie nicht kommen können ___.", options:["hat","ist","war"], answer:"hat" },
    { type:"mc", q:"Wenn wir fertig ___, gehen wir.", options:["sind","haben","waren"], answer:"sind" }
  ]
},
{
  id: "A2-L15",
  title: "A2 Wiederholungstest – Alles gemischt (geprüft)",
  de: ["Perfekt, Nebensatz, Modalverben, Wortschatz"],
  explain_de: [
    "Mix-Test: Perfekt, Nebensatz, Modalverben und Wortschatz.",
    "Wähle die richtige Form im Satz."
  ],
  explain_en: [
    "Mix test: Perfekt, subordinate clauses, modal verbs, and vocabulary.",
    "Choose the correct form in the sentence."
  ],
  explain_ta: [
    "கலப்பு தேர்வு: Perfekt, Nebensatz, Modalverben மற்றும் சொற்கள்.",
    "வாக்கியத்தில் சரியான வடிவத்தை தேர்வு செய்யவும்."
  ],
  quiz: [
    { type:"mc", q:"Ich ___ nach Hause gegangen.", options:["bin","habe"], answer:"bin" },
    { type:"mc", q:"Wir ___ Deutsch gelernt.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Er ___ früh aufgestanden.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Sie ___ viel gearbeitet.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Wir ___ nach Berlin gefahren.", options:["sind","haben"], answer:"sind" },

    { type:"mc", q:"Ich bleibe zu Hause, weil ich krank ___.", options:["bin","habe"], answer:"bin" },
    { type:"mc", q:"Ich denke, dass er heute ___ kommt.", options:["nicht","keine"], answer:"nicht" },
    { type:"mc", q:"Wenn es regnet, ___ wir zu Hause.", options:["bleiben","bleibt"], answer:"bleiben" },
    { type:"mc", q:"Ich hoffe, dass sie pünktlich ___.", options:["kommt","kommen"], answer:"kommt" },
    { type:"mc", q:"Wir bleiben hier, weil es kalt ___.", options:["ist","hat"], answer:"ist" },

    { type:"mc", q:"Ich ___ heute arbeiten müssen.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Er ___ nicht helfen können.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Wir ___ den Termin verschieben müssen.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Sie ___ zum Arzt gehen müssen.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich ___ früher gehen müssen.", options:["habe","bin"], answer:"habe" },

    { type:"mc", q:"Ich zahle an der ___.", options:["Kasse","Praxis","Schule"], answer:"Kasse" },
    { type:"mc", q:"Der Arzt gibt mir ein ___.", options:["Rezept","Preis","Ticket"], answer:"Rezept" },
    { type:"mc", q:"Ich habe morgen einen ___.", options:["Termin","Markt","Bus"], answer:"Termin" },
    { type:"mc", q:"Das ist mir zu ___.", options:["teuer","müde","pünktlich"], answer:"teuer" },
    { type:"mc", q:"Ich gehe zur ___, um Medikamente zu holen.", options:["Apotheke","Bäckerei","Bank"], answer:"Apotheke" },

    { type:"mc", q:"Ich mache um 12 Uhr ___.", options:["Pause","Prüfung","Einkauf"], answer:"Pause" },
    { type:"mc", q:"Ich schreibe heute einen ___.", options:["Test","Chef","Plan"], answer:"Test" },
    { type:"mc", q:"Ich mache meine ___.", options:["Hausaufgaben","Termine","Preise"], answer:"Hausaufgaben" },
    { type:"mc", q:"Der Kurs ist sehr ___.", options:["interessant","leer","krank"], answer:"interessant" },
    { type:"mc", q:"Mein Alltag ist sehr ___.", options:["stressig","billig","leise"], answer:"stressig" },

    { type:"mc", q:"Ich ___ zum Arzt, weil ich Schmerzen habe.", options:["gehe","geht"], answer:"gehe" },
    { type:"mc", q:"Er sagt, dass er spät gekommen ___.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Wenn ich Zeit habe, ___ ich dich an.", options:["rufe","ruft"], answer:"rufe" },
    { type:"mc", q:"Wir sind geblieben, weil es geregnet ___.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Ich weiß, dass du recht gehabt ___.", options:["hast","bist"], answer:"hast" },

    { type:"mc", q:"Sie ___ viel Wasser getrunken.", options:["hat","ist"], answer:"hat" },
    { type:"mc", q:"Er ___ spät angekommen.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Wir ___ alles erledigt.", options:["haben","sind"], answer:"haben" },
    { type:"mc", q:"Ich ___ meine Hausaufgaben gemacht.", options:["habe","bin"], answer:"habe" },
    { type:"mc", q:"Sie ___ nach Hause gefahren.", options:["ist","hat"], answer:"ist" },

    { type:"mc", q:"Ich ___ Deutsch sprechen.", options:["kann","muss"], answer:"kann" },
    { type:"mc", q:"Ich ___ heute arbeiten.", options:["muss","kann"], answer:"muss" },
    { type:"mc", q:"Ich ___ Deutsch lernen.", options:["will","muss"], answer:"will" },
    { type:"mc", q:"Können wir den Termin ___?", options:["verschieben","bezahlen"], answer:"verschieben" },
    { type:"mc", q:"Bitte kommen Sie ___.", options:["pünktlich","krank"], answer:"pünktlich" }
  ]
},
{
  id: "A2-L16",
  title: "A2 Präpositionen + Perfekt (nach/in/zu)",
  de: [
    "nach = Länder/Städte (ohne Artikel): nach Berlin, nach Deutschland",
    "in = mit Artikel / Länder mit Artikel: in die Türkei, in den Iran",
    "zu = Personen/Termine/Orte als Ziel: zum Arzt, zur Arbeit, zu Freunden",
    "Perfekt: sein + gegangen/gefahren/gewesen"
  ],
  ta: [
    "nach = நகரம்/நாடு (ஆர்ட்டிக்கல் இல்லாமல்): nach Berlin",
    "in = ஆர்ட்டிக்கலுடன் / in die / in den: in die Türkei",
    "zu = மனிதர்/அப்பாயின்ட்மெண்ட்/சந்திப்பு: zum Arzt, zu Freunden",
    "Perfekt: sein + gegangen/gefahren/gewesen"
  ],
  explain_de: [
    "Wohin? → nach / in / zu (Ziel).",
    "Wo? → in + Dativ (in der / im).",
    "Perfekt mit Bewegung: ich bin gegangen / gefahren."
  ],
  explain_en: [
    "Where to? → nach / in / zu (destination).",
    "Where? → in + dative (in der / im).",
    "Perfekt with movement: ich bin gegangen / gefahren."
  ],
  explain_ta: [
    "எங்கே செல்கிறேன்? → nach / in / zu (இலக்கு).",
    "எங்கே இருக்கிறேன்? → in + Dativ (in der / im).",
    "நகர்வு வினைகள் Perfekt: ich bin gegangen / gefahren."
  ],
  quiz: [
    // ---------- MC (1–10) ----------
    { type:"mc", q:"Ich bin ___ Berlin gefahren.", options:["nach","in","zu"], answer:"nach" },
    { type:"mc", q:"Wir sind ___ die Türkei geflogen.", options:["nach","in","zu"], answer:"in" },
    { type:"mc", q:"Er ist ___ dem Arzt gegangen.", options:["nach","zu","in"], answer:"zu" },
    { type:"mc", q:"Sie ist ___ Hause geblieben.", options:["nach","zu","in"], answer:"zu" },
    { type:"mc", q:"Ich gehe ___ meine Freundin.", options:["zu","nach","in"], answer:"zu" },
    { type:"mc", q:"Wir fahren ___ Deutschland.", options:["nach","zu","in"], answer:"nach" },
    { type:"mc", q:"Er geht ___ die Schule.", options:["in","nach","zu"], answer:"in" },
    { type:"mc", q:"Ich bin ___ der Arbeit.", options:["in","zu","nach"], answer:"in" },
    { type:"mc", q:"Morgen habe ich einen Termin ___ Zahnarzt.", options:["beim","zum","nach"], answer:"beim" },
    { type:"mc", q:"Gestern bin ich ___ meinen Eltern gefahren.", options:["zu","nach","in"], answer:"zu" },

    // ---------- WORDORDER (11–16) ----------
    // Achte: Antwort ist GENAU der richtige Satz (Groß/Klein wichtig)
    { type:"wordorder", q:"Bilde den Satz:", words:["Heute","bin","ich","zum","Arzt","gegangen","."], answer:"Heute bin ich zum Arzt gegangen." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Wir","sind","nach","Berlin","gefahren","."], answer:"Wir sind nach Berlin gefahren." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Er","ist","in","die","Schule","gegangen","."], answer:"Er ist in die Schule gegangen." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Ich","war","gestern","bei","meinem","Freund","."], answer:"Ich war gestern bei meinem Freund." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Sie","ist","zu","Hause","geblieben","."], answer:"Sie ist zu Hause geblieben." },
    { type:"wordorder", q:"Bilde den Satz:", words:["Wir","haben","einen","Termin","beim","Arzt","."], answer:"Wir haben einen Termin beim Arzt." },

    // ---------- WRITE (17–20) ----------
    { type:"write", q:"Schreibe: (Perfekt) Ich / gehen / nach Hause", answer:"Ich bin nach Hause gegangen." },
    { type:"write", q:"Schreibe: (Perfekt) Wir / fahren / nach Köln", answer:"Wir sind nach Köln gefahren." },
    { type:"write", q:"Schreibe: (Perfekt) Er / gehen / in die Stadt", answer:"Er ist in die Stadt gegangen." },
    { type:"write", q:"Schreibe: (Termin) Ich / haben / Termin / beim Arzt", answer:"Ich habe einen Termin beim Arzt." }
  ]
},

{
  id: "B1-L1",
  title: "B1 Einstieg – Satzbau & Wortstellung (geprüft)",
  de: ["Hauptsatz, Nebensatz, Verbposition"],
  explain_de: [
    "Hauptsatz: Verb steht auf Position 2.",
    "Nebensatz: Verb steht am Ende.",
    "Achte auf Satzanfang (Zeit/Subjekt) und richtige Wortstellung."
  ],
  explain_en: [
    "Main clause: the verb is in position 2.",
    "Subordinate clause: the verb goes to the end.",
    "Pay attention to the sentence start (time/subject) and word order."
  ],
  explain_ta: [
    "முக்கிய வாக்கியம்: வினைச்சொல் 2-வது இடத்தில் வரும்.",
    "துணை வாக்கியம்: வினைச்சொல் கடைசியில் வரும்.",
    "வாக்கியத் தொடக்கம் (நேரம்/subject) மற்றும் வரிசையை கவனிக்கவும்."
  ],
  quiz: [
    { type:"mc", q:"Heute ___ ich keine Zeit.", options:["habe","ich habe"], answer:"habe" },
    { type:"mc", q:"Morgen ___ wir nach Berlin.", options:["fahren","wir fahren"], answer:"fahren" },
    { type:"mc", q:"Nach der Arbeit ___ ich einkaufen.", options:["gehe","ich gehe"], answer:"gehe" },
    { type:"mc", q:"Im Büro ___ er viel.", options:["arbeitet","er arbeitet"], answer:"arbeitet" },
    { type:"mc", q:"Am Wochenende ___ wir frei.", options:["haben","wir haben"], answer:"haben" },

    { type:"mc", q:"Ich glaube, dass er heute nicht ___.", options:["kommt","kommt er"], answer:"kommt" },
    { type:"mc", q:"Ich weiß, dass du recht ___ hast.", options:["hast","du hast"], answer:"hast" },
    { type:"mc", q:"Ich hoffe, dass du pünktlich ___.", options:["kommst","du kommst"], answer:"kommst" },
    { type:"mc", q:"Ich denke, dass alles gut ___.", options:["ist","alles ist"], answer:"ist" },
    { type:"mc", q:"Er sagt, dass er müde ___.", options:["ist","er ist"], answer:"ist" },

    { type:"mc", q:"Wenn es regnet, ___ wir zu Hause.", options:["bleiben","bleibt"], answer:"bleiben" },
    { type:"mc", q:"Wenn ich Zeit habe, ___ ich dich an.", options:["rufe","ruft"], answer:"rufe" },
    { type:"mc", q:"Wenn der Bus kommt, ___ wir los.", options:["fahren","fährt"], answer:"fahren" },
    { type:"mc", q:"Wenn ich fertig bin, ___ ich.", options:["gehe","geht"], answer:"gehe" },
    { type:"mc", q:"Wenn du willst, ___ ich dir.", options:["helfe","hilft"], answer:"helfe" },

    { type:"mc", q:"Zu Hause ___ sie viel.", options:["lernt","sie lernt"], answer:"lernt" },
    { type:"mc", q:"Zu spät ___ er heute.", options:["kommt","er kommt"], answer:"kommt" },
    { type:"mc", q:"Gestern ___ ich sehr müde.", options:["war","ich war"], answer:"war" },
    { type:"mc", q:"Am Abend ___ wir fern.", options:["sehen","wir sehen"], answer:"sehen" },
    { type:"mc", q:"Nach dem Essen ___ wir spazieren.", options:["gehen","wir gehen"], answer:"gehen" }
  ]
},
{
  id: "A2-L17",
  title: "A2 Wörter sortieren – Satz bilden (geprüft)",
  de: ["Satzbau – Wörter in die richtige Reihenfolge bringen"],
  explain_de: [
    "Am Satzanfang schreibt man groß: Heute, Morgens, Nach..., Am...",
    "Am Ende steht ein Punkt."
  ],
  explain_en: [
    "Capitalize the first word: Heute, Morgens, Nach..., Am...",
    "A sentence ends with a period."
  ],
  explain_ta: [
    "வாக்கியத்தின் முதல் சொல் பெரிய எழுத்தில் வரும்: Heute, Morgens, Nach..., Am...",
    "வாக்கியம் புள்ளியுடன் முடிகிறது."
  ],
  quiz: [
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["ich", "lerne", "Heute", "Deutsch", "."],
      answer: "Heute lerne ich Deutsch."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Wir", "gehen", "nach", "Hause", "."],
      answer: "Wir gehen nach Hause."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Morgens", "stehe", "ich", "früh", "auf", "."],
      answer: "Morgens stehe ich früh auf."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Ich", "kaufe", "im", "Supermarkt", "ein", "."],
      answer: "Ich kaufe im Supermarkt ein."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Heute", "arbeite", "ich", "zu", "Hause", "."],
      answer: "Heute arbeite ich zu Hause."
    },

    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Nach", "der", "Arbeit", "gehe", "ich", "einkaufen", "."],
      answer: "Nach der Arbeit gehe ich einkaufen."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Am", "Abend", "sehen", "wir", "fern", "."],
      answer: "Am Abend sehen wir fern."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Ich", "rufe", "meine", "Mutter", "an", "."],
      answer: "Ich rufe meine Mutter an."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Morgen", "fängt", "der", "Kurs", "an", "."],
      answer: "Morgen fängt der Kurs an."
    },
    {
      type: "wordorder",
      q: "Bilde den Satz:",
      words: ["Zu", "Hause", "lerne", "ich", "Deutsch", "."],
      answer: "Zu Hause lerne ich Deutsch."
    }
  ]
},
{
  id: "A2-L18",
  title: "A2 Wörter sortieren – Perfekt",
  de: ["Perfekt – Satz richtig zusammenbauen"],
  explain_de: [
    "Im Perfekt steht das Hilfsverb an Position 2.",
    "Das Partizip steht am Satzende.",
    "Der Satzanfang wird großgeschrieben."
  ],
  explain_en: [
    "In Perfekt, the auxiliary verb is in position 2.",
    "The past participle goes at the end.",
    "Capitalize the first word."
  ],
  explain_ta: [
    "Perfekt-இல் உதவி வினைச்சொல் 2-வது இடத்தில் வரும்.",
    "Partizip வாக்கியத்தின் முடிவில் வரும்.",
    "முதல் சொல் பெரிய எழுத்தில் வரும்."
  ],
  quiz: [
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Gestern","habe","ich","Deutsch","gelernt","."],
      answer:"Gestern habe ich Deutsch gelernt."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Heute","bin","ich","früh","aufgestanden","."],
      answer:"Heute bin ich früh aufgestanden."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Nach","der","Arbeit","haben","wir","eingekauft","."],
      answer:"Nach der Arbeit haben wir eingekauft."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Am","Abend","hat","sie","gekocht","."],
      answer:"Am Abend hat sie gekocht."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Gestern","ist","er","spät","gekommen","."],
      answer:"Gestern ist er spät gekommen."
    },

    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Zu","Hause","haben","wir","gelernt","."],
      answer:"Zu Hause haben wir gelernt."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Heute","hat","sie","viel","gearbeitet","."],
      answer:"Heute hat sie viel gearbeitet."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Am","Morgen","bin","ich","laufen","gegangen","."],
      answer:"Am Morgen bin ich laufen gegangen."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Gestern","haben","wir","einen","Film","gesehen","."],
      answer:"Gestern haben wir einen Film gesehen."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Nach","dem","Essen","ist","er","spazieren","gegangen","."],
      answer:"Nach dem Essen ist er spazieren gegangen."
    },

    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Heute","habe","ich","meine","Hausaufgaben","gemacht","."],
      answer:"Heute habe ich meine Hausaufgaben gemacht."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Am","Wochenende","sind","wir","zu","Hause","geblieben","."],
      answer:"Am Wochenende sind wir zu Hause geblieben."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Gestern","hat","sie","lange","geschlafen","."],
      answer:"Gestern hat sie lange geschlafen."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Nach","der","Schule","habe","ich","gelernt","."],
      answer:"Nach der Schule habe ich gelernt."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Heute","sind","wir","früh","angekommen","."],
      answer:"Heute sind wir früh angekommen."
    },

    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Gestern","hat","er","seine","Eltern","besucht","."],
      answer:"Gestern hat er seine Eltern besucht."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Am","Abend","haben","wir","Deutsch","geübt","."],
      answer:"Am Abend haben wir Deutsch geübt."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Heute","bin","ich","mit","dem","Bus","gefahren","."],
      answer:"Heute bin ich mit dem Bus gefahren."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Gestern","haben","sie","lange","telefoniert","."],
      answer:"Gestern haben sie lange telefoniert."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Nach","der","Arbeit","ist","sie","nach","Hause","gegangen","."],
      answer:"Nach der Arbeit ist sie nach Hause gegangen."
    }
  ]
},
{
  id: "A2-L20",
  title: "A2 Präpositionen – in / auf / aus / nach",
  explain_de: [
    "in = Ort (innen)",
    "auf = Ort (Fläche)",
    "aus = Herkunft",
    "nach = Ziel (Stadt, Land, Hause)"
  ],
  explain_en: [
    "in = place inside",
    "auf = place on a surface",
    "aus = origin",
    "nach = destination (city, country, home)"
  ],
  explain_ta: [
    "in = உள்ளே / இடம்",
    "auf = மேல் / மேற்பரப்பு",
    "aus = எங்கிருந்து",
    "nach = செல்லும் திசை (நகரம், நாடு, வீடு)"
  ],
  quiz: [
    { type:"mc", q:"Ich bin ___ der Schule.", options:["in","auf","nach","aus"], answer:"in" },
    { type:"mc", q:"Das Buch liegt ___ dem Tisch.", options:["auf","in","aus","nach"], answer:"auf" },
    { type:"mc", q:"Ich komme ___ Deutschland.", options:["aus","nach","in","auf"], answer:"aus" },
    { type:"mc", q:"Wir fahren ___ Berlin.", options:["nach","in","auf","aus"], answer:"nach" },
    { type:"mc", q:"Das Handy ist ___ der Tasche.", options:["in","auf","nach","aus"], answer:"in" }
  ]
},
{
  id: "A2-L21",
  title: "A2 Präpositionen – Wörter sortieren",
  explain_de: [
    "Bilde Sätze mit in/auf/aus/nach.",
    "Achte auf die richtige Reihenfolge."
  ],
  explain_en: [
    "Build sentences with in/auf/aus/nach.",
    "Watch the correct word order."
  ],
  explain_ta: [
    "in/auf/aus/nach கொண்டு வாக்கியம் அமைக்கவும்.",
    "சரியான வரிசையை கவனிக்கவும்."
  ],
  quiz: [
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","bin","in","der","Schule","."],
      answer:"Ich bin in der Schule."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Das","Buch","liegt","auf","dem","Tisch","."],
      answer:"Das Buch liegt auf dem Tisch."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","komme","aus","Deutschland","."],
      answer:"Ich komme aus Deutschland."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Wir","gehen","nach","Hause","."],
      answer:"Wir gehen nach Hause."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Die","Tasse","steht","auf","dem","Boden","."],
      answer:"Die Tasse steht auf dem Boden."
    }
  ]
},
{
  id: "A2-L22",
  title: "A2 Präpositionen + Perfekt",
  explain_de: [
    "Bewegung → sein",
    "nach + Stadt / Land / Hause"
  ],
  explain_en: [
    "Movement → sein",
    "nach + city / country / home"
  ],
  explain_ta: [
    "நகர்வு → sein",
    "nach + நகரம் / நாடு / வீடு"
  ],
  quiz: [
    { type:"mc", q:"Ich ___ nach Hause gegangen.", options:["bin","habe"], answer:"bin" },
    { type:"mc", q:"Wir ___ nach Berlin gefahren.", options:["sind","haben"], answer:"sind" },
    { type:"mc", q:"Er ___ in die Schule gegangen.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Sie ___ aus Deutschland gekommen.", options:["ist","hat"], answer:"ist" },
    { type:"mc", q:"Ich ___ auf den Balkon gegangen.", options:["bin","habe"], answer:"bin" }
  ]
},
{
  id: "A2-L23",
  title: "A2 Präpositionen + Perfekt – Wörter sortieren",
  explain_de: [
    "Bilde Perfekt-Sätze mit nach/in/aus/auf.",
    "Hilfsverb an Position 2, Partizip am Ende."
  ],
  explain_en: [
    "Build Perfekt sentences with nach/in/aus/auf.",
    "Auxiliary verb in position 2, participle at the end."
  ],
  explain_ta: [
    "nach/in/aus/auf கொண்டு Perfekt வாக்கியங்களை அமைக்கவும்.",
    "உதவி வினை 2-வது இடத்தில், Partizip முடிவில் வரும்."
  ],
  quiz: [
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","bin","nach","Hause","gegangen","."],
      answer:"Ich bin nach Hause gegangen."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Wir","sind","nach","Berlin","gefahren","."],
      answer:"Wir sind nach Berlin gefahren."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Er","ist","in","die","Schule","gegangen","."],
      answer:"Er ist in die Schule gegangen."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Sie","ist","aus","Deutschland","gekommen","."],
      answer:"Sie ist aus Deutschland gekommen."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","bin","auf","den","Balkon","gegangen","."],
      answer:"Ich bin auf den Balkon gegangen."
    }
  ]
},
{
  id: "A2-L24",
  title: "A2 Präpositionen – typische Fehler (nach / in / zu)",
  explain_de: [
    "nach = Stadt, Land, Hause",
    "in = Gebäude / Ort",
    "zu = Person / Arbeit / Arzt"
  ],
  explain_en: [
    "nach = city, country, home",
    "in = building / place",
    "zu = person / work / doctor"
  ],
  explain_ta: [
    "nach = நகரம் / நாடு / வீடு",
    "in = கட்டிடம் / இடம்",
    "zu = நபர் / வேலை / மருத்துவர்"
  ],
  quiz: [
    { type:"mc", q:"Ich gehe ___ Hause.", options:["nach","in","zu"], answer:"nach" },
    { type:"mc", q:"Ich gehe ___ die Schule.", options:["in","nach","zu"], answer:"in" },
    { type:"mc", q:"Ich gehe ___ Arzt.", options:["zum","nach","in"], answer:"zum" },
    { type:"mc", q:"Wir fahren ___ Berlin.", options:["nach","in","zu"], answer:"nach" },
    { type:"mc", q:"Sie geht ___ Arbeit.", options:["zur","nach","in"], answer:"zur" },

    { type:"mc", q:"Er ist ___ der Schule.", options:["in","nach","zu"], answer:"in" },
    { type:"mc", q:"Ich gehe ___ meiner Mutter.", options:["zu","nach","in"], answer:"zu" },
    { type:"mc", q:"Wir fliegen ___ Deutschland.", options:["nach","in","zu"], answer:"nach" },
    { type:"mc", q:"Sie geht ___ dem Lehrer.", options:["zu","nach","in"], answer:"zu" },
    { type:"mc", q:"Ich bin ___ der Arbeit.", options:["in","zu","nach"], answer:"in" }
  ]
},
{
  id: "A2-L25",
  title: "A2 Präpositionen – Fehler vermeiden (Wörter sortieren)",
  explain_de: [
    "Bilde richtige Sätze mit nach/in/zu.",
    "Achte auf die Richtung (Wohin?)."
  ],
  explain_en: [
    "Build correct sentences with nach/in/zu.",
    "Pay attention to direction (where to?)."
  ],
  explain_ta: [
    "nach/in/zu கொண்டு சரியான வாக்கியம் அமைக்கவும்.",
    "Wohin? (எங்கே செல்கிறேன்) என்பதை கவனிக்கவும்."
  ],
  quiz: [
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","gehe","nach","Hause","."],
      answer:"Ich gehe nach Hause."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","gehe","in","die","Schule","."],
      answer:"Ich gehe in die Schule."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","gehe","zum","Arzt","."],
      answer:"Ich gehe zum Arzt."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Wir","fahren","nach","Berlin","."],
      answer:"Wir fahren nach Berlin."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Sie","geht","zur","Arbeit","."],
      answer:"Sie geht zur Arbeit."
    }
  ]
},
{
  id: "A2-B1-L1",
  title: "A2 → B1 Übergang – in die / in der",
  explain_de: [
    "Wohin? → in die",
    "Wo? → in der"
  ],
  explain_en: [
    "Where to? → in die",
    "Where? → in der"
  ],
  explain_ta: [
    "எங்கு செல்கிறேன்? → in die",
    "எங்கே இருக்கிறேன்? → in der"
  ],
  quiz: [
    { type:"mc", q:"Ich gehe ___ Schule.", options:["in die","in der"], answer:"in die" },
    { type:"mc", q:"Ich bin ___ Schule.", options:["in der","in die"], answer:"in der" },
    { type:"mc", q:"Wir fahren ___ Stadt.", options:["in die","in der"], answer:"in die" },
    { type:"mc", q:"Wir sind ___ Stadt.", options:["in der","in die"], answer:"in der" },
    { type:"mc", q:"Er geht ___ Küche.", options:["in die","in der"], answer:"in die" },
    { type:"mc", q:"Er ist ___ Küche.", options:["in der","in die"], answer:"in der" }
  ]
},
{
  id: "A2-B1-L2",
  title: "A2 → B1 Übergang – Satz bauen",
  explain_de: [
    "Bilde Sätze mit in die (Wohin) und in der (Wo).",
    "Achte auf die richtige Wortstellung."
  ],
  explain_en: [
    "Build sentences with in die (where to) and in der (where).",
    "Watch the correct word order."
  ],
  explain_ta: [
    "in die (எங்கு செல்கிறேன்) மற்றும் in der (எங்கே) கொண்டு வாக்கியம் அமைக்கவும்.",
    "சரியான வரிசையை கவனிக்கவும்."
  ],
  quiz: [
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","gehe","in","die","Schule","."],
      answer:"Ich gehe in die Schule."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Ich","bin","in","der","Schule","."],
      answer:"Ich bin in der Schule."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Wir","fahren","in","die","Stadt","."],
      answer:"Wir fahren in die Stadt."
    },
    {
      type:"wordorder",
      q:"Bilde den Satz:",
      words:["Wir","sind","in","der","Stadt","."],
      answer:"Wir sind in der Stadt."
    }
  ]
},
{
  id: "A2-L-Prep-mit-von-zu-MC",
  title: "A2 Präpositionen – mit / von / zu",

  // ✅ Grammatik (kurz)
  de: [
    "mit + Dativ → mit wem? womit?",
    "von + Dativ → woher? von wem? (Herkunft/Besitz)",
    "zu + Dativ → wohin? Ziel/Person",
    "zu dem = zum, zu der = zur"
  ],
  ta: [
    "mit + Dativ → யாருடன்? எதுடன்?",
    "von + Dativ → எங்கிருந்து? யாரிடமிருந்து? (மூலம்/உரிமை)",
    "zu + Dativ → எங்கே/யாரிடம் செல்கிறேன்?",
    "zu dem = zum, zu der = zur"
  ],

  // ✅ Erklärung (lang, für Grammatik-Screen + Audio)
  explain_de: [
    "In dieser A2-Lektion üben wir die Präpositionen mit, von und zu.",
    "mit + Dativ: Begleitung oder Mittel. Beispiel: Ich fahre mit dem Bus. Ich spreche mit meinem Freund.",
    "von + Dativ: Herkunft oder Besitz. Beispiel: Ich komme von der Arbeit. Das Geschenk ist von meiner Mutter.",
    "zu + Dativ: Ziel oder Person. Beispiel: Ich gehe zum Arzt. Wir gehen zur Schule.",
    "Merke: zu dem wird zum, zu der wird zur."
  ],
  explain_en: [
    "In this A2 lesson we practice the prepositions mit, von, and zu.",
    "mit + dative: companion or means. Example: Ich fahre mit dem Bus. Ich spreche mit meinem Freund.",
    "von + dative: origin or possession. Example: Ich komme von der Arbeit. Das Geschenk ist von meiner Mutter.",
    "zu + dative: destination or person. Example: Ich gehe zum Arzt. Wir gehen zur Schule.",
    "Remember: zu dem becomes zum, zu der becomes zur."
  ],
  explain_ta: [
    "இந்த A2 பாடத்தில் mit, von, zu என்ற Präposition-களை பயிற்சி செய்கிறோம்.",
    "mit + Dativ: யாருடன்/எதுடன் (உடன்/மூலம்). உதாரணம்: Ich fahre mit dem Bus. Ich spreche mit meinem Freund.",
    "von + Dativ: எங்கிருந்து/யாரிடமிருந்து (மூலம்/உரிமை). உதாரணம்: Ich komme von der Arbeit. Das Geschenk ist von meiner Mutter.",
    "zu + Dativ: எங்கே/யாரிடம் செல்கிறேன் (இலக்கு/நபர்). உதாரணம்: Ich gehe zum Arzt. Wir gehen zur Schule.",
    "நினைவில் வை: zu dem = zum, zu der = zur."
  ],

  // ✅ 20x MC (wie Übung 1–8, kein Mix)
  quiz: [
    { type:"mc", q:"Ich fahre ___ dem Bus.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Ich komme ___ der Arbeit.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Das Geschenk ist ___ meiner Mutter.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Ich gehe ___ Arzt.", options:["zum","mit","von"], answer:"zum" },
    { type:"mc", q:"Wir gehen ___ Schule.", options:["zur","mit","von"], answer:"zur" },
    { type:"mc", q:"Er spricht ___ seinem Chef.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Sie kommt ___ dem Büro.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Wir fahren ___ Bahnhof.", options:["zum","mit","von"], answer:"zum" },

    { type:"mc", q:"Ich spreche ___ meiner Freundin.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Er bekommt Hilfe ___ seinem Bruder.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Sie fährt ___ dem Zug.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Wir kommen ___ der Schule.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Ich gehe ___ dem Termin.", options:["zu","mit","von"], answer:"zu" },
    { type:"mc", q:"Das ist ein Brief ___ der Bank.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Er fährt ___ seinem Vater.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Wir gehen ___ dem Arzt.", options:["zu","mit","von"], answer:"zu" },

    { type:"mc", q:"Ich komme ___ dem Training.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Sie spricht ___ dem Lehrer.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Wir gehen ___ der Arbeit nach Hause.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Ich gehe ___ dem Büro.", options:["zu","mit","von"], answer:"zu" }
  ]
},
{
  id: "A2-L-Prep-in-auf-nach-MC",
  title: "A2 Präpositionen – in / auf / nach",

  // ✅ Kurze Grammatik (Listenansicht)
  de: [
    "nach + Ländern/Städten ohne Artikel",
    "in + Ländern mit Artikel (Akkusativ bei Bewegung)",
    "auf + offene Orte / Veranstaltungen",
    "Wohin? → meist Akkusativ"
  ],
  ta: [
    "nach → Artikel இல்லாத நாடுகள் / நகரங்கள்",
    "in → Artikel உள்ள நாடுகள் (செல்லும் போது Akkusativ)",
    "auf → திறந்த இடங்கள் / நிகழ்வுகள்",
    "எங்கு செல்கிறேன்? → Akkusativ"
  ],

  // ✅ Erklärung (Grammatik-Screen + Audio)
  explain_de: [
    "In dieser A2-Lektion lernst du die Präpositionen in, auf und nach.",
    "Nach benutzt man für Länder und Städte ohne Artikel: nach Deutschland, nach Berlin.",
    "In benutzt man für Länder mit Artikel oder Orte mit Artikel: in die Schweiz, in den Park.",
    "Auf benutzt man für offene Orte oder Veranstaltungen: auf den Markt, auf die Party.",
    "Frage: Wohin? → Akkusativ (in die, auf den)."
  ],
  explain_en: [
    "In this A2 lesson you learn the prepositions in, auf, and nach.",
    "Nach is used for countries and cities without an article: nach Deutschland, nach Berlin.",
    "In is used for countries/places with an article: in die Schweiz, in den Park.",
    "Auf is used for open places or events: auf den Markt, auf die Party.",
    "Question: Where to? → accusative (in die, auf den)."
  ],
  explain_ta: [
    "இந்த A2 பாடத்தில் in, auf, nach என்ற Präposition-களை கற்கிறோம்.",
    "nach → Artikel இல்லாத நாடுகள் மற்றும் நகரங்கள்: nach Deutschland, nach Berlin.",
    "in → Artikel உள்ள நாடுகள் அல்லது இடங்கள்: in die Schweiz, in den Park.",
    "auf → திறந்த இடங்கள் அல்லது நிகழ்வுகள்: auf den Markt, auf die Party.",
    "கேள்வி: எங்கு செல்கிறேன்? → Akkusativ (in die, auf den)."
  ],

  // ✅ 20 x MC (nur wie 1–8)
  quiz: [
    { type:"mc", q:"Ich fahre ___ Deutschland.", options:["nach","in","auf"], answer:"nach" },
    { type:"mc", q:"Wir fahren ___ Berlin.", options:["nach","in","auf"], answer:"nach" },
    { type:"mc", q:"Ich gehe ___ die Schule.", options:["in","auf","nach"], answer:"in" },
    { type:"mc", q:"Sie geht ___ den Park.", options:["in","auf","nach"], answer:"in" },
    { type:"mc", q:"Wir gehen ___ den Markt.", options:["auf","in","nach"], answer:"auf" },

    { type:"mc", q:"Er fährt ___ die Schweiz.", options:["in","nach","auf"], answer:"in" },
    { type:"mc", q:"Ich fliege ___ Indien.", options:["nach","in","auf"], answer:"nach" },
    { type:"mc", q:"Sie geht ___ die Party.", options:["auf","in","nach"], answer:"auf" },
    { type:"mc", q:"Wir fahren ___ die Stadt.", options:["in","nach","auf"], answer:"in" },
    { type:"mc", q:"Ich gehe ___ den Supermarkt.", options:["in","auf","nach"], answer:"in" },

    { type:"mc", q:"Er geht ___ das Konzert.", options:["auf","in","nach"], answer:"auf" },
    { type:"mc", q:"Wir fahren ___ Frankreich.", options:["nach","in","auf"], answer:"nach" },
    { type:"mc", q:"Sie geht ___ die Arbeit.", options:["in","auf","nach"], answer:"in" },
    { type:"mc", q:"Ich gehe ___ den Bahnhof.", options:["in","auf","nach"], answer:"in" },
    { type:"mc", q:"Wir gehen ___ das Festival.", options:["auf","in","nach"], answer:"auf" },

    { type:"mc", q:"Er fährt ___ Italien.", options:["nach","in","auf"], answer:"nach" },
    { type:"mc", q:"Ich gehe ___ die Universität.", options:["in","auf","nach"], answer:"in" },
    { type:"mc", q:"Sie geht ___ den Spielplatz.", options:["auf","in","nach"], answer:"auf" },
    { type:"mc", q:"Wir fahren ___ Wien.", options:["nach","in","auf"], answer:"nach" },
    { type:"mc", q:"Ich gehe ___ die Messe.", options:["auf","in","nach"], answer:"auf" }
  ]
},
{
  id: "A2-L-Prep-in-auf-wo-wohin-MC",
  title: "A2 in / auf – Wo oder Wohin?",

  de: [
    "Wo? → Dativ (in + dem/der, auf + dem/der)",
    "Wohin? → Akkusativ (in + den/die/das, auf + den/die/das)",
    "in = Raum/Gebäude, auf = Oberfläche/Ort"
  ],
  ta: [
    "Wo? → Dativ (எங்கே? நிலை)",
    "Wohin? → Akkusativ (எங்கு செல்கிறேன்? இயக்கம்)",
    "in = அறை/கட்டிடம், auf = மேல்/திறந்த இடம்"
  ],
  explain_de: [
    "Wo? (Position) → Dativ: Ich bin in der Schule. Das Buch liegt auf dem Tisch.",
    "Wohin? (Bewegung) → Akkusativ: Ich gehe in die Schule. Ich lege das Buch auf den Tisch.",
    "Merke: Satz hat schon Artikel (dem/den/der/die)? Dann wähle nur in/auf/an."
  ],
  explain_en: [
    "Where? (position) → dative: Ich bin in der Schule. Das Buch liegt auf dem Tisch.",
    "Where to? (movement) → accusative: Ich gehe in die Schule. Ich lege das Buch auf den Tisch.",
    "Note: If the sentence already has the article (dem/den/der/die), choose only in/auf/an."
  ],
  explain_ta: [
    "Wo? (இருக்கும் நிலை) → Dativ: Ich bin in der Schule. Das Buch liegt auf dem Tisch.",
    "Wohin? (செல்லும் இயக்கம்) → Akkusativ: Ich gehe in die Schule. Ich lege das Buch auf den Tisch.",
    "வாக்கியத்தில் Artikel (dem/den/der/die) ஏற்கனவே இருந்தால் பதில் in/auf/an மட்டும்."
  ],

  quiz: [
    // 1–10: Satz hat Artikel schon -> Antwort nur Präposition
    { type:"mc", q:"Das Buch liegt ___ dem Tisch.", options:["auf","in"], answer:"auf" },
    { type:"mc", q:"Ich lege das Buch ___ den Tisch.", options:["auf","in"], answer:"auf" },
    { type:"mc", q:"Er ist ___ der Schule.", options:["in","auf"], answer:"in" },
    { type:"mc", q:"Er geht ___ die Schule.", options:["in","auf"], answer:"in" },
    { type:"mc", q:"Der Hund liegt ___ dem Sofa.", options:["auf","in"], answer:"auf" },

    { type:"mc", q:"Der Hund springt ___ das Sofa.", options:["auf","in"], answer:"auf" },
    { type:"mc", q:"Sie ist ___ dem Zimmer.", options:["in","auf"], answer:"in" },
    { type:"mc", q:"Sie geht ___ das Zimmer.", options:["in","auf"], answer:"in" },
    { type:"mc", q:"Die Lampe hängt ___ der Decke.", options:["an","auf"], answer:"an" },
    { type:"mc", q:"Ich hänge die Lampe ___ die Decke.", options:["an","auf"], answer:"an" },

    // 11–20: Satz ohne Artikel -> Antwort enthält Präposition+Artikel
    { type:"mc", q:"Das Buch liegt ___. (Tisch)", options:["auf dem Tisch","auf den Tisch"], answer:"auf dem Tisch" },
    { type:"mc", q:"Ich lege das Buch ___. (Tisch)", options:["auf den Tisch","auf dem Tisch"], answer:"auf den Tisch" },
    { type:"mc", q:"Er ist ___. (Schule)", options:["in der Schule","in die Schule"], answer:"in der Schule" },
    { type:"mc", q:"Er geht ___. (Schule)", options:["in die Schule","in der Schule"], answer:"in die Schule" },
    { type:"mc", q:"Die Katze liegt ___. (Bett)", options:["auf dem Bett","auf das Bett"], answer:"auf dem Bett" },

    { type:"mc", q:"Die Katze springt ___. (Bett)", options:["auf das Bett","auf dem Bett"], answer:"auf das Bett" },
    { type:"mc", q:"Wir sind ___. (Garten)", options:["im Garten","in den Garten"], answer:"im Garten" },
    { type:"mc", q:"Wir gehen ___. (Garten)", options:["in den Garten","im Garten"], answer:"in den Garten" },
    { type:"mc", q:"Das Bild ist ___. (Wand)", options:["an der Wand","an die Wand"], answer:"an der Wand" },
    { type:"mc", q:"Ich hänge das Bild ___. (Wand)", options:["an die Wand","an der Wand"], answer:"an die Wand" }
  ]
},
{
  id: "A2-L-Time-am-um-im-seit",
  title: "A2 Zeit-Präpositionen – am / um / im / seit",

  // ===== Erklärung (kurz) =====
  de: [
    "am + Tag / Datum",
    "um + Uhrzeit",
    "im + Monat / Jahr / Jahreszeit",
    "seit + Zeitpunkt (bis jetzt)"
  ],
  ta: [
    "am → நாள் / தேதி",
    "um → நேரம்",
    "im → மாதம் / ஆண்டு / காலம்",
    "seit → ஒரு நேரத்திலிருந்து இப்போது வரை"
  ],

  explain_de: [
    "In dieser A2-Lektion lernst du Zeit-Präpositionen.",
    "am benutzt man für Tage und Daten: am Montag, am 5. Mai.",
    "um benutzt man für Uhrzeiten: um 8 Uhr.",
    "im benutzt man für Monate, Jahre und Jahreszeiten: im Juli, im Jahr 2025.",
    "seit benutzt man für einen Zeitpunkt in der Vergangenheit bis jetzt."
  ],
  explain_en: [
    "In this A2 lesson you learn time prepositions.",
    "am is used for days and dates: am Montag, am 5. Mai.",
    "um is used for clock time: um 8 Uhr.",
    "im is used for months, years, and seasons: im Juli, im Jahr 2025.",
    "seit is used for a point in the past up to now."
  ],
  explain_ta: [
    "இந்த A2 பாடத்தில் நேரம் தொடர்பான Präposition-களை கற்கிறோம்.",
    "am → நாள் அல்லது தேதி: am Montag, am 5. Mai.",
    "um → நேரம்: um 8 Uhr.",
    "im → மாதம், ஆண்டு, காலம்: im Juli, im Jahr 2025.",
    "seit → கடந்த நேரத்திலிருந்து இப்போது வரை."
  ],

  // ===== 20 x MC =====
  quiz: [
    { type:"mc", q:"Ich arbeite ___ Montag.", options:["am","um","im","seit"], answer:"am" },
    { type:"mc", q:"Der Termin ist ___ 8 Uhr.", options:["am","um","im","seit"], answer:"um" },
    { type:"mc", q:"Wir fahren ___ Sommer nach Italien.", options:["am","um","im","seit"], answer:"im" },
    { type:"mc", q:"Ich lebe ___ 2020 in Deutschland.", options:["am","um","im","seit"], answer:"seit" },

    { type:"mc", q:"Der Kurs beginnt ___ Dienstag.", options:["am","um","im","seit"], answer:"am" },
    { type:"mc", q:"Das Meeting ist ___ 14 Uhr.", options:["am","um","im","seit"], answer:"um" },
    { type:"mc", q:"Ich habe Urlaub ___ August.", options:["am","um","im","seit"], answer:"im" },
    { type:"mc", q:"Er arbeitet hier ___ einem Jahr.", options:["am","um","im","seit"], answer:"seit" },

    { type:"mc", q:"Die Prüfung ist ___ Freitag.", options:["am","um","im","seit"], answer:"am" },
    { type:"mc", q:"Der Zug kommt ___ 6 Uhr.", options:["am","um","im","seit"], answer:"um" },
    { type:"mc", q:"Wir sind ___ Jahr 2024 umgezogen.", options:["am","um","im","seit"], answer:"im" },
    { type:"mc", q:"Sie lernt Deutsch ___ drei Monaten.", options:["am","um","im","seit"], answer:"seit" },

    { type:"mc", q:"Ich habe einen Termin ___ 10. Juni.", options:["am","um","im","seit"], answer:"am" },
    { type:"mc", q:"Der Film beginnt ___ 20 Uhr.", options:["am","um","im","seit"], answer:"um" },
    { type:"mc", q:"Er arbeitet ___ Winter im Büro.", options:["am","um","im","seit"], answer:"im" },
    { type:"mc", q:"Wir wohnen hier ___ fünf Jahren.", options:["am","um","im","seit"], answer:"seit" },

    { type:"mc", q:"Der Arzttermin ist ___ Montagmorgen.", options:["am","um","im","seit"], answer:"am" },
    { type:"mc", q:"Der Bus fährt ___ 7 Uhr ab.", options:["am","um","im","seit"], answer:"um" },
    { type:"mc", q:"Ich habe Geburtstag ___ Mai.", options:["am","um","im","seit"], answer:"im" },
    { type:"mc", q:"Er ist krank ___ gestern.", options:["am","um","im","seit"], answer:"seit" }
  ]
},
{
  id: "A2-L-Prep-bei-ohne-mit",
  title: "A2 Präpositionen – bei / ohne / mit",

  // ===== Kurze Grammatik =====
  de: [
    "bei + Dativ: Ort/Person (beim Arzt, bei der Arbeit)",
    "ohne + Akkusativ: nicht haben (ohne Geld)",
    "mit + Dativ: Begleitung/Mittel (mit dem Bus)"
  ],
  ta: [
    "bei + Dativ: இடம்/நபர் (மருத்துவரிடம், வேலை இடத்தில்)",
    "ohne + Akkusativ: இல்லாமல்",
    "mit + Dativ: உடன்/மூலம்"
  ],

  // ===== Erklärung (für Grammatik-Screen + Audio) =====
  explain_de: [
    "In dieser A2-Lektion lernst du die Präpositionen bei, ohne und mit.",
    "bei + Dativ: Ort oder Person. Beispiel: beim Arzt, bei der Arbeit.",
    "ohne + Akkusativ: etwas fehlt. Beispiel: ohne Geld, ohne Hilfe.",
    "mit + Dativ: Begleitung oder Mittel. Beispiel: mit dem Bus."
  ],
  explain_en: [
    "In this A2 lesson you learn the prepositions bei, ohne, and mit.",
    "bei + dative: place or person. Example: beim Arzt, bei der Arbeit.",
    "ohne + accusative: something is missing. Example: ohne Geld, ohne Hilfe.",
    "mit + dative: companion or means. Example: mit dem Bus."
  ],
  explain_ta: [
    "இந்த A2 பாடத்தில் bei, ohne, mit என்ற Präposition-களை கற்கிறோம்.",
    "bei + Dativ: இடம் அல்லது நபர். உதாரணம்: beim Arzt, bei der Arbeit.",
    "ohne + Akkusativ: இல்லாமல். உதாரணம்: ohne Geld, ohne Hilfe.",
    "mit + Dativ: உடன் அல்லது மூலம். உதாரணம்: mit dem Bus."
  ],

  // ===== 20 x MC (nur MC, kein Mix) =====
  quiz: [
    { type:"mc", q:"Ich bin ___ der Arbeit.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Er ist ___ dem Arzt.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Wir wohnen ___ meinen Eltern.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Sie arbeitet ___ einer Firma.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Das Treffen ist ___ der Schule.", options:["bei","ohne","mit"], answer:"bei" },

    { type:"mc", q:"Ich gehe ___ Geld einkaufen.", options:["bei","ohne","mit"], answer:"ohne" },
    { type:"mc", q:"Er kommt ___ Jacke.", options:["bei","ohne","mit"], answer:"ohne" },
    { type:"mc", q:"Wir fahren ___ Tickets.", options:["bei","ohne","mit"], answer:"ohne" },
    { type:"mc", q:"Sie arbeitet ___ Pause.", options:["bei","ohne","mit"], answer:"ohne" },
    { type:"mc", q:"Das geht ___ Problem.", options:["bei","ohne","mit"], answer:"ohne" },

    { type:"mc", q:"Ich fahre ___ dem Bus.", options:["bei","ohne","mit"], answer:"mit" },
    { type:"mc", q:"Er kommt ___ seinem Freund.", options:["bei","ohne","mit"], answer:"mit" },
    { type:"mc", q:"Sie schreibt ___ dem Stift.", options:["bei","ohne","mit"], answer:"mit" },
    { type:"mc", q:"Wir lernen ___ dem Lehrer.", options:["bei","ohne","mit"], answer:"mit" },
    { type:"mc", q:"Ich bezahle ___ Karte.", options:["bei","ohne","mit"], answer:"mit" },

    { type:"mc", q:"Er bleibt ___ seiner Familie.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Sie geht ___ Hilfe nach Hause.", options:["bei","ohne","mit"], answer:"ohne" },
    { type:"mc", q:"Wir kommen ___ dem Zug.", options:["bei","ohne","mit"], answer:"mit" },
    { type:"mc", q:"Ich bin heute ___ meinem Bruder.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Das Essen ist ___ Salz.", options:["bei","ohne","mit"], answer:"ohne" }
  ]
},
{
  id: "A2-L-Abschluss-Test",
  title: "A2 Abschluss-Test (Grammatik & Präpositionen)",

  // ===== Kurze Übersicht (Grammatik-Button) =====
  de: [
    "Präpositionen: mit, von, zu, bei, ohne",
    "Zeit: am, um, im, seit",
    "Ort/Bewegung: in / auf (Wo oder Wohin?)",
    "Alltagssätze A2"
  ],
  ta: [
    "Präpositionen: mit, von, zu, bei, ohne",
    "நேரம்: am, um, im, seit",
    "இடம்/இயக்கம்: in / auf (Wo/Wohin?)",
    "A2 தினசரி வாக்கியங்கள்"
  ],

  explain_de: [
    "Dieser Test prüft wichtige A2-Themen.",
    "Es gibt nur Multiple-Choice-Fragen.",
    "Bestehst du diesen Test, ist A2 abgeschlossen."
  ],
  explain_en: [
    "This test checks important A2 topics.",
    "There are only multiple-choice questions.",
    "If you pass, A2 is completed."
  ],
  explain_ta: [
    "இந்த தேர்வு முக்கியமான A2 தலைப்புகளை சோதிக்கிறது.",
    "Multiple-Choice கேள்விகள் மட்டுமே உள்ளன.",
    "இந்த தேர்வை முடித்தால் A2 முடிந்தது."
  ],

  // ===== 25 x MC =====
  quiz: [
    // Präpositionen: mit / von / zu
    { type:"mc", q:"Ich fahre ___ dem Bus.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Ich komme ___ der Arbeit.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Ich gehe ___ Arzt.", options:["zum","mit","von"], answer:"zum" },

    // bei / ohne / mit
    { type:"mc", q:"Ich bin ___ der Arbeit.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Er kommt ___ Jacke.", options:["bei","ohne","mit"], answer:"ohne" },
    { type:"mc", q:"Wir fahren ___ dem Zug.", options:["bei","ohne","mit"], answer:"mit" },

    // Zeit: am / um / im / seit
    { type:"mc", q:"Der Termin ist ___ Montag.", options:["am","um","im","seit"], answer:"am" },
    { type:"mc", q:"Der Film beginnt ___ 20 Uhr.", options:["am","um","im","seit"], answer:"um" },
    { type:"mc", q:"Ich habe Urlaub ___ August.", options:["am","um","im","seit"], answer:"im" },
    { type:"mc", q:"Ich wohne hier ___ 2021.", options:["am","um","im","seit"], answer:"seit" },

    // in / auf – Wo oder Wohin
    { type:"mc", q:"Das Buch liegt ___ dem Tisch.", options:["auf","in"], answer:"auf" },
    { type:"mc", q:"Ich lege das Buch ___ den Tisch.", options:["auf","in"], answer:"auf" },
    { type:"mc", q:"Er ist ___ der Schule.", options:["in","auf"], answer:"in" },
    { type:"mc", q:"Er geht ___ die Schule.", options:["in","auf"], answer:"in" },

    // Alltag
    { type:"mc", q:"Wir gehen ___ Schule.", options:["zur","mit","von"], answer:"zur" },
    { type:"mc", q:"Sie arbeitet ___ einer Firma.", options:["bei","ohne","mit"], answer:"bei" },
    { type:"mc", q:"Ich bezahle ___ Karte.", options:["bei","ohne","mit"], answer:"mit" },
    { type:"mc", q:"Das Essen ist ___ Salz.", options:["bei","ohne","mit"], answer:"ohne" },

    // Mischung (typisch A2)
    { type:"mc", q:"Wir fahren ___ Sommer nach Italien.", options:["am","im","um","seit"], answer:"im" },
    { type:"mc", q:"Der Bus kommt ___ 7 Uhr.", options:["am","im","um","seit"], answer:"um" },
    { type:"mc", q:"Ich gehe ___ dem Freund.", options:["mit","von","zu"], answer:"mit" },
    { type:"mc", q:"Das Geschenk ist ___ meiner Mutter.", options:["mit","von","zu"], answer:"von" },
    { type:"mc", q:"Wir sind ___ dem Park.", options:["in","auf"], answer:"in" },
    { type:"mc", q:"Wir gehen ___ den Park.", options:["in","auf"], answer:"in" }
  ]
}
  ],


  B1: [
    {
  id: "b1_nebensatz_mc",
  title: "B1 – Nebensätze (weil / dass / wenn / obwohl)",
  category: "Nebensätze",
  explain_de: [
    "Nebensätze beginnen z.B. mit weil, dass, wenn, obwohl.",
    "Im Nebensatz steht das Verb immer am Ende."
  ],
  explain_en: [
    "Subordinate clauses start with words like weil, dass, wenn, obwohl.",
    "In a subordinate clause, the verb goes at the end."
  ],
  explain_ta: [
    "weil, dass, wenn, obwohl ஆகியவை Nebensatz தொடங்கும் சொற்கள்.",
    "Nebensatz-இல் verb கடைசியில் வரும்."
  ],
  quiz: [

    // --- weil ---
    {
      type: "mc",
      q: "Ich lerne Deutsch, ___ ich in Deutschland lebe.",
      options: ["weil", "dass", "wenn"],
      answer: "weil"
    },
    {
      type: "mc",
      q: "Er bleibt zu Hause, ___ er krank ist.",
      options: ["weil", "obwohl", "dass"],
      answer: "weil"
    },

    // --- dass ---
    {
      type: "mc",
      q: "Ich weiß, ___ er heute kommt.",
      options: ["dass", "weil", "wenn"],
      answer: "dass"
    },
    {
      type: "mc",
      q: "Sie sagt, ___ sie keine Zeit hat.",
      options: ["dass", "obwohl", "weil"],
      answer: "dass"
    },

    // --- wenn / als ---
    {
      type: "mc",
      q: "___ ich Zeit habe, lerne ich Deutsch.",
      options: ["Wenn", "Als", "Obwohl"],
      answer: "Wenn"
    },
    {
      type: "mc",
      q: "___ ich ein Kind war, lebte ich in Sri Lanka.",
      options: ["Wenn", "Als", "Weil"],
      answer: "Als"
    },

    // --- obwohl ---
    {
      type: "mc",
      q: "Ich gehe arbeiten, ___ ich krank bin.",
      options: ["obwohl", "weil", "dass"],
      answer: "obwohl"
    },
    {
      type: "mc",
      q: "Er lernt Deutsch, ___ es schwierig ist.",
      options: ["obwohl", "wenn", "weil"],
      answer: "obwohl"
    },
        // --- weil ---
    {
      type: "mc",
      q: "Wir bleiben zu Hause, ___ es regnet.",
      options: ["weil", "dass", "obwohl"],
      answer: "weil"
    },
    {
      type: "mc",
      q: "Ich bin müde, ___ ich lange gearbeitet habe.",
      options: ["weil", "wenn", "dass"],
      answer: "weil"
    },

    // --- dass ---
    {
      type: "mc",
      q: "Er glaubt, ___ Deutsch sehr wichtig ist.",
      options: ["dass", "weil", "obwohl"],
      answer: "dass"
    },
    {
      type: "mc",
      q: "Wir wissen, ___ der Test heute ist.",
      options: ["dass", "wenn", "weil"],
      answer: "dass"
    },

    // --- wenn ---
    {
      type: "mc",
      q: "___ ich Zeit habe, rufe ich dich an.",
      options: ["Wenn", "Als", "Obwohl"],
      answer: "Wenn"
    },
    {
      type: "mc",
      q: "___ es kalt ist, trage ich eine Jacke.",
      options: ["Wenn", "Als", "Dass"],
      answer: "Wenn"
    },

    // --- als ---
    {
      type: "mc",
      q: "___ ich in Deutschland angekommen bin, war ich nervös.",
      options: ["Als", "Wenn", "Weil"],
      answer: "Als"
    },
    {
      type: "mc",
      q: "___ er jung war, spielte er Fußball.",
      options: ["Als", "Wenn", "Obwohl"],
      answer: "Als"
    },

    // --- obwohl ---
    {
      type: "mc",
      q: "Sie arbeitet weiter, ___ sie müde ist.",
      options: ["obwohl", "weil", "dass"],
      answer: "obwohl"
    },
    {
      type: "mc",
      q: "Wir gehen spazieren, ___ es kalt ist.",
      options: ["obwohl", "wenn", "weil"],
      answer: "obwohl"
    },

    // --- Mix ---
    {
      type: "mc",
      q: "Ich weiß nicht, ___ er heute kommt.",
      options: ["ob", "dass", "weil"],
      answer: "ob"
    },
    {
      type: "mc",
      q: "___ ich krank war, bin ich nicht zur Arbeit gegangen.",
      options: ["Als", "Wenn", "Dass"],
      answer: "Als"
    },
    {
      type: "mc",
      q: "Er lernt Deutsch, ___ er hier studieren möchte.",
      options: ["weil", "obwohl", "dass"],
      answer: "weil"
    },
    {
      type: "mc",
      q: "Sie sagt, ___ sie morgen Zeit hat.",
      options: ["dass", "wenn", "obwohl"],
      answer: "dass"
    }
  ]
},
{
  id: "b1_konnektoren_mc",
  title: "B1 – Konnektoren (ob / damit / deshalb)",
  category: "Nebensätze",

  explain_de: [
    "Diese Wörter verbinden Sätze.",
    "ob → indirekte Frage",
    "damit → Ziel / Zweck",
    "deshalb → Folge (Hauptsatz)"
  ],
  explain_en: [
    "These words connect clauses.",
    "ob → indirect question",
    "damit → purpose / goal",
    "deshalb → result (main clause)"
  ],

  explain_ta: [
    "இந்த சொற்கள் வாக்கியங்களை இணைக்க பயன்படும்.",
    "ob → மறைமுக கேள்வி",
    "damit → நோக்கம் / இலக்கு",
    "deshalb → விளைவு (முதன்மை வாக்கியம்)"
  ],

 quiz: [

    // ---- ob (indirekte Frage) ----
    { type: "mc", q: "Ich weiß nicht, ___ er heute kommt.", options: ["ob","dass","weil"], answer: "ob" },
    { type: "mc", q: "Sie fragt, ___ der Zug pünktlich ist.", options: ["ob","wenn","damit"], answer: "ob" },
    { type: "mc", q: "Wir möchten wissen, ___ das Geschäft offen ist.", options: ["ob","dass","deshalb"], answer: "ob" },
    { type: "mc", q: "Er fragt mich, ___ ich Zeit habe.", options: ["ob","weil","damit"], answer: "ob" },
    { type: "mc", q: "Ich weiß nicht, ___ sie schon angekommen ist.", options: ["ob","dass","weil"], answer: "ob" },

    // ---- damit (Ziel) ----
    { type: "mc", q: "Ich lerne Deutsch, ___ ich die Prüfung bestehe.", options: ["damit","weil","ob"], answer: "damit" },
    { type: "mc", q: "Er spricht laut, ___ alle ihn hören.", options: ["damit","dass","deshalb"], answer: "damit" },
    { type: "mc", q: "Wir sparen Geld, ___ wir ein Auto kaufen können.", options: ["damit","weil","ob"], answer: "damit" },
    { type: "mc", q: "Sie erklärt es langsam, ___ die Schüler es verstehen.", options: ["damit","ob","deshalb"], answer: "damit" },
    { type: "mc", q: "Ich schreibe alles auf, ___ ich nichts vergesse.", options: ["damit","weil","dass"], answer: "damit" },

    // ---- deshalb (Folge) ----
    { type: "mc", q: "Es regnet, ___ bleiben wir zu Hause.", options: ["deshalb","weil","ob"], answer: "deshalb" },
    { type: "mc", q: "Ich bin müde, ___ gehe ich früh schlafen.", options: ["deshalb","damit","dass"], answer: "deshalb" },
    { type: "mc", q: "Der Bus hat Verspätung, ___ komme ich später.", options: ["deshalb","ob","weil"], answer: "deshalb" },
    { type: "mc", q: "Er hat Fieber, ___ geht er nicht zur Arbeit.", options: ["deshalb","damit","dass"], answer: "deshalb" },
    { type: "mc", q: "Ich habe Hunger, ___ koche ich etwas.", options: ["deshalb","weil","ob"], answer: "deshalb" },

    // ---- MIX ----
    { type: "mc", q: "Ich frage mich, ___ sie morgen kommt.", options: ["ob","damit","deshalb"], answer: "ob" },
    { type: "mc", q: "Er lernt viel, ___ er die Prüfung besteht.", options: ["damit","deshalb","ob"], answer: "damit" },
    { type: "mc", q: "Ich habe keine Zeit, ___ rufe ich später an.", options: ["deshalb","ob","damit"], answer: "deshalb" },
    { type: "mc", q: "Sie möchte wissen, ___ das richtig ist.", options: ["ob","weil","deshalb"], answer: "ob" },
    { type: "mc", q: "Wir üben jeden Tag, ___ wir besser werden.", options: ["damit","ob","deshalb"], answer: "damit" }

  ]
},
{
  id: "b1_relativsatz_mc20",
  title: "B1 – Relativsatz (der / die / das / wo / was)",
  category: "Nebensätze",

  explain_de: [
    "Relativsätze geben zusätzliche Informationen.",
    "Sie beginnen mit Relativpronomen: der, die, das, den, dem, wo, was.",
    "Das Verb steht im Relativsatz am Ende."
  ],
  explain_en: [
    "Relative clauses give extra information.",
    "They start with relative pronouns: der, die, das, den, dem, wo, was.",
    "In a relative clause, the verb goes at the end."
  ],

  explain_ta: [
    "Relativsatz கூடுதல் தகவலை வழங்கும்.",
    "der, die, das, den, dem, wo, was போன்ற சொற்களால் தொடங்கும்.",
    "Relativsatz-இல் verb கடைசியில் வரும்."
  ],

  quiz: [

    // --- der ---
    { type: "mc", q: "Der Mann, ___ hier arbeitet, ist nett.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Ich kenne einen Lehrer, ___ Deutsch unterrichtet.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Das ist der Freund, ___ mir geholfen hat.", options: ["der","die","das"], answer: "der" },

    // --- die ---
    { type: "mc", q: "Die Frau, ___ dort steht, ist meine Nachbarin.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Ich suche die Tasche, ___ schwarz ist.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Das ist die Stadt, ___ sehr alt ist.", options: ["die","der","das"], answer: "die" },

    // --- das ---
    { type: "mc", q: "Das Kind, ___ dort spielt, ist mein Sohn.", options: ["das","der","die"], answer: "das" },
    { type: "mc", q: "Ich habe ein Buch, ___ interessant ist.", options: ["das","der","die"], answer: "das" },
    { type: "mc", q: "Das Haus, ___ neu ist, gefällt mir.", options: ["das","die","der"], answer: "das" },

    // --- Akkusativ (den) ---
    { type: "mc", q: "Der Mann, ___ ich sehe, ist mein Chef.", options: ["den","der","die"], answer: "den" },
    { type: "mc", q: "Das ist der Film, ___ wir gestern gesehen haben.", options: ["den","das","der"], answer: "den" },
    { type: "mc", q: "Ich mag den Hund, ___ laut bellt.", options: ["der","den","die"], answer: "der" },

    // --- Dativ (dem) ---
    { type: "mc", q: "Der Mann, ___ ich helfe, ist alt.", options: ["dem","den","der"], answer: "dem" },
    { type: "mc", q: "Das Kind, ___ ich danke, ist sehr freundlich.", options: ["dem","das","den"], answer: "dem" },

    // --- wo ---
    { type: "mc", q: "Das ist die Stadt, ___ ich geboren bin.", options: ["wo","die","der"], answer: "wo" },
    { type: "mc", q: "Ich kenne ein Restaurant, ___ man gut essen kann.", options: ["wo","das","der"], answer: "wo" },

    // --- was ---
    { type: "mc", q: "Alles, ___ er sagt, ist richtig.", options: ["was","das","der"], answer: "was" },
    { type: "mc", q: "Das ist alles, ___ ich brauche.", options: ["was","das","die"], answer: "was" },

    // --- Mix ---
    { type: "mc", q: "Die Frau, ___ ich gesehen habe, war freundlich.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Das Buch, ___ auf dem Tisch liegt, gehört mir.", options: ["das","die","der"], answer: "das" }
  ]
},
{
  id: "b1_passiv_mc20",
  title: "B1 – Passiv (werden + Partizip II)",
  category: "Grammatik",

  explain_de: [
    "Im Passiv ist die Handlung wichtig, nicht die Person.",
    "Passiv = werden + Partizip II.",
    "Das Verb steht im Hauptsatz auf Position 2."
  ],
  explain_en: [
    "In the passive, the action is important, not the person.",
    "Passive = werden + Partizip II.",
    "In a main clause, the verb is in position 2."
  ],

  explain_ta: [
    "Passiv-இல் செய்பவர் முக்கியம் அல்ல.",
    "Passiv = werden + Partizip II.",
    "முதன்மை வாக்கியத்தில் verb இடம் 2."
  ],

  quiz: [

    // --- Präsens Passiv ---
    { type: "mc", q: "Das Haus ___ gebaut.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Der Brief ___ geschrieben.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Das Essen ___ gekocht.", options: ["wird","war","hat"], answer: "wird" },
    { type: "mc", q: "Die Straße ___ repariert.", options: ["wird","ist","hat"], answer: "wird" },

    // --- Präteritum Passiv ---
    { type: "mc", q: "Das Haus ___ gebaut.", options: ["wurde","ist","hat"], answer: "wurde" },
    { type: "mc", q: "Der Film ___ gezeigt.", options: ["wurde","war","ist"], answer: "wurde" },
    { type: "mc", q: "Der Fehler ___ erklärt.", options: ["wurde","hat","ist"], answer: "wurde" },

    // --- Modal + Passiv ---
    { type: "mc", q: "Der Termin ___ verschoben werden.", options: ["muss","ist","hat"], answer: "muss" },
    { type: "mc", q: "Das Formular ___ ausgefüllt werden.", options: ["muss","wird","ist"], answer: "muss" },
    { type: "mc", q: "Die Aufgabe ___ gemacht werden.", options: ["kann","ist","hat"], answer: "kann" },

    // --- von + Dativ ---
    { type: "mc", q: "Das Haus wird ___ Architekten gebaut.", options: ["von dem","von den","mit dem"], answer: "von dem" },
    { type: "mc", q: "Der Brief wurde ___ Lehrer geschrieben.", options: ["von dem","mit dem","zu dem"], answer: "von dem" },

    // --- Aktiv oder Passiv ---
    { type: "mc", q: "Der Kuchen ___ gegessen.", options: ["wird","isst","hat"], answer: "wird" },
    { type: "mc", q: "Die Regeln ___ erklärt.", options: ["werden","erklären","sind"], answer: "werden" },

    // --- Mix ---
    { type: "mc", q: "Das Auto ___ repariert.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Der Vertrag ___ unterschrieben.", options: ["wurde","ist","hat"], answer: "wurde" },
    { type: "mc", q: "Die Prüfung ___ geschrieben.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Der Text ___ übersetzt.", options: ["wurde","war","hat"], answer: "wurde" },
    { type: "mc", q: "Das Problem ___ gelöst.", options: ["wird","hat","ist"], answer: "wird" }
  ]
},
{
  id: "b1_aktiv_mc20",
  title: "B1 – Aktiv (wer macht was?)",
  category: "Grammatik",

  explain_de: [
    "Im Aktiv steht die handelnde Person im Fokus.",
    "Subjekt + Verb + Objekt.",
    "Die meisten Alltagssätze sind Aktiv."
  ],
  explain_en: [
    "In the active voice, the doer is in focus.",
    "Subject + verb + object.",
    "Most everyday sentences are active."
  ],

  explain_ta: [
    "Aktiv-இல் செய்பவர் முக்கியம்.",
    "Subjekt + Verb + Objekt.",
    "அன்றாட வாக்கியங்கள் பெரும்பாலும் Aktiv."
  ],

  quiz: [

    // --- Grundform Aktiv ---
    { type: "mc", q: "Der Mann ___ das Auto.", options: ["repariert","wird repariert","ist repariert"], answer: "repariert" },
    { type: "mc", q: "Die Frau ___ einen Brief.", options: ["schreibt","wird geschrieben","ist geschrieben"], answer: "schreibt" },
    { type: "mc", q: "Wir ___ Deutsch.", options: ["lernen","werden gelernt","sind gelernt"], answer: "lernen" },

    // --- Aktiv Präsens ---
    { type: "mc", q: "Der Lehrer ___ die Aufgabe.", options: ["erklärt","wird erklärt","ist erklärt"], answer: "erklärt" },
    { type: "mc", q: "Ich ___ einen Kaffee.", options: ["trinke","wird getrunken","bin getrunken"], answer: "trinke" },
    { type: "mc", q: "Sie ___ das Essen.", options: ["kocht","wird gekocht","ist gekocht"], answer: "kocht" },

    // --- Aktiv Perfekt ---
    { type: "mc", q: "Er ___ den Film gesehen.", options: ["hat","wird","ist"], answer: "hat" },
    { type: "mc", q: "Wir ___ das Haus gebaut.", options: ["haben","wurden","sind"], answer: "haben" },
    { type: "mc", q: "Sie ___ den Brief geschrieben.", options: ["hat","wurde","ist"], answer: "hat" },

    // --- Aktiv mit Modalverb ---
    { type: "mc", q: "Ich ___ morgen arbeiten.", options: ["muss","wird","bin"], answer: "muss" },
    { type: "mc", q: "Er ___ das Formular ausfüllen.", options: ["muss","wird","ist"], answer: "muss" },
    { type: "mc", q: "Wir ___ heute lernen.", options: ["müssen","werden","sind"], answer: "müssen" },

    // --- Aktiv oder Passiv erkennen ---
    { type: "mc", q: "Der Koch kocht das Essen.", options: ["Aktiv","Passiv","Perfekt"], answer: "Aktiv" },
    { type: "mc", q: "Die Firma baut das Haus.", options: ["Aktiv","Passiv","Präteritum"], answer: "Aktiv" },
    { type: "mc", q: "Der Arzt untersucht den Patienten.", options: ["Aktiv","Passiv","Futur"], answer: "Aktiv" },

    // --- Objekt wichtig ---
    { type: "mc", q: "Der Hund ___ den Mann.", options: ["beißt","wird gebissen","ist gebissen"], answer: "beißt" },
    { type: "mc", q: "Das Kind ___ den Ball.", options: ["wirft","wird geworfen","ist geworfen"], answer: "wirft" },
    { type: "mc", q: "Der Fahrer ___ das Auto.", options: ["fährt","wird gefahren","ist gefahren"], answer: "fährt" },

    // --- Mix ---
    { type: "mc", q: "Ich ___ meine Hausaufgaben.", options: ["mache","werden gemacht","bin gemacht"], answer: "mache" },
    { type: "mc", q: "Sie ___ einen Termin.", options: ["hat","wird","ist"], answer: "hat" }
  ]
},
{
  id: "b1_aktiv_passiv_mc20",
  title: "B1 – Aktiv ↔ Passiv (Vergleich)",
  category: "Grammatik",

  explain_de: [
    "Im Aktiv steht die handelnde Person im Fokus.",
    "Im Passiv ist die Handlung wichtig.",
    "Passiv = werden + Partizip II.",
    "Aktiv ↔ Passiv kann oft umgewandelt werden."
  ],
  explain_en: [
    "Active voice focuses on the doer.",
    "Passive focuses on the action.",
    "Passive = werden + Partizip II.",
    "You can often change active ↔ passive."
  ],

  explain_ta: [
    "Aktiv-இல் செய்பவர் முக்கியம்.",
    "Passiv-இல் செயல் முக்கியம்.",
    "Passiv = werden + Partizip II.",
    "Aktiv மற்றும் Passiv ஒன்றுக்கொன்று மாற்றலாம்."
  ],

  quiz: [

    // --- Aktiv erkennen ---
    { type: "mc", q: "Der Lehrer erklärt die Aufgabe.", options: ["Aktiv","Passiv"], answer: "Aktiv" },
    { type: "mc", q: "Die Firma baut das Haus.", options: ["Aktiv","Passiv"], answer: "Aktiv" },
    { type: "mc", q: "Der Arzt untersucht den Patienten.", options: ["Aktiv","Passiv"], answer: "Aktiv" },

    // --- Passiv erkennen ---
    { type: "mc", q: "Die Aufgabe wird erklärt.", options: ["Aktiv","Passiv"], answer: "Passiv" },
    { type: "mc", q: "Das Haus wird gebaut.", options: ["Aktiv","Passiv"], answer: "Passiv" },
    { type: "mc", q: "Der Patient wird untersucht.", options: ["Aktiv","Passiv"], answer: "Passiv" },

    // --- Aktiv → richtiges Verb ---
    { type: "mc", q: "Der Mann ___ das Auto.", options: ["repariert","wird repariert"], answer: "repariert" },
    { type: "mc", q: "Die Frau ___ einen Brief.", options: ["schreibt","wird geschrieben"], answer: "schreibt" },
    { type: "mc", q: "Wir ___ Deutsch.", options: ["lernen","werden gelernt"], answer: "lernen" },

    // --- Passiv → richtiges Verb ---
    { type: "mc", q: "Das Auto ___ repariert.", options: ["wird","ist"], answer: "wird" },
    { type: "mc", q: "Der Brief ___ geschrieben.", options: ["wird","hat"], answer: "wird" },
    { type: "mc", q: "Die Aufgabe ___ erklärt.", options: ["wird","war"], answer: "wird" },

    // --- Aktiv oder Passiv wählen ---
    { type: "mc", q: "___ ist hier richtig: Die Suppe ___ gekocht.", options: ["Aktiv – kocht","Passiv – wird"], answer: "Passiv – wird" },
    { type: "mc", q: "___ ist hier richtig: Der Koch ___ die Suppe.", options: ["Aktiv – kocht","Passiv – wird"], answer: "Aktiv – kocht" },

    // --- von + Dativ (Passiv) ---
    { type: "mc", q: "Das Haus wird ___ Architekten gebaut.", options: ["von dem","mit dem"], answer: "von dem" },
    { type: "mc", q: "Der Brief wurde ___ Lehrer geschrieben.", options: ["von dem","zu dem"], answer: "von dem" },

    // --- Mix ---
    { type: "mc", q: "Die Firma produziert das Auto.", options: ["Aktiv","Passiv"], answer: "Aktiv" },
    { type: "mc", q: "Das Auto wird produziert.", options: ["Aktiv","Passiv"], answer: "Passiv" },
    { type: "mc", q: "Der Vertrag ___ unterschrieben.", options: ["wird","unterschreibt"], answer: "wird" },
    { type: "mc", q: "Der Chef ___ den Vertrag.", options: ["unterschreibt","wird unterschrieben"], answer: "unterschreibt" },
    { type: "mc", q: "Die Regeln ___ erklärt.", options: ["werden","erklären"], answer: "werden" }
  ]
},
{
  id: "b1_konjunktiv2_mc20",
  title: "B1 – Konjunktiv II (würde / hätte / wäre)",
  category: "Grammatik",

  explain_de: [
    "Konjunktiv II benutzt man für Wünsche, Träume und höfliche Bitten.",
    "würde + Infinitiv ist sehr häufig.",
    "sein → wäre, haben → hätte"
  ],
  explain_en: [
    "Konjunktiv II is used for wishes, dreams, and polite requests.",
    "würde + infinitive is very common.",
    "sein → wäre, haben → hätte"
  ],

  explain_ta: [
    "Konjunktiv II ஆசைகள், கனவுகள், மரியாதையான கோரிக்கைகள் için பயன்படுத்தப்படுகிறது.",
    "würde + Infinitiv மிகவும் பொதுவாக பயன்படும்.",
    "sein → wäre, haben → hätte"
  ],

  quiz: [

    // --- würde + Infinitiv ---
    { type: "mc", q: "Ich ___ gern nach Deutschland reisen.", options: ["würde","werde","war"], answer: "würde" },
    { type: "mc", q: "Er ___ mehr lernen, wenn er Zeit hätte.", options: ["würde","wird","hat"], answer: "würde" },
    { type: "mc", q: "Wir ___ Ihnen gern helfen.", options: ["würden","werden","waren"], answer: "würden" },
    { type: "mc", q: "Sie ___ ein neues Auto kaufen.", options: ["würde","wird","ist"], answer: "würde" },
    { type: "mc", q: "Ich ___ das anders machen.", options: ["würde","mache","werde"], answer: "würde" },

    // --- wäre (sein) ---
    { type: "mc", q: "Wenn ich reich ___, würde ich viel reisen.", options: ["wäre","bin","war"], answer: "wäre" },
    { type: "mc", q: "Es ___ besser, früher zu kommen.", options: ["wäre","ist","war"], answer: "wäre" },
    { type: "mc", q: "Ich ___ gern zu Hause.", options: ["wäre","bin","war"], answer: "wäre" },
    { type: "mc", q: "Das ___ sehr nett von dir.", options: ["wäre","ist","wird"], answer: "wäre" },

    // --- hätte (haben) ---
    { type: "mc", q: "Ich ___ gern mehr Zeit.", options: ["hätte","habe","hatte"], answer: "hätte" },
    { type: "mc", q: "Wenn er Geld ___, würde er reisen.", options: ["hätte","hat","hatte"], answer: "hätte" },
    { type: "mc", q: "Wir ___ gern eine Pause.", options: ["hätten","haben","hatten"], answer: "hätten" },
    { type: "mc", q: "Sie ___ gern einen Kaffee.", options: ["hätte","hat","hatte"], answer: "hätte" },

    // --- Höfliche Bitten ---
    { type: "mc", q: "___ Sie mir bitte helfen?", options: ["Würden","Werden","Waren"], answer: "Würden" },
    { type: "mc", q: "___ ich bitte zahlen?", options: ["Könnte","Kann","Konnte"], answer: "Könnte" },
    { type: "mc", q: "___ ich kurz fragen?", options: ["Dürfte","Darf","Durfte"], answer: "Dürfte" },

    // --- Mix ---
    { type: "mc", q: "Ich ___ das nicht machen.", options: ["würde","werde","mache"], answer: "würde" },
    { type: "mc", q: "Wenn ich Zeit ___, käme ich mit.", options: ["hätte","habe","hatte"], answer: "hätte" },
    { type: "mc", q: "Das ___ einfacher.", options: ["wäre","ist","war"], answer: "wäre" },
    { type: "mc", q: "Wir ___ gern bleiben.", options: ["würden","werden","waren"], answer: "würden" }
  ]
},
{
  id: "b1_nvv_mc20",
  title: "B1 – Nomen-Verb-Verbindungen",
  category: "Grammatik",

  explain_de: [
    "Nomen-Verb-Verbindungen bestehen aus einem Nomen + Verb.",
    "Das Nomen steht oft mit Artikel.",
    "Beispiele: eine Entscheidung treffen, Hilfe leisten."
  ],
  explain_en: [
    "Noun-verb combinations use a noun + verb.",
    "The noun often comes with an article.",
    "Examples: eine Entscheidung treffen, Hilfe leisten."
  ],

  explain_ta: [
    "Nomen-Verb-Verbindungen என்பது Nomen + Verb இணைப்பு.",
    "Nomen பெரும்பாலும் Artikel உடன் வரும்.",
    "உதாரணம்: eine Entscheidung treffen, Hilfe leisten."
  ],

  quiz: [

    // --- Entscheidung / treffen ---
    { type: "mc", q: "Ich muss eine Entscheidung ___ .", options: ["treffen","machen","nehmen"], answer: "treffen" },
    { type: "mc", q: "Er hat eine wichtige Entscheidung ___ .", options: ["getroffen","gemacht","genommen"], answer: "getroffen" },

    // --- Hilfe / leisten ---
    { type: "mc", q: "Kannst du mir Hilfe ___ ?", options: ["leisten","machen","geben"], answer: "leisten" },
    { type: "mc", q: "Der Arzt hat Erste Hilfe ___ .", options: ["geleistet","gemacht","gegeben"], answer: "geleistet" },

    // --- Termin / haben ---
    { type: "mc", q: "Ich habe morgen einen Termin ___ .", options: ["","gehabt","gemacht"], answer: "gehabt" },
    { type: "mc", q: "Sie ___ einen wichtigen Termin.", options: ["hat","macht","nimmt"], answer: "hat" },

    // --- Gespräch / führen ---
    { type: "mc", q: "Der Chef ___ ein Gespräch.", options: ["führt","macht","nimmt"], answer: "führt" },
    { type: "mc", q: "Wir haben ein langes Gespräch ___ .", options: ["geführt","gemacht","genommen"], answer: "geführt" },

    // --- Kontakt / aufnehmen ---
    { type: "mc", q: "Ich möchte Kontakt ___ .", options: ["aufnehmen","machen","haben"], answer: "aufnehmen" },
    { type: "mc", q: "Die Firma hat Kontakt ___ .", options: ["aufgenommen","gemacht","gehabt"], answer: "aufgenommen" },

    // --- Fehler / machen ---
    { type: "mc", q: "Ich habe einen Fehler ___ .", options: ["gemacht","getroffen","genommen"], answer: "gemacht" },
    { type: "mc", q: "Jeder ___ manchmal Fehler.", options: ["macht","nimmt","trifft"], answer: "macht" },

    // --- Prüfung / bestehen ---
    { type: "mc", q: "Er hat die Prüfung ___ .", options: ["bestanden","gemacht","genommen"], answer: "bestanden" },
    { type: "mc", q: "Sie möchte die Prüfung ___ .", options: ["bestehen","machen","haben"], answer: "bestehen" },

    // --- Entscheidung / treffen (Mix) ---
    { type: "mc", q: "Wir ___ eine Entscheidung.", options: ["treffen","machen","nehmen"], answer: "treffen" },
    { type: "mc", q: "Die Entscheidung wurde ___ .", options: ["getroffen","gemacht","genommen"], answer: "getroffen" },

       // --- Fortschritt / machen ---
    { type: "mc", q: "Du hast große Fortschritte ___ .", options: ["gemacht","genommen","getroffen"], answer: "gemacht" },
    { type: "mc", q: "Sie ___ gute Fortschritte.", options: ["macht","nimmt","trifft"], answer: "macht" },

    // --- Urlaub / machen ---
    { type: "mc", q: "Wir ___ nächstes Jahr Urlaub.", options: ["machen","nehmen","haben"], answer: "machen" },
    { type: "mc", q: "Sie hat lange Urlaub ___ .", options: ["gemacht","genommen","gehabt"], answer: "gemacht" },

    // --- Erfahrung / sammeln ---
    { type: "mc", q: "Er hat viel Erfahrung ___ .", options: ["gesammelt","gemacht","genommen"], answer: "gesammelt" },
    { type: "mc", q: "Man kann hier gute Erfahrungen ___ .", options: ["sammeln","machen","nehmen"], answer: "sammeln" },

    // --- Problem / lösen ---
    { type: "mc", q: "Wir müssen das Problem ___ .", options: ["lösen","machen","nehmen"], answer: "lösen" },
    { type: "mc", q: "Das Problem wurde ___ .", options: ["gelöst","gemacht","genommen"], answer: "gelöst" }

  ]
},
{
  id: "b1_plusquamperfekt_mc20",
  title: "B1 – Plusquamperfekt",
  category: "Grammatik",

  explain_de: [
    "Plusquamperfekt beschreibt eine Handlung, die vor einer anderen Vergangenheit passiert ist.",
    "Bildung: hatten / waren + Partizip II.",
    "Beispiel: Ich hatte gegessen, bevor ich gegangen bin."
  ],
  explain_en: [
    "Plusquamperfekt describes an action that happened before another past action.",
    "Form: hatten / waren + Partizip II.",
    "Example: Ich hatte gegessen, bevor ich gegangen bin."
  ],

  explain_ta: [
    "Plusquamperfekt என்பது கடந்த காலத்தில் நடந்த இன்னொரு நிகழ்வுக்கு முன்பு நடந்த செயலைக் குறிக்கும்.",
    "வடிவம்: hatten / waren + Partizip II.",
    "உதாரணம்: Ich hatte gegessen, bevor ich gegangen bin."
  ],

  quiz: [

    // --- hatten ---
    { type: "mc", q: "Ich ___ schon gegessen, bevor er kam.", options: ["hatte","habe","war"], answer: "hatte" },
    { type: "mc", q: "Wir ___ den Film gesehen, bevor wir gingen.", options: ["hatten","haben","waren"], answer: "hatten" },
    { type: "mc", q: "Sie ___ das Buch gelesen, bevor der Test begann.", options: ["hatte","hat","war"], answer: "hatte" },
    { type: "mc", q: "Er ___ viel gelernt, bevor die Prüfung startete.", options: ["hatte","hat","war"], answer: "hatte" },

    // --- waren ---
    { type: "mc", q: "Ich ___ schon gegangen, als du angerufen hast.", options: ["war","bin","habe"], answer: "war" },
    { type: "mc", q: "Sie ___ nach Hause gefahren, bevor es dunkel wurde.", options: ["waren","sind","haben"], answer: "waren" },
    { type: "mc", q: "Er ___ eingeschlafen, als der Film begann.", options: ["war","ist","hat"], answer: "war" },

    // --- mit bevor / nachdem ---
    { type: "mc", q: "Nachdem wir gegessen ___, sind wir gegangen.", options: ["hatten","haben","waren"], answer: "hatten" },
    { type: "mc", q: "Bevor er ankam, ___ wir schon begonnen.", options: ["hatten","haben","waren"], answer: "hatten" },
    { type: "mc", q: "Nachdem sie angekommen ___, hat sie angerufen.", options: ["war","ist","hat"], answer: "war" },

    // --- erkennen ---
    { type: "mc", q: "Ich hatte gearbeitet. → Das ist ___ .", options: ["Plusquamperfekt","Perfekt","Präsens"], answer: "Plusquamperfekt" },
    { type: "mc", q: "Wir waren gefahren. → Das ist ___ .", options: ["Plusquamperfekt","Perfekt","Futur"], answer: "Plusquamperfekt" },

    // --- richtiges Hilfsverb ---
    { type: "mc", q: "Ich ___ eingeschlafen.", options: ["war","hatte","habe"], answer: "war" },
    { type: "mc", q: "Wir ___ gelernt.", options: ["hatten","waren","sind"], answer: "hatten" },

    // --- Mix ---
    { type: "mc", q: "Er ___ den Brief geschrieben, bevor er ging.", options: ["hatte","hat","war"], answer: "hatte" },
    { type: "mc", q: "Sie ___ schon weg, als ich kam.", options: ["war","ist","hat"], answer: "war" },
    { type: "mc", q: "Nachdem wir fertig ___, sind wir gegangen.", options: ["waren","hatten","haben"], answer: "waren" },
    { type: "mc", q: "Ich ___ alles vorbereitet, bevor das Meeting begann.", options: ["hatte","habe","war"], answer: "hatte" },
    { type: "mc", q: "Er ___ angekommen, bevor es regnete.", options: ["war","ist","hat"], answer: "war" }
  ]
},
{
  id: "b1_adjektivdeklination_mc20",
  title: "B1 – Adjektivdeklination (der / ein / ohne Artikel)",
  category: "Grammatik",

  explain_de: [
    "Adjektive bekommen Endungen.",
    "Nach bestimmtem Artikel: der gute Mann.",
    "Nach unbestimmtem Artikel: ein guter Mann.",
    "Ohne Artikel: guter Mann."
  ],
  explain_en: [
    "Adjectives take endings.",
    "After a definite article: der gute Mann.",
    "After an indefinite article: ein guter Mann.",
    "With no article: guter Mann."
  ],

  explain_ta: [
    "Adjektive முடிவில் Endung வரும்.",
    "bestimmter Artikel பிறகு: der gute Mann.",
    "unbestimmter Artikel பிறகு: ein guter Mann.",
    "Artikel இல்லாமல்: guter Mann."
  ],

  quiz: [

    // --- bestimmter Artikel ---
    { type: "mc", q: "der ___ Mann", options: ["gute","guter","gut"], answer: "gute" },
    { type: "mc", q: "die ___ Frau", options: ["schöne","schöner","schön"], answer: "schöne" },
    { type: "mc", q: "das ___ Haus", options: ["große","großer","groß"], answer: "große" },
    { type: "mc", q: "die ___ Kinder", options: ["kleinen","kleine","kleiner"], answer: "kleinen" },

    // --- unbestimmter Artikel ---
    { type: "mc", q: "ein ___ Mann", options: ["guter","gute","gut"], answer: "guter" },
    { type: "mc", q: "eine ___ Frau", options: ["schöne","schöner","schön"], answer: "schöne" },
    { type: "mc", q: "ein ___ Haus", options: ["großes","große","großer"], answer: "großes" },
    { type: "mc", q: "einen ___ Film", options: ["interessanten","interessante","interessanter"], answer: "interessanten" },

    // --- ohne Artikel ---
    { type: "mc", q: "___ Kaffee ist teuer.", options: ["Guter","Gute","Gut"], answer: "Guter" },
    { type: "mc", q: "___ Wetter macht gute Laune.", options: ["Schönes","Schöne","Schöner"], answer: "Schönes" },
    { type: "mc", q: "___ Leute helfen gern.", options: ["Freundliche","Freundlichen","Freundlicher"], answer: "Freundliche" },

    // --- Akkusativ ---
    { type: "mc", q: "Ich sehe den ___ Hund.", options: ["kleinen","kleine","kleiner"], answer: "kleinen" },
    { type: "mc", q: "Sie kauft eine ___ Tasche.", options: ["neue","neuer","neu"], answer: "neue" },
    { type: "mc", q: "Wir haben ein ___ Auto.", options: ["neues","neue","neuer"], answer: "neues" },

    // --- Dativ ---
    { type: "mc", q: "mit dem ___ Mann", options: ["alten","alte","alter"], answer: "alten" },
    { type: "mc", q: "bei einer ___ Frau", options: ["netten","nette","netter"], answer: "netten" },
    { type: "mc", q: "mit einem ___ Kind", options: ["kleinen","kleine","kleiner"], answer: "kleinen" },

    // --- Mix ---
    { type: "mc", q: "Ich trinke ___ Tee.", options: ["heißen","heißer","heiße"], answer: "heißen" },
    { type: "mc", q: "Das ist ein ___ Problem.", options: ["großes","große","großer"], answer: "großes" },
    { type: "mc", q: "Wir besuchen die ___ Stadt.", options: ["alte","alten","alter"], answer: "alte" },
    { type: "mc", q: "Er hat keinen ___ Plan.", options: ["klaren","klare","klarer"], answer: "klaren" }
  ]
},
{
  id: "b1_relativsatz_akk_dat_mc20",
  title: "B1 – Relativsätze (Akkusativ & Dativ)",
  category: "Grammatik",

  explain_de: [
    "Relativsätze beschreiben ein Nomen genauer.",
    "Relativpronomen richten sich nach Genus & Numerus des Nomens.",
    "Der Kasus (Akkusativ/Dativ) kommt aus dem Relativsatz."
  ],
  explain_en: [
    "Relative clauses describe a noun more precisely.",
    "Relative pronouns follow the gender and number of the noun.",
    "The case (accusative/dative) comes from the verb or preposition inside the clause."
  ],

  explain_ta: [
    "Relativsatz ஒரு பெயர்ச்சொல்லை (Nomen) விரிவாக விளக்கும்.",
    "Relativpronomen பாலினம் & எண்ணிக்கையைப் பின்பற்றும்.",
    "Akkusativ / Dativ என்பது Relativsatz-இல் உள்ள வினையிலிருந்து வருகிறது."
  ],

  quiz: [

    // --- Akkusativ erkennen ---
    { type: "mc", q: "Der Mann, ___ ich kenne, wohnt hier.", options: ["den","dem","der"], answer: "den" },
    { type: "mc", q: "Die Frau, ___ wir besuchen, ist nett.", options: ["die","der","den"], answer: "die" },
    { type: "mc", q: "Das Buch, ___ er liest, ist spannend.", options: ["das","dem","den"], answer: "das" },
    { type: "mc", q: "Die Kinder, ___ sie sieht, spielen draußen.", options: ["die","den","deren"], answer: "die" },

    // --- Dativ erkennen ---
    { type: "mc", q: "Der Mann, ___ ich helfe, ist alt.", options: ["dem","den","der"], answer: "dem" },
    { type: "mc", q: "Die Frau, ___ wir danken, kommt morgen.", options: ["der","die","den"], answer: "der" },
    { type: "mc", q: "Das Kind, ___ ich vertraue, lacht.", options: ["dem","das","den"], answer: "dem" },
    { type: "mc", q: "Die Leute, ___ wir helfen, sind froh.", options: ["den","die","deren"], answer: "den" },

    // --- Präposition + Dativ ---
    { type: "mc", q: "Der Freund, mit ___ ich spreche, ist hier.", options: ["dem","den","der"], answer: "dem" },
    { type: "mc", q: "Die Stadt, in ___ wir wohnen, ist groß.", options: ["der","die","den"], answer: "der" },
    { type: "mc", q: "Der Lehrer, von ___ ich lerne, ist gut.", options: ["dem","den","der"], answer: "dem" },

    // --- Singular / Plural ---
    { type: "mc", q: "Das sind die Bücher, ___ ich gekauft habe.", options: ["die","den","deren"], answer: "die" },
    { type: "mc", q: "Das sind die Leute, ___ wir danken.", options: ["den","die","deren"], answer: "den" },

    // --- Gemischt ---
    { type: "mc", q: "Der Film, ___ wir gesehen haben, war gut.", options: ["den","dem","der"], answer: "den" },
    { type: "mc", q: "Die Frau, ___ ich geholfen habe, lächelt.", options: ["der","die","den"], answer: "der" },
    { type: "mc", q: "Das Haus, ___ wir wohnen, ist alt.", options: ["in dem","das","den"], answer: "in dem" },
    { type: "mc", q: "Der Kollege, ___ ich arbeite, kommt aus Berlin.", options: ["mit dem","den","der"], answer: "mit dem" },
    { type: "mc", q: "Die Kinder, ___ ich kenne, sind freundlich.", options: ["die","den","deren"], answer: "die" },
    { type: "mc", q: "Die Frau, ___ ich vertraue, ist ehrlich.", options: ["der","die","den"], answer: "der" },
    { type: "mc", q: "Der Mann, ___ wir warten, kommt spät.", options: ["auf den","dem","der"], answer: "auf den" }
  ]
},
{
  id: "b1_verbposition_mc20",
  title: "B1 – Verbposition (Hauptsatz & Nebensatz)",
  category: "Grammatik",

  explain_de: [
    "Im Hauptsatz steht das Verb auf Position 2.",
    "Im Nebensatz steht das Verb am Ende.",
    "Typische Nebensatz-Wörter: dass, weil, wenn, obwohl."
  ],
  explain_en: [
    "In a main clause, the verb is in position 2.",
    "In a subordinate clause, the verb goes to the end.",
    "Common subordinate clause words: dass, weil, wenn, obwohl."
  ],

  explain_ta: [
    "Hauptsatz-இல் வினைச்சொல் 2-வது இடத்தில் வரும்.",
    "Nebensatz-இல் வினைச்சொல் கடைசியில் வரும்.",
    "dass, weil, wenn, obwohl → Nebensatz."
  ],

  quiz: [

    // --- Hauptsatz ---
    { type: "mc", q: "Heute ___ ich zu Hause.", options: ["bleibe","ich bleibe","bleiben"], answer: "bleibe" },
    { type: "mc", q: "Morgen ___  früh auf.", options: ["stehen","stehen wir","wir stehen"], answer: "stehen wir" },
    { type: "mc", q: "Nach der Arbeit ___ er Sport.", options: ["macht","er macht","machen"], answer: "macht" },
    { type: "mc", q: "Zu Hause ___ sie Deutsch.", options: ["lernt","sie lernt","lernen"], answer: "lernt" },

    // --- Nebensatz mit dass ---
    { type: "mc", q: "Ich weiß, dass er heute ___ .", options: ["kommt","kommt er","er kommt"], answer: "kommt" },
    { type: "mc", q: "Sie sagt, dass wir morgen ___ .", options: ["arbeiten","arbeiten wir","wir arbeiten"], answer: "arbeiten" },
    { type: "mc", q: "Er denkt, dass sie recht ___ .", options: ["hat","hat sie","sie hat"], answer: "hat" },

    // --- Nebensatz mit weil ---
    { type: "mc", q: "Ich bleibe zu Hause, weil ich krank ___ .", options: ["bin","bin ich","ich bin"], answer: "bin" },
    { type: "mc", q: "Wir gehen früher, weil es spät ___ .", options: ["ist","ist es","es ist"], answer: "ist" },
    { type: "mc", q: "Er lernt Deutsch, weil er hier ___ .", options: ["lebt","lebt er","er lebt"], answer: "lebt" },

    // --- Nebensatz mit wenn ---
    { type: "mc", q: "Wenn es regnet, ___  zu Hause.", options: ["bleiben","bleiben wir","wir bleiben"], answer: "bleiben wir" },
    { type: "mc", q: "Wenn er Zeit hat, ___  an.", options: ["ruft","ruft er","er ruft"], answer: "ruft er" },

    // --- obwohl ---
    { type: "mc", q: "Er kommt, obwohl er keine Zeit ___ .", options: ["hat","hat er","er hat"], answer: "hat" },
    { type: "mc", q: "Sie arbeitet, obwohl sie müde ___ .", options: ["ist","ist sie","sie ist"], answer: "ist" },

    // --- Mix ---
    { type: "mc", q: "Heute ___  lange.", options: ["arbeiten","arbeiten wir","wir arbeiten"], answer: "arbeiten wir" },
    { type: "mc", q: "Ich glaube, dass er schon ___ .", options: ["da ist","ist da","da"], answer: "da ist" },
    { type: "mc", q: "Weil er spät ___, nimmt er den Bus.", options: ["kommt","kommt er","er kommt"], answer: "kommt" },
    { type: "mc", q: "Wenn du willst, ___  helfen.", options: ["können","können wir","wir können"], answer: "können wir" },
    { type: "mc", q: "Sie bleibt, obwohl sie gehen ___ .", options: ["möchte","möchte sie","sie möchte"], answer: "möchte" }
  ]
},
{
  id: "b1_genitiv_praep_mc20",
  title: "B1 – Präpositionen mit Genitiv",
  category: "Grammatik",

  explain_de: [
    "Einige Präpositionen verlangen den Genitiv.",
    "Häufige Genitiv-Präpositionen: wegen, trotz, während, statt, außerhalb, innerhalb.",
    "In der Umgangssprache hört man oft Dativ, im Test ist Genitiv richtig."
  ],
  explain_en: [
    "Some prepositions take the genitive case.",
    "Common genitive prepositions: wegen, trotz, während, statt, außerhalb, innerhalb.",
    "In everyday speech you may hear dative, but in tests genitive is correct."
  ],

  explain_ta: [
    "சில Präpositionen Genitiv-ஐ வேண்டுகின்றன.",
    "அடிக்கடி வரும் Genitiv-Präpositionen: wegen, trotz, während, statt, außerhalb, innerhalb.",
    "பேச்சு மொழியில் Dativ கேட்கலாம்; தேர்வில் Genitiv சரி."
  ],

  quiz: [

    // --- wegen ---
    { type: "mc", q: "___ des Regens bleiben wir zu Hause.", options: ["Wegen","Trotz","Während"], answer: "Wegen" },
    { type: "mc", q: "Wegen ___ Lärms konnte ich nicht schlafen.", options: ["des","dem","den"], answer: "des" },

    // --- trotz ---
    { type: "mc", q: "___ der Kälte gehen wir spazieren.", options: ["Trotz","Wegen","Während"], answer: "Trotz" },
    { type: "mc", q: "Trotz ___ Problems machen wir weiter.", options: ["des","dem","den"], answer: "des" },

    // --- während ---
    { type: "mc", q: "___ des Films war es ruhig.", options: ["Während","Wegen","Statt"], answer: "Während" },
    { type: "mc", q: "Während ___ Urlaubs habe ich gelernt.", options: ["des","dem","den"], answer: "des" },

    // --- statt ---
    { type: "mc", q: "___ eines Autos fährt er Fahrrad.", options: ["Statt","Wegen","Innerhalb"], answer: "Statt" },
    { type: "mc", q: "Statt ___ Kaffees trinkt sie Tee.", options: ["des","dem","den"], answer: "des" },

    // --- außerhalb ---
    { type: "mc", q: "___ der Stadt ist es ruhiger.", options: ["Außerhalb","Innerhalb","Während"], answer: "Außerhalb" },
    { type: "mc", q: "Außerhalb ___ Zentrums ist es billiger.", options: ["des","dem","den"], answer: "des" },

    // --- innerhalb ---
    { type: "mc", q: "___ eines Monats ist alles fertig.", options: ["Innerhalb","Außerhalb","Trotz"], answer: "Innerhalb" },
    { type: "mc", q: "Innerhalb ___ Firma gibt es Regeln.", options: ["der","die","den"], answer: "der" },

    // --- gemischt ---
    { type: "mc", q: "___ schlechten Wetters gehen wir.", options: ["Trotz","Wegen","Während"], answer: "Trotz" },
    { type: "mc", q: "Wegen ___ Sturms fällt der Zug aus.", options: ["des","dem","den"], answer: "des" },
    { type: "mc", q: "___ der Arbeit höre ich Musik.", options: ["Während","Statt","Außerhalb"], answer: "Während" },
    { type: "mc", q: "Statt ___ Antwortes bekam ich eine Frage.", options: ["einer","eine","einem"], answer: "einer" },
    { type: "mc", q: "Außerhalb ___ Öffnungszeiten ist geschlossen.", options: ["der","die","den"], answer: "der" },
    { type: "mc", q: "Innerhalb ___ Tages ist das möglich.", options: ["eines","einem","einen"], answer: "eines" }
  ]
},
{
  id: "b1_passiv_modalverben_mc20",
  title: "B1 – Passiv mit Modalverben",
  category: "Grammatik",

  explain_de: [
    "Passiv mit Modalverben: Modalverb + Partizip II + werden.",
    "Das Modalverb steht konjugiert, 'werden' im Infinitiv.",
    "Beispiel: Der Brief muss geschrieben werden."
  ],
  explain_en: [
    "Passive with modal verbs: modal + Partizip II + werden.",
    "The modal verb is conjugated; 'werden' stays in the infinitive.",
    "Example: Der Brief muss geschrieben werden."
  ],

  explain_ta: [
    "Modalverb உடன் Passiv: Modalverb + Partizip II + werden.",
    "Modalverb மாற்றம் பெறும்; 'werden' Infinitiv ஆக இருக்கும்.",
    "உதாரணம்: Der Brief muss geschrieben werden."
  ],

  quiz: [

    // --- müssen ---
    { type: "mc", q: "Der Brief ___ geschrieben werden.", options: ["muss","müsste","wird"], answer: "muss" },
    { type: "mc", q: "Die Hausaufgaben ___ gemacht werden.", options: ["müssen","werden","haben"], answer: "müssen" },

    // --- sollen ---
    { type: "mc", q: "Das Formular ___ ausgefüllt werden.", options: ["soll","kann","wird"], answer: "soll" },
    { type: "mc", q: "Die Regeln ___ erklärt werden.", options: ["sollen","müssen","werden"], answer: "sollen" },

    // --- können ---
    { type: "mc", q: "Das Problem ___ gelöst werden.", options: ["kann","muss","soll"], answer: "kann" },
    { type: "mc", q: "Der Termin ___ verschoben werden.", options: ["kann","hat","wird"], answer: "kann" },

    // --- dürfen ---
    { type: "mc", q: "Das Auto ___ hier nicht geparkt werden.", options: ["darf","muss","soll"], answer: "darf" },
    { type: "mc", q: "Die Tür ___ nicht geöffnet werden.", options: ["darf","kann","wird"], answer: "darf" },

    // --- wollen ---
    { type: "mc", q: "Der Fehler ___ schnell behoben werden.", options: ["will","muss","kann"], answer: "will" },
    { type: "mc", q: "Die Aufgabe ___ heute erledigt werden.", options: ["will","soll","wird"], answer: "will" },

    // --- richtiges Verb am Ende ---
    { type: "mc", q: "Der Vertrag muss unterschrieben ___ .", options: ["werden","sein","haben"], answer: "werden" },
    { type: "mc", q: "Das Essen soll vorbereitet ___ .", options: ["werden","sein","haben"], answer: "werden" },

    // --- erkennen ---
    { type: "mc", q: "Der Bericht kann gelesen werden. → Das ist ___ .", options: ["Passiv","Aktiv","Perfekt"], answer: "Passiv" },
    { type: "mc", q: "Die Arbeit muss gemacht werden. → Das ist ___ .", options: ["Passiv","Aktiv","Präsens"], answer: "Passiv" },

    // --- Mix ---
    { type: "mc", q: "Die Prüfung ___ wiederholt werden.", options: ["muss","ist","hat"], answer: "muss" },
    { type: "mc", q: "Die Regeln ___ beachtet werden.", options: ["müssen","sind","haben"], answer: "müssen" },
    { type: "mc", q: "Der Termin ___ geändert werden.", options: ["kann","ist","war"], answer: "kann" },
    { type: "mc", q: "Das Formular ___ heute abgegeben werden.", options: ["soll","hat","wird"], answer: "soll" },
    { type: "mc", q: "Die Aufgabe ___ erledigt werden.", options: ["muss","ist","hat"], answer: "muss" }
  ]
},
{
  id: "b1_nomen_verb_verbindungen_mc20",
  title: "B1 – Nomen-Verb-Verbindungen",
  category: "Grammatik",

  explain_de: [
    "Nomen-Verb-Verbindungen bestehen aus einem Nomen + einem Verb.",
    "Sie klingen formeller als einfache Verben.",
    "Beispiel: eine Entscheidung treffen = entscheiden."
  ],
  explain_en: [
    "Noun-verb combinations use a noun + a verb.",
    "They sound more formal than simple verbs.",
    "Example: eine Entscheidung treffen = entscheiden."
  ],

  explain_ta: [
    "Nomen-Verb-Verbindungen = பெயர்ச்சொல் + வினை.",
    "இவை சாதாரண வினைகளை விட அதிகாரப்பூர்வமாக இருக்கும்.",
    "உதாரணம்: eine Entscheidung treffen = entscheiden."
  ],

  quiz: [

    { type: "mc", q: "eine Entscheidung ___", options: ["treffen","machen","geben"], answer: "treffen" },
    { type: "mc", q: "in Kontakt ___", options: ["kommen","machen","nehmen"], answer: "kommen" },
    { type: "mc", q: "einen Antrag ___", options: ["stellen","machen","geben"], answer: "stellen" },
    { type: "mc", q: "Hilfe ___", options: ["leisten","machen","treffen"], answer: "leisten" },
    { type: "mc", q: "eine Pause ___", options: ["machen","nehmen","geben"], answer: "machen" },

    { type: "mc", q: "in Betrieb ___", options: ["nehmen","machen","bringen"], answer: "nehmen" },
    { type: "mc", q: "eine Frage ___", options: ["stellen","treffen","nehmen"], answer: "stellen" },
    { type: "mc", q: "Verantwortung ___", options: ["übernehmen","machen","haben"], answer: "übernehmen" },
    { type: "mc", q: "eine Rolle ___", options: ["spielen","machen","treffen"], answer: "spielen" },
    { type: "mc", q: "Angst ___", options: ["haben","machen","nehmen"], answer: "haben" },

    { type: "mc", q: "einen Fehler ___", options: ["machen","treffen","stellen"], answer: "machen" },
    { type: "mc", q: "eine Lösung ___", options: ["finden","machen","nehmen"], answer: "finden" },
    { type: "mc", q: "in Anspruch ___", options: ["nehmen","machen","stellen"], answer: "nehmen" },
    { type: "mc", q: "eine Entscheidung treffen → bedeutet ___", options: ["entscheiden","fragen","beginnen"], answer: "entscheiden" },
    { type: "mc", q: "Hilfe leisten → bedeutet ___", options: ["helfen","arbeiten","fragen"], answer: "helfen" },

    { type: "mc", q: "Kontakt aufnehmen → bedeutet ___", options: ["kontaktieren","gehen","bleiben"], answer: "kontaktieren" },
    { type: "mc", q: "eine Pause machen → bedeutet ___", options: ["pausieren","arbeiten","laufen"], answer: "pausieren" },
    { type: "mc", q: "Verantwortung übernehmen → bedeutet ___", options: ["verantwortlich sein","fragen","vergessen"], answer: "verantwortlich sein" },
    { type: "mc", q: "eine Rolle spielen → bedeutet ___", options: ["wichtig sein","gehen","arbeiten"], answer: "wichtig sein" },
    { type: "mc", q: "einen Antrag stellen → bedeutet ___", options: ["beantragen","arbeiten","nehmen"], answer: "beantragen" }

  ]
},
{
  id: "b1_relativsaetze_der_die_das_mc20",
  title: "B1 – Relativsätze (der / die / das)",
  category: "Grammatik",

  explain_de: [
    "Relativsätze geben zusätzliche Informationen über ein Nomen.",
    "Sie beginnen mit: der / die / das.",
    "Das Verb steht am Ende des Relativsatzes.",
    "Beispiel: Das ist der Mann, der hier arbeitet."
  ],
  explain_en: [
    "Relative clauses give extra information about a noun.",
    "They start with: der / die / das.",
    "The verb is at the end of the relative clause.",
    "Example: Das ist der Mann, der hier arbeitet."
  ],

  explain_ta: [
    "Relativsätze ஒரு பெயர்ச்சொல்லைப் பற்றி கூடுதல் தகவல் தரும்.",
    "der / die / das என்பவை Relativpronomen.",
    "Relativsatz-இல் வினை இறுதியில் வரும்.",
    "உதாரணம்: Das ist der Mann, der hier arbeitet."
  ],

  quiz: [

    { type: "mc", q: "Das ist der Mann, ___ hier arbeitet.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Das ist die Frau, ___ Deutsch lernt.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Das ist das Kind, ___ laut spricht.", options: ["das","der","die"], answer: "das" },

    { type: "mc", q: "Ich kenne den Mann, ___ aus Berlin kommt.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Sie sieht die Frau, ___ im Büro arbeitet.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Das Buch, ___ ich lese, ist interessant.", options: ["das","der","die"], answer: "das" },

    { type: "mc", q: "Das ist der Lehrer, ___ uns Deutsch erklärt.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Das ist die Stadt, ___ sehr alt ist.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Das ist das Auto, ___ neu ist.", options: ["das","der","die"], answer: "das" },

    { type: "mc", q: "Ich mag Menschen, ___ freundlich sind.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Er sucht einen Job, ___ gut bezahlt ist.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Das ist die Firma, ___ viele Mitarbeiter hat.", options: ["die","der","das"], answer: "die" },

    { type: "mc", q: "Relativsatz: Das Verb steht ___ .", options: ["am Ende","in der Mitte","am Anfang"], answer: "am Ende" },
    { type: "mc", q: "Relativpronomen richten sich nach ___ .", options: ["dem Nomen","dem Verb","dem Adjektiv"], answer: "dem Nomen" },

    { type: "mc", q: "Der Mann, ___ hier wohnt, ist nett.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Die Frau, ___ du kennst, ist Ärztin.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Das Haus, ___ alt ist, wird renoviert.", options: ["das","der","die"], answer: "das" },

    { type: "mc", q: "Relativsatz ist ein ___ .", options: ["Nebensatz","Hauptsatz","Infinitiv"], answer: "Nebensatz" },
    { type: "mc", q: "Im Relativsatz steht ein ___ vor dem Satz.", options: ["Komma","Punkt","Fragezeichen"], answer: "Komma" }

  ]
},
{
  id: "b1_passiv_praesens_mc20",
  title: "B1 – Passiv (Präsens)",
  category: "Grammatik",

  explain_de: [
    "Passiv: werden + Partizip II.",
    "Der Handelnde ist unwichtig oder unbekannt.",
    "Beispiel: Der Brief wird geschrieben."
  ],
  explain_en: [
    "Passive: werden + Partizip II.",
    "The doer is unimportant or unknown.",
    "Example: Der Brief wird geschrieben."
  ],

  explain_ta: [
    "Passiv = werden + Partizip II.",
    "யார் செய்கிறார் என்பது முக்கியமில்லை.",
    "உதாரணம்: Der Brief wird geschrieben."
  ],

  quiz: [
    { type: "mc", q: "Der Brief ___ geschrieben.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Das Auto ___ repariert.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Die Tür ___ geöffnet.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Die Rechnung ___ bezahlt.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Der Film ___ gezeigt.", options: ["wird","ist","hat"], answer: "wird" },

    { type: "mc", q: "Der Text ___ gelesen.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Das Essen ___ gekocht.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Die Straße ___ gebaut.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Die Aufgabe ___ erklärt.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Das Paket ___ geliefert.", options: ["wird","ist","hat"], answer: "wird" },

    { type: "mc", q: "Passiv benutzt man, wenn der ___ nicht wichtig ist.", options: ["Handelnde","Ort","Zeit"], answer: "Handelnde" },
    { type: "mc", q: "Im Präsens-Passiv benutzt man das Verb ___.", options: ["werden","sein","haben"], answer: "werden" },

    { type: "mc", q: "Die Wohnung ___ renoviert.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Der Vertrag ___ unterschrieben.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Die Mail ___ gesendet.", options: ["wird","ist","hat"], answer: "wird" },

    { type: "mc", q: "Passiv-Satz: Das Verb steht ___.", options: ["am Ende","am Anfang","in der Mitte"], answer: "am Ende" },
    { type: "mc", q: "Passiv beschreibt eine ___.", options: ["Handlung","Person","Eigenschaft"], answer: "Handlung" },

    { type: "mc", q: "Die Rechnung ___ heute bezahlt.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Das Problem ___ gelöst.", options: ["wird","ist","hat"], answer: "wird" }
  ]
},
{
  id: "b1_konnektoren_weil_obwohl_deshalb_mc20",
  title: "B1 – Konnektoren (weil / obwohl / deshalb)",
  category: "Grammatik",

  explain_de: [
    "weil → Grund (Nebensatz, Verb am Ende).",
    "obwohl → Gegensatz (Nebensatz, Verb am Ende).",
    "deshalb → Folge (Hauptsatz, Verb an Position 2)."
  ],
  explain_en: [
    "weil → reason (subordinate clause, verb at the end).",
    "obwohl → contrast (subordinate clause, verb at the end).",
    "deshalb → result (main clause, verb in position 2)."
  ],

  explain_ta: [
    "weil → காரணம் (Nebensatz, வினை இறுதியில்).",
    "obwohl → எதிர்மறை கருத்து.",
    "deshalb → விளைவு (Hauptsatz, வினை இடம் 2)."
  ],

  quiz: [
    { type: "mc", q: "Ich bleibe zu Hause, ___ ich krank bin.", options: ["weil","obwohl","deshalb"], answer: "weil" },
    { type: "mc", q: "Er arbeitet, ___ er müde ist.", options: ["obwohl","weil","deshalb"], answer: "obwohl" },
    { type: "mc", q: "Es regnet, ___ bleibe ich zu Hause.", options: ["deshalb","weil","obwohl"], answer: "deshalb" },

    { type: "mc", q: "Sie lernt Deutsch, ___ sie in Deutschland lebt.", options: ["weil","obwohl","deshalb"], answer: "weil" },
    { type: "mc", q: "Er kommt, ___ er keine Zeit hat.", options: ["obwohl","weil","deshalb"], answer: "obwohl" },
    { type: "mc", q: "Ich habe Hunger, ___ esse ich etwas.", options: ["deshalb","weil","obwohl"], answer: "deshalb" },

    { type: "mc", q: "Wir gehen nicht raus, ___ es kalt ist.", options: ["weil","obwohl","deshalb"], answer: "weil" },
    { type: "mc", q: "Sie lacht, ___ sie traurig ist.", options: ["obwohl","weil","deshalb"], answer: "obwohl" },
    { type: "mc", q: "Der Bus ist spät, ___ komme ich zu spät.", options: ["deshalb","weil","obwohl"], answer: "deshalb" },

    { type: "mc", q: "Ich bleibe, ___ ich noch Arbeit habe.", options: ["weil","obwohl","deshalb"], answer: "weil" },
    { type: "mc", q: "Er hilft, ___ er wenig Zeit hat.", options: ["obwohl","weil","deshalb"], answer: "obwohl" },
    { type: "mc", q: "Es ist laut, ___ kann ich nicht schlafen.", options: ["deshalb","weil","obwohl"], answer: "deshalb" },

    { type: "mc", q: "Nach 'weil' steht das Verb ___.", options: ["am Ende","am Anfang","an Position 2"], answer: "am Ende" },
    { type: "mc", q: "Nach 'deshalb' steht das Verb ___.", options: ["an Position 2","am Ende","am Anfang"], answer: "an Position 2" },

    { type: "mc", q: "Wir bleiben zu Hause, ___ es schneit.", options: ["weil","obwohl","deshalb"], answer: "weil" },
    { type: "mc", q: "Sie geht joggen, ___ es regnet.", options: ["obwohl","weil","deshalb"], answer: "obwohl" },
    { type: "mc", q: "Ich bin müde, ___ gehe ich schlafen.", options: ["deshalb","weil","obwohl"], answer: "deshalb" },

    { type: "mc", q: "'weil' und 'obwohl' sind ___.", options: ["Nebensätze","Hauptsätze","Infinitive"], answer: "Nebensätze" },
    { type: "mc", q: "'deshalb' zeigt eine ___.", options: ["Folge","Ursache","Zeit"], answer: "Folge" }
  ]
},
{
  id: "b1_abschlusstest_mix_mc20",
  title: "B1 – Abschlusstest (Mix)",
  category: "Test",

  explain_de: [
    "Dieser Test wiederholt die wichtigsten B1-Themen.",
    "Enthalten sind: dass-Satz, Relativsatz, Passiv, Konnektoren, Nomen-Verb-Verbindungen."
  ],
  explain_en: [
    "This test reviews the most important B1 topics.",
    "It includes: dass-clauses, relative clauses, passive, connectors, noun-verb combinations."
  ],

  explain_ta: [
    "இந்த தேர்வு முக்கியமான B1 இலக்கணங்களை மீண்டும் பரிசீலிக்கும்.",
    "இதில்: dass-வாக்கியம், Relativsatz, Passiv, Konnektoren, Nomen-Verb-Verbindungen உள்ளன."
  ],

  quiz: [

    // dass-Satz
    { type: "mc", q: "Ich denke, ___ er heute kommt.", options: ["dass","weil","deshalb"], answer: "dass" },
    { type: "mc", q: "Sie sagt, ___ sie müde ist.", options: ["dass","obwohl","deshalb"], answer: "dass" },

    // Relativsatz
    { type: "mc", q: "Das ist der Mann, ___ hier arbeitet.", options: ["der","die","das"], answer: "der" },
    { type: "mc", q: "Das ist die Stadt, ___ sehr alt ist.", options: ["die","der","das"], answer: "die" },

    // Passiv Präsens
    { type: "mc", q: "Der Brief ___ geschrieben.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Das Essen ___ gekocht.", options: ["wird","ist","hat"], answer: "wird" },

    // Konnektoren
    { type: "mc", q: "Ich bleibe zu Hause, ___ ich krank bin.", options: ["weil","obwohl","deshalb"], answer: "weil" },
    { type: "mc", q: "Er arbeitet, ___ er müde ist.", options: ["obwohl","weil","deshalb"], answer: "obwohl" },
    { type: "mc", q: "Es regnet, ___ bleibe ich zu Hause.", options: ["deshalb","weil","obwohl"], answer: "deshalb" },

    // Nomen-Verb-Verbindungen
    { type: "mc", q: "eine Entscheidung ___", options: ["treffen","machen","geben"], answer: "treffen" },
    { type: "mc", q: "Hilfe ___", options: ["leisten","machen","nehmen"], answer: "leisten" },

    // Satzstellung / Theorie
    { type: "mc", q: "Im Nebensatz steht das Verb ___.", options: ["am Ende","an Position 2","am Anfang"], answer: "am Ende" },
    { type: "mc", q: "Nach 'deshalb' steht das Verb ___.", options: ["an Position 2","am Ende","am Anfang"], answer: "an Position 2" },

    // Mischung
    { type: "mc", q: "Ich weiß, ___ er recht hat.", options: ["dass","weil","deshalb"], answer: "dass" },
    { type: "mc", q: "Die Frau, ___ du kennst, ist Ärztin.", options: ["die","der","das"], answer: "die" },
    { type: "mc", q: "Der Vertrag ___ unterschrieben.", options: ["wird","ist","hat"], answer: "wird" },
    { type: "mc", q: "Ich bin müde, ___ gehe ich schlafen.", options: ["deshalb","weil","obwohl"], answer: "deshalb" },
    { type: "mc", q: "Verantwortung ___", options: ["übernehmen","machen","geben"], answer: "übernehmen" },

    // Abschluss
    { type: "mc", q: "B1 bedeutet: einfache ___ verstehen und bilden.", options: ["Nebensätze","Wörter","Buchstaben"], answer: "Nebensätze" }
  ]
},



  ],

  B2: [
    {
      id: "B2-L1",
      title: "Passiv (werden / sein)",
      de: [
        "Im Passiv ist die Handlung wichtig, nicht die Person.",
        "Präsens Passiv: werden + Partizip II.",
        "Perfekt Passiv: sein + Partizip II + worden."
      ],
      ta: [
        "Passiv-இல் செயல் முக்கியம்; யார் செய்கிறார் என்பது குறைவாக முக்கியம்.",
        "Präsens Passiv: werden + Partizip II.",
        "Perfekt Passiv: sein + Partizip II + worden."
      ],
      explain_de: [
        "Nutze Passiv, wenn die Handlung im Vordergrund steht.",
        "Beispiel: Der Brief wird geschrieben."
      ],
      explain_ta: [
        "செயல் முக்கியமாக இருக்கும் போது Passiv பயன்படுத்துங்கள்.",
        "உதாரணம்: Der Brief wird geschrieben."
      ],
      quiz: [
        { type: "mc", q: "Der Brief ___ geschrieben.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Die Tür ___ geöffnet.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Das Essen ___ gekocht.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Der Vertrag ___ unterschrieben.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Die Mail ___ gesendet.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Passiv benutzt man, wenn der ___ nicht wichtig ist.", options: ["Handelnde","Ort","Zeit"], answer: "Handelnde" },
        { type: "mc", q: "Im Präsens-Passiv benutzt man das Verb ___.", options: ["werden","sein","haben"], answer: "werden" },
        { type: "mc", q: "Die Rechnung ___ heute bezahlt.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Die Wohnung ___ renoviert.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Der Text ___ gelesen.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Das Paket ___ geliefert.", options: ["wird","ist","hat"], answer: "wird" },
        { type: "mc", q: "Passiv beschreibt eine ___.", options: ["Handlung","Person","Eigenschaft"], answer: "Handlung" },
        { type: "mc", q: "Im Passiv steht das Verb meist ___.", options: ["am Ende","am Anfang","in der Mitte"], answer: "am Ende" },
        { type: "mc", q: "Der Bericht ___ erstellt.", options: ["wird","ist","hat"], answer: "wird" }
      ]
    },
    {
      id: "B2-L2",
      title: "Konjunktiv II (Wunsch / Höflichkeit)",
      de: [
        "Konjunktiv II zeigt Wunsch oder Höflichkeit.",
        "Form: würde + Infinitiv oder eigene Formen (hätte, wäre, könnte)."
      ],
      ta: [
        "Konjunktiv II ஆசை/பணிவை காட்டும்.",
        "Form: würde + Infinitiv அல்லது hätte, wäre, könnte போன்ற வடிவங்கள்."
      ],
      explain_de: [
        "Höflich fragen: Könnten Sie...? / Würden Sie...?",
        "Wunsch: Ich würde gern..."
      ],
      explain_ta: [
        "பணிவாக கேட்க: Könnten Sie...? / Würden Sie...?",
        "ஆசை: Ich würde gern..."
      ],
      quiz: [
        { type: "mc", q: "Ich ___ gern mehr Zeit.", options: ["hätte","habe","hat"], answer: "hätte" },
        { type: "mc", q: "___ Sie mir bitte helfen?", options: ["Könnten","Können","Könnten Sie"], answer: "Könnten" },
        { type: "mc", q: "Ich ___ gern nach Berlin fahren.", options: ["würde","werde","bin"], answer: "würde" },
        { type: "mc", q: "Wenn ich Zeit ___, käme ich.", options: ["hätte","habe","hatte"], answer: "hätte" },
        { type: "mc", q: "Ich ___ das tun.", options: ["würde","werde","will"], answer: "würde" },
        { type: "mc", q: "Er ___ gern weniger arbeiten.", options: ["würde","will","wird"], answer: "würde" },
        { type: "mc", q: "Wir ___ Ihnen danken.", options: ["würden","werden","wollen"], answer: "würden" },
        { type: "mc", q: "___ ich Geld hätte, würde ich reisen.", options: ["Wenn","Weil","Dass"], answer: "Wenn" },
        { type: "mc", q: "Sie ___ gern früher gehen.", options: ["würde","würden","wird"], answer: "würde" },
        { type: "mc", q: "Könnten Sie mir bitte ___?", options: ["helfen","helfe","hilft"], answer: "helfen" },
        { type: "mc", q: "Ich ___ gern einen Termin.", options: ["hätte","habe","hat"], answer: "hätte" },
        { type: "mc", q: "Wir ___ das anders machen.", options: ["würden","werden","wollen"], answer: "würden" },
        { type: "mc", q: "Er ___ lieber zu Hause bleiben.", options: ["würde","wird","will"], answer: "würde" },
        { type: "mc", q: "Wäre es möglich, dass Sie ___?", options: ["kommen","kommt","kamen"], answer: "kommen" }
      ]
    },
    {
      id: "B2-L3",
      title: "Relativsätze (Wiederholung + Erweiterung)",
      de: [
        "Relativsätze beschreiben ein Nomen genauer.",
        "Das Verb steht im Relativsatz am Ende."
      ],
      ta: [
        "Relativsatz ஒரு Nomen-ஐ தெளிவாக விளக்குகிறது.",
        "Relativsatz-இல் வினைச்சொல் கடைசியில் வரும்."
      ],
      explain_de: [
        "Relativpronomen richtet sich nach dem Nomen.",
        "Beispiel: Der Mann, der hier wohnt..."
      ],
      explain_ta: [
        "Relativpronomen Nomen-க்கு ஏற்ப மாறும்.",
        "உதாரணம்: Der Mann, der hier wohnt..."
      ],
      quiz: [
        { type: "mc", q: "Das ist der Mann, ___ hier arbeitet.", options: ["der","die","das"], answer: "der" },
        { type: "mc", q: "Das ist die Frau, ___ Deutsch lernt.", options: ["die","der","das"], answer: "die" },
        { type: "mc", q: "Das ist das Kind, ___ laut spricht.", options: ["das","der","die"], answer: "das" },
        { type: "mc", q: "Der Mann, ___ hier wohnt, ist nett.", options: ["der","die","das"], answer: "der" },
        { type: "mc", q: "Die Frau, ___ du kennst, ist Ärztin.", options: ["die","der","das"], answer: "die" },
        { type: "mc", q: "Relativsatz: Das Verb steht ___.", options: ["am Ende","in der Mitte","am Anfang"], answer: "am Ende" },
        { type: "mc", q: "Das Buch, ___ ich lese, ist interessant.", options: ["das","der","die"], answer: "das" },
        { type: "mc", q: "Die Stadt, ___ wir besuchen, ist groß.", options: ["die","der","das"], answer: "die" },
        { type: "mc", q: "Der Freund, ___ ich helfe, ist hier.", options: ["dem","den","der"], answer: "dem" },
        { type: "mc", q: "Die Frau, ___ ich vertraue, ist ehrlich.", options: ["der","die","den"], answer: "der" },
        { type: "mc", q: "Das sind die Leute, ___ wir danken.", options: ["den","die","deren"], answer: "den" },
        { type: "mc", q: "Relativsatz ist ein ___.", options: ["Nebensatz","Hauptsatz","Infinitiv"], answer: "Nebensatz" },
        { type: "mc", q: "Im Relativsatz steht ein ___ vor dem Satz.", options: ["Komma","Punkt","Fragezeichen"], answer: "Komma" },
        { type: "mc", q: "Der Lehrer, ___ uns hilft, ist nett.", options: ["der","die","das"], answer: "der" }
      ]
    },
    {
      id: "B2-L4",
      title: "Nominalisierung (Verb → Nomen)",
      de: [
        "Verben können als Nomen genutzt werden.",
        "Nominalisierung schreibt man groß."
      ],
      ta: [
        "Verb-களை Nomen ஆக பயன்படுத்தலாம்.",
        "Nominalisierung பெரிய எழுத்தில் எழுதப்படும்."
      ],
      explain_de: [
        "Beispiel: arbeiten → das Arbeiten.",
        "Oft mit Artikel: das Lesen, das Essen."
      ],
      explain_ta: [
        "உதாரணம்: arbeiten → das Arbeiten.",
        "பல நேரங்களில் Artikel உடன்: das Lesen, das Essen."
      ],
      quiz: [
        { type: "mc", q: "___ ist wichtig.", options: ["Das Lernen","lernen","Lernen"], answer: "Das Lernen" },
        { type: "mc", q: "Ich mag ___.", options: ["das Lesen","lesen","liest"], answer: "das Lesen" },
        { type: "mc", q: "___ hilft im Alltag.", options: ["Das Sprechen","sprechen","spricht"], answer: "Das Sprechen" },
        { type: "mc", q: "Wir üben ___.", options: ["das Schreiben","schreiben","schreibt"], answer: "das Schreiben" },
        { type: "mc", q: "Nominalisierung schreibt man ___.", options: ["groß","klein","fett"], answer: "groß" },
        { type: "mc", q: "___ macht Spaß.", options: ["Das Reisen","reisen","reist"], answer: "Das Reisen" },
        { type: "mc", q: "Ich finde ___ wichtig.", options: ["das Arbeiten","arbeiten","arbeitet"], answer: "das Arbeiten" },
        { type: "mc", q: "___ ist schwer.", options: ["Das Entscheiden","entscheiden","entscheidet"], answer: "Das Entscheiden" },
        { type: "mc", q: "Wir lieben ___.", options: ["das Kochen","kochen","kocht"], answer: "das Kochen" },
        { type: "mc", q: "___ ist gesund.", options: ["Das Schwimmen","schwimmen","schwimmt"], answer: "Das Schwimmen" },
        { type: "mc", q: "Nominalisierung benutzt oft den Artikel ___.", options: ["das","der","die"], answer: "das" },
        { type: "mc", q: "Ich übe ___.", options: ["das Sprechen","sprechen","spricht"], answer: "das Sprechen" },
        { type: "mc", q: "___ dauert lange.", options: ["Das Warten","warten","wartet"], answer: "Das Warten" },
        { type: "mc", q: "Wir brauchen ___.", options: ["das Üben","üben","übt"], answer: "das Üben" }
      ]
    },
    {
      id: "B2-L5",
      title: "Redemittel: Meinung & Argument",
      de: [
        "Redemittel helfen beim Sprechen und Schreiben.",
        "Nutze sie für Meinung, Zustimmung, Widerspruch."
      ],
      ta: [
        "Redemittel பேசவும் எழுதவும் உதவும்.",
        "மதிப்பு/ஒப்புதல்/எதிர்ப்புக்கு பயன்படுத்தலாம்."
      ],
      explain_de: [
        "Beispiel: Meiner Meinung nach..., Ich bin dafür/dagegen."
      ],
      explain_ta: [
        "உதாரணம்: Meiner Meinung nach..., Ich bin dafür/dagegen."
      ],
      quiz: [
        { type: "mc", q: "___ Meinung nach ist das gut.", options: ["Meiner","Meinem","Meines"], answer: "Meiner" },
        { type: "mc", q: "Ich bin ___.", options: ["dafür","dazu","davon"], answer: "dafür" },
        { type: "mc", q: "Ich bin ___.", options: ["dagegen","dazu","dafür"], answer: "dagegen" },
        { type: "mc", q: "Ich ___ zu.", options: ["stimme","nehme","gebe"], answer: "stimme" },
        { type: "mc", q: "Ich sehe das anders, ___ ...", options: ["weil","aber","denn"], answer: "aber" },
        { type: "mc", q: "Meiner Ansicht ___ ist das wichtig.", options: ["nach","zu","mit"], answer: "nach" },
        { type: "mc", q: "Ich bin der ___, dass ...", options: ["Meinung","Meinung nach","Meinen"], answer: "Meinung" },
        { type: "mc", q: "Ein ___ für ist...", options: ["Argument","Grammatik","Artikel"], answer: "Argument" },
        { type: "mc", q: "Ein ___ dagegen ist...", options: ["Argument","Beispiel","Komma"], answer: "Argument" },
        { type: "mc", q: "Ich kann dir ___.", options: ["zustimmen","zustimme","zustimmt"], answer: "zustimmen" },
        { type: "mc", q: "Ich teile diese ___.", options: ["Meinung","Meiner","Meinem"], answer: "Meinung" },
        { type: "mc", q: "Ich bin nicht sicher, aber ___.", options: ["vielleicht","trotz","denn"], answer: "vielleicht" },
        { type: "mc", q: "Zusammenfassend kann man ___.", options: ["sagen","sagt","sagte"], answer: "sagen" },
        { type: "mc", q: "Ich sehe das ___.", options: ["anders","anderser","anderses"], answer: "anders" }
      ]
    },
    {
      id: "B2-L6",
      title: "Präpositionen mit Genitiv",
      de: [
        "Einige Präpositionen brauchen Genitiv.",
        "Beispiele: wegen, trotz, während, statt."
      ],
      ta: [
        "சில Präpositionen Genitiv எடுத்துக்கொள்கின்றன.",
        "உதாரணம்: wegen, trotz, während, statt."
      ],
      explain_de: [
        "Genitiv zeigt oft Besitz oder Zugehörigkeit.",
        "Beispiel: wegen des Regens."
      ],
      explain_ta: [
        "Genitiv உரிமை/சம்பந்தத்தை காட்டும்.",
        "உதாரணம்: wegen des Regens."
      ],
      quiz: [
        { type: "mc", q: "___ des Regens bleiben wir zu Hause.", options: ["Wegen","Trotz","Während"], answer: "Wegen" },
        { type: "mc", q: "Wegen ___ Lärms konnte ich nicht schlafen.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "___ der Kälte gehen wir spazieren.", options: ["Trotz","Wegen","Während"], answer: "Trotz" },
        { type: "mc", q: "Während ___ Urlaubs habe ich gelernt.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Statt ___ Kaffees trinkt sie Tee.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "___ des Unwetters fällt der Zug aus.", options: ["Wegen","Trotz","Während"], answer: "Wegen" },
        { type: "mc", q: "Trotz ___ Regens gehen wir.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Während ___ Films war es ruhig.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Statt ___ Autos fährt er Fahrrad.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Außerhalb ___ Stadt ist es billiger.", options: ["der","die","den"], answer: "der" },
        { type: "mc", q: "Innerhalb ___ Tages ist das möglich.", options: ["eines","einem","einen"], answer: "eines" },
        { type: "mc", q: "Wegen ___ Wetters bleiben wir drinnen.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "___ der Arbeit höre ich Musik.", options: ["Während","Wegen","Trotz"], answer: "Während" },
        { type: "mc", q: "Statt ___ Antwortes kam eine Frage.", options: ["einer","eine","einem"], answer: "einer" },
        { type: "mc", q: "Außerhalb ___ Öffnungszeiten ist geschlossen.", options: ["der","die","den"], answer: "der" }
      ]
    },
    {
      id: "B2-L7",
      title: "Genitiv II (weitere Präpositionen)",
      de: [
        "Weitere Genitiv-Präpositionen: innerhalb, außerhalb, während, trotz, statt.",
        "Genitiv zeigt Zugehörigkeit oder Ursache."
      ],
      ta: [
        "மேலும் Genitiv-Präpositionen: innerhalb, außerhalb, während, trotz, statt.",
        "Genitiv என்பது தொடர்பு அல்லது காரணத்தை காட்டும்."
      ],
      explain_de: [
        "Achte auf den Genitiv-Artikel: des/der.",
        "Beispiel: innerhalb des Monats."
      ],
      explain_ta: [
        "Genitiv-Artikel des/der என்பதை கவனிக்கவும்.",
        "உதாரணம்: innerhalb des Monats."
      ],
      quiz: [
        { type: "mc", q: "Innerhalb ___ Monats ist das möglich.", options: ["eines","einem","einen"], answer: "eines" },
        { type: "mc", q: "Außerhalb ___ Hauses ist es ruhig.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Während ___ Jahres habe ich viel gelernt.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Trotz ___ Sturms gehen wir raus.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Statt ___ Meetings gab es eine E-Mail.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Wegen ___ Unfalls ist die Straße gesperrt.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Innerhalb ___ Woche ist alles fertig.", options: ["einer","eine","einem"], answer: "einer" },
        { type: "mc", q: "Außerhalb ___ Stadt gibt es Felder.", options: ["der","die","den"], answer: "der" },
        { type: "mc", q: "Während ___ Unterrichts ist Ruhe.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Trotz ___ Müdigkeit arbeitet er weiter.", options: ["der","die","den"], answer: "der" },
        { type: "mc", q: "Statt ___ Kaffees trinkt sie Tee.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Wegen ___ Lichts sehe ich wenig.", options: ["des","dem","den"], answer: "des" },
        { type: "mc", q: "Innerhalb ___ Firma gibt es Regeln.", options: ["der","die","den"], answer: "der" },
        { type: "mc", q: "Außerhalb ___ Öffnungszeiten ist geschlossen.", options: ["der","die","den"], answer: "der" },
        { type: "mc", q: "Während ___ Pause telefoniere ich.", options: ["der","die","den"], answer: "der" }
      ]
    },
    {
      id: "B2-L8",
      title: "Argumentation (Begründen & Struktur)",
      de: [
        "Argumentation braucht klare Struktur: Meinung + Gründe + Beispiel.",
        "Nutze Verbindungswörter: erstens, außerdem, jedoch, deshalb."
      ],
      ta: [
        "Argumentation‑ல் தெளிவான அமைப்பு வேண்டும்: கருத்து + காரணங்கள் + உதாரணம்.",
        "இணைப்புச் சொற்கள் பயன்படுத்தவும்: erstens, außerdem, jedoch, deshalb."
      ],
      explain_de: [
        "Struktur hilft beim Schreiben und Sprechen.",
        "Beispiel: Erstens..., außerdem..., deshalb..."
      ],
      explain_ta: [
        "அமைப்பு எழுதவும் பேசவும் உதவும்.",
        "உதாரணம்: Erstens..., außerdem..., deshalb..."
      ],
      quiz: [
        { type: "mc", q: "___ ist das Problem groß.", options: ["Erstens","Während","Trotz"], answer: "Erstens" },
        { type: "mc", q: "___ möchte ich mehr Zeit.", options: ["Außerdem","Wegen","Wenn"], answer: "Außerdem" },
        { type: "mc", q: "Ich bin müde, ___ gehe ich schlafen.", options: ["deshalb","obwohl","während"], answer: "deshalb" },
        { type: "mc", q: "Ich stimme zu, ___ es sinnvoll ist.", options: ["weil","obwohl","deshalb"], answer: "weil" },
        { type: "mc", q: "Das ist gut, ___ es spart Zeit.", options: ["weil","obwohl","trotz"], answer: "weil" },
        { type: "mc", q: "___ sollten wir anfangen.", options: ["Deshalb","Während","Trotz"], answer: "Deshalb" },
        { type: "mc", q: "Es gibt ___ ein Problem.", options: ["jedoch","deshalb","weil"], answer: "jedoch" },
        { type: "mc", q: "Ein ___ ist wichtig.", options: ["Argument","Artikel","Akkusativ"], answer: "Argument" },
        { type: "mc", q: "Ein Beispiel ___ die Idee.", options: ["stützt","sagt","kennt"], answer: "stützt" },
        { type: "mc", q: "Zusammenfassend kann man ___ .", options: ["sagen","sagt","sagte"], answer: "sagen" },
        { type: "mc", q: "Meiner Meinung ___ ist das gut.", options: ["nach","zu","mit"], answer: "nach" },
        { type: "mc", q: "Ich bin ___, weil es teuer ist.", options: ["dagegen","dafür","dazu"], answer: "dagegen" },
        { type: "mc", q: "Ich bin ___, weil es hilft.", options: ["dafür","dagegen","dazu"], answer: "dafür" },
        { type: "mc", q: "Zum ___: Das ist sinnvoll.", options: ["Schluss","Trotz","Wegen"], answer: "Schluss" },
        { type: "mc", q: "Ein weiteres ___ ist Sicherheit.", options: ["Argument","Komma","Verb"], answer: "Argument" }
      ]
    }
  ]
};
