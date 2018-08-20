({
    afterJqueryLoaded : function(cmp, event, helper) {
        $('#hide-button').click(function(){
            $('#box').slideUp();
       });

       $('#show-button').click(function(){
            $('#box').slideDown();
       });
    }
})
