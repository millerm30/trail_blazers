export const sortImagesByNumber = (images: string[]): string[] => {
  return images.sort((a, b) => {
    const aNum = a.match(/\d+/)[0];
    const bNum = b.match(/\d+/)[0];
    return parseInt(aNum) - parseInt(bNum);
  });
}

export const socialIconMap = {
  facebook: "brandico:facebook-rect",
  airbnb: "tabler:brand-airbnb",
  youtube: "fa:youtube-square",
  pinterest: "fa:pinterest",
  twitter: "fa:twitter-square",
  instagram: "fa:instagram",
  telephone: "bi:telephone-fill",
  linkedin: "fa:linkedin-square",
};