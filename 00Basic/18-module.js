// **shorcut: import {} 안에 있는 이름: ctrl + space를 누르면 예약어가 나온다.

// 1. 일반 export
// 1-1. {함수명 as 작명} 으로 함수명을 작명하고 그 "작명"으로 대신 실행할 수 있다.(단,18-module.js에서만 가능)
// (함수명충돌이나 이미 사용중인 함수명과 충돌을 방지하기 위해 사용, But, 왠만하면 사용하지 않는 것이 좋다.)
// (프로젝트 컨벤션을 따라가는 것이 좋다.=> 현업의 관행은 파일명과 함수명을 동일하게 하는 것이 좋다.)
// import { user as userA, userInfo } from "./18-user.js";

// 2. default export: default로 선언된 함수는 {} 없이 import 한다.
// import { company } from "./18-company.js";
// import company, { address } from "./18-company.js";

// 3. middle.js에서 import + export한 함수도 다시 받을 수 있음
// 함수전달흐름: user.js -> middle.js -> company.js
import { address, user, userInfo } from "./18-middle.js";

user();
userInfo();
address();

/**** 파일명과 함수명을 함부로 as재작명하지 말자! 유지보수 하기도 힘들고, 다른 사람이 이해하기도 어렵다. *****/
