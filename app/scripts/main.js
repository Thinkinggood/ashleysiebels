/** ====================================================================================================== **/
require(
    [
        'jquery'
    ], function (
        $
    ) {
        'use strict';

        var portfolioPieceInactiveHeight = 90;

        function deselect($piece) {
            $piece
                .find('figcaption')
                    .removeClass('selected')
                    .end()
                .find('.more-or-less')
                    .text('+')
                    .end();
        }

        $(document)
            .on('click', '.portfolio-piece', function(event) {
                event.preventDefault();
                event.stopPropagation();

                var $this = $(this);
                if ($this.find('figcaption').hasClass('selected')) {
                    deselect($this);
                    return;
                }

                var h = $this.hasClass('active')
                    ? portfolioPieceInactiveHeight
                    : $this.find('figure').height();

                $this
                    .toggleClass('active')
                    .height(h)
                    .siblings()
                    .removeClass('active')
                    .height(portfolioPieceInactiveHeight);

                deselect($this.siblings());
            })
            .on('click', '.portfolio-piece-more', function(event) {
                var $this = $(this);
                var $piece = $this.closest('.portfolio-piece');
                if ( ! $piece.hasClass('active')) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                var $caption = $piece.find('figcaption');
                $caption.toggleClass('selected');

                var t = $caption.hasClass('selected')
                    ? '-'
                    : '+';

                $this.find('.more-or-less').text(t);
            })
           
            .on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();

                deselect($('.portfolio-piece').removeClass('active').height(90));
            });
    }
);
