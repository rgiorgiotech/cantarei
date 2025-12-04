// src/data/team.ts

export const director = {
    name: "Antonina Terzo",
    role: "Direttore Artistico",
    bio: [
        `Nata a Palermo, è laureata in pianoforte, in didattica della musica ed in direzione di coro presso il Conservatorio "V. Bellini" di Palermo (attuale "A. Scarlatti").`,
        `Si è laureata presso l'ente di formazione AIKEM a Torino come formatore della metodologia Kodàly, per l'educazione musicale – metodo Kodàly, vincendo una borsa di studio presso Kecsemét (Ungheria).`,
        `Docente di musica nella scuola secondaria di primo grado, è stata impegnata in attività didattico-musicale presso le scuole primarie, medie di I grado ad indirizzo musicale (pianoforte) e di II grado. Svolge attività concertistica in qualità di pianista e direttore di coro di voci bianche, cori giovanili polifonici e lirici, collaborando con Enti musicali prestigiose in Italia ed all'estero.`,
        `Ha pubblicato brani originali per coro ed altre formazioni musicali, diversi arrangiamenti di brani musicali celebri e opere di pedagogia musicale. Tra le sue composizioni, "Ninna nanna picciriddu" (scritta in collaborazione con Antonella Vinciguerra) è stata premiata al Senato della Repubblica nel febbraio del 2016 come vincitrice nell'ambito del Concorso "Il giorno del ricordo".`,
        `Nel maggio dello stesso anno è uscito dello stesso brano il cd inciso presso Gamma musica edizioni musicali di Palermo, nella versione corale diretta dall'autrice musicale e nella versione strumentale pianistica della stessa, con voce recitante di A. Vinciguerra.`,
        `Ha diretto dal 2008 al 2024 il coro polifonico dell'Associazione musicale Philarmonia; attualmente è direttore di coro e direttore artistico dell'associazione coro Canta Rei di Palermo.`
    ],
    image: "/assets/antonina-terzo.jpg" // Assicurati di avere questa foto o cambia il path
};

export const boardMembers = [
    { role: "Presidente", name: "Luisa Lombardo" },
    { role: "Vicepresidente", name: "Alessandro Scaffidi" },
    { role: "Segretario", name: "Andrea Zito" },
    { role: "Tesoriere", name: "Federica Ventura" },
    { role: "Consigliere", name: "Ivana Lipari" },
    { role: "Consigliere", name: "Pablo Santini" },
];

export const choirMembers = {
    soprani: [
        "Adrielly Balistreri Pereira", "Stefania Bertorotta", "Rosalia D'Arpa",
        "Silvia Giaimo", "Silvia Lipari", "Sara Martorana",
        "Stefania Minerva", "Cristina Passarelli Garzo", "Francesca Tocco"
    ],
    contralti: [
        "Daniela Abate", "Paola Amenta", "Giulia Campobello",
        "Stefania Dagnino", "Ivana Lipari", "Luisa Lombardo",
        "Maria Grazia Galioto", "Claudia Utro", "Federica Ventura"
    ],
    tenori: [
        "Ferdinando La Placa", "Emanuele Di Trapani",
        "Arcangelo Governali", "Pablo Santini Aparicio"
    ],
    baritoni: [
        "Salvatore La Croce", "Fabrizio Giotti",
        "Alessandro Scaffidi", "Andrea Zito"
    ]
};