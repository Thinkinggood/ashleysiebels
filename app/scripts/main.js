$(function() {
    'use strict';

    $('nav li')
        .on('click touchend', function(event) {
            event.preventDefault();
            event.stopPropagation();

            var $this = $(this);

            if ($this.hasClass('active')) {
                $this
                    .removeClass('active')
                    .height(90);
            } else {
                $this
                    .addClass('active')
                    .height($this.find('figure').height() + 90)
                    .siblings()
                    .removeClass('active')
                    .height(90);
            }
        });

    $(document).on('click', function() {
        $('.active')
            .removeClass('active')
            .height(90);
    });
});
