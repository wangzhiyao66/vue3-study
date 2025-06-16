export function getParam(url: string) {
  return new URL(url);
}

export function getQueryParams(url: string) {
  return Object.fromEntries(new URLSearchParams(url));
}