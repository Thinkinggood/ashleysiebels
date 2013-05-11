$(function() {
    'use strict';

    $('.portfolio-piece')
        .on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
        })
        .on('focusin', function(event) {
            event.preventDefault();
            event.stopPropagation();

            var $this = $(this);
            $this
                .addClass('active')
                .height($this.find('figure').height())
                .siblings()
                .removeClass('active')
                .height(90)
                .find('figcaption')
                .removeClass('selected');

            $this.find('.more-or-less').text('+');
            $this.find('figcaption').removeClass('selected');
        })
        .on('focusout', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // var $this = $(this);
            // if ($this.hasClass('active')) {
            //     $this
            //         .removeClass('active')
            //         .height(90)
            //         .find('figcaption')
            //         .removeClass('selected');
            // }
        });

    $('.portfolio-piece-more')
        .on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            var $this = $(this);
            var $piece = $this.closest('.portfolio-piece');
            var $caption = $piece.find('figcaption');

            if ($caption.hasClass('selected')) {
                $this
                    .find('.more-or-less')
                    .text('+');

                $caption
                    .removeClass('selected');

            } else {
                $this
                    .find('.more-or-less')
                    .text('-');

                $caption
                    .addClass('selected');
            }
        })
        .on('focusin', function(event) {
            event.preventDefault();
            event.stopPropagation();

            var $this = $(this);
            var $piece = $this.closest('.portfolio-piece');

            if ( ! $piece.hasClass('active') && event.type === 'focusin') {
                $this.blur();
                $piece.focus();
                return;
            }

            $this.click();
        })
        .on('focusout', function(event) {
            event.preventDefault();
            event.stopPropagation();

            var $this = $(this);
            var $piece = $this.closest('.portfolio-piece');
            var $caption = $piece.find('figcaption');

            $this
                .find('.more-or-less')
                .text('+');

            $caption
                .removeClass('selected');
        });


    $(document).on('click', function() {
        $('.active')
            .removeClass('active')
            .height(90);

        $('.selected').removeClass('selected');
        $('.more-or-less').text('+');
    });
});
