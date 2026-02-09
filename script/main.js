const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = { opacity: 0, y: -20 };
  const ideaTextTransLeave = { opacity: 0, y: 20 };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, ideaTextTrans)
    .from(".two", 0.7, ideaTextTrans)
    .to(".one", 0.7, ideaTextTransLeave, "+=2")
    .to(".two", 0.7, ideaTextTransLeave, "-=1")
    .from(".three", 0.7, ideaTextTrans)
    .to(".three", 0.7, ideaTextTransLeave, "+=2")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.05, { visibility: "visible" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 })
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1")
    .from(".idea-5", 0.7, ideaTextTrans)
    .to(".idea-5", 0.7, ideaTextTransLeave, "+=1")
    .staggerFrom(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: 15,
    })
    .to(".idea-6", 0.5, { opacity: 0 }, "+=1")
    .staggerFromTo(
      ".baloons img",
      2.5,
      { opacity: 0.9, y: 1400 },
      { opacity: 1, y: -1000 },
      0.2
    )
    .from(".girl-dp", 0.5, {
      scale: 3,
      opacity: 0,
      rotationZ: -45,
    })
    .staggerFrom(".wish-hbd span", 0.7, {
      opacity: 0,
      rotation: 150,
    })
    .from(".wish h5", 0.5, { opacity: 0 })
    .staggerTo(".eight svg", 1.5, {
      visibility: "visible",
      opacity: 0,
      scale: 80,
      repeat: 3,
      repeatDelay: 1.4,
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2);

  document.getElementById("replay").onclick = () => tl.restart();
};

const fetchData = () => {
  fetch("customize.json")
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).forEach((key) => {
        if (key === "imagePath") {
          document.getElementById(key).src = data[key];
        } else {
          document.getElementById(key).innerText = data[key];
        }
      });
    });
};

fetchData();
animationTimeline();
