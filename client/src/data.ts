import grizzly1 from "./images/grizzly1.jpg";
import grizzly3 from "./images/grizzly3.jpg";
import grizzly2 from "./images/grizzly2.jpg";
import grizzly4 from "./images/grizzly4.jpg";
import grizzly5 from "./images/grizzly5.jpg";

import kodiak1 from "./images/kodiak1.jpg";
import kodiak2 from "./images/kodiak2.jpg";
import kodiak3 from "./images/kodiak3.jpg";
import kodiak4 from "./images/kodiak4.jpg";

import yfm1 from "./images/yfm1.jpg";
import yfm2 from "./images/yfm2.jpg";
import yfm3 from "./images/yfm3.jpg";
import yfm4 from "./images/yfm4.jpg";

import yzf1 from "./images/yzf1.jpg";
import yzf2 from "./images/yzf2.jpg";
import yzf3 from "./images/yzf3.jpg";
import yzf4 from "./images/yzf4.jpg";

import r1m1 from "./images/r1m1.jpg";
import r1m2 from "./images/r1m2.jpg";
import r1m3 from "./images/r1m3.jpg";
import r1m4 from "./images/r1m4.jpg";

import r11 from "./images/r11.jpg";
import r12 from "./images/r12.jpg";
import r13 from "./images/r13.jpg";
import r14 from "./images/r14.jpg";

import { Atv, Motorcycle } from "./utils/types";

