export const relative = (link?: string | undefined) => {
  const linkUrl = link
    ? new URL(`https://www.dryzun.com.br${link}`)
    : undefined;
  const linkPath = linkUrl ? `${linkUrl.pathname}${linkUrl.search}` : undefined;
  return linkPath;
};
