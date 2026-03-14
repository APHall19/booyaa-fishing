// Base path for GitHub Pages deployment
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/booyaa-fishing" : "";

export function img(path: string): string {
  return `${BASE_PATH}${path}`;
}
