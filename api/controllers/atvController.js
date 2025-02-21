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

  // Helper function to filter out fields without desc
  const filterByDesc = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value?.desc)
    );
  };

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
            ukladPaliwowy: { title: "Układ paliwowy", desc: ukladPaliwowy },
            ukladZaplonu: { title: "Układ zapłonu", desc: ukladZaplonu },
            ukladRozrusznika: {
              title: "Układ rozrusznika",
              desc: ukladRozrusznika,
            },
            skrzyniaBiegow: { title: "Skrzynia biegów", desc: gearBox },
            naped: { title: "Napęd", desc: naped },
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
            hamulecPrzedni: { title: "Hamulec przedni", desc: hamulecPrzedni },
            hamulecTylny: { title: "Hamulec tylny", desc: hamulecTylny },
            ogumieniePrzednie: {
              title: "Ogumienie przednie",
              desc: ogumieniePrzednie,
            },
            ogumienieTylne: { title: "Ogumienie tylne", desc: ogumienieTylne },
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
            rozstawOsi: { title: "Rozstaw osi", desc: rozstawOsi },
            minimalnyPrzeswit: { title: "Min. prześwit", desc: minPrzeswit },
            minPromienSkretu: {
              title: "Min. promień skrętu",
              desc: minPromien,
            },
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
        ...{
          obciazenieMaksymalne: filterByDesc({
            bagaznikPrzedni: {
              title: "Bagażnik przedni",
              desc: bagaznikPrzedni,
            },
            bagaznikTylny: { title: "Bagażnik tylny", desc: bagaznikTylny },
          }),
        },
        ...{
          informacjeDodatkowe: filterByDesc({
            ukladKierowniczy: { title: "Układ kierowniczy", desc: ukladKier },
            frontMountedWinch: { title: "Wciągarka", desc: frontMountedWinch },
            trailerHitch: { title: "Tylny hak", desc: trailerHitch },
            seleFeatures: { title: "Sele features", desc: seleFeatures },
            towingCapacity: {
              title: "Zdolność holownicza",
              desc: towingCapacity,
            },
          }),
        },
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
    // find atv by id
    const atv = await prisma.atv.findUnique({ where: { id } });

    if (!atv) {
      return res.status(404).json({ message: "ATV not found" });
    }

    // create update data object
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

    // update atv with new data
    const updatedAtv = await prisma.atv.update({
      where: { id },
      data: updateData,
    });

    // return updated atv
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
