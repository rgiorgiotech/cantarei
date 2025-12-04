// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
    type: 'content', // Usiamo file Markdown/MDX per il contenuto testuale
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        date: z.date(), // Astro convertirà stringhe tipo "2025-09-28" in oggetti Date veri!
        location: z.string().optional(),
        poster: z.string().optional(), // Percorso dell'immagine
        banner: z.string().optional(), // Per eventi speciali
        isArsEvent: z.boolean().default(false),
        layout: z.enum(['standard', 'passione-corale']).default('standard'),

        // Struttura opzionale per i programmi complessi (tipo Passione Corale)
        programs: z.array(z.object({
            title: z.string(),
            logoUrl: z.string().optional(),
            director: z.string(),
            items: z.array(z.string()), // Lista dei brani
            musicians: z.array(z.object({
                role: z.string(),
                name: z.string()
            })).optional()
        })).optional()
    })
});

// Esportiamo le collezioni (ne potremo aggiungere altre, es. 'sponsors')
export const collections = {
    'events': eventsCollection,
};