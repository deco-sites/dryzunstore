export const relative = (link?: string | undefined) => {
  console.log("URL>>>>>>>", link);
  const linkUrl = link ? new URL(link) : undefined;
  const linkPath = linkUrl ? `${linkUrl.pathname}${linkUrl.search}` : undefined;
  return linkPath;
};
