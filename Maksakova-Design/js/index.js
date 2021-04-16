$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        zIndex: 1,
        autoplay: true,
        centerMode:true,
        appendArrows:$('.slick-arrow_block'),
        cssEase: 'linear'
      });

      $('.icon-topnav').click( () => {
        $("#myLinks").slideToggle("slow");
      });

      // $('.portfolio_item').hover(function() {
      //   $('.portfolio_item img').css('filter','hue-rotate(0deg) brightness(100%) grayscale(0%)');
      // }, function() {
      //   // on mouseout, reset the background colour
      //   $('.portfolio_item img').css('filter','hue-rotate(0deg) brightness(30%) grayscale(0%)');
      // });

      $('#order_btn').click( ()=>{

        let cc= $('#form_email').val()
        let subj = $('#form_name').val()
        let body = $('#form_message').val()

        document.location=`mailto:maksakovadesign@gmail.com?cc=${cc}&subject=Client:${subj}&body=${body}`;
        
      });
  });

