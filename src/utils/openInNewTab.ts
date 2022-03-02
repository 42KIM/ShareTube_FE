export const openInNewTab = (url: string | undefined): Window | null | false =>
  url !== undefined && window.open(url);
