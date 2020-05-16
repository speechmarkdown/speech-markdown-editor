export const Recent = {
  get: () => {
    return JSON.parse(localStorage.getItem("recent") || "[]");
  },
  add: (obj) => {
    let recents = JSON.parse(localStorage.getItem("recent") || "[]");
    let existingIndex = recents.findIndex(
      (recent) => recent.label === obj.label
    );
    if (existingIndex >= 0) {
      recents.splice(existingIndex, 1);
    }
    recents = [obj, ...recents];
    localStorage.setItem("recent", JSON.stringify(recents));
  },
  remove: (obj) => {
    let recents = JSON.parse(localStorage.getItem("recent") || "[]");
    let existingIndex = recents.findIndex(
      (recent) => recent.label === obj.label
    );
    if (existingIndex >= 0) {
      recents.splice(existingIndex, 1);
    }
    localStorage.setItem("recent", JSON.stringify(recents));
  },
};
