$(document).ready(function(){
    var contactButtons = $('.t1_rent_table_btn_btn2');
    contactButtons.each(function(i){
        if($(this).data('target')== "contact-advertizer"){
            $(this).on('click', TogglePopUpWindow);
        }
    });
    
    var nextPagePopUpBtn = $('.t1_pop-up_next_button');
    nextPagePopUpBtn.each(function(i){
        $(this).on('click', function(e){
            var goToPageNumber = $(this).data('goto');
            NextPagePopUp(goToPageNumber);
        });
    });
    
    var prevPagePopUpBtn = $('.t1_pop-up_next_button_prev');
    prevPagePopUpBtn.each(function(i){
        $(this).on('click', function(e){
            var goToPageNumber = $(this).data('goto');
            BackPagePopUp(goToPageNumber);
        });
    });
    
    var areUSure = $('.t1_popup_button');
    areUSure.each(function(i){
        $(this).on('click', ShowPopUpWindow);
    });
    
    $(document).mouseup(function (e){
        var popUp = $('.t1_pop-up_body');
        if (!popUp.is(e.target) && popUp.has(e.target).length === 0){
             ClosePopUpWindow();
        }
    });
    
    var closePopUp = $('.t1_close_pop-up');
    closePopUp.on('click', ClosePopUpWindow);
    
});
    
function ShowPopUpWindow(e){
    e.preventDefault();
    var popUptarget = $(this).data('target');
    var popUp = $('[data-toggle=' + popUptarget + ']');
    
    popUp.removeClass('t1_hide_item');
}

function TogglePopUpWindow(e){
    var target = $(this).data('target');
    $('[data-toggle='+target+']').removeClass('t1_hide_item');
}
    
function ClosePopUpWindow(){
    $('.t1_pop-up').addClass('t1_hide_item');
    var pages = $('[data-step]');
    pages.each(function(i){
        $(this).removeClass('t1_pop-up_body_contact-advertizer_inner-body_active');
    });
    
    $('[data-step=1]').addClass('t1_pop-up_body_contact-advertizer_inner-body_active');
}

function NextPagePopUp(number){
    var page = $('[data-step='+number+']');
    var previous = number-1;
    var previousPage= $('[data-step='+previous+']');
    
    previousPage.removeClass('t1_pop-up_body_contact-advertizer_inner-body_active'); 
    
    page.addClass('t1_pop-up_body_contact-advertizer_inner-body_active');
}

function BackPagePopUp(number){
    var page = $('[data-step='+number+']');
    var previous = number+1;
    var previousPage= $('[data-step='+previous+']');
    
    previousPage.removeClass('t1_pop-up_body_contact-advertizer_inner-body_active'); 
    
    page.addClass('t1_pop-up_body_contact-advertizer_inner-body_active');
}