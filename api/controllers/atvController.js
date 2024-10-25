import prisma from "../lib/prisma.js";

// @desc Get all Atvs
// @route GET /vehicles/atv
// @access Public
const getAllAtvs = async (req, res) => {
  const { search, sort } = req.query;

  const allAtvs = await prisma.atv.findMany({
    where: search
      ? {
          name: {
            contains: search,
            mode: "insensitive",
          },
        }
      : undefined,
    orderBy: (() => {
      switch (sort) {
        case "newest":
          return { createdAt: "desc" }; // od najnowszych do najstarszych
        case "oldest":
          return { createdAt: "asc" }; // od najstarszych do najnowszych
        case "lowest":
          return { price: "asc" }; // od najtańszych do najdroższych
        case "highest":
          return { price: "desc" }; // od najdroższych do najtańszych
        default:
          return undefined; // domyślne sortowanie
      }
    })(),
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
// @route PATCH /vehicles/:id
// @access Private
const updateAtv = async (req, res) => {
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

  try {
    // Znalezienie pojazdu na podstawie ID
    const atv = await prisma.atv.findUnique({ where: { id } });

    if (!atv) {
      return res.status(404).json({ message: "ATV not found" });
    }

    // Tworzymy obiekt aktualizacji na podstawie przekazanych danych
    const updateData = {
      ...(name && { name }),
      ...(price && { price }),
      ...(priceInfo && { priceInfo }),
      ...(desc && { description: desc }),
      ...(images && { images }),
    };

    // Update colorNames array
    updateData.colorNames = atv.colorNames.map((existingColor, index) => {
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
        atv.daneTechniczne?.silnik,
        {
          typSilnika: engineType,
          pojemnosc: capacity,
          srednicaXskokTloka: diameterXtlok,
          stopienSprezania,
          ukladSmarowania,
          ukladPaliwowy,
          ukladZaplonu,
          ukladRozrusznika,
          skrzyniaBiegow: gearBox,
          naped,
          napedKoncowy,
        },
        [
          "typSilnika",
          "pojemnosc",
          "srednicaXskokTloka",
          "stopienSprezania",
          "ukladSmarowania",
          "ukladPaliwowy",
          "ukladZaplonu",
          "ukladRozrusznika",
          "skrzyniaBiegow",
          "naped",
          "napedKoncowy",
        ]
      ),

      podwozie: updateDescFields(
        atv.daneTechniczne?.podwozie,
        {
          ukladPrzedZawieszenia,
          ukladTylZawieszenia,
          hamulecPrzedni,
          hamulecTylny,
          ogumieniePrzednie,
          ogumienieTylne,
        },
        [
          "ukladPrzedniegoZawieszenia",
          "ukladTylZawieszenia",
          "hamulecPrzedni",
          "hamulecTylny",
          "ogumieniePrzednie",
          "ogumienieTylne",
        ]
      ),

      wymiary: updateDescFields(
        atv.daneTechniczne?.wymiary,
        {
          dlugoscCalkowita: dlugoscCalk,
          szerokoscCalkowita: szerCalk,
          wysokoscCalkowita: wysokoscCalk,
          wysokoscSiodelka: wysSiodelka,
          rozstawOsi,
          masaZObciazeniem: masaZobciazeniem,
          minimalnyPrzeswit: minPrzeswit,
          minPromienSkretu: minPromien,
          pojemnoscZbiornikaPaliwa: pojemnoscPaliwa,
          pojemnoscZbiornikaOleju: pojemnoscOleju,
        },
        [
          "dlugoscCalkowita",
          "szerokoscCalkowita",
          "wysokoscCalkowita",
          "wysokoscSiodelka",
          "rozstawOsi",
          "masaZObciazeniem",
          "minimalnyPrzeswit",
          "minPromienSkretu",
          "pojemnoscZbiornikaPaliwa",
          "pojemnoscZbiornikaOleju",
        ]
      ),

      obciazenieMaksymalne: updateDescFields(
        atv.daneTechniczne?.obciazenieMaksymalne,
        {
          bagaznikPrzedni,
          bagaznikTylny,
        },
        ["bagaznikPrzedni", "bagaznikTylny"]
      ),

      informacjeDodatkowe: updateDescFields(
        atv.daneTechniczne?.informacjeDodatkowe,
        {
          ukladKierowniczy: ukladKier,
          frontMountedWinch,
          trailerHitch,
          seleFeatures,
          towingCapacity,
        },
        [
          "ukladKierowniczy",
          "frontMountedWinch",
          "trailerHitch",
          "seleFeatures",
          "towingCapacity",
        ]
      ),
    };

    // Wykonanie aktualizacji w bazie
    const updatedAtv = await prisma.atv.update({
      where: { id },
      data: updateData,
    });

    // Zwracamy zaktualizowany obiekt
    res.status(200).json(updatedAtv);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};

// @desc delete atv
// @route DELETE /vehicles
// @access Private
const deleteAtv = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "No ID provided" });
  }

  const atv = await prisma.atv.findUnique({ where: { id } });

  if (!atv) {
    return res.status(404).json({ message: "ATV not found" });
  }

  const deletedAtv = await prisma.atv.delete({ where: { id } });

  const reply = `Atv ${deletedAtv.name} with ID ${deletedAtv.id} deleted`;

  res.json(reply);
};

export default {
  getAllAtvs,
  getSingleAtv,
  createAtv,
  updateAtv,
  deleteAtv,
};
