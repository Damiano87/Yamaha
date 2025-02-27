import prisma from "../lib/prisma.js";

// @desc Get all Motos
// @route GET /vehicles
// @access Public
const getAllMotos = async (req, res) => {
  const {
    search,
    sort,
    LimitedPowerVersion,
    firstParam,
    secondParam,
    A,
    A1,
    A2,
  } = req.query;

  // Convert to category names if "true"
  const Acat = A === "true" ? "A" : undefined;
  const A1cat = A1 === "true" ? "A1" : undefined;
  const A2cat = A2 === "true" ? "A2" : undefined;

  // Filter out undefined values
  const selectedLicenses = [Acat, A1cat, A2cat].filter(Boolean);

  // Convert string to number
  const minPower = firstParam ? Number(firstParam) : undefined;
  const maxPower = secondParam ? Number(secondParam) : undefined;

  const allMotos = await prisma.moto.findMany({
    where: {
      AND: [
        search
          ? {
              name: {
                contains: search,
                mode: "insensitive",
              },
            }
          : {},
        LimitedPowerVersion === "true"
          ? {
              version35kW: true,
            }
          : {},
        minPower && maxPower
          ? {
              maxPower: {
                gte: minPower,
                lte: maxPower,
              },
            }
          : {},
        selectedLicenses.length > 0
          ? {
              license: {
                in: selectedLicenses,
              },
            }
          : {},
      ],
    },
    orderBy: (() => {
      switch (sort) {
        case "newest":
          return { createdAt: "desc" };
        case "oldest":
          return { createdAt: "asc" };
        case "lowest":
          return { price: "asc" };
        case "highest":
          return { price: "desc" };
        default:
          return undefined;
      }
    })(),
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

  // Helper function to filter out fields without desc
  const filterByDesc = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value?.desc)
    );
  };

  // Create new motocycle
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
        ...{
          silnik: filterByDesc({
            typSilnika: { title: "Typ silnika", desc: engineType },
            pojemnosc: { title: "Pojemność", desc: capacity },
            srednicaXskokTloka: {
              title: "Średnica x skoku tłoka",
              desc: diameterXtlok,
            },
            stopienSprezania: {
              title: "Stopień sprężania",
              desc: stopienSprezania,
            },
            ukladSmarowania: {
              title: "Układ smarowania",
              desc: ukladSmarowania,
            },
            ukladZaplonu: { title: "Układ zapłonu", desc: ukladZaplonu },
            ukladRozrusznika: {
              title: "Układ rozrusznika",
              desc: ukladRozrusznika,
            },
            skrzyniaBiegow: { title: "Skrzynia biegów", desc: gearBox },
            mocMaksymalna: { title: "Moc maksymalna", desc: mocMaksymalna },
            maxMomentObrotowy: {
              title: "Maks. moment obrotowy",
              desc: maxMomentObrotowy,
            },
            typSprzegla: { title: "Typ sprzęgła", desc: typSprzegla },
            spalanie: { title: "Spalanie", desc: spalanie },
            emisjaCO2: { title: "Emisja CO2", desc: emisjaCO2 },
            ukladZasilania: { title: "Układ zasilania", desc: ukladZasilania },
            napedKoncowy: { title: "Napęd końcowy", desc: napedKoncowy },
          }),
        },
        ...{
          podwozie: filterByDesc({
            ukladPrzedniegoZawieszenia: {
              title: "Układ przedniego zawieszenia",
              desc: ukladPrzedZawieszenia,
            },
            ukladTylnegoZawieszenia: {
              title: "Układ tylnego zawieszenia",
              desc: ukladTylZawieszenia,
            },
            skokPrzedniegoZawieszenia: {
              title: "Skok przedniego zawieszenia",
              desc: skokPrzedniegoZawieszenia,
            },
            skokTylnegoZawieszenia: {
              title: "Skok tylnego zawieszenia",
              desc: skokTylnegoZawieszenia,
            },
            rama: { title: "Rama", desc: rama },
            katWyprzGlowkiRamy: {
              title: "Kąt wyprzedenia główki ramy",
              desc: katWyprzGlowkiRamy,
            },
            wyprzedzenie: { title: "Wyprzedzenie", desc: wyprzedzenie },
            hamulecPrzedni: { title: "Hamulec przedni", desc: hamulecPrzedni },
            hamulecTylny: { title: "Hamulec tylny", desc: hamulecTylny },
            oponaPrzednia: { title: "Opona przednia", desc: oponaPrzednia },
            oponaTylna: { title: "Opona tylna", desc: oponaTylna },
          }),
        },
        ...{
          wymiary: filterByDesc({
            dlugoscCalkowita: { title: "Długość całkowita", desc: dlugoscCalk },
            szerokoscCalkowita: {
              title: "Szerokość całkowita",
              desc: szerCalk,
            },
            wysokoscCalkowita: {
              title: "Wysokość całkowita",
              desc: wysokoscCalk,
            },
            wysokoscSiodelka: { title: "Wysokość siodełka", desc: wysSiodelka },
            rozstawKol: { title: "Rozstaw kół", desc: rozstawKol },
            minimalnyPrzeswit: { title: "Min. prześwit", desc: minPrzeswit },
            masaZobciazeniem: {
              title: "Masa z obciążeniem",
              desc: masaZobciazeniem,
            },
            pojemnoscZbiornikaPaliwa: {
              title: "Pojemność zbiornika paliwa",
              desc: pojemnoscPaliwa,
            },
            pojemnoscZbiornikaOleju: {
              title: "Pojemność zbiornika oleju",
              desc: pojemnoscOleju,
            },
          }),
        },
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
const updateMoto = async (req, res) => {
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

  try {
    // find the existing moto by ID
    const moto = await prisma.moto.findUnique({ where: { id } });

    if (!moto) {
      return res.status(404).json({ message: "Motocycle not found" });
    }

    // create the update data object
    const updateData = {
      ...(name && { name }),
      ...(price && { price }),
      ...(priceInfo && { priceInfo }),
      ...(desc && { description: desc }),
      ...(descTitle && { description2Title: descTitle }),
      ...(secondaryDesc && { description2: secondaryDesc }),
      ...(klauzula && { klauzula }),
      ...(license && { license }),
      ...(maxPower && { maxPower }),
      version35kW,
      ...(images && { images }),
    };

    // Update colorNames array
    updateData.colorNames = moto.colorNames.map((existingColor, index) => {
      if (index === 0) {
        return {
          name: color || existingColor.name,
          color: hex || existingColor.color,
        };
      } else if (index === 1) {
        return {
          name: color2 || existingColor.name,
          color: hex2 || existingColor.color,
        };
      } else if (index === 2) {
        return {
          name: color3 || existingColor.name,
          color: hex3 || existingColor.color,
        };
      }
      // If more colors return them with no change
      return existingColor;
    });

    // update 'desc' fields in 'daneTechniczne' object
    const updateDescFields = (currentData, newData, fieldNames) => {
      if (!newData) return currentData;
      const updatedData = { ...currentData };

      fieldNames.forEach((field) => {
        if (newData[field]) {
          updatedData[field] = {
            ...updatedData[field],
            desc: newData[field],
          };
        }
      });

      return updatedData;
    };

    // Update daneTechniczne
    updateData.daneTechniczne = {
      silnik: updateDescFields(
        moto.daneTechniczne?.silnik,
        {
          typSilnika: engineType,
          pojemnosc: capacity,
          srednicaXskokTloka: diameterXtlok,
          stopienSprezania,
          mocMaksymalna,
          maxMomentObrotowy,
          ukladSmarowania,
          typSprzegla,
          ukladZaplonu,
          ukladRozrusznika,
          skrzyniaBiegow: gearBox,
          napedKoncowy,
          spalanie,
          emisjaCO2,
          ukladZasilania,
        },
        [
          "typSilnika",
          "pojemnosc",
          "srednicaXskokTloka",
          "stopienSprezania",
          "mocMaksymalna",
          "maxMomentObrotowy",
          "ukladSmarowania",
          "typSprzegla",
          "ukladZaplonu",
          "ukladRozrusznika",
          "skrzyniaBiegow",
          "napedKoncowy",
          "spalanie",
          "emisjaCO2",
          "ukladZasilania",
        ]
      ),

      podwozie: updateDescFields(
        moto.daneTechniczne?.podwozie,
        {
          rama,
          katWyprzGlowkiRamy,
          wyprzedzenie,
          ukladPrzedZawieszenia,
          ukladTylZawieszenia,
          skokPrzedniegoZawieszenia,
          skokTylnegoZawieszenia,
          hamulecPrzedni,
          hamulecTylny,
          oponaPrzednia,
          oponaTylna,
        },
        [
          "rama",
          "katWyprzGlowkiRamy",
          "wyprzedzenie",
          "ukladPrzedniegoZawieszenia",
          "ukladTylZawieszenia",
          "skokPrzedniegoZawieszenia",
          "skokTylnegoZawieszenia",
          "hamulecPrzedni",
          "hamulecTylny",
          "oponaPrzednia",
          "oponaTylna",
        ]
      ),

      wymiary: updateDescFields(
        moto.daneTechniczne?.wymiary,
        {
          dlugoscCalkowita: dlugoscCalk,
          szerokoscCalkowita: szerCalk,
          wysokoscCalkowita: wysokoscCalk,
          wysokoscSiodelka: wysSiodelka,
          rozstawKol,
          masaZObciazeniem: masaZobciazeniem,
          minimalnyPrzeswit: minPrzeswit,
          pojemnoscZbiornikaPaliwa: pojemnoscPaliwa,
          pojemnoscZbiornikaOleju: pojemnoscOleju,
        },
        [
          "dlugoscCalkowita",
          "szerokoscCalkowita",
          "wysokoscCalkowita",
          "wysokoscSiodelka",
          "rozstawKol",
          "masaZObciazeniem",
          "minimalnyPrzeswit",
          "minPromienSkretu",
          "pojemnoscZbiornikaPaliwa",
          "pojemnoscZbiornikaOleju",
        ]
      ),
    };

    // update moto
    const updatedMoto = await prisma.moto.update({
      where: { id },
      data: updateData,
    });

    // return updated moto
    res.status(200).json(updatedMoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

// @desc delete Moto
// @route DELETE /vehicles
// @access Private
const deleteMoto = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "No ID provided" });
  }

  const moto = await prisma.moto.findUnique({ where: { id } });

  if (!moto) {
    return res.status(404).json({ message: "Motocycle not found" });
  }

  const deletedMotocycle = await prisma.moto.delete({ where: { id } });

  const reply = `Motocycle ${deletedMotocycle.name} with ID ${deletedMotocycle.id} deleted`;

  res.json(reply);
};

export default {
  getAllMotos,
  getSingleMoto,
  createMoto,
  updateMoto,
  deleteMoto,
};
