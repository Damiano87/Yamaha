import {z} from 'zod';


const hexMessage = "Kod koloru musi być w formacie hex (#RRGGBB lub #RGB)";


export const createAtvSchema = z.object({
    name: z.string().min(2, "Nazwa musi mieć min. 2 litery"),
    price: z.number().min(1, "Cena musi być większa od 0").optional(),
    priceInfo: z.string().optional(),
    desc: z.string().min(10, "Opis musi mieć min. 10 liter"),
    color: z.string().min(3, "Kolor musi mieć min. 3 litery"),
    hex: z.string().regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
    message: hexMessage,
  }),
  color2: z
    .string()
    .refine(value => value === "" || value.length >= 3, {
      message: "Minimum 3 litery",
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
      message: "Minimum 3 litery",
    })
    .optional(),
    hex3: z
    .string()
    .refine(value => value === undefined || value === "" || /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value), {
      message: hexMessage,
    }).optional(),
  engineType: z.string().optional(),
  capacity: z.string().optional(),
  diameterXtlok: z.string().optional(),
  stopienSprezania: z.string().optional(),
  ukladSmarowania: z.string().optional(),
  ukladPaliwowy: z.string().optional(),
  ukladZaplonu: z.string().optional(),
  ukladRozrusznika: z.string().optional(),
  gearBox: z.string().optional(),
  naped: z.string().optional(),
  napedKoncowy: z.string().optional(),
  ukladPrzedZawieszenia: z.string().optional(),
  ukladTylZawieszenia: z.string().optional(),
  hamulecPrzedni: z.string().optional(),
  hamulecTylny: z.string().optional(),
  ogumieniePrzednie: z.string().optional(),
  ogumienieTylne: z.string().optional(),
  dlugoscCalk: z.string().optional(),
  szerCalk: z.string().optional(),
  wysokoscCalk: z.string().optional(),
  wysSiodelka: z.string().optional(),
  rozstawOsi: z.string().optional(),
  minPrzeswit: z.string().optional(),
  masaZobciazeniem: z.string().optional(),
  minPromien: z.string().optional(),
  pojemoscPaliwa: z.string().optional(),
  pojemnoscOleju: z.string().optional(),
  bagaznikPrzedni: z.string().optional(),
  bagaznikTylny: z.string().optional(),
  ukladKier: z.string().optional(),
  frontMountedWinch: z.string().optional(),
  trailerHitch: z.string().optional(),
  seleFeatures: z.string().optional(),
  towingCapacity: z.string().optional(),
})

export type createAtv = z.infer<typeof createAtvSchema>;