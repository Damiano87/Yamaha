import prisma from "../lib/prisma.js";

// @desc Get all Atvs
// @route GET /vehicles/atv
// @access Public
const getAllAtvs = async (req, res) => {
  const allAtvs = await prisma.atv.findMany({
    omit: {
      priceInfo: true,
      description: true,
      daneTechniczne: true,
    },
  });

  res.status(200).json({
    message: "Success",
    data: allAtvs,
  });
};

// @desc Get single Atv
// @route GET /vehicles/atv/:id
// @access Public
const getSingleAtv = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Please provide an ID" });
  }

  const atv = await prisma.atv.findUnique({ where: { id } });

  if (!atv) {
    return res.status(404).json({ message: "Atv not found" });
  }

  res.status(200).json({
    message: "Success",
    data: atv,
  });
};

// @desc create atv
// @route POST /vehicles
// @access Private
const createAtv = async (req, res) => {
  const {
    id,
    name,
    price,
    priceInfo,
    desc,
    images,
    color,
    color2,
    color3,
    hex,
    hex2,
    hex3,
    engineType,
    capacity,
    diameterXtlok,
    stopienSprezania,
    ukladSmarowania,
    ukladPaliwowy,
    ukladZaplonu,
    ukladRozrusznika,
    gearBox,
    naped,
    napedKoncowy,
    ukladPrzedZawieszenia,
    ukladTylZawieszenia,
    hamulecPrzedni,
    hamulecTylny,
    ogumieniePrzednie,
    ogumienieTylne,
    dlugoscCalk,
    szerCalk,
    wysokoscCalk,
    wysSiodelka,
    rozstawOsi,
    minPrzeswit,
    minPromien,
    masaZobciazeniem,
    pojemnoscPaliwa,
    pojemnoscOleju,
    bagaznikPrzedni,
    bagaznikTylny,
    ukladKier,
    frontMountedWinch,
    trailerHitch,
    seleFeatures,
    towingCapacity,
  } = req.body;

  if (!name || !price || !desc || !color || !hex) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields" });
  }

  // Check if the vehicle already exists
  const atv = await prisma.atv.findUnique({ where: { name } });

  if (atv) {
    return res.status(400).json({ message: "Atv already exists" });
  }

  // create array of color names and hex codes
  const colorNames = [];

  if (color) {
    colorNames.push({ name: color, color: hex });
  }

  if (color2) {
    colorNames.push({ name: color2, color: hex2 });
  }

  if (color3) {
    colorNames.push({ name: color3, color: hex3 });
  }

  // Create the atv
  const newAtv = await prisma.atv.create({
    data: {
      name,
      category: "atv",
      price,
      ...(priceInfo && { priceInfo }),
      description: desc,
      colorNames,
      images,
      daneTechniczne: {
        // dane silnika
        ...((engineType ||
          capacity ||
          diameterXtlok ||
          stopienSprezania ||
          ukladSmarowania ||
          ukladPaliwowy ||
          ukladZaplonu ||
          ukladRozrusznika ||
          gearBox ||
          naped ||
          napedKoncowy) && {
          silnik: {
            ...(engineType && {
              typSilnika: { title: "Typ silnika", desc: engineType },
            }),

            ...(capacity && {
              pojemnosc: { title: "Pojemność", desc: capacity },
            }),

            ...(diameterXtlok && {
              srednicaXskokTloka: {
                title: "Średnica x skoku tłoka",
                desc: diameterXtlok,
              },
            }),

            ...(stopienSprezania && {
              stopienSprezania: {
                title: "Stopień sprężania",
                desc: stopienSprezania,
              },
            }),

            ...(ukladSmarowania && {
              ukladSmarowania: {
                title: "Układ smarowania",
                desc: ukladSmarowania,
              },
            }),

            ...(ukladPaliwowy && {
              ukladPaliwowy: { title: "Układ paliwowy", desc: ukladPaliwowy },
            }),

            ...(ukladZaplonu && {
              ukladZaplonu: { title: "Układ zapłonu", desc: ukladZaplonu },
            }),

            ...(ukladRozrusznika && {
              ukladRozrusznika: {
                title: "Układ rozrusznika",
                desc: ukladRozrusznika,
              },
            }),

            ...(gearBox && {
              skrzyniaBiegow: { title: "Skrzynia biegów", desc: gearBox },
            }),

            ...(naped && { naped: { title: "Napęd", desc: naped } }),
            ...(napedKoncowy && {
              napedKoncowy: { title: "Napęd końcowy", desc: napedKoncowy },
            }),
          },
        }),
        // dane podwozia
        ...((ukladPrzedZawieszenia ||
          ukladTylZawieszenia ||
          hamulecPrzedni ||
          hamulecTylny ||
          ogumieniePrzednie ||
          ogumienieTylne) && {
          podwozie: {
            ...(ukladPrzedZawieszenia && {
              ukladPrzedniegoZawieszenia: {
                title: "Układ przedniego zawieszenia",
                desc: ukladPrzedZawieszenia,
              },
            }),

            ...(ukladTylZawieszenia && {
              ukladTylnegoZawieszenia: {
                title: "Układ tylnego zawieszenia",
                desc: ukladTylZawieszenia,
              },
            }),

            ...(hamulecPrzedni && {
              hamulecPrzedni: {
                title: "Hamulec przedni",
                desc: hamulecPrzedni,
              },
            }),

            ...(hamulecTylny && {
              hamulecTylny: { title: "Hamulec tylny", desc: hamulecTylny },
            }),

            ...(ogumieniePrzednie && {
              ogumieniePrzednie: {
                title: "Ogumienie przednie",
                desc: ogumieniePrzednie,
              },
            }),

            ...(ogumienieTylne && {
              ogumienieTylne: {
                title: "Ogumienie tylne",
                desc: ogumienieTylne,
              },
            }),
          },
        }),
        // dane wymiarów
        ...((dlugoscCalk ||
          szerCalk ||
          wysokoscCalk ||
          wysSiodelka ||
          rozstawOsi ||
          minPrzeswit ||
          minPromien ||
          masaZobciazeniem ||
          pojemnoscPaliwa ||
          pojemnoscOleju) && {
          wymiary: {
            ...(dlugoscCalk && {
              dlugoscCalkowita: {
                title: "Długość całkowita",
                desc: dlugoscCalk,
              },
            }),

            ...(szerCalk && {
              szerokoscCalkowita: {
                title: "Szerokość całkowita",
                desc: szerCalk,
              },
            }),

            ...(wysokoscCalk && {
              wysokoscCalkowita: {
                title: "Wysokość całkowita",
                desc: wysokoscCalk,
              },
            }),

            ...(wysSiodelka && {
              wysokoscSiodelka: {
                title: "Wysokość siodełka",
                desc: wysSiodelka,
              },
            }),

            ...(rozstawOsi && {
              rozstawOsi: { title: "Rozstaw osi", desc: rozstawOsi },
            }),

            ...(minPrzeswit && {
              minimalnyPrzeswit: {
                title: "Min. prześwit",
                desc: minPrzeswit,
              },
            }),

            ...(minPromien && {
              minPromienSkretu: {
                title: "Min. promień skrętu",
                desc: minPromien,
              },
            }),

            ...(masaZobciazeniem && {
              masaZobciazeniem: {
                title: "Masa z obciążeniem",
                desc: masaZobciazeniem,
              },
            }),

            ...(pojemnoscPaliwa && {
              pojemnoscZbiornikaPaliwa: {
                title: "Pojemność zbiornika paliwa",
                desc: pojemnoscPaliwa,
              },
            }),

            ...(pojemnoscOleju && {
              pojemnoscZbiornikaOleju: {
                title: "Pojemność zbiornika oleju",
                desc: pojemnoscOleju,
              },
            }),
          },
        }),
        // dane obciążenia maksymalnego
        ...((bagaznikPrzedni || bagaznikTylny) && {
          obciazenieMaksymalne: {
            ...(bagaznikPrzedni && {
              bagaznikPrzedni: {
                title: "Bagażnik przedni",
                desc: bagaznikPrzedni,
              },
            }),
            ...(bagaznikTylny && {
              bagaznikTylny: { title: "Bagażnik tylny", desc: bagaznikTylny },
            }),
          },
        }),
        // dane informacji dodatkowych
        ...((ukladKier ||
          frontMountedWinch ||
          trailerHitch ||
          seleFeatures ||
          towingCapacity) && {
          informacjeDodatkowe: {
            ...(ukladKier && {
              ukladKierowniczy: {
                title: "Układ kierowniczy",
                desc: ukladKier,
              },
            }),

            ...(frontMountedWinch && {
              frontMountedWinch: {
                title: "Wciągarka",
                desc: frontMountedWinch,
              },
            }),

            ...(trailerHitch && {
              trailerHitch: { title: "Tylny hak", desc: trailerHitch },
            }),

            ...(seleFeatures && {
              seleFeatures: { title: "Sele features", desc: seleFeatures },
            }),

            ...(towingCapacity && {
              towingCapacity: {
                title: "Zdolność holownicza",
                desc: towingCapacity,
              },
            }),
          },
        }),
      },
    },
  });
  res.status(201).json({
    message: "Atv created succesfully",
    data: newAtv,
  });
};

