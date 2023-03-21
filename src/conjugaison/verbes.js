const verbes = [
  {
    "infinitif": "être",
    "conjugaison": {
      "imparfait": ["étais", "étais", "était", "étions", "étiez", "étaient"],
      "présent": ["suis", "es", "est", "sommes", "êtes", "sont"],
      "futur": ["serai", "seras", "sera", "serons", "serez", "seront"]
    },
    "complement": ["heureux", "triste", "en retard", "à l'heure", "en colère"]
  },
  {
    "infinitif": "avoir",
    "conjugaison": {
      "imparfait": ["avais", "avais", "avait", "avions", "aviez", "avaient"],
      "présent": ["ai", "as", "a", "avons", "avez", "ont"],
      "futur": ["aurai", "auras", "aura", "aurons", "aurez", "auront"]
    },
    "complement": ["faim", "soif", "froid", "chaud", "peur", "envie de dormir"]
  },
    {
        "infinitif": "chanter",
        "conjugaison": {
          "imparfait": ["chantais", "chantais", "chantait", "chantions", "chantiez", "chantaient"],
          "présent": ["chante", "chantes", "chante", "chantons", "chantez", "chantent"],
          "futur": ["chanterai", "chanteras", "chantera", "chanterons", "chanterez", "chanteront"]
        },
        "complement": ["une chanson", "sous la douche", "au karaoké", "dans la chorale"]
      },
      {
        "infinitif": "jouer",
        "conjugaison": {
          "imparfait": ["jouais", "jouais", "jouait", "jouions", "jouiez", "jouaient"],
          "présent": ["joue", "joues", "joue", "jouons", "jouez", "jouent"],
          "futur": ["jouerai", "joueras", "jouera", "jouerons", "jouerez", "joueront"]
        },
        "complement": ["au foot", "au tennis", "aux échecs", "de la guitare", "du piano"]
      },
      {
        "infinitif": "parler",
        "conjugaison": {
          "imparfait": ["parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"],
          "présent": ["parle", "parles", "parle", "parlons", "parlez", "parlent"],
          "futur": ["parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"]
        },
        "complement": ["au téléphone", "à un ami", "de politique", "de la pluie et du beau temps"]
      },
      {
        "infinitif": "regarder",
        "conjugaison": {
          "imparfait": ["regardais", "regardais", "regardait", "regardions", "regardiez", "regardaient"],
          "présent": ["regarde", "regardes", "regarde", "regardons", "regardez", "regardent"],
          "futur": ["regarderai", "regarderas", "regardera", "regarderons", "regarderez", "regarderont"]
        },
        "complement": ["la télé", "un film", "les oiseaux", "les étoiles", "un match de foot"]
      },
      {
        "infinitif": "écouter",
        "conjugaison": {
          "imparfait": ["écoutais", "écoutais", "écoutait", "écoutions", "écoutiez", "écoutaient"],
          "présent": ["écoute", "écoutes", "écoute", "écoutons", "écoutez", "écoutent"],
          "futur": ["écouterai", "écouteras", "écoutera", "écouterons", "écouterez", "écouteront"]
        },
        "complement": ["de la musique", "la radio", "un podcast", "les conseils de maman"]
      },
      {
        "infinitif": "finir",
        "conjugaison": {
          "imparfait": ["finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"],
          "présent": ["finis", "finis", "finit", "finissons", "finissez", "finissent"],
          "futur": ["finirai", "finiras", "finira", "finirons", "finirez", "finiront"]
        },
        "complement": ["les devoirs", "le travail", "le projet", "la lecture"]
      },
      {
        "infinitif": "choisir",
        "conjugaison": {
          "imparfait": ["choisissais", "choisissais", "choisissait", "choisissions", "choisissiez", "choisissaient"],
          "présent": ["choisis", "choisis", "choisit", "choisissons", "choisissez", "choisissent"],
          "futur": ["choisirai", "choisiras", "choisira", "choirons", "choisirez", "choisiront"]
        },
        "complement": ["un cadeau", "une destination", "un restaurant", "une tenue"]
      },
      {
        "infinitif": "réfléchir",
        "conjugaison": {
          "imparfait": ["réfléchissais", "réfléchissais", "réfléchissait", "réfléchissions", "réfléchissiez", "réfléchissaient"],
          "présent": ["réfléchis", "réfléchis", "réfléchit", "réfléchissons", "réfléchissez", "réfléchissent"],
          "futur": ["réfléchirai", "réfléchiras", "réfléchira", "réfléchirons", "réfléchirez", "réfléchiront"]
        },
        "complement": ["à la question", "sur le problème", "à la proposition", "à la situation"]
      },
      {
        "infinitif": "grandir",
        "conjugaison": {
          "imparfait": ["grandissais", "grandissais", "grandissait", "grandissions", "grandissiez", "grandissaient"],
          "présent": ["grandis", "grandis", "grandit", "grandissons", "grandissez", "grandissent"],
          "futur": ["grandirai", "grandiras", "grandira", "grandirons", "grandirez", "grandiront"]
        },
        "complement": ["à la montagne", "chez mes parents", "près d'un lac", "au bord de la mer"]
      },
      {
        "infinitif": "bâtir",
        "conjugaison": {
          "imparfait": ["bâtissais", "bâtissais", "bâtissait", "bâtissions", "bâtissiez", "bâtissaient"],
          "présent": ["bâtis", "bâtis", "bâtit", "bâtissons", "bâtissez", "bâtissent"],
          "futur": ["bâtirai", "bâtiras", "bâtira", "bâtirons", "bâtirez", "bâtiront"]
        },
        "complement": ["une maison", "un château", "une cabane", "un édifice"]
      },
      {
        "infinitif": "nourrir",
        "conjugaison": {
          "imparfait": ["nourrissais", "nourrissais", "nourrissait", "nourrissions", "nourrissiez", "nourrissaient"],
          "présent": ["nourris", "nourris", "nourrit", "nourrissons", "nourrissez", "nourrissent"],
          "futur": ["nourrirai", "nourriras", "nourrira", "nourrirons", "nourrirez", "nourriront"]
        },
        "complement": ["les animaux", "les plantes", "les oiseaux", "le chat"]
      }

]