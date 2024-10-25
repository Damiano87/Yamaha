import {z} from 'zod';


const hexMessage = "Kod koloru musi być w formacie hex (#RRGGBB lub #RGB)";
const colorMessage = "Minimum 3 litery";

export const updateMotoSchema = z.object({
    name: z.string()
    .refine(value => value === "" || value.length >= 2, {
      message: "Minimum 2 litery",
    }),
    price: z.number().nullable().optional(),
    priceInfo: z.string().optional(),
    desc: z.string()
    .refine(value => value === "" || value.length >= 10, {
      message: "Opis musi mieć minimum 10 liter",
    }),
    color: z
    .string()
    .refine(value => value === "" || value.length >= 3, {
      message: colorMessage,
    })
    .optional(),
    hex: z
    .string()
    .refine(value => value === undefined || value === "" || /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value), {
      message: hexMessage,
    }).optional(),
  color2: z
    .string()
    .refine(value => value === "" || value.length >= 3, {
      message: colorMessage,
    })
    .optional(),
    hex2: z
    .string()
    .refine(value => value === undefined || value === "" || /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value), {
      message: hexMessage,
    }).optional(),
  color3: z
    .string()
    .refine(value => value === "" || value.length >= 3, {
      message: colorMessage,
    })
    .optional(),
    hex3: z
    .string()
    .refine(value => value === undefined || value === "" || /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value), {
      message: hexMessage,
    }).optional(),
  descTitle: z.string()
    .refine(value => value === "" || value.length >= 3, {
      message: "tytuł opisu musi mieć min. 3 litery",
    }),
  secondaryDesc: z.string()
    .refine(value => value === "" || value.length >= 10, {
      message: "Dodatkowy opis musi mieć min. 10 liter",
    }),
  klauzula: z.string()
    .refine(value => value === "" || value.length >= 10, {
      message: "Klauzula musi mieć min. 10 liter",
    }),
  maxPower: z.number().nullable().optional(),
  engineType: z.string().optional(),
  version35kW: z.boolean(),
  capacity: z.string().optional(),
  diameterXtlok: z.string().optional(),
  stopienSprezania: z.string().optional(),
  mocMaksymalna: z.string().optional(),
  maxMomentObrotowy: z.string().optional(),
  ukladSmarowania: z.string().optional(),
  typSprzegla: z.string().optional(),
  spalanie: z.string().optional(),
  emisjaCO2: z.string().optional(),
  ukladZasilania: z.string().optional(),
  rama: z.string().optional(),
  katWyprzGlowkiRamy: z.string().optional(),
  wyprzedzenie: z.string().optional(),
  skokPrzedniegoZawieszenia: z.string().optional(),
  skokTylnegoZawieszenia: z.string().optional(),
  oponaPrzednia: z.string().optional(),
  oponaTylna: z.string().optional(),
  ukladZaplonu: z.string().optional(),
  ukladRozrusznika: z.string().optional(),
  gearBox: z.string().optional(),
  napedKoncowy: z.string().optional(),
  ukladPrzedZawieszenia: z.string().optional(),
  ukladTylZawieszenia: z.string().optional(),
  hamulecPrzedni: z.string().optional(),
  hamulecTylny: z.string().optional(),
  dlugoscCalk: z.string().optional(),
  szerCalk: z.string().optional(),
  wysokoscCalk: z.string().optional(),
  wysSiodelka: z.string().optional(),
  rozstawKol: z.string().optional(),
  minPrzeswit: z.string().optional(),
  masaZobciazeniem: z.string().optional(),
  pojemoscPaliwa: z.string().optional(),
  pojemnoscOleju: z.string().optional(),
})

export type updateMoto = z.infer<typeof updateMotoSchema>;