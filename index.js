window.onload = function () {
    $("[class^=text]").hide();
    var hw = document.getElementById('btn1');
    hw.addEventListener('click', function () {
      window.open("champio1.html")
    })

    var hw = document.getElementById('btn2');
    hw.addEventListener('click', function () {
      window.open("champion2.html")
    })
  }