export const sortImagesByNumber = (images: string[]): string[] => {
  return images.sort((a, b) => {
    const aNum = a.match(/\d+/)[0];
    const bNum = b.match(/\d+/)[0];
    return parseInt(aNum) - parseInt(bNum);
  });
}