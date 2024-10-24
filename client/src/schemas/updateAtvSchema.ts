import {z} from 'zod';


const hexMessage = "Kod koloru musi być w formacie hex (#RRGGBB lub #RGB)";
const colorMessage = "Minimum 3 litery";

export const updateAtvSchema = z.object({
    name: z.string().optional(),
    price: z.number().nullable().optional(),
    priceInfo: z.string().optional(),
    desc: z.string().optional(),
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

export type updateAtv = z.infer<typeof updateAtvSchema>;