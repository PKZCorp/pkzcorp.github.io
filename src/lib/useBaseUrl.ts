// src/lib/useBaseUrl.ts
// Helper to generate URLs with the base path

/**
 * Generates a URL with the proper base path for GitHub Pages
 * @param path - The path to navigate to (e.g., "/membros")
 * @returns The full path with base prefix (e.g., "/PKZCorp/membros")
 */
export function useBaseUrl(path: string): string {
    const base = import.meta.env.BASE_URL || '/';

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // Remove trailing slash from base before concatenating
    const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

    // Avoid double slashes
    return `${normalizedBase}${normalizedPath}`;
}
