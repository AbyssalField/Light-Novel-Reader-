Plugin.create({
  id: "light-novel-reader",
  name: "Light Novel Reader",
  description: "Reads light novel text aloud via button",
  onLoad() {
    $app.registerButton({
      id: "readLightNovel",
      label: "📖 Read Aloud",
      icon: "volume_up",
      onClick: () => {
        const novelText = $store.get("lightNovelText");
        if (novelText) {
          $app.speak(novelText);
        } else {
          $app.toast("No light novel text found!");
        }
      }
    });

    const sampleText = `
      I am Misumi Makoto. Second year high-school student attending Nakatsuhara High.
      My club is archery. Grades are so-so. Appearance, not so good yet not so bad.
      A reddish-brown wasteland as far as the eye can see...
    `;
    $store.set("lightNovelText", sampleText);
  }
});