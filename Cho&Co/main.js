
 //header
 
 //scroll       
        
        $(document).on('click', 'a[href^="#"]', function (event) {
          event.preventDefault();

          $('html, body').animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 500);
        });

   
//slide

  $(document).ready(function () {
    var maxHeight = 0;
      $('.page').each(function() {
        if($(this).height() > maxHeight) maxHeight = $(this).height();
      });
      $('#shopso').height(maxHeight);


//slide01

    $('#toggle1a').click(function () {
      $('#shopcho1').hide("slide", {
          direction: "left"
      }, 500);
      $('#shopcho2').show("slide", {
          direction: "right"
      }, 500);
    });

    $('#toggle1b').click(function () {
      $('#shopcho1').hide("slide", {
          direction: "right"
      }, 500);
      $('#shopcho4').show("slide", {
          direction: "left"
      }, 500);
    });

//slide02

    $('#toggle2a').click(function () {
      $('#shopcho2').hide("slide", {
          direction: "left"
      }, 500);
      $('#shopcho3').show("slide", {
          direction: "right"
      }, 500);
    });

    $('#toggle2b').click(function () {
      $('#shopcho2').hide("slide", {
          direction: "right"
      }, 500);
      $('#shopcho1').show("slide", {
          direction: "left"
      }, 500);
    });

//slide03

    $('#toggle3a').click(function () {
      $('#shopcho3').hide("slide", {
          direction: "left"
      }, 500);
      $('#shopcho4').show("slide", {
          direction: "right"
      }, 500);
    });

    $('#toggle3b').click(function () {
      $('#shopcho3').hide("slide", {
          direction: "right"
      }, 500);
      $('#shopcho2').show("slide", {
          direction: "left"
      }, 500);
    });

//slide04

    $('#toggle4a').click(function () {
      $('#shopcho4').hide("slide", {
          direction: "left"
      }, 500);
      $('#shopcho1').show("slide", {
          direction: "right"
      }, 500);
    });

    $('#toggle4b').click(function () {
      $('#shopcho4').hide("slide", {
          direction: "right"
      }, 500);
      $('#shopcho3').show("slide", {
          direction: "left"
      }, 500);
     });


//togglecart1

      $('#togglecart1').click(function () {
        $('#shopcho1').hide("slide", {
            direction: "left"
        }, 1000);
        $('#cart').show("slide", {
            direction: "right"
        }, 1000);
      });

//togglecart2

      $('#togglecart2').click(function () {
        $('#shopcho2').hide("slide", {
            direction: "left"
        }, 1000);
        $('#cart').show("slide", {
            direction: "right"
        }, 1000);
      });

//togglecart3

      $('#togglecart3').click(function () {
        $('#shopcho3').hide("slide", {
            direction: "left"
        }, 1000);
        $('#cart').show("slide", {
            direction: "right"
        }, 1000);
      });

//togglecart4

      $('#togglecart4').click(function () {
        $('#shopcho4').hide("slide", {
            direction: "left"
        }, 1000);
        $('#cart').show("slide", {
            direction: "right"
        }, 1000);
      });

//shpco

    $('#shpco1').click(function () {
      $('#cart').hide("slide", {
          direction: "left"
      }, 1000);
      $('#shopcho1').show("slide", {
          direction: "left"
      }, 1000);
    });

  });

//trigger atas

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector('.cssanimation');

          if (entry.isIntersecting) {
            square.classList.add('shockInTop');
          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square.classList.remove('shockInTop');
        });
      });

      observer.observe(document.querySelector('.cho4'));
      observer.observe(document.querySelector('.cho2'));


//trigger bawah    

      const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector('.cssanimation');

          if (entry.isIntersecting) {
            square.classList.add('shockInBottom');
          return; // if we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          square.classList.remove('shockInBottom');
        });
      });

      observer2.observe(document.querySelector('.cho1'));
      observer2.observe(document.querySelector('.cho3'));


//trigger home      

    const observer3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const square = entry.target.querySelector('.cssanimation');

        if (entry.isIntersecting) {
          square.classList.add('blurInBottom');
        return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('blurInBottom');
      });
    });

    observer3.observe(document.querySelector('.home1'));

//con1

    var x = 0;
    var fValue = document.getElementById('totalvalue');
    document.getElementById('con1').innerHTML = x;

    function plus1(firstValue) {
      document.getElementById('con1').innerHTML = ++x;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) +
      parseInt(firstValue);
    }

    function minus1(firstValue) {
      if(x <= 0 ){
        alert(' minimum value 0 ')
        return false ;
      }
      document.getElementById('con1').innerHTML = --x;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) -
      parseInt(firstValue);
}

//con2

    var xx = 0;
    var fValue = document.getElementById('totalvalue');

    document.getElementById('con2').innerHTML = xx;

    function plus2(secondValue) {
      document.getElementById('con2').innerHTML = ++xx;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) +
      parseInt(secondValue);
    }

    function minus2(secondValue) {
      if(xx <= 0 ){
        alert(' minimum value 0')
        return false ;
      }
      document.getElementById('con2').innerHTML = --xx;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) -
      parseInt(secondValue);
    }

//con3

    var xxx = 0;
    var fValue = document.getElementById('totalvalue');

    document.getElementById('con3').innerHTML = xxx;

    function plus3(thirdValue) {
      document.getElementById('con3').innerHTML = ++xxx;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) +
      parseInt(thirdValue);
    }

    function minus3(thirdValue) {
      if(xxx <= 0 ){
        alert(' minimum value 0')
        return false ;
      }
      document.getElementById('con3').innerHTML = --xxx;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) -
      parseInt(thirdValue);
    }

//con4

    var xxxx = 0;
    var fValue = document.getElementById('totalvalue');

    document.getElementById('con4').innerHTML = xxxx;

    function plus4(secondValue) {
      document.getElementById('con4').innerHTML = ++xxxx;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) +
      parseInt(secondValue);
      
    }

    function minus4(secondValue) {
      if(xxxx <= 0 ){
        alert(' minimum value 0 ')
        return false ;
      }
      document.getElementById('con4').innerHTML = --xxxx;
      totalvalue.innerHTML = parseInt(fValue.innerHTML) -
      parseInt(secondValue);
    }

//cart