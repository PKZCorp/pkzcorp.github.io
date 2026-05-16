import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// Define the schema for Member profiles
const membersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    avatar: z.string(),
    tagline: z.string(),
    bio: z.string(),
    skills: z.array(z.string()),
    links: z.record(z.string(), z.string()).optional(),
    productions: z.array(z.object({
      title: z.string(),
      type: z.enum(['game', 'music', 'poem', 'art', 'software', 'other']),
      url: z.string(),
      year: z.number(),
      description: z.string().optional(),
    })).optional(),
  }),
});

// Define the schema for Projects
const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    category: z.enum(['game', 'music', 'software', 'poem', 'art', 'collab', 'other']),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['released', 'wip', 'jam', 'archived']),
    year: z.number(),
    members: z.array(z.string()),
    thumbnail: z.string(),
    images: z.array(z.string()).optional(),
    links: z.record(z.string(), z.string()).optional(),
    jam: z.string().optional(),
  }),
});

// Define the schema for Jams
const jamsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    type: z.enum(['game', 'music', 'poem', 'art', 'mixed']),
    status: z.enum(['upcoming', 'active', 'voting', 'closed']),
    brief: z.string(),
    theme: z.string(),
    rules: z.array(z.string()),
    dates: z.object({
      announced: z.string(),
      theme_reveal: z.string(),
      start: z.string(),
      end: z.string(),
      results: z.string().optional(),
    }),
    cover: z.string().optional(),
    submissions: z.array(z.object({
      member: z.string(),
      title: z.string(),
      description: z.string(),
      url: z.string(),
      highlight: z.boolean(),
      media: z.array(z.string()).optional(),
    })).optional(),
    result_note: z.string().optional(),
  }),
});

// Export the collections so Astro knows about them
export const collections = {
  'members': membersCollection,
  'projects': projectsCollection,
  'jams': jamsCollection,
};
