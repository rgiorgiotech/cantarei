// src/data/galleries.ts

export interface Photo {
    src: string;
    width?: number;  // Li riempiremo dinamicamente o li lasceremo gestire a PhotoSwipe
    height?: number;
}

export interface Gallery {
    id: string;
    title: string;
    date: string;
    location: string;
    photos: Photo[];
}

export const galleries: Gallery[] = [
    {
        id: 'mondello-2024-12',
        title: 'Solenni festeggiamenti in onore di Gesù Bambino',
        date: '22 dicembre 2024',
        location: 'Parrocchia Santa Maria degli Angeli (PA)',
        photos: [
            { src: '/assets/photos/mondello-2024-12/concerto-22-12-24-11.jpg' },
            { src: '/assets/photos/mondello-2024-12/concerto-22-12-24-99.jpg' },
            { src: '/assets/photos/mondello-2024-12/concerto-22-12-24-122.jpg' },
            { src: '/assets/photos/mondello-2024-12/concerto-22-12-24-19.jpg' }
        ]
    },
    {
        id: 'santaninfa-2024-12',
        title: 'Canta Rei verso il Natale',
        date: '15 dicembre 2024',
        location: 'Chiesa di Santa Ninfa ai Crociferi (PA)',
        photos: [
            { src: '/assets/photos/santaninfa-2024-12/santa-ninfa-dei-crociferi-35.jpg' },
            { src: '/assets/photos/santaninfa-2024-12/santa-ninfa-dei-crociferi-82.jpg' },
            { src: '/assets/photos/santaninfa-2024-12/santa-ninfa-dei-crociferi-1.jpg' },
            { src: '/assets/photos/santaninfa-2024-12/santa-ninfa-dei-crociferi-7.jpg' },
            { src: '/assets/photos/santaninfa-2024-12/santa-ninfa-dei-crociferi-38.jpg' }
        ]
    },
    {
        id: 'museopitre-2024-10',
        title: 'Passione Corale',
        date: '27 ottobre 2024',
        location: 'Museo G. Pitrè (PA)',
        photos: [
            { src: '/assets/photos/museopitre-2024-10/5aaeabf255b4e80b38a4.jpg' },
            { src: '/assets/photos/museopitre-2024-10/44e282e8517286cf1f60.jpg' },
            { src: '/assets/photos/museopitre-2024-10/61c50aebfbdfaf1a510b.jpg' },
            { src: '/assets/photos/museopitre-2024-10/b2035a27ffcf0e056dff.jpg' },
            { src: '/assets/photos/museopitre-2024-10/f5c6810fe7db5a2c11f5.jpg' },
            { src: '/assets/photos/museopitre-2024-10/f27dc3a8f3ff240538a1.jpg' }
        ]
    },
    // ... puoi aggiungere le altre qui copiando dal vecchio data.php ...
];