import { dialog } from "./ui/dialog.js";
import { list7Bind } from "./bind/list7Bind.js";
import { data } from "../data/list7Data.js";
import { include } from "./ui/include.js";
import { includeHTML } from "./ui/includeHTML.js";
import { movieSearch } from "./movieSearch.js";
import { select } from "./ui/select.js";

// 팝업
dialog("popup1", true);
dialog("popup2");

// 데이터 바인딩
list7Bind(data);

// HTML include
// include();
includeHTML("/01Content/include/header.html", ".header");
includeHTML("/01Content/include/footer.html", ".footer");

// 영화검색결과
// movieSearch();

// select
select();
