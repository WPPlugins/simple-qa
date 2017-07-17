jQuery(document).ready(function($) {
  $(".qa__question-text").click(function() {
    if (jQuery(".qa__question-recaptcha").is(":hidden")) {
      jQuery(".qa__question-recaptcha").slideDown("slow");
    }
    if (jQuery(".qa__question-author").is(":hidden")) {
      jQuery(".qa__question-author").slideDown("slow");
    }
  });
});

jQuery(document).ready(function($) {
  $('ul.qa__answer-accordion li > p:first').addClass('active').next('div').slideDown(200);
  $('ul.qa__answer-accordion li > p').click(function() {
    if (!$(this).hasClass('active')) {
      $('ul.qa__answer-accordion li > p').removeClass('active').next('div').slideUp();
      $(this).addClass('active');
      $(this).next('div').slideDown(200);
    } else {
      $(this).removeClass('active').next('div').slideUp();
    }
  });
});

jQuery(document).ready(function($) {
  var idNum = 0, data = 'elastic'; 
  $('body').on('keyup', 'textarea[data^="'+data+'"]', function(){ 
  if($(this).attr('data')==''+data+'') {$(this).attr({style:'overflow:hidden;'+$(this).attr('style')+'',data:''+$(this).attr('data')+''+idNum+''});idNum++;} 
  tData = $(this).attr('data'); 
  if ($('div[data="'+tData.replace(''+data+'','clone')+'"]').size()==0) { 
    attr = 'style="display:none;padding:'+$(this).css('padding')+';width:'+$(this).css('width')+';min-height:'+$(this).css('height')+';font-size:'+$(this).css('font-size')+';line-height:'+$(this).css('line-height')+';font-family:'+$(this).css('font-family')+';white-space:'+$(this).css('white-space')+';word-wrap:'+$(this).css('word-wrap')+';letter-spacing:0.2px;" data="'+tData.replace(''+data+'','clone')+'"'; 
    clone = '<div '+attr+'>'+$(this).val()+'</div>'; 
    $('body').prepend(clone); 
    idNum++; 
  } else { 
    $('div[data="'+tData.replace(''+data+'','clone')+'"]').html($(this).val()); 
    $(this).animate({'height':''+$('div[data="'+tData.replace(''+data+'','clone')+'"]').css('height')+''},50); 
  } 
  });
});
