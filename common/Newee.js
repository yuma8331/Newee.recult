$(function(){
  //クリックイベント
  $(".menu-icon").click(function(){
     //body内の最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');

   //画面中央を計算する関数を実行
   modalResize();

   //モーダルウィンドウを表示
       $(".modal-wrapper,.modal,.menu-close").fadeIn();
       $('.menu-icon').fadeOut();

   //画面のどこかをクリックしたらモーダルを閉じる
     $(".menu-close").click(function(){
        $('.menu-icon').fadeIn();
         $(".modal-wrapper,.modal").fadeOut(function(){
        //挿入した<div id="modal-bg"></div>を削除
             $('#modal-bg').remove() ;
        });

       });

   //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
    $(window).resize(modalResize);
     function modalResize(){

           var w = $(window).width();
         var h = $(window).height();

           var cw = $(".modal-wrapper").outerWidth();
          var ch = $(".modal-wrapper").outerHeight();

       //取得した値をcssに追加する
           $(".modal-wrapper").css({
               "left": ((w - cw)/2) + "px",
               "top": ((h - ch)/2) + "px"
         });
    }
  });
});