export const atv: Atv[] = [
  {
    id: 1,
    name: "grizzly 700 25th anniversary",
    price: 79000,
    priceInfo:
      "Rekomendowana cena detaliczna. Model 2024. Model widoczny na zdjęciach może zawierać akcesoria niewchodzące w skład standardowego wyposażenia. Cena dotyczy pojazdu bez homologacji. Cena pojazdu z homologacją 79000",
    description:
      "Fani off-roadu mają powód do świętowania! Legendarna Yamaha Grizzly właśnie obchodzi jubileusz 25-lecia obecności na rynku. Ćwierć wieku - to brzmi dumnie! Ekskluzywna grafika limitowanej edycji i specjalny pakiet wyprawowych akcesoriów oferowanych w standardzie czynią z Grizzly 700 25th Anniversary wyjątkową maszynę. Wyróżnij się i bez obaw eksploruj nawet najtrudniejszy teren.",
    colorNames: [{ name: "Low Gloss Black", color: "#28282B" }],
    images: [grizzly1, grizzly2, grizzly3, grizzly4, grizzly5],
    daneTechniczne: {
      silnik: {
        typSilnika: {title: "Typ silnika", desc: "Jednocylindrowy, Chłodzony cieczą, 4-suwowy, SOHC, 4-zaworowy"},
        pojemność: {title: "Pojemność", desc: "686 cm³"},
        średnicaXskokTłoka: {title: "Średnica x skoku tłoka", desc: "102,0 mm x 84,0 mm"},
        stopieńSprężania: {title: "Stopień sprężania", desc: "10.0 : 1"},
        układSmarowania: {title: "Układ smarowania", desc: "Mokra miska olejowa"},
        układPaliwowy: {title: "Układ paliwowy", desc: "Układ elektronicznego wtrysku paliwa"},
        układZapłonu: {title: "Układ zapłonu", desc: "TCI"},
        układRozrusznika: {title: "Układ Rozrusznika", desc: "Elektryczny"},
        skrzyniaBiegów:
          {title: "Skrzynia biegów", desc: "L/H/N/R/P, Skrzynia biegów Ultramatic® z paskiem klinowym i funkcją hamowania silnikiem kół przednich i tylnych"},
        napęd: {title: "Napęd", desc: "On-Command® 2WD/4WD/z blokowanym dyferencjałem"},
        napędKońcowy: {title: "Napęd końcowy", desc: "Wał"},
      },
      podwozie: {
        układPrzedniegoZawieszenia:
          {title: "Układ przedniego zawieszenia", desc: "Niezależne, podwójne dwuramienne, 193 mm skok koła, 5 pozycji ustawień"},
        układTylnegoZawieszenia:
          {title: "Układ tylnego zawieszenia", desc: "Niezależne, podwójne dwuramienne, 232 mm skok koła, 5 pozycji ustawień"},
        hamulecPrzedni: {title: "Hamulec przedni", desc: "Podwójny hydrauliczny tarczowy, chłodzony powietrzem"},
        hamulecTylny:
          {title: "Hamulec tylny", desc: "left hand/right foot operation, Hydrauliczny tarczowy, chłodzony powietrzem"},
        ogumieniePrzednie:
          {title: "Ogumienie przednie", desc: 'Opony Maxxis 27" Zilla, 27x 10-14, aluminiowe felgi'},
        ogumienieTylne: {title: "Ogumienie tylne", desc: 'Opony Maxxis 27" Zilla, 27x 10-14, aluminiowe felgi'},
      },
      wymiary: {
        długośćCałkowita: {title: "Długość całkowita", desc: "2070 mm"},
        szerokośćCałkowita: {title: "Szerokość całkowita", desc: "1230 mm"},
        wysokośćCałkowita: {title: "Wysokość całkowita", desc: "1253 mm"},
        wysokośćSiodełka: {title: "Wysokość siodełka", desc: "860 mm"},
        rozstawOsi: {title: "Rozstaw osi", desc: "1253 mm"},
        minimalnyPrześwit: {title: "Minimalny prześwit", desc: "300 mm"},
        minPromieńSkrętu: {title: "Min. promień skrętu", desc: "3,5 m"},
        pojemnośćZbiornikaPaliwa: {title: "Pojemność zbiornika paliwa", desc: "18 l"},
        pojemnośćZbiornikaOleju: {title: "Pojemnośc zbiornika oleju", desc: "2.6 litra"},
      },
      obciążenieMaksymalne: {
        bagażnikPrzedni: {title: "Bagażnik przedni", desc: "50"},
        bagażnikTylny: {title: "Bagażnik tylny", desc: "90"},
      },
      informacjeDodatkowe: {
        układKierowniczy: {title: "Układ kierowniczy", desc: "Typ Ackermann z elektrycznym układem sterowania"},
        frontMountedWinch: {title: "Front Mounted Winch", desc: "WARN VRX 25"},
        trailerHitch: {title: "Trailer hitch", desc: '2"Receiver Trailer style hitch'},
        seleFeatures:
          {title: "Sele features", desc: 'Painted Body Plastics / Aluminium casted wheels / 27" tires & 14" Alu wheels / Handle bar worklight / Digital Meter'},
      },
    } as const,

    
    // silnikNames: [
      
      
      
      
    //   "Układ smarowania",
    //   "Układ paliwowy",
    //   "Układ zapłonu",
    //   "Układ Rozrusznika",
    //   "Skrzynia biegów",
    //   "Napęd",
    //   "Napęd końcowy",
    // ],
    // podwozieNames: [
    //   "Układ przedniego zawieszenia",
    //   "Układ tylnego zawieszenia",
    //   "Hamulec przedni",
    //   "Hamulec tylny",
    //   "Ogumienie przednie",
    //   "Ogumienie tylne",
    // ],
    // wymiaryNames: [
    //   "Długość całkowita",
    //   "Szerokość całkowita",
    //   "Wysokość całkowita",
    //   "Wysokość siodełka",
    //   "Rozstaw osi",
    //   "Minimalny prześwit",
    //   "Min. promień skrętu",
    //   "Pojemność zbiornika paliwa",
    //   "Pojemnośc zbiornika oleju",
    // ],
    // obciążeniMaksNames: ["Bagażnik przedni", "Bagażnik tylny"],
    // infoNames: [
    //   "Układ kierowniczy",
    //   "Front Mounted Winch",
    //   "Trailer hitch",
    //   "Sele features",
    // ],
  },
  {
    id: 2,
    name: "kodiak 700 eps se",
    price: 65000,
    priceInfo:
      "Rekomendowana cena detaliczna. Model 2024. Model widoczny na zdjęciach może zawierać akcesoria niewchodzące w skład standardowego wyposażenia. Cena dotyczy pojazdu bez homologacji. Cena pojazdu z homologacją 72000",
    description:
      "Kodiak 700 EPS SE został zaprojektowany z myślą o rolnikach, leśnikach i użytkownikach przemysłowych, którzy potrzebują wytrzymałego pojazdu użytkowego do ciężkiej pracy w ekstremalnych warunkach. Jest łatwy w obsłudze i jednocześnie zapewnia najwyższe osiągi.",
    colorNames: [
      { name: "Desert Tan", color: "#E5C99F" },
      { name: "Midnight Blue", color: "#191970" },
    ],
    images: [kodiak1, kodiak2, kodiak3, kodiak4],
    daneTechniczne: {
      silnik: {
        typSilnika:
          "Jednocylindrowy, Chłodzony cieczą, 4-suwowy, SOHC, 4-zaworowy",
        pojemność: "686 cm3",
        średnicaXskokTłoka: "102,0 mm x 84,0 mm",
        stopieńSprężania: "10.0 : 1",
        układSmarowania: "Mokra miska olejowa",
        układPaliwowy: "Układ elektronicznego wtrysku paliwa",
        układZapłonu: "TCI",
        układRozrusznika: "Elektryczny",
        skrzyniaBiegów:
          "L/H/N/R/P, Skrzynia biegów Ultramatic® z paskiem klinowym i funkcją hamowania silnikiem kół przednich i tylnych",
        napęd: "On-Command® 2WD, 4WD, 4WD z blokadą dyferencjału",
        napędKońcowy: "Wał",
      },
      podwozie: {
        układPrzedniegoZawieszenia:
          "Niezależne, podwójne dwuramienne, Skok 180 mm, 5 pozycji ustawień",
        układTylnegoZawieszenia:
          "Niezależne, podwójne dwuramienne, Skok 230 mm, 5 pozycji ustawień",
        hamulecPrzedni: "Podwójny hydrauliczny tarczowy, chłodzony powietrzem",
        hamulecTylny: "Multi-disc wet rear brake in rear gearcase",
        ogumieniePrzednie:
          "Aluminiowe felgi z oponami Maxxis MU19 AT25x8-12 (klasa E)",
        ogumienieTylne:
          "Aluminiowe felgi z oponami Maxxis MU19, AT25x10-12 (klasa E)",
      },
      wymiary: {
        długośćCałkowita: 2070,
        szerokośćCałkowita: 1180,
        wysokośćCałkowita: 1240,
        wysokośćSiodełka: 860,
        rozstawOsi: 1250,
        minimalnyPrześwit: 275,
        minPromieńSkrętu: "3,2 m",
        pojemnośćZbiornikaPaliwa: 18,
        pojemnośćZbiornikaOleju: "2.6 litra",
      },
      obciążenieMaksymalne: {
        bagażnikPrzedni: 50,
        bagażnikTylny: 90,
      },
      informacjeDodatkowe: {
        układKierowniczy: "Typ Ackermann z elektrycznym układem sterowania",
        frontMountedWinch: "WARN VRX 25",
        trailerHitch: '2"Receiver Trailer style hitch',
        seleFeatures:
          'Painted Body Plastics / Aluminium casted wheels / 27" tires & 14" Alu wheels / Handle bar worklight / Digital Meter',
        towingCapacity: 600,
      },
    },
    silnikNames: [
      "Typ silnika",
      "Pojemność",
      "Średnica x skoku tłoka",
      "Stopień sprężania",
      "Układ smarowania",
      "Układ paliwowy",
      "Układ zapłonu",
      "Układ Rozrusznika",
      "Skrzynia biegów",
      "Napęd",
      "Napęd końcowy",
    ],
    podwozieNames: [
      "Układ przedniego zawieszenia",
      "Układ tylnego zawieszenia",
      "Hamulec przedni",
      "Hamulec tylny",
      "Ogumienie przednie",
      "Ogumienie tylne",
    ],
    wymiaryNames: [
      "Długość całkowita",
      "Szerokość całkowita",
      "Wysokość całkowita",
      "Wysokość siodełka",
      "Rozstaw osi",
      "Minimalny prześwit",
      "Min. promień skrętu",
      "Pojemność zbiornika paliwa",
      "Pojemnośc zbiornika oleju",
    ],
    obciążeniMaksNames: ["Bagażnik przedni", "Bagażnik tylny"],
    infoNames: [
      "Układ kierowniczy",
      "Front Mounted Winch",
      "Trailer hitch",
      "Sele features",
      "Towing capacity",
    ],
  },
  {
    id: 3,
    name: "yfm700r se",
    price: 32000,
    priceInfo:
      "Rekomendowana cena detaliczna. Model 2024. Model widoczny na zdjęciach może zawierać akcesoria niewchodzące w skład standardowego wyposażenia. Cena dotyczy pojazdu bez homologacji.",
    description:
      "Jedna maszyna do sportowej jazdy i wyścigów. Niezwykła moc oraz precyzyjne właściwości jezdne modelu YFM700R SE pozwalają na dynamiczną, pełną adrenaliny jazdę w każdym terenie. A gdy już się z nim nieco oswoisz, ten quad z rajdowymi genami pokaże Ci, co naprawdę oznacza bycie #DRIVENBYVICTORY.",
    colorNames: [
      { name: "Racing Blue", color: "#00008B" },
      { name: "Yamaha Black", color: "#28282B" },
    ],

    images: [yfm1, yfm2, yfm3, yfm4],
    daneTechniczne: {
      silnik: {
        typSilnika: "Jednocylindrowy, Chłodzony cieczą, 4-suwowy, 4-zaworowy",
        pojemność: "686 cm3",
        średnicaXskokTłoka: "102,0 mm x 84,0 mm",
        stopieńSprężania: "9.2 : 1",
        układSmarowania: "Sucha miska olejowa",
        układPaliwowy: "Układ wtrysku paliwa, 44 mm",
        układZapłonu: "TCI",
        układRozrusznika: "Elektryczny",
        skrzyniaBiegów:
          "5 biegów do przodu i wsteczny, Sprzęgło mokre wielopłytowe",
        napęd: "2WD",
        napędKońcowy:
          "Łańcuch zamknięty, z pierścieniem O-ring, Regulacja mimośrodu",
      },
      podwozie: {
        układPrzedniegoZawieszenia:
          "KYB Piggy Back with Hi and Low speed compression & single rebound adjustment, Niezależne, podwójne dwuramienne, Gwintowany amortyzator z regulacją, Skok 230 mm",
        układTylnegoZawieszenia:
          "KYB Piggy Back with Hi and Low speed compression & single rebound adjustment, Gwintowany amortyzator z regulacją, Wahacz odlany z aluminium, Skok 256 mm",
        hamulecPrzedni:
          "Podwójny, chłodzony powietrzem hamulec tarczowy z hydraulicznymi zaciskami z tłokiem podwójnym",
        hamulecTylny:
          "Wentylowane tarcze o obrysie falistym z hydraulicznymi zaciskami",
        ogumieniePrzednie: "AT21x7R10",
        ogumienieTylne: "AT20x10R9",
      },
      wymiary: {
        długośćCałkowita: 1845,
        szerokośćCałkowita: 1170,
        wysokośćCałkowita: 1130,
        wysokośćSiodełka: 815,
        rozstawOsi: 1280,
        minimalnyPrześwit: 113,
        masaZobciążeniem: 192,
        pojemnośćZbiornikaPaliwa: 18,
      },
      informacjeDodatkowe: {
        seleFeatures:
          "Painted Body / Piggy back, 3 way adjustable shock specs / wheel trim",
      },
    },
    silnikNames: [
      "Typ silnika",
      "Pojemność",
      "Średnica x skoku tłoka",
      "Stopień sprężania",
      "Układ smarowania",
      "Układ paliwowy",
      "Układ zapłonu",
      "Układ Rozrusznika",
      "Skrzynia biegów",
      "Napęd",
      "Napęd końcowy",
    ],
    podwozieNames: [
      "Układ przedniego zawieszenia",
      "Układ tylnego zawieszenia",
      "Hamulec przedni",
      "Hamulec tylny",
      "Ogumienie przednie",
      "Ogumienie tylne",
    ],
    wymiaryNames: [
      "Długość całkowita",
      "Szerokość całkowita",
      "Wysokość całkowita",
      "Wysokość siodełka",
      "Rozstaw osi",
      "Minimalny prześwit",
      "Masa z obciążeniem",
      "Pojemność zbiornika paliwa",
    ],
    infoNames: ["Sele features"],
  },
  {
    id: 4,
    name: "yfz450r se",
    price: 60000,
    priceInfo:
      "Rekomendowana cena detaliczna. Model 2024. Model widoczny na zdjęciach może zawierać akcesoria niewchodzące w skład standardowego wyposażenia. Cena dotyczy pojazdu bez homologacji.",
    description:
      "W nowej YFZ450R Special Edition (SE) chodzi o tempo i zwyciężanie, bez żadnych kompromisów. Podwozie o doskonałych właściwościach jezdnych i niezwykle responsywny silnik o pojemności 450 cm3 plasują go w czołówce współczesnych maszyn wyścigowych w tej klasie, tak jak oczekują kierowcy #DRIVENBYVICTORY.",
    colorNames: [{ name: "Yamaha Black", color: "#28282B" }],
    images: [yzf1, yzf2, yzf3, yzf4],
    daneTechniczne: {
      silnik: {
        typSilnika:
          "Jednocylindrowy, Chłodzony cieczą, 4-suwowy, DOHC, 5-zaworowy",
        pojemność: "449 cm3",
        średnicaXskokTłoka: "95.0 mm x 63.4 mm",
        stopieńSprężania: "11.8 : 1",
        układSmarowania: "Sucha miska olejowa",
        układPaliwowy: "Układ wtrysku paliwa, 42 mm EHS z funkcją ISC",
        układZapłonu: "TCI",
        układRozrusznika: "Elektryczny",
        skrzyniaBiegów: "5-biegowa, ręczne sprzęgło poślizgowe",
        napęd: "2WD",
        napędKońcowy:
          "Łańcuch zamknięty, z pierścieniem O-ring, Regulacja mimośrodu",
      },
      podwozie: {
        układPrzedniegoZawieszenia:
          "Niezależne, podwójne dwuramienne, Regulowany amortyzator 3-pozycyjny typu Piggy Back, Skok 250 mm, sprężyny coilover o podwójnej wartości naprężenia z gwintowanymi regulatorami napięcia wstępnego",
        układTylnegoZawieszenia:
          "Wahacz odlany z aluminium, Regulowany amortyzator 3-pozycyjny typu Piggy Back, sprężyny coilover z gwintowanymi regulatorami napięcia wstępnego, Skok 280 mm",
        hamulecPrzedni:
          "Podwójny, chłodzony powietrzem hamulec tarczowy z hydraulicznymi zaciskami z tłokiem podwójnym",
        hamulecTylny:
          "Chłodzony powietrzem hamulec tarczowy z hydraulicznymi zaciskami z tłokiem podwójnym",
        ogumieniePrzednie: "AT21x7R10",
        ogumienieTylne: "AT20x10R9",
      },
      wymiary: {
        długośćCałkowita: 1795,
        szerokośćCałkowita: 1240,
        wysokośćCałkowita: 1065,
        wysokośćSiodełka: 810,
        rozstawOsi: 1270,
        minimalnyPrześwit: 115,
        masaZobciążeniem: 184,
        pojemnośćZbiornikaPaliwa: "10 litrów",
        pojemnośćZbiornikaOleju: "1.6 litra",
      },
      informacjeDodatkowe: {
        seleFeatures: "Painted Body / Quick release body panel / wheel trim",
      },
    },
    silnikNames: [
      "Typ silnika",
      "Pojemność",
      "Średnica x skoku tłoka",
      "Stopień sprężania",
      "Układ smarowania",
      "Układ paliwowy",
      "Układ zapłonu",
      "Układ Rozrusznika",
      "Skrzynia biegów",
      "Napęd",
      "Napęd końcowy",
    ],
    podwozieNames: [
      "Układ przedniego zawieszenia",
      "Układ tylnego zawieszenia",
      "Hamulec przedni",
      "Hamulec tylny",
      "Ogumienie przednie",
      "Ogumienie tylne",
    ],
    wymiaryNames: [
      "Długość całkowita",
      "Szerokość całkowita",
      "Wysokość całkowita",
      "Wysokość siodełka",
      "Rozstaw osi",
      "Minimalny prześwit",
      "Masa z obciążeniem",
      "Pojemność zbiornika paliwa",
      "Pojemnośc zbiornika oleju",
    ],
    infoNames: ["Sele features"],
  },
];

