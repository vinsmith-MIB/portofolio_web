//jquery untuk menampilkan animasi tulisan student dan web developer
$(document).ready(function () {
    const arrayJob = ['Student', ['W', 'e', 'b', '&nbsp;', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']]
    var i = 0;
    var j = 0;
    var interval = setInterval(jobFunction, 150);

    function jobFunction() {
        // kode fungsi yang akan dijalankan setelah waktu penundaan 200 milisecon
        var text = $('.job');
        var temp = text.html();
        if (arrayJob[i][j] != undefined) {
            text.html(temp + arrayJob[i][j]);
            j++;
        }
        else {
            if (i == 1) i = 0; else i++;
            j = 0;
            clearInterval(interval);
            setTimeout(() => {
                temp = ''; text.html(temp);
                interval = setInterval(jobFunction, 150);
            }, 2000);
        }
    };
});


$('.toggle').click(function() {
    $('.sideBar').hasClass('active')
    ? $('.sideBar').removeClass('active')
    : $('.sideBar').addClass('active');
});


function skills(i) {
    $('#skills div:nth-child(2) ul li.active').removeClass('active');
    $('#skills div:nth-child(2) ul li').eq(i).addClass('active');
  }
  
  $(document).ready(function() {
    var i = 0;
    setInterval(function() {
      skills(i);
      i = (i + 1) % $('#skills div:nth-child(2) ul li').length;
    }, 1000);
  });
  

