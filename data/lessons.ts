export type Lesson = {
  id: string;
  order: number;

  title: {
    az: string;
    tr: string;
    en: string;
  };

  description: {
    az: string;
    tr: string;
    en: string;
  };

  concept: {
    az: string;
    tr: string;
    en: string;
  };

  task: {
    az: string;
    tr: string;
    en: string;
  };

  question: {
    az: string;
    tr: string;
    en: string;
  };

  options: {
    az: string[];
    tr: string[];
    en: string[];
  };

  answer: number;
};

export const lessons: Lesson[] = [
  {
    id: "voltage",
    order: 1,

    title: {
      az: "Gərginlik nədir?",
      tr: "Gerilim nedir?",
      en: "What is voltage?"
    },

    description: {
      az: "Elektrik dövrəsinin əsas anlayışlarından biri gərginlikdir.",
      tr: "Elektrik devresinin temel kavramlarından biri gerilimdir.",
      en: "Voltage is one of the basic concepts of an electrical circuit."
    },

    concept: {
      az: "Gərginlik elektrik yüklərini hərəkətə gətirən potensial fərqdir. Ölçü vahidi Volt (V)-dur.",
      tr: "Gerilim, elektrik yüklerini hareket ettiren potansiyel farktır. Birimi Volt (V)'tur.",
      en: "Voltage is the potential difference that pushes electric charges. Its unit is Volt (V)."
    },

    task: {
      az: "12 V batareyanı düşün. Bu batareyanın gərginliyi neçə voltdur?",
      tr: "12 V'luk bir pil düşün. Bu pilin gerilimi kaç volttur?",
      en: "Imagine a 12 V battery. What is its voltage?"
    },

    question: {
      az: "Gərginliyin ölçü vahidi hansıdır?",
      tr: "Gerilimin birimi nedir?",
      en: "What is the unit of voltage?"
    },

    options: {
      az: ["Amper", "Volt", "Ohm", "Watt"],
      tr: ["Amper", "Volt", "Ohm", "Watt"],
      en: ["Ampere", "Volt", "Ohm", "Watt"]
    },

    answer: 1
  },

  {
    id: "current",
    order: 2,

    title: {
      az: "Cərəyan nədir?",
      tr: "Akım nedir?",
      en: "What is current?"
    },

    description: {
      az: "Cərəyan elektrik yüklərinin hərəkətidir.",
      tr: "Akım, elektrik yüklerinin hareketidir.",
      en: "Current is the flow of electric charge."
    },

    concept: {
      az: "Cərəyan dövrədən keçən elektrik yükünün axınıdır. Ölçü vahidi Amper (A)-dır.",
      tr: "Akım, devreden geçen elektrik yüklerinin akışıdır. Birimi Amper (A)'dır.",
      en: "Current is the flow of electric charge through a circuit. Its unit is Ampere (A)."
    },

    task: {
      az: "Bir lampadan 2 A cərəyan keçirsə, dövrədə cərəyan nə qədərdir?",
      tr: "Bir lambadan 2 A akım geçiyorsa devredeki akım nedir?",
      en: "If 2 A flows through a lamp, what is the current?"
    },

    question: {
      az: "Cərəyanın ölçü vahidi hansıdır?",
      tr: "Akımın birimi nedir?",
      en: "What is the unit of current?"
    },

    options: {
      az: ["Volt", "Ohm", "Amper", "Watt"],
      tr: ["Volt", "Ohm", "Amper", "Watt"],
      en: ["Volt", "Ohm", "Ampere", "Watt"]
    },

    answer: 2
  },

  {
    id: "resistance",
    order: 3,

    title: {
      az: "Müqavimət nədir?",
      tr: "Direnç nedir?",
      en: "What is resistance?"
    },

    description: {
      az: "Rezistor elektrik cərəyanının keçməsinə müqavimət göstərir.",
      tr: "Direnç, elektrik akımının geçişine karşı koyar.",
      en: "Resistance opposes the flow of electric current."
    },

    concept: {
      az: "Müqavimətin ölçü vahidi Ohm (Ω)-dur. Müqavimət artdıqca, eyni gərginlikdə cərəyan azalır.",
      tr: "Direncin birimi Ohm (Ω)'dur. Direnç arttıkça aynı gerilimde akım azalır.",
      en: "The unit of resistance is Ohm (Ω). As resistance increases, current decreases at the same voltage."
    },

    task: {
      az: "Bir rezistorun müqaviməti 1000 Ω-dur. Bu komponent cərəyanı məhdudlaşdırmağa kömək edir.",
      tr: "Bir direncin değeri 1000 Ω'dur. Bu komponent akımı sınırlamaya yardımcı olur.",
      en: "A resistor has a resistance of 1000 Ω. It helps limit current."
    },

    question: {
      az: "Müqavimətin ölçü vahidi hansıdır?",
      tr: "Direncin birimi nedir?",
      en: "What is the unit of resistance?"
    },

    options: {
      az: ["Volt", "Amper", "Ohm", "Watt"],
      tr: ["Volt", "Amper", "Ohm", "Watt"],
      en: ["Volt", "Ampere", "Ohm", "Watt"]
    },

    answer: 2
  },

  {
    id: "ohms-law",
    order: 4,

    title: {
      az: "Ohm qanunu",
      tr: "Ohm kanunu",
      en: "Ohm's law"
    },

    description: {
      az: "Ohm qanunu gərginlik, cərəyan və müqavimət arasındakı əlaqəni göstərir.",
      tr: "Ohm kanunu gerilim, akım ve direnç arasındaki ilişkiyi gösterir.",
      en: "Ohm's law describes the relationship between voltage, current, and resistance."
    },

    concept: {
      az: "Ohm qanunu: V = I × R. Burada V gərginlik, I cərəyan, R isə müqavimətdir.",
      tr: "Ohm kanunu: V = I × R. Burada V gerilim, I akım, R ise dirençtir.",
      en: "Ohm's law: V = I × R. V is voltage, I is current, and R is resistance."
    },

    task: {
      az: "12 V gərginlik və 1000 Ω müqavimət varsa, I = V/R düsturundan istifadə et.",
      tr: "12 V gerilim ve 1000 Ω direnç varsa I = V/R formülünü kullan.",
      en: "With 12 V and 1000 Ω, use I = V/R."
    },

    question: {
      az: "12 V və 1000 Ω üçün cərəyan təxminən neçədir?",
      tr: "12 V ve 1000 Ω için akım yaklaşık kaçtır?",
      en: "For 12 V and 1000 Ω, what is the approximate current?"
    },

    options: {
      az: ["12 A", "1.2 A", "0.012 A", "120 A"],
      tr: ["12 A", "1.2 A", "0.012 A", "120 A"],
      en: ["12 A", "1.2 A", "0.012 A", "120 A"]
    },

    answer: 2
  },

  {
    id: "series",
    order: 5,

    title: {
      az: "Ardıcıl dövrə",
      tr: "Seri devre",
      en: "Series circuit"
    },

    description: {
      az: "Ardıcıl dövrədə komponentlər bir-birinin ardınca qoşulur.",
      tr: "Seri devrede bileşenler art arda bağlanır.",
      en: "In a series circuit, components are connected one after another."
    },

    concept: {
      az: "Ardıcıl dövrədə bütün komponentlərdən eyni cərəyan keçir. Bir komponent qırılsa, dövrə açıla bilər.",
      tr: "Seri devrede tüm bileşenlerden aynı akım geçer. Bir bileşen koparsa devre açılabilir.",
      en: "The same current flows through all components in a series circuit. If one component breaks, the circuit can open."
    },

    task: {
      az: "İki rezistoru ardıcıl qoşduğunu düşün. Onlardan keçən cərəyan necə olacaq?",
      tr: "İki direnci seri bağladığını düşün. İçlerinden geçen akım nasıl olur?",
      en: "Imagine two resistors connected in series. How does the current behave?"
    },

    question: {
      az: "Ardıcıl dövrədə hansı kəmiyyət bütün komponentlərdə eynidir?",
      tr: "Seri devrede hangi büyüklük tüm bileşenlerde aynıdır?",
      en: "Which quantity is the same through all components in a series circuit?"
    },

    options: {
      az: ["Cərəyan", "Həmişə gərginlik", "Müqavimət", "Güc"],
      tr: ["Akım", "Her zaman gerilim", "Direnç", "Güç"],
      en: ["Current", "Always voltage", "Resistance", "Power"]
    },

    answer: 0
  },

  {
    id: "parallel",
    order: 6,

    title: {
      az: "Paralel dövrə",
      tr: "Paralel devre",
      en: "Parallel circuit"
    },

    description: {
      az: "Paralel dövrədə komponentlər ayrı budaqlara qoşulur.",
      tr: "Paralel devrede bileşenler ayrı kollara bağlanır.",
      en: "In a parallel circuit, components are connected on separate branches."
    },

    concept: {
      az: "Paralel dövrədə budaqların üzərindəki gərginlik eyni ola bilər. Cərəyan isə budaqlara bölünür.",
      tr: "Paralel devrede kollardaki gerilim aynı olabilir. Akım kollara bölünür.",
      en: "In a parallel circuit, the voltage across branches can be the same. Current divides between branches."
    },

    task: {
      az: "İki lampanı paralel qoş. Bir lampanın söndürülməsi digər lampanın işləməsinə imkan verə bilər.",
      tr: "İki lambayı paralel bağla. Bir lambanın kapanması diğerinin çalışmasına izin verebilir.",
      en: "Connect two lamps in parallel. One lamp can stop while the other remains working."
    },

    question: {
      az: "Paralel dövrədə cərəyan nə edə bilər?",
      tr: "Paralel devrede akım ne yapabilir?",
      en: "What can current do in a parallel circuit?"
    },

    options: {
      az: [
        "Budaqlara bölünə bilər",
        "Həmişə yox olur",
        "Yalnız bir komponentdən keçir",
        "Gərginliyə çevrilir"
      ],
      tr: [
        "Kollara bölünebilir",
        "Her zaman yok olur",
        "Sadece bir bileşenden geçer",
        "Gerilime dönüşür"
      ],
      en: [
        "It can divide between branches",
        "It always disappears",
        "It only flows through one component",
        "It becomes voltage"
      ]
    },

    answer: 0
  },

  {
    id: "power",
    order: 7,

    title: {
      az: "Elektrik gücü",
      tr: "Elektrik gücü",
      en: "Electrical power"
    },

    description: {
      az: "Elektrik gücü cihazın elektrik enerjisini hansı sürətlə istifadə etdiyini göstərir.",
      tr: "Elektrik gücü, cihazın elektrik enerjisini ne hızla kullandığını gösterir.",
      en: "Electrical power describes how quickly a device uses electrical energy."
    },

    concept: {
      az: "Sadə halda P = V × I. Gücün ölçü vahidi Watt (W)-dır.",
      tr: "Basit durumda P = V × I. Gücün birimi Watt (W)'tır.",
      en: "In a simple case, P = V × I. The unit of power is Watt (W)."
    },

    task: {
      az: "12 V gərginlikdə 2 A cərəyan keçirən cihaz üçün P = V × I hesabla.",
      tr: "12 V gerilimde 2 A akım çeken cihaz için P = V × I hesapla.",
      en: "For a device using 12 V and 2 A, calculate P = V × I."
    },

    question: {
      az: "12 V və 2 A üçün güc neçə Watt-dır?",
      tr: "12 V ve 2 A için güç kaç Watt'tır?",
      en: "What is the power at 12 V and 2 A?"
    },

    options: {
      az: ["6 W", "14 W", "24 W", "120 W"],
      tr: ["6 W", "14 W", "24 W", "120 W"],
      en: ["6 W", "14 W", "24 W", "120 W"]
    },

    answer: 2
  },

  {
    id: "multimeter",
    order: 8,

    title: {
      az: "Multimetr ilə ölçmə",
      tr: "Multimetre ile ölçüm",
      en: "Measuring with a multimeter"
    },

    description: {
      az: "Multimetr gərginlik, cərəyan və müqavimət kimi kəmiyyətləri ölçmək üçün istifadə olunur.",
      tr: "Multimetre gerilim, akım ve direnç gibi büyüklükleri ölçmek için kullanılır.",
      en: "A multimeter can measure quantities such as voltage, current, and resistance."
    },

    concept: {
      az: "Gərginlik ölçərkən multimetr adətən dövrəyə paralel qoşulur. Müqavimət ölçərkən dövrə enerjisiz olmalıdır.",
      tr: "Gerilim ölçerken multimetre genellikle devreye paralel bağlanır. Direnç ölçerken devre enerjisiz olmalıdır.",
      en: "Voltage is normally measured in parallel. Resistance should be measured with the circuit powered off."
    },

    task: {
      az: "Bir rezistorun müqavimətini ölçmək istəyirsənsə, əvvəlcə dövrənin enerjisini kəs.",
      tr: "Bir direncin direncini ölçmek istiyorsan önce devrenin enerjisini kes.",
      en: "If you want to measure a resistor, first turn the circuit power off."
    },

    question: {
      az: "Gərginlik ölçərkən multimetr necə qoşulur?",
      tr: "Gerilim ölçerken multimetre nasıl bağlanır?",
      en: "How is a multimeter connected when measuring voltage?"
    },

    options: {
      az: [
        "Paralel",
        "Həmişə ardıcıl",
        "Heç qoşulmur",
        "Torpağa birləşdirilir"
      ],
      tr: [
        "Paralel",
        "Her zaman seri",
        "Hiç bağlanmaz",
        "Toprağa bağlanır"
      ],
      en: [
        "In parallel",
        "Always in series",
        "It is not connected",
        "Connected to ground"
      ]
    },

    answer: 0
  }
];
