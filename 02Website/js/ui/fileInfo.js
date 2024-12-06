import { el } from "../helper.js";

export const fileInfo = () => {
  const applyFile = el("#fileInput");
  const fileView = el(".file-meta");
  const fileName = fileView.querySelector(".file-name");
  const fileSize = fileView.querySelector(".file-size");

  applyFile.addEventListener("change", (e) => {
    const fileInfo = e.target.files;
    // console.log(typeof fileInfo);
    console.log(fileInfo);
    console.log(fileInfo[0].size);
    fileName.textContent = fileInfo[0].name;
    fileSize.textContent = fileInfo[0].size;
  });
};
