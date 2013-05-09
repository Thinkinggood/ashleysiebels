$(function() {
    'use strict';

    $('.portfolio-piece')
        .on('click touchend focus', function(event) {
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
                    .height($this.find('figure').height())
                    .siblings()
                    .removeClass('active')
                    .height(90)
                    .find('figcaption')
                    .removeClass('selected');
            }
            $this.find('.more-or-less').text('+');
            $this.find('figcaption').removeClass('selected');
        });

    $('.portfolio-piece-more')
        .on('click touchend focus', function(event) {
            var $this = $(this);
            var $piece = $this.closest('.portfolio-piece');
            if ( ! $piece.hasClass('active')) {
                if (event.type === 'focus') {
                    $piece.focus();
                }
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            var $caption = $piece.find('figcaption');

            if ($caption.hasClass('selected')) {
                $this.find('.more-or-less').text('+');
                $caption
                    .removeClass('selected');
            } else {
                $this.find('.more-or-less').text('-');
                $caption
                    .addClass('selected');
            }
        });


    $(document).on('click touchend focus', function() {
        $('.active')
            .removeClass('active')
            .height(90);

        $('.selected').removeClass('selected');
        $('.more-or-less').text('+');
    });
});