export const motocycles: Motorcycle[] = [
  {
    id: 1,
    name: "R1M",
    price: 126000,
    priceInfo:
      "Rekomendowana cena detaliczna. W sprawie wyposażenia prosimy o kontakt z dealerem.",
    license: "A",
    description:
      "To najbardziej zaawansowany motocykl w produkcji seryjnej, dla motocyklistów, którzy są na samym szczycie stawki. Wyposażony w legendarny silnik crossplane o pojemności 998 cm3 i lekką aluminiową ramę Deltabox, R1M jest najlepszym wyborem na tor wyścigowy. A dzięki elektronice nowej generacji, ten bezkompromisowy motocykl pozwoli Ci odkryć swój prawdziwy potencjał na torze wyścigowym",
    description2Title: "historia r. twoja przyszłość.",
    description2:
      "Yamaha stworzyła wyścigowy motocykl R1M przy użyciu jednych z najbardziej wyrafinowanych technologii opracowanych na podstawie zwycięskiego motocykla M1 MotoGP. Najnowocześniejsze, wyczynowe zawieszenie Öhlins sterowane elektronicznie (ERS) z pneumatycznym widelcem przeciwkawitacyjnym NPX wydobywa najlepsze osiągi na każdym torze, a nadwozie z karbonu o niskiej powierzchni czołowej pomaga skrócić czasy pokonywania okrążeń. Jego wyjątkowość i przełomowy charakter wynikają jednak z zaawansowanych technologicznie funkcji, w tym sterowania hamulcami, zarządzania hamulcem silnikowymi i kontroli uruchamiania – a także z jednostki sterującej komunikacją do rejestrowania danych i bezprzewodowego dostrajania silnika. Wyposażony w czarne felgi, karbonowe panele nadwozia, czarno-srebrny zbiornik i najnowsze akcenty graficzne, R1M to najlepszy model z serii R, zapewniający najbardziej kompletny pakiet wyścigowy.",
    klauzula:
      "Always wear a helmet, eye protection and protective clothing. Yamaha encourage you to ride safely and respect fellow riders and the environment. Images shown depict professional riders performing under controlled conditions. Specifications and appearance of Yamaha products as shown here are subject to change without notice and may vary according to requirements and conditions. For further details, please consult your Yamaha dealer.",
    colorNames: [{ name: "Icon Performance", color: "#000000" }],
    images: [r1m1, r1m2, r1m3, r1m4],
    maxPower: 147,
    version35kW: false,
    daneTechniczne: {
      silnik: {
        typSilnika:
          "4-suwowy, Chłodzony cieczą, 4-cylindrowy, DOHC, 4-zaworowy",
        pojemność: "998 cm3",
        średnicaXskokTłoka: "79.0 x 50.9 mm",
        stopieńSprężania: "13.0 : 1",
        mocMaksymalna: "200,0 KM (147,1 kW) przy 13 500 obr/min",
        maksMomentObrotowy: "113,3 Nm (11,6 kg-m) przy 11 500 obr./min",
        układSmarowania: "Mokra miska olejowa",
        typSprzęgła: "Mokre, wielotarczowe",
        układZapłonu: "TCI",
        układRozrusznika: "Elektryczny",
        skrzyniaBiegów: "Z kołami w stałym zazębieniu, 6-biegowa",
        napędKońcowy: "Łańcuch",
        spalanie: "6,8 l/100 km",
        emisjaCO2: "159 g/km",
        układZasilania: "Układ elektronicznego wtrysku paliwa",
      },
      podwozie: {
        rama: "Aluminiowa, Deltabox, Diamond",
        kątwyprzGłówkiRamy: "24",
        wyprzedzenie: "102 mm",
        układPrzedniegoZawieszenia: "Widelec teleskopowy",
        układTylnegoZawieszenia: "Wahaczowe, Wahacz",
        skokPrzedniegoZawieszenia: "120 mm",
        skokTylnegoZawieszenia: "120 mm",
        hamulecPrzedni: "Hydrauliczny, dwutarczowe, Ø 320 mm",
        hamulecTylny: "Hydrauliczny, jednotarczowy, Ø 220 mm",
        oponaPrzednia: "120/70 ZR17M/C (58W), bezdętkowa",
        oponaTylna: "200/55 ZR17M/C (78W), bezdętkowa",
      },
      wymiary: {
        dłCałkowita: "2 055 mm",
        szerCałkowita: "690 mm",
        wysCałkowita: "1 165 mm",
        wysSiodełka: "860 mm",
        rozstawKół: "1 405 mm",
        minPrześwit: "130 mm",
        masazObciążeniem: "202 kg",
        pojZbiornikaPaliwa: "17.0 l",
        pojZbiornikaOleju: "2.9 l",
      },
    },
    silnikNames: [
      "Typ silnika",
      "Pojemność",
      "Średnica x skok tłoka",
      "Stopień sprężania",
      "Moc maksymalna",
      "Maksymalny moment obrotowy",
      "Układ smarowania",
      "Typ sprzęgła",
      "Układ zapłonu",
      "Układ rozrusznika",
      "Skrzynia biegów",
      "Napęd końcowy",
      "Spalanie",
      "Emisja CO2",
      "Układ zasilania",
    ],
    podwozieNames: [
      "Rama",
      "Kąt wyprzedzenia główki ramy",
      "Wyprzedzenie",
      "Układ przedniego zawieszenia",
      "Układ tylnego zawieszenia",
      "Skok przedniego zawieszenia",
      "Skok tylnego zawieszenia",
      "Hamulec przedni",
      "Hamulec tylny",
      "Opona przednia",
      "Opona tylna",
    ],
    wymiaryNames: [
      "Długość całkowita",
      "Szerokość całkowita",
      "Wysokość całkowita",
      "Wysokość siodełka",
      "Rozstaw kół",
      "Minimalny prześwit",
      "Masa z obciążeniem",
      "Pojemność zbiornika paliwa",
      "Pojemność zbiornika oleju",
    ],
  },
  {
    id: 2,
    name: "R1",
    price: 93900,
    priceInfo:
      "Rekomendowana cena detaliczna. W sprawie wyposażenia prosimy o kontakt z dealerem.",
    license: "A",
    description:
      "25 lat temu pierwszy model R1 zmienił świat sportowych motocykli i od tego czasu nieustannie przesuwał granice zaawansowania technologii. Ten wyjątkowy motocykl wyścigowy, zbudowany bez żadnych kompromisów, jest najbardziej ekscytującym sportowym motocyklem naszych czasów.",
    description2Title: "historia r. twoja przyszłość.",
    description2:
      "Zaawansowana technologia w R1 została w każdym calu opracowana z wykorzystaniem wiedzy zdobytej dzięki ogromnym zaangażowaniu Yamahy w wyścigi. Niezwykły, 4-cylindrowy silnik EURO 5 o pojemności 998 cm3 jest bezpośrednim potomkiem jednostki M1 – a jego aerodynamiczna owiewka wywodzi się wprost z toru wyścigowego. Jednak to głównie zaawansowana elektronika przyczynia się do wyjątkowości R1. Całe wyposażenie motocykla, od przepustnicy ride-by-wire po system kontroli startu (LCS), zarządzanie hamowania silnikiem (EBM), a także sterowanie hamulcami (BC) i wiele więcej, sprawia, że jest to najlepszy sportowy model Yamahy dominujący tak na ulicy, jak i na torze. Dostępny w najnowszych malowaniach Icon Blue i Yamaha Black.",
    klauzula:
      "Always wear a helmet, eye protection and protective clothing. Yamaha encourage you to ride safely and respect fellow riders and the environment. Images shown depict professional riders performing under controlled conditions. Specifications and appearance of Yamaha products as shown here are subject to change without notice and may vary according to requirements and conditions. For further details, please consult your Yamaha dealer.",
    colorNames: [
      { name: "Icon Blue", color: "#0000FF" },
      { name: "Midnight Black", color: "#000000" },
    ],
    images: [r11, r12, r13, r14],
    maxPower: 50,
    version35kW: false,
    daneTechniczne: {
      silnik: {
        typSilnika:
          "4-suwowy, Chłodzony cieczą, 4-cylindrowy, DOHC, 4-zaworowy",
        pojemność: "998 cm3",
        średnicaXskokTłoka: "79.0 x 50.9 mm",
        stopieńSprężania: "13.0 : 1",
        mocMaksymalna: "200,0 KM (147,1 kW) przy 13 500 obr/min",
        maksMomentObrotowy: "113,3 Nm (11,6 kg-m) przy 11 500 obr./min",
        układSmarowania: "Mokra miska olejowa",
        typSprzęgła: "Mokre, wielotarczowe",
        układZapłonu: "TCI",
        układRozrusznika: "Elektryczny",
        skrzyniaBiegów: "Z kołami w stałym zazębieniu, 6-biegowa",
        napędKońcowy: "Łańcuch",
        spalanie: "6,8 l/100 km",
        emisjaCO2: "159 g/km",
        układZasilania: "Układ elektronicznego wtrysku paliwa",
      },
      podwozie: {
        rama: "Aluminiowa, Deltabox, Diamond",
        kątwyprzGłówkiRamy: "24",
        wyprzedzenie: "102 mm",
        układPrzedniegoZawieszenia: "Widelec teleskopowy",
        układTylnegoZawieszenia: "Wahaczowe, Wahacz",
        skokPrzedniegoZawieszenia: "120 mm",
        skokTylnegoZawieszenia: "120 mm",
        hamulecPrzedni: "Hydrauliczny, dwutarczowe, Ø 320 mm",
        hamulecTylny: "Hydrauliczny, jednotarczowy, Ø 220 mm",
        oponaPrzednia: "120/70 ZR17M/C (58W), bezdętkowa",
        oponaTylna: "190/55 ZR17M/C (75W), bezdętkowa",
      },
      wymiary: {
        dłCałkowita: "2 055 mm",
        szerCałkowita: "690 mm",
        wysCałkowita: "1 165 mm",
        wysSiodełka: "855 mm",
        rozstawKół: "1 405 mm",
        minPrześwit: "130 mm",
        masazObciążeniem: "201 kg",
        pojZbiornikaPaliwa: "17.0 l",
        pojZbiornikaOleju: "4.9 l",
      },
    },
    silnikNames: [
      "Typ silnika",
      "Pojemność",
      "Średnica x skok tłoka",
      "Stopień sprężania",
      "Moc maksymalna",
      "Maksymalny moment obrotowy",
      "Układ smarowania",
      "Typ sprzęgła",
      "Układ zapłonu",
      "Układ rozrusznika",
      "Skrzynia biegów",
      "Napęd końcowy",
      "Spalanie",
      "Emisja CO2",
      "Układ zasilania",
    ],
    podwozieNames: [
      "Rama",
      "Kąt wyprzedzenia główki ramy",
      "Wyprzedzenie",
      "Układ przedniego zawieszenia",
      "Układ tylnego zawieszenia",
      "Skok przedniego zawieszenia",
      "Skok tylnego zawieszenia",
      "Hamulec przedni",
      "Hamulec tylny",
      "Opona przednia",
      "Opona tylna",
    ],
    wymiaryNames: [
      "Długość całkowita",
      "Szerokość całkowita",
      "Wysokość całkowita",
      "Wysokość siodełka",
      "Rozstaw kół",
      "Minimalny prześwit",
      "Masa z obciążeniem",
      "Pojemność zbiornika paliwa",
      "Pojemność zbiornika oleju",
    ],
  },
  {
    id: 3,
    name: "Nowy motor",
    price: 93900,
    priceInfo:
      "Rekomendowana cena detaliczna. W sprawie wyposażenia prosimy o kontakt z dealerem.",
    license: "A",
    description:
      "25 lat temu pierwszy model R1 zmienił świat sportowych motocykli i od tego czasu nieustannie przesuwał granice zaawansowania technologii. Ten wyjątkowy motocykl wyścigowy, zbudowany bez żadnych kompromisów, jest najbardziej ekscytującym sportowym motocyklem naszych czasów.",
    description2Title: "historia r. twoja przyszłość.",
    description2:
      "Zaawansowana technologia w R1 została w każdym calu opracowana z wykorzystaniem wiedzy zdobytej dzięki ogromnym zaangażowaniu Yamahy w wyścigi. Niezwykły, 4-cylindrowy silnik EURO 5 o pojemności 998 cm3 jest bezpośrednim potomkiem jednostki M1 – a jego aerodynamiczna owiewka wywodzi się wprost z toru wyścigowego. Jednak to głównie zaawansowana elektronika przyczynia się do wyjątkowości R1. Całe wyposażenie motocykla, od przepustnicy ride-by-wire po system kontroli startu (LCS), zarządzanie hamowania silnikiem (EBM), a także sterowanie hamulcami (BC) i wiele więcej, sprawia, że jest to najlepszy sportowy model Yamahy dominujący tak na ulicy, jak i na torze. Dostępny w najnowszych malowaniach Icon Blue i Yamaha Black.",
    klauzula:
      "Always wear a helmet, eye protection and protective clothing. Yamaha encourage you to ride safely and respect fellow riders and the environment. Images shown depict professional riders performing under controlled conditions. Specifications and appearance of Yamaha products as shown here are subject to change without notice and may vary according to requirements and conditions. For further details, please consult your Yamaha dealer.",
    colorNames: [
      { name: "Icon Blue", color: "#0000FF" },
      { name: "Midnight Black", color: "#000000" },
    ],
    images: [r11, r12, r13, r14],
    maxPower: 100,
    version35kW: false,
    daneTechniczne: {
      silnik: {
        typSilnika:
          "4-suwowy, Chłodzony cieczą, 4-cylindrowy, DOHC, 4-zaworowy",
        pojemność: "998 cm3",
        średnicaXskokTłoka: "79.0 x 50.9 mm",
        stopieńSprężania: "13.0 : 1",
        mocMaksymalna: "200,0 KM (147,1 kW) przy 13 500 obr/min",
        maksMomentObrotowy: "113,3 Nm (11,6 kg-m) przy 11 500 obr./min",
        układSmarowania: "Mokra miska olejowa",
        typSprzęgła: "Mokre, wielotarczowe",
        układZapłonu: "TCI",
        układRozrusznika: "Elektryczny",
        skrzyniaBiegów: "Z kołami w stałym zazębieniu, 6-biegowa",
        napędKońcowy: "Łańcuch",
        spalanie: "6,8 l/100 km",
        emisjaCO2: "159 g/km",
        układZasilania: "Układ elektronicznego wtrysku paliwa",
      },
      podwozie: {
        rama: "Aluminiowa, Deltabox, Diamond",
        kątwyprzGłówkiRamy: "24",
        wyprzedzenie: "102 mm",
        układPrzedniegoZawieszenia: "Widelec teleskopowy",
        układTylnegoZawieszenia: "Wahaczowe, Wahacz",
        skokPrzedniegoZawieszenia: "120 mm",
        skokTylnegoZawieszenia: "120 mm",
        hamulecPrzedni: "Hydrauliczny, dwutarczowe, Ø 320 mm",
        hamulecTylny: "Hydrauliczny, jednotarczowy, Ø 220 mm",
        oponaPrzednia: "120/70 ZR17M/C (58W), bezdętkowa",
        oponaTylna: "190/55 ZR17M/C (75W), bezdętkowa",
      },
      wymiary: {
        dłCałkowita: "2 055 mm",
        szerCałkowita: "690 mm",
        wysCałkowita: "1 165 mm",
        wysSiodełka: "855 mm",
        rozstawKół: "1 405 mm",
        minPrześwit: "130 mm",
        masazObciążeniem: "201 kg",
        pojZbiornikaPaliwa: "17.0 l",
        pojZbiornikaOleju: "4.9 l",
      },
    },
    silnikNames: [
      "Typ silnika",
      "Pojemność",
      "Średnica x skok tłoka",
      "Stopień sprężania",
      "Moc maksymalna",
      "Maksymalny moment obrotowy",
      "Układ smarowania",
      "Typ sprzęgła",
      "Układ zapłonu",
      "Układ rozrusznika",
      "Skrzynia biegów",
      "Napęd końcowy",
      "Spalanie",
      "Emisja CO2",
      "Układ zasilania",
    ],
    podwozieNames: [
      "Rama",
      "Kąt wyprzedzenia główki ramy",
      "Wyprzedzenie",
      "Układ przedniego zawieszenia",
      "Układ tylnego zawieszenia",
      "Skok przedniego zawieszenia",
      "Skok tylnego zawieszenia",
      "Hamulec przedni",
      "Hamulec tylny",
      "Opona przednia",
      "Opona tylna",
    ],
    wymiaryNames: [
      "Długość całkowita",
      "Szerokość całkowita",
      "Wysokość całkowita",
      "Wysokość siodełka",
      "Rozstaw kół",
      "Minimalny prześwit",
      "Masa z obciążeniem",
      "Pojemność zbiornika paliwa",
      "Pojemność zbiornika oleju",
    ],
  },
  {
    id: 4,
    name: "Inny motor",
    price: 93900,
    priceInfo:
      "Rekomendowana cena detaliczna. W sprawie wyposażenia prosimy o kontakt z dealerem.",
    license: "A",
    description:
      "25 lat temu pierwszy model R1 zmienił świat sportowych motocykli i od tego czasu nieustannie przesuwał granice zaawansowania technologii. Ten wyjątkowy motocykl wyścigowy, zbudowany bez żadnych kompromisów, jest najbardziej ekscytującym sportowym motocyklem naszych czasów.",
    description2Title: "historia r. twoja przyszłość.",
    description2:
      "Zaawansowana technologia w R1 została w każdym calu opracowana z wykorzystaniem wiedzy zdobytej dzięki ogromnym zaangażowaniu Yamahy w wyścigi. Niezwykły, 4-cylindrowy silnik EURO 5 o pojemności 998 cm3 jest bezpośrednim potomkiem jednostki M1 – a jego aerodynamiczna owiewka wywodzi się wprost z toru wyścigowego. Jednak to głównie zaawansowana elektronika przyczynia się do wyjątkowości R1. Całe wyposażenie motocykla, od przepustnicy ride-by-wire po system kontroli startu (LCS), zarządzanie hamowania silnikiem (EBM), a także sterowanie hamulcami (BC) i wiele więcej, sprawia, że jest to najlepszy sportowy model Yamahy dominujący tak na ulicy, jak i na torze. Dostępny w najnowszych malowaniach Icon Blue i Yamaha Black.",
    klauzula:
      "Always wear a helmet, eye protection and protective clothing. Yamaha encourage you to ride safely and respect fellow riders and the environment. Images shown depict professional riders performing under controlled conditions. Specifications and appearance of Yamaha products as shown here are subject to change without notice and may vary according to requirements and conditions. For further details, please consult your Yamaha dealer.",
    colorNames: [
      { name: "Icon Blue", color: "#0000FF" },
      { name: "Midnight Black", color: "#000000" },
    ],
    images: [r11, r12, r13, r14],
    maxPower: 80,
    version35kW: true,
    daneTechniczne: {
      silnik: {
        typSilnika:
          "4-suwowy, Chłodzony cieczą, 4-cylindrowy, DOHC, 4-zaworowy",
        pojemność: "998 cm3",
        średnicaXskokTłoka: "79.0 x 50.9 mm",
        stopieńSprężania: "13.0 : 1",
        mocMaksymalna: "200,0 KM (147,1 kW) przy 13 500 obr/min",
        maksMomentObrotowy: "113,3 Nm (11,6 kg-m) przy 11 500 obr./min",
        układSmarowania: "Mokra miska olejowa",
        typSprzęgła: "Mokre, wielotarczowe",
        układZapłonu: "TCI",
        układRozrusznika: "Elektryczny",
        skrzyniaBiegów: "Z kołami w stałym zazębieniu, 6-biegowa",
        napędKońcowy: "Łańcuch",
        spalanie: "6,8 l/100 km",
        emisjaCO2: "159 g/km",
        układZasilania: "Układ elektronicznego wtrysku paliwa",
      },
      podwozie: {
        rama: "Aluminiowa, Deltabox, Diamond",
        kątwyprzGłówkiRamy: "24",
        wyprzedzenie: "102 mm",
        układPrzedniegoZawieszenia: "Widelec teleskopowy",
        układTylnegoZawieszenia: "Wahaczowe, Wahacz",
        skokPrzedniegoZawieszenia: "120 mm",
        skokTylnegoZawieszenia: "120 mm",
        hamulecPrzedni: "Hydrauliczny, dwutarczowe, Ø 320 mm",
        hamulecTylny: "Hydrauliczny, jednotarczowy, Ø 220 mm",
        oponaPrzednia: "120/70 ZR17M/C (58W), bezdętkowa",
        oponaTylna: "190/55 ZR17M/C (75W), bezdętkowa",
      },
      wymiary: {
        dłCałkowita: "2 055 mm",
        szerCałkowita: "690 mm",
        wysCałkowita: "1 165 mm",
        wysSiodełka: "855 mm",
        rozstawKół: "1 405 mm",
        minPrześwit: "130 mm",
        masazObciążeniem: "201 kg",
        pojZbiornikaPaliwa: "17.0 l",
        pojZbiornikaOleju: "4.9 l",
      },
    },
    silnikNames: [
      "Typ silnika",
      "Pojemność",
      "Średnica x skok tłoka",
      "Stopień sprężania",
      "Moc maksymalna",
      "Maksymalny moment obrotowy",
      "Układ smarowania",
      "Typ sprzęgła",
      "Układ zapłonu",
      "Układ rozrusznika",
      "Skrzynia biegów",
      "Napęd końcowy",
      "Spalanie",
      "Emisja CO2",
      "Układ zasilania",
    ],
    podwozieNames: [
      "Rama",
      "Kąt wyprzedzenia główki ramy",
      "Wyprzedzenie",
      "Układ przedniego zawieszenia",
      "Układ tylnego zawieszenia",
      "Skok przedniego zawieszenia",
      "Skok tylnego zawieszenia",
      "Hamulec przedni",
      "Hamulec tylny",
      "Opona przednia",
      "Opona tylna",
    ],
    wymiaryNames: [
      "Długość całkowita",
      "Szerokość całkowita",
      "Wysokość całkowita",
      "Wysokość siodełka",
      "Rozstaw kół",
      "Minimalny prześwit",
      "Masa z obciążeniem",
      "Pojemność zbiornika paliwa",
      "Pojemność zbiornika oleju",
    ],
  },
];
