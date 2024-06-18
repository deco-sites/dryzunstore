export const relative = (link?: string | undefined) => {
  console.log("URL>>>>>>>", link);
  const linkUrl = link
    ? new URL(`https://www.dryzun.com.br${link}`)
    : undefined;
  const linkPath = linkUrl ? `${linkUrl.pathname}${linkUrl.search}` : undefined;
  return linkPath;
};
