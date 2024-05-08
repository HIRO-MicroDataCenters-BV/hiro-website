function loadFont(name: string, url: string, weight: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const myFont = new FontFace(name, `url(${url})`);
    myFont.weight = weight;
    myFont
      .load()
      .then(() => {
        // @ts-ignore
        document.fonts.add(myFont);
        resolve();
      })
      .catch(() => reject());
  });
}

export default loadFont;
