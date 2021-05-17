// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button')
//     .eq(i)
//     .click(function () {
//       tabOpen(i);
//     });
// }

// HTML에 몰래 정보 저장하는 법

$('.list').click(function (e) {
  tabOpen(e.target.dataset.id);
});

// $('.list').data('작명','값');
// $('.list').data('작명');

function tabOpen(key) {
  $('.tab-button').removeClass('active');
  $('.tab-content').removeClass('show');
  $('.tab-button').eq(key).addClass('active');
  $('.tab-content').eq(key).addClass('show');
}

// 오늘의 교훈
// 1. 이벤트리스터 절약도 가능 (.tab-button -> .list)
// 2. HTML 안에 몰래 정보저장 가능 (data-id / 셀렉터.dataset.id)
