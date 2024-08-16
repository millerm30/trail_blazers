import type { SocialType } from "../types";

export const sortImagesByNumber = (images: string[]): string[] => {
  return images.sort((a, b) => {
    const aMatch = a.match(/\d+/);
    const bMatch = b.match(/\d+/);

    const aNum = aMatch ? parseInt(aMatch[0]) : 0;
    const bNum = bMatch ? parseInt(bMatch[0]) : 0;

    return aNum - bNum;
  });
}

export const socialIconMap: { [key in SocialType ]: string } = {
  facebook: "brandico:facebook-rect",
  airbnb: "tabler:brand-airbnb",
  youtube: "fa:youtube-square",
  pinterest: "fa:pinterest",
  twitter: "fa:twitter-square",
  instagram: "fa:instagram",
  telephone: "bi:telephone-fill",
  linkedin: "fa:linkedin-square",
};