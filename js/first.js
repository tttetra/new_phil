function topHeader() {
  var html = '';
  html += '<div class ="header-left">';
  html += '<a href="./index.html">';
  html += '<h3>東京大学人文社会系研究科・文学部</h3>';
  html += '<h2>哲学研究室</h2>';
  html += '</a>';
  html += '</div>';
  html += '<div class ="header-right">';
  html += '<div class ="tetsugakukai">';
  html += '<a href="" target="_blank">';
  html += '哲学会';
  html += '</a>';
  html += '</div>';
  html += '</div>';
  html += '<input type="checkbox" id="navTgl">';
  html += '<label for="navTgl" class="open"><span></span></label>';
  html += '<label for="navTgl" class="close"></label>';
  html += '<nav class="menu" id="disp">';
  html += '<a href="./index.html" class="home"><h2>Top</h2></a>';
  html += '<ul>';
  html += '<li class="item"><a href="./about/index.html">概要と歴史</a></li>';
  html += '<li class="item"><a href="./about/access.html">アクセス</a></li>';
  html += '<li class="item"><a href="./profile/index.html">教員紹介</a></li>';
  html += '<li class="item"><a href="./education/entrance.html">進学情報</a></li>';
  html += '<li class="item"><a href="./education/lecture.html">授業案内</a></li>';
  html += '<li class="item"><a href="./report/index.html">刊行物紹介</a></li>';
  html += '<li class="item"><a href="./report/conference_report.html">活動報告</a></li>';
  html += '<li class="item"><a href="./report/study_report.html">研究報告</a></li>';
  html += '<li class="item"><a href="./news/index.html"> お知らせ</a></li>';
  html += '<li class="item"><a href="./about/lent.html">書籍の貸出・閲覧</a></li>';
  html += '</ul>';
  html += '</nav>';
  document.getElementById('header-wrap').innerHTML = html;
}

function topNavBar() {
  var html = '';
  html += '<div class="top">';
  html += '<ul class="gnav">';
  html += '<li>';
  html += '<a href="">概要</a>';
  html += '<ul>';
  html += '<li><a href="./about/index.html"> 概要と歴史</a></li>';
  html += '<li><a href="./about/access.html"> アクセス</a></li>';
  html += '</ul>';
  html += '</li>';
  html += '<li><a>教育・教員</a>';
  html += '<ul>';
  html += '<li><a href="./profile/index.html">教員紹介</a></li>';
  html += '<li><a href="./education/entrance.html"> 進学情報</a></li>';
  html += '<li><a href="./education/lecture.html"> 授業案内</a></li>';
  html += '</ul>';
  html += '</li>';
  html += '<li><a>研究・活動</a>';
  html += '<ul>';
  html += '<li><a href="./report/index.html"> 刊行物紹介</a></li>';
  html += '<li><a href="./report/conference_report.html"> 活動報告</a></li>';
  html += '<li><a href="./report/study_report.html"> 研究報告</a></li>';
  html += '</ul>';
  html += '</li>';
  html += '<li><a>その他案内</a>';
  html += '<ul>';
  html += '<li><a href="./news/index.html"> お知らせ</a></li>';
  html += '<li><a href="./about/lent.html">書籍の貸出・閲覧</a></li>';
  html += '</ul>';
  html += '</li>';
  html += '</ul>';
  html += '</div>';
  document.getElementById('top-wrap').innerHTML = html;
}

function topFooter() {
  var html = '';
  html += '<div class ="footer-left">';
  html += '<a class="utlogo" href=""><img src="./img/utlogo.png"></a>';
  html += '</div>';
  html += '<div class ="footer-right">';
  html += '<p>Copyright(C) 2007-2020 Department of Philosophy, University of Tokyo, All rights reserved.</p>';
  html += '</div>';
  document.getElementById('footer-wrap').innerHTML = html;
}
