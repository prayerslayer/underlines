$(document).ready(function() {
    var $testItems = $( '.test-drive .underlined' ),
        $result = $( '[data-result]' ),
        underlineConfig = {
            bg: 'rgba(0,0,0,0)',
            color: '#ff4136',
            location:  2,
            size: 3
        };

    function constructCss( c ) {
        var bgImage = [ 'linear-gradient( to top',
                        c.bg + ' ' + c.location + '%',
                        c.color + ' ' + c.location + '%',
                        c.color + ' ' + (c.location+c.size) + '%',
                        c.bg + ' ' + (c.location+c.size) + '%)',
                        ].join( ', ' );
        return {
            'background-image': bgImage
        };
    }

    function configToText( c ) {
        return Object
                    .keys( c )
                    .map( function( key ) {
                        return key + ': ' + c[key]
                    })
                    .join( ';\n' ) + ';';
    }

    function updateTestDrive() {
        var css = constructCss( underlineConfig );
        $testItems.css( css );
        $result.text( configToText( css ) );
    }

    function changeUnderlineForeground( e ) {
        underlineConfig.color = $(this).val();
        updateTestDrive();
    }

    function changeUnderlineBackground( e ) {
        underlineConfig.bg = $(this).val();
        updateTestDrive();
    }

    function changeUnderlineLocation( e ) {
        underlineConfig.location = parseInt( $( this ).val(), 10 );
        updateTestDrive();
    }

    function changeUnderlineSize( e ) {
        underlineConfig.size = parseInt( $( this ).val(), 10 );
        updateTestDrive();
    }
    
    $( 'input[data-input="foreground"]' ).on( 'keyup', changeUnderlineForeground );
    $( 'input[data-input="background"]' ).on( 'keyup', changeUnderlineBackground );
    $( 'input[data-input="location"]' ).on( 'change', changeUnderlineLocation );
    $( 'input[data-input="size"]' ).on( 'change', changeUnderlineSize );

    updateTestDrive();
});