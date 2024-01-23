$(document).ready(function(){

  //login_btn

  $("#login_btn").click(function(){

   if($("#idbox").val() == ""){
      $("#idbox").focus();
   }else if($("#pwbox").val() == ""){
      $("#pwbox").focus();
   }else if($("#idbox").val() != "" && $("#pwbox").val() != ""){
      alert("아이디 또는 비밀번호를 확인해주세요.");
   }

  });

  //회원가입 동의
  $(".agree_t1").load("/txt/join_t_01.txt");

  $(".agree_t2").load("/txt/join_t_02.txt");

  $("#join_btn").click(function(){

    var join = confirm("회원가입 하시겠습니까?");

    document.write(join);
    if(join == true){
      alert("회원가입을 축하드립니다. 새로 로그인 해주세요.");
      location.href = "/join/login.html";

    }else if(join == false){
     alert("취소되었습니다.");
     location.href = "/index.html";
    }
  });

  //핫플레이스

  $(".heart").click(function(){
   $("+.red_heart",this).show();
   });
   $(".red_heart").click(function(){
    $(this).hide();
    });

  //렌트

  $("#lent .xi-star-o").click(function(){
   $("+.xi-star",this).show();
   });
   $("#lent .xi-star").click(function(){
    $(this).hide();
    });


  //lent_tab

  var absHeight = $("#detail .bottom_box .label_box .detail_list li.detail_tab .detail_box").height() + $(".dt_name").height();

    $(".detail_list > li").height(absHeight);

    $(".detail_list > li").click(function(){
      $(this).addClass("detail_tab").siblings().removeClass("detail_tab");
      absHeight = $(".bottom_box .label_box .detail_list li.detail_tab .detail_box").height()
      + $(".dt_name").height();
        $(".detail_list > li").height(absHeight);
      });

  $(".detail_list > li").eq(0).click();


  //렌트 qna 비밀글 보기
  $("#qna_pw .ok_btn").click(function(){

  if($("#lent_pw").val() != "" ){
      alert("비밀글 비밀번호가 틀립니다.");
   }else if($("#lent_pw").val() == ""){
      alert("비밀글 비밀번호가 틀립니다.");
   }

  });

  //렌트 후기 추천하기
  var lentSymp_count = 6;
  var lentSymp_statu = true;

  $("#lentsymp_count").html(lentSymp_count);

  $("#lentsymp_btn").click(function(){

    if(lentSymp_statu){
      ++lentSymp_count;
      alert("추천되었습니다.");
      lentSymp_statu=false;
    }else{
      --lentSymp_count;
      alert("추천이 취소되었습니다.");
      lentSymp_statu=true;
    }

   $("#lentsymp_count").html(lentSymp_count);

  });

  //review_detail
  $("#review li").click(function(){
    $(this).addClass("showpopup").siblings().removeClass("showpopup");
  });
  $(".closebtn").click(function(){
    $(this).removeClass(".review_detail");
  });
  $("#review li").click(function(){
    $(".review_detail").show();
  });
  $(".closebtn").click(function(){
    $(".review_detail").hide();
  });
  //추천하기
   var symp_count = 12;
   var symp_statu = true;

  $("#symp_count").html(symp_count);

   $("#symp_btn").click(function(){

     if(symp_statu){
       ++symp_count;
       alert("추천되었습니다.");
       symp_statu=false;
     }else{
       --symp_count;
       alert("추천이 취소되었습니다.");
       symp_statu=true;
     }

    $("#symp_count").html(symp_count);

   });

  //후기 작성하기
  $("#detail .review_btn").click(function(){

    alert("로그인 후 작성이 가능합니다.");
    var openLogin = window.open("about:blank");
    openLogin.location.href = "/join/login.html";

  });

  //검색버튼
  $(".search_btn").click(function(){

    if($("#search_box").val() != ""){
      alert("검색결과가 없습니다.");
    }else if($("#search_box").val() == ""){
      alert("검색결과가 없습니다.");
    }

  });
  //공지사항

   $("#notice .notice_box dt").click(function(){
    $(this).next().slideToggle(500).siblings("dd").slideUp();
    $(this).toggleClass("color_on").siblings("dt").removeClass("color_on");
   });

   //QnA

   $("#QnA dt").click(function(){
    $(this).next().slideToggle(500).siblings("dd").slideUp();
    $(this).toggleClass("color_on").siblings("dt").removeClass("color_on");

   });

  //lent_detail

  //가격변동
  $("#choice_day .price_0").off().on('click', function(){
    $(".price").selected().$(this).html("0");
  });
  $("#choice_day .price_01").off().on('click', function(){
    $(".price").html("158,850");
  });
  $("#choice_day .price_02").off().on('click', function(){
    $(".price").html("183,850");
  });
  $("#choice_day .price_03").off().on('click', function(){
    $(".price").html("208,850");
  });
  $("#choice_day .price_04").off().on('click', function(){
    $(".price").html("233,850");
  });
  //바로구매
  $("#detail .detail_bt1").off().on('click', function(){

    alert("로그인 후 바로구매를 이용해주세요.");
    var openLogin = window.open("about:blank");
    openLogin.location.href = "/join/login.html";

  });
  //장바구니
  $("#detail .detail_bt2").off().on('click', function(){

    alert("로그인 후 장바구니를 이용해주세요.");
    var openLogin = window.open("about:blank");
    openLogin.location.href = "/join/login.html";

  });
  //관심상품
  $(".detail_bt3").off().on('click', function(){

    alert("로그인 후 관심상품 등록을 해주세요.");
    var openLogin = window.open("about:blank");
    openLogin.location.href = "/join/login.html";

  });
  //후기
  $(".detail_bt4").off().on('click', function(){

    alert("로그인 후 작성이 가능합니다.");
    var openLogin = window.open("about:blank");
    openLogin.location.href = "/join/login.html";

  });
  //고객센터
  $(".detail_bt5").off().on('click', function(){

    alert("로그인 후 작성이 가능합니다.");
    var openLogin = window.open("about:blank");
    openLogin.location.href = "/join/login.html";

  });

  /*$("#choice_day").select(function(){

   var choice = ("#choice_day")
    if(choice select){}
  });*/

  //비밀글 비밀번호 칸 열리기

  $(".qmini_box").click(function(){
    $(this).next().slideToggle(500).siblings(".secreat").slideUp();

  });

  //비밀글

  $(".secreat > .pw_btn").click(function(){

   if($(".pw_box").val() == ""){
      alert("비밀글 비밀번호가 틀립니다.");
   }else if($(".pw_box").val() != ""){
     alert("비밀글 비밀번호가 틀립니다.");
   }

  });

});
