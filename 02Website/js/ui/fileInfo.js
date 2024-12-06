import { el } from "../helper.js";

export const fileInfo = () => {
  const applyFile = el("#fileInput");
  const fileView = el(".file-meta");

  applyFile.addEventListener("change", (e) => {
    const fileMeta = e.target.files;
    // console.log(typeof fileMeta);
    // console.log(fileMeta);
    // console.log(fileMeta[0].size);
    const p = document.createElement("p");
    p.textContent = `${fileMeta[0].name} (${fileMeta[0].size} Bytes)`;
    fileView.append(p);
  });

  // 파일사이즈 변환 함수 추가하기! Math.floor
  /**
   * Bytes 바이트
   * KB 킬로바이트
   * MB 메가바이트
   * GB 기가바이트
   * TB 테라바이트
   */
  // 파일의 단위값:  1byte=210 = 1024
  // const unit = ["Bytes", "KB", "MB", "GB", "TB"];​
};
