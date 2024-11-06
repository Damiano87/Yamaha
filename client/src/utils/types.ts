export type DaneTechniczneKeys =
  | "silnik"
  | "wymiary"
  | "podwozie"
  | "informacjeDodatkowe"
  | "obciazenieMaksymalne";

// Atv types =================================================================

export interface Silnik {
  typSilnika?: Properties;
  pojemnosc?: Properties;
  srednicaXskokTloka?: Properties;
  stopienSprezania?: Properties;
  ukladSmarowania?: Properties;
  ukladPaliwowy?: Properties;
  ukladZaplonu?: Properties;
  ukladRozrusznika?: Properties;
  skrzyniaBiegow?: Properties;
  naped?: Properties;
  napedKoncowy?: Properties;
}

export interface Podwozie {
  ukladPrzedniegoZawieszenia?: Properties;
  ukladTylnegoZawieszenia?: Properties;
  hamulecPrzedni?: Properties;
  hamulecTylny?: Properties;
  ogumieniePrzednie?: Properties;
  ogumienieTylne?: Properties;
}

export interface Wymiary {
  dlugoscCalkowita?: Properties;
  szerokoscCalkowita?: Properties;
  wysokoscCalkowita?: Properties;
  wysokoscSiodelka?: Properties;
  rozstawOsi?: Properties;
  minimalnyPrzeswit?: Properties;
  minPromienSkretu?: Properties;
  pojemnoscZbiornikaPaliwa?: Properties;
  pojemnoscZbiornikaOleju?: Properties;
  masaZobciazeniem?: Properties;
}

export interface obciazenieMaksymalne {
  bagaznikPrzedni?: Properties;
  bagaznikTylny?: Properties;
}

export interface InformacjeDodatkowe {
  układKierowniczy?: Properties;
  frontMountedWinch?: Properties;
  trailerHitch?: Properties;
  seleFeatures?: Properties;
  towingCapacity?: Properties;
}

type Properties = {
  title?: string;
  desc?: string
}


interface Color {
  name: string;
  color: string;
}


export type daneTech = {
  silnik?: Silnik;
  podwozie?: Podwozie;
  wymiary?: Wymiary;
  obciazenieMaksymalne?: obciazenieMaksymalne;
  informacjeDodatkowe?: InformacjeDodatkowe;
};

export type Atv = {
  id: string;
  name: string;
  price: number;
  priceInfo: string;
  currency: number | null;
  category: string,
  description: string;
  colorNames: Color[];
  images: string[];
  daneTechniczne: daneTech;
  createdAt: Date
};

// Motocycle types =============================================================

export interface SilnikMoto {
  typSilnika?: Properties;
  pojemnosc?: Properties;
  srednicaXskokTloka?: Properties;
  stopienSprezania?: Properties;
  mocMaksymalna?: Properties;
  maksMomentObrotowy?: Properties;
  ukladSmarowania?: Properties;
  typSprzegla?: Properties;
  ukladZaplonu?: Properties;
  ukladRozrusznika?: Properties;
  ukladPaliwowy?: Properties;
  skrzyniaBiegow?: Properties;
  naped?: Properties;
  napedKoncowy?: Properties;
  spalanie?: Properties;
  emisjaCO2?: Properties;
  ukladZasilania?: Properties;
}

export interface PodwozieMoto {
  rama?: Properties;
  katwyprzGlowkiRamy?: Properties;
  wyprzedzenie?: Properties;
  ukladPrzedniegoZawieszenia?: Properties;
  ukladTylnegoZawieszenia?: Properties;
  skokPrzedniegoZawieszenia?: Properties;
  skokTylnegoZawieszenia?: Properties;
  hamulecPrzedni?: Properties;
  hamulecTylny?: Properties;
  oponaPrzednia?: Properties;
  oponaTylna?: Properties;
}

export interface WymiaryMoto {
  dlCalkowita?: string;
  szerCalkowita?: string;
  wysCalkowita?: string;
  wysSiodelka?: string;
  rozstawKol?: string;
  minPrzeswit?: string;
  masazObciazeniem?: string;
  pojZbiornikaPaliwa?: string;
  pojZbiornikaOleju?: string;
}

interface Color {
  name: string;
  color: string;
}

export type TechMoto = {
  silnik?: SilnikMoto;
  podwozie?: PodwozieMoto;
  wymiary?: WymiaryMoto;
  obciazenieMaksymalne?: obciazenieMaksymalne;
  informacjeDodatkowe?: InformacjeDodatkowe
};

export type Motorcycle = {
  id: string;
  name: string;
  price: number;
  license: string;
  priceInfo: string;
  description2Title: string;
  description2: string;
  description: string;
  klauzula: string;
  colorNames: Color[];
  images: string[];
  maxPower: number;
  version35kW: boolean;
  daneTechniczne: TechMoto;
  silnikNames: string[];
  podwozieNames: string[];
  wymiaryNames: string[];
  category: string,
  currency: number | null,
  createdAt: Date,
};


// combined types =============================================================
export type CombinedEngineType = {
  typSilnika?: Properties;
  pojemnosc?: Properties;
  srednicaXskokTloka?: Properties;
  stopienSprezania?: Properties;
  ukladSmarowania?: Properties;
  ukladPaliwowy?: Properties;
  ukladZaplonu?: Properties;
  ukladRozrusznika?: Properties;
  skrzyniaBiegow?: Properties; 
  naped?: Properties;
  napedKoncowy?: Properties;
  // moto
  mocMaksymalna?: Properties;
  maksMomentObrotowy?: Properties;
  spalanie?: Properties;
  emisjaCO2?: Properties;
  ukladZasilania?: Properties;
  typSprzegla?: Properties;
}