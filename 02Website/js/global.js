import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";
import { alarmBind } from "./ui/alarmBind.js";
import { alarmData } from "./data/alarmData.js";
// import { mapTest } from "./ui/mapTest.js";
import { handleAlarm } from "./ui/handleAlarm.js";
import { fileInfo } from "./ui/fileInfo.js";
import { classData } from "./data/classData.js";
import { classList } from "./ui/classList.js";
import { postData } from "./ui/postData.js";
import { postList } from "./ui/postList.js";
import { postSearch } from "./ui/postSearch.js";
import { headerAnimation } from "./headerAnimation.js";

// include
// 그려진 뒤에 조작해야하므로 가장 상단에 위치
includeHTML("/02Website/include/header.html", ".header");
includeHTML("/02Website/include/footer.html", ".footer").then(() => {
  //Promise 체이닝(.then())을 사용하여 컴포넌트 로드 완료 후의 콜백 처리
  // footerYear
  footerYear();
  // alarm
  alarmBind(alarmData);
  handleAlarm(alarmData);
  fileInfo();
  classList(classData);
  postList(postData);
  postSearch(postData);
  // headerAnimation
  headerAnimation();
});
