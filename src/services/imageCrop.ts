import noImage from "../assets/placeholder.webp";

export default function croppedUrl(url: string) {
  console.log(url);
  if (!url) return noImage;

  const index = url.indexOf("games");
  const firstPart = url.substring(0, index);

  return firstPart + `crop/600/400/` + url.substring(index, url.length + 1);
}
