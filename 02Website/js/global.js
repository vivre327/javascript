import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";

// include
// 그려진 뒤에 조작해야하므로 가장 상단에 위치
includeHTML("/02Website/include/header.html", ".header");
includeHTML("/02Website/include/footer.html", ".footer").then(() => {
  // footerYear
  footerYear();
});
