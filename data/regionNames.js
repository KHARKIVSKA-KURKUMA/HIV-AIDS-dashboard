const REGION_ALIASES = {
  "Вінницька область": [
    "vinnytsia",
    "vinnytsya",
    "vinnytska",
    "vinnytsia oblast",
    "vinnytsya oblast",
    "vinnytska oblast",
    "вінницька",
    "вінницька область",
  ],

  "Волинська область": [
    "volyn",
    "volynska",
    "volyn oblast",
    "volynska oblast",
    "волинська",
    "волинська область",
  ],

  "Дніпропетровська область": [
    "dnipropetrovsk",
    "dnipropetrovska",
    "dnipropetrovsk oblast",
    "dnipropetrovska oblast",
    "дніпропетровська",
    "дніпропетровська область",
    "Dnipropetrovs'k",
  ],

  "Донецька область": [
    "donetsk",
    "donetska",
    "donetsk oblast",
    "donetska oblast",
    "донецька",
    "донецька область",
    "Donets'k",
  ],

  "Житомирська область": [
    "zhytomyr",
    "zhytomyrska",
    "zhytomyr oblast",
    "zhytomyrska oblast",
    "житомирська",
    "житомирська область",
  ],

  "Закарпатська область": [
    "zakarpattia",
    "zakarpatska",
    "zakarpattia oblast",
    "zakarpatska oblast",
    "закарпатська",
    "закарпатська область",
    "Transcarpathia",
  ],

  "Запорізька область": [
    "zaporizhzhia",
    "zaporizhzhya",
    "zaporizka",
    "zaporizhia",
    "zaporizhzhia oblast",
    "zaporizhzhya oblast",
    "zaporizka oblast",
    "запорізька",
    "запорізька область",
  ],

  "Івано-Франківська область": [
    "ivano-frankivsk",
    "ivano-frankivska",
    "ivano frankivsk",
    "ivano frankivska",
    "ivano-frankivsk oblast",
    "ivano-frankivska oblast",
    "івано-франківська",
    "івано-франківська область",
    "Ivano-Frankivs'k",
  ],

  "Київська область": [
    "kyivska",
    "kievska",
    "kyiv oblast",
    "kyivska oblast",
    "kiev oblast",
    "kievska oblast",
    "київська",
    "київська область",
    "kiev",
  ],
  "м. Київ": ["kyiv", "Kyiv City", "Kiev City"],

  "Кіровоградська область": [
    "kirovohrad",
    "kirovohradska",
    "kirovograd",
    "kirovogradska",
    "kirovohrad oblast",
    "kirovohradska oblast",
    "kirovograd oblast",
    "kirovogradska oblast",
    "кіровоградська",
    "кіровоградська область",
  ],

  "Львівська область": [
    "lviv",
    "lvivska",
    "lviv oblast",
    "lvivska oblast",
    "львівська",
    "львівська область",
    "L'viv",
  ],
  "Луганська область": ["Luhans'k", "Luhansk"],

  "Миколаївська область": [
    "mykolaiv",
    "mykolayiv",
    "mykolaivska",
    "mykolayivska",
    "mykolaiv oblast",
    "mykolayiv oblast",
    "mykolaivska oblast",
    "mykolayivska oblast",
    "миколаївська",
    "миколаївська область",
  ],

  "Одеська область": [
    "odesa",
    "odessa",
    "odeska",
    "odesa oblast",
    "odessa oblast",
    "odeska oblast",
    "одеська",
    "одеська область",
  ],

  "Полтавська область": [
    "poltava",
    "poltavska",
    "poltava oblast",
    "poltavska oblast",
    "полтавська",
    "полтавська область",
  ],

  "Рівненська область": [
    "rivne",
    "rivnenska",
    "rovno",
    "rovnenska",
    "rivne oblast",
    "rivnenska oblast",
    "ровненська",
    "рівненська",
    "рівненська область",
  ],

  "Сумська область": [
    "sumy",
    "sumska",
    "sumy oblast",
    "sumska oblast",
    "сумська",
    "сумська область",
  ],

  "Тернопільська область": [
    "ternopil",
    "ternopilska",
    "ternopil oblast",
    "ternopilska oblast",
    "тернопільська",
    "тернопільська область",
    "Ternopil'",
  ],

  "Харківська область": [
    "kharkiv",
    "kharkivska",
    "kharkov",
    "kharkovska",
    "kharkiv oblast",
    "kharkivska oblast",
    "kharkov oblast",
    "kharkovska oblast",
    "харківська",
    "харківська область",
  ],

  "Херсонська область": [
    "kherson",
    "khersonska",
    "kherson oblast",
    "khersonska oblast",
    "херсонська",
    "херсонська область",
  ],

  "Хмельницька область": [
    "khmelnytskyi",
    "khmelnytskyy",
    "khmelnytsky",
    "khmelnytska",
    "khmelnitsky",
    "khmelnytskyi oblast",
    "khmelnytskyy oblast",
    "khmelnytska oblast",
    "Khmel'nyts'kyy",
    "хмельницька",
    "хмельницька область",
  ],

  "Черкаська область": [
    "cherkasy",
    "cherkaska",
    "cherkasy oblast",
    "cherkaska oblast",
    "черкаська",
    "черкаська область",
  ],

  "Чернівецька область": [
    "chernivtsi",
    "chernivetska",
    "chernivtsi oblast",
    "chernivetska oblast",
    "чернівецька",
    "чернівецька область",
  ],

  "Чернігівська область": [
    "chernihiv",
    "chernihivska",
    "chernigov",
    "chernigovska",
    "chernihiv oblast",
    "chernihivska oblast",
    "chernigov oblast",
    "chernigovska oblast",
    "чернігівська",
    "чернігівська область",
  ],

  "Автономна Республіка Крим": [
    "crimea",
    "crimea republic",
    "autonomous republic of crimea",
    "avtonomna respublika krym",
    "крим",
    "автономна республіка крим",
  ],
  "м. Севастополь": ["Sevastopol'", "Sevastopol"],
};

function normalize(value) {
  if (!value) return "";

  return String(value).toLowerCase().trim().replace(/\s+/g, " ");
}

const aliasMap = {};

Object.entries(REGION_ALIASES).forEach(([ukrainianName, aliases]) => {
  aliases.forEach((alias) => {
    aliasMap[normalize(alias)] = ukrainianName;
  });
});

export function getRegionName(geo) {
  const properties = geo?.properties || {};

  const possibleNames = [
    properties.name,
    properties.NAME,
    properties.Name,
    properties.name_1,
    properties.NAME_1,
    properties.region,
    properties.Region,
    properties.oblast,
    properties.Oblast,
    properties.admin1Name,
    properties.shapeName,
  ];

  for (const value of possibleNames) {
    if (!value) continue;

    const normalized = normalize(value);

    if (aliasMap[normalized]) {
      return aliasMap[normalized];
    }
  }

  return possibleNames.find(Boolean) || "Невідомий регіон";
}
