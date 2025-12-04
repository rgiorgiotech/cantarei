// src/data/team.ts

export const director = {
    name: "Antonina Terzo",
    role: "Direttore Artistico",
    bio: [
        `Nata a Palermo, è laureata in pianoforte, in didattica della musica ed in direzione di coro presso il Conservatorio "V. Bellini" di Palermo (attuale "A. Scarlatti").`,
        `Si è laureata presso l'ente di formazione AIKEM a Torino come formatore della metodologia Kodàly.`,
        `Docente di musica nella scuola secondaria di primo grado, svolge attività concertistica in qualità di pianista e direttore di coro di voci bianche, cori giovanili polifonici e lirici.`,
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