// @desc update atv
// @route PATCH /vehicles
// @access Private
const updateAtv = async (req, res) => {};

// @desc delete atv
// @route DELETE /vehicles
// @access Private
const deleteAtv = async (req, res) => {};

// motocycles controllers ===================================================

// @desc Get all Motos
// @route GET /vehicles
// @access Public
const getAllMotos = async (req, res) => {
  const allMotos = await prisma.moto.findMany({
    omit: {
      priceInfo: true,
      description: true,
      klauzula: true,
      description2: true,
      description2Title: true,
      daneTechniczne: true,
    },
  });

  res.status(200).json({
    message: "Success",
    data: allMotos,
  });
};

const getSingleMoto = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Please provide an ID" });
  }

  const moto = await prisma.moto.findUnique({ where: { id } });

  if (!moto) {
    return res.status(404).json({ message: "Motocycle not found" });
  }

  res.status(200).json({
    message: "Success",
    data: moto,
  });
};

// @desc create Moto
// @route POST /vehicles
// @access Private
const createMoto = async (req, res) => {
  const {
    id,
    name,
    price,
    priceInfo,
    desc,
    descTitle,
    secondaryDesc,
    klauzula,
    images,
    color,
    color2,
    color3,
    hex,
    hex2,
    hex3,
    license,
    maxPower,
    version35kW,
    mocMaksymalna,
    maxMomentObrotowy,
    engineType,
    capacity,
    diameterXtlok,
    stopienSprezania,
    ukladSmarowania,
    typSprzegla,
    ukladZaplonu,
    ukladRozrusznika,
    gearBox,
    spalanie,
    emisjaCO2,
    ukladZasilania,
    napedKoncowy,
    rama,
    katWyprzGlowkiRamy,
    wyprzedzenie,
    skokPrzedniegoZawieszenia,
    skokTylnegoZawieszenia,
    ukladPrzedZawieszenia,
    ukladTylZawieszenia,
    hamulecPrzedni,
    hamulecTylny,
    oponaPrzednia,
    oponaTylna,
    dlugoscCalk,
    szerCalk,
    wysokoscCalk,
    wysSiodelka,
    rozstawKol,
    minPrzeswit,
    masaZobciazeniem,
    pojemnoscPaliwa,
    pojemnoscOleju,
  } = req.body;

  if (!name || !price || !desc || !color || !hex) {
    return res
      .status(400)
      .json({ message: "Please fill in all required fields" });
  }

  // Check if the vehicle already exists
  const moto = await prisma.moto.findUnique({ where: { name } });

  if (moto) {
    return res.status(400).json({ message: "Motocycle already exists" });
  }

  // create array of color names and hex codes
  const colorNames = [];

  if (color) {
    colorNames.push({ name: color, color: hex });
  }

  if (color2) {
    colorNames.push({ name: color2, color: hex2 });
  }

  if (color3) {
    colorNames.push({ name: color3, color: hex3 });
  }

  const newMoto = await prisma.moto.create({
    data: {
      name,
      category: "motocycle",
      price,
      ...(priceInfo && { priceInfo }),
      description: desc,
      description2: secondaryDesc,
      description2Title: descTitle,
      license,
      klauzula,
      maxPower,
      version35kW,
      colorNames,
      images,

      daneTechniczne: {
        // dane silnika
        ...((engineType ||
          capacity ||
          diameterXtlok ||
          stopienSprezania ||
          ukladSmarowania ||
          ukladZaplonu ||
          ukladRozrusznika ||
          gearBox ||
          mocMaksymalna ||
          maxMomentObrotowy ||
          typSprzegla ||
          spalanie ||
          emisjaCO2 ||
          ukladZasilania ||
          napedKoncowy) && {
          silnik: {
            ...(engineType && {
              typSilnika: { title: "Typ silnika", desc: engineType },
            }),

            ...(capacity && {
              pojemnosc: { title: "Pojemność", desc: capacity },
            }),

            ...(diameterXtlok && {
              srednicaXskokTloka: {
                title: "Średnica x skoku tłoka",
                desc: diameterXtlok,
              },
            }),

            ...(stopienSprezania && {
              stopienSprezania: {
                title: "Stopień sprężania",
                desc: stopienSprezania,
              },
            }),

            ...(ukladSmarowania && {
              ukladSmarowania: {
                title: "Układ smarowania",
                desc: ukladSmarowania,
              },
            }),

            ...(ukladZaplonu && {
              ukladZaplonu: { title: "Układ zapłonu", desc: ukladZaplonu },
            }),

            ...(ukladRozrusznika && {
              ukladRozrusznika: {
                title: "Układ rozrusznika",
                desc: ukladRozrusznika,
              },
            }),

            ...(gearBox && {
              skrzyniaBiegow: { title: "Skrzynia biegów", desc: gearBox },
            }),

            ...(mocMaksymalna && {
              mocMaksymalna: { title: "Moc maksymalna", desc: mocMaksymalna },
            }),

            ...(maxMomentObrotowy && {
              maxMomentObrotowy: {
                title: "Maks. moment obrotowy",
                desc: maxMomentObrotowy,
              },
            }),

            ...(typSprzegla && {
              typSprzegla: {
                title: "Typ sprzęgła",
                desc: typSprzegla,
              },
            }),

            ...(spalanie && {
              spalanie: {
                title: "Spalanie",
                desc: spalanie,
              },
            }),

            ...(emisjaCO2 && {
              emisjaCO2: {
                title: "Emisja CO2",
                desc: emisjaCO2,
              },
            }),

            ...(ukladZasilania && {
              ukladZasilania: {
                title: "Układ zasilania",
                desc: ukladZasilania,
              },
            }),

            ...(napedKoncowy && {
              napedKoncowy: { title: "Napęd końcowy", desc: napedKoncowy },
            }),
          },
        }),
        // dane podwozia
        ...((ukladPrzedZawieszenia ||
          ukladTylZawieszenia ||
          skokPrzedniegoZawieszenia ||
          skokTylnegoZawieszenia ||
          rama ||
          katWyprzGlowkiRamy ||
          wyprzedzenie ||
          hamulecPrzedni ||
          hamulecTylny ||
          oponaPrzednia ||
          oponaTylna) && {
          podwozie: {
            ...(ukladPrzedZawieszenia && {
              ukladPrzedniegoZawieszenia: {
                title: "Układ przedniego zawieszenia",
                desc: ukladPrzedZawieszenia,
              },
            }),

            ...(ukladTylZawieszenia && {
              ukladTylnegoZawieszenia: {
                title: "Układ tylnego zawieszenia",
                desc: ukladTylZawieszenia,
              },
            }),

            ...(skokPrzedniegoZawieszenia && {
              skokPrzedniegoZawieszenia: {
                title: "Skok przedniego zawieszenia",
                desc: skokPrzedniegoZawieszenia,
              },
            }),

            ...(skokTylnegoZawieszenia && {
              skokTylnegoZawieszenia: {
                title: "Skok tylnego zawieszenia",
                desc: skokTylnegoZawieszenia,
              },
            }),

            ...(rama && {
              rama: {
                title: "Rama",
                desc: rama,
              },
            }),

            ...(katWyprzGlowkiRamy && {
              katWyprzGlowkiRamy: {
                title: "Kąt wyprzedenia główki ramy",
                desc: katWyprzGlowkiRamy,
              },
            }),

            ...(wyprzedzenie && {
              wyprzedzenie: {
                title: "Wyprzedzenie",
                desc: wyprzedzenie,
              },
            }),

            ...(hamulecPrzedni && {
              hamulecPrzedni: {
                title: "Hamulec przedni",
                desc: hamulecPrzedni,
              },
            }),

            ...(hamulecTylny && {
              hamulecTylny: { title: "Hamulec tylny", desc: hamulecTylny },
            }),

            ...(oponaPrzednia && {
              oponaPrzednia: {
                title: "Opona przednia",
                desc: oponaPrzednia,
              },
            }),

            ...(oponaTylna && {
              oponaTylna: {
                title: "Opona tylna",
                desc: oponaTylna,
              },
            }),
          },
        }),
        // dane wymiarów
        ...((dlugoscCalk ||
          szerCalk ||
          wysokoscCalk ||
          wysSiodelka ||
          rozstawKol ||
          minPrzeswit ||
          masaZobciazeniem ||
          pojemnoscPaliwa ||
          pojemnoscOleju) && {
          wymiary: {
            ...(dlugoscCalk && {
              dlugoscCalkowita: {
                title: "Długość całkowita",
                desc: dlugoscCalk,
              },
            }),

            ...(szerCalk && {
              szerokoscCalkowita: {
                title: "Szerokość całkowita",
                desc: szerCalk,
              },
            }),

            ...(wysokoscCalk && {
              wysokoscCalkowita: {
                title: "Wysokość całkowita",
                desc: wysokoscCalk,
              },
            }),

            ...(wysSiodelka && {
              wysokoscSiodelka: {
                title: "Wysokość siodełka",
                desc: wysSiodelka,
              },
            }),

            ...(rozstawKol && {
              rozstawKol: { title: "Rozstaw kół", desc: rozstawKol },
            }),

            ...(minPrzeswit && {
              minimalnyPrzeswit: {
                title: "Min. prześwit",
                desc: minPrzeswit,
              },
            }),

            ...(masaZobciazeniem && {
              masaZobciazeniem: {
                title: "Masa z obciążeniem",
                desc: masaZobciazeniem,
              },
            }),

            ...(pojemnoscPaliwa && {
              pojemnoscZbiornikaPaliwa: {
                title: "Pojemność zbiornika paliwa",
                desc: pojemnoscPaliwa,
              },
            }),

            ...(pojemnoscOleju && {
              pojemnoscZbiornikaOleju: {
                title: "Pojemność zbiornika oleju",
                desc: pojemnoscOleju,
              },
            }),
          },
        }),
      },
    },
  });

  res.status(201).json({
    message: "Motocycle created successfully",
    data: newMoto,
  });
};

// @desc update Moto
// @route PATCH /vehicles
// @access Private
const updateMoto = async (req, res) => {};

// @desc delete Moto
// @route DELETE /vehicles
// @access Private
const deleteMoto = async (req, res) => {};

export default {
  getAllAtvs,
  getSingleAtv,
  createAtv,
  updateAtv,
  deleteAtv,
  getAllMotos,
  getSingleMoto,
  createMoto,
  updateMoto,
  deleteMoto,
};
