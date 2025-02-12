/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  Unsupported screen size popup code
 *
 *  Will automatically append the HTML of the popup to the Body
 *  and show it if the screen width is less than 360px
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/

(function () {
    document.addEventListener('DOMContentLoaded', function() {
        if ( parseInt( getCookie('tooSmallSkipped') ) === 1 ) return;
        setTimeout(function(){
            if ( window.outerWidth > 0 && window.outerWidth < 360 ) {
                window._unsupportedPopup = document.createElement( 'div' );
                window._unsupportedPopup.className = 'unsupported-devices-wrapper';
                window._unsupportedPopup.id = "too_small_popup";

                window._unsupportedPopup.innerHTML = tooSmallHTML();

                document.body.appendChild( window._unsupportedPopup );

                window._blockScrollFor('#too_small_popup');

            }
        }, 1000);
        window._skipTooSmall = function() {
            setCookie('tooSmallSkipped', 1, 1);
            window._unsupportedPopup.parentNode.removeChild( window._unsupportedPopup );
        }
    });

    function tooSmallHTML() {
        var html =
        '    <div class="unsupported-devices" id="UnsupportedDevices">\n' +
        '      <div class="unsupported-device__wrapper">\n' +
        '        <div class="unsupported-device__close-wrapper">\n' +
        '          <div class="unsupported-device--close set_supported" onclick="window._skipTooSmall()">\n' +
        '            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">\n' +
        '              <path fill="#979797" fill-rule="nonzero"\n' +
        '                    d="M.293.293a1 1 0 0 1 1.414 0l4.945 4.944L11.597.293a1 1 0 0 1 1.415 1.414L8.066 6.652l4.946 4.945a1 1 0 0 1 .083 1.32l-.083.095a1 1 0 0 1-1.415 0L6.652 8.066l-4.945 4.946a1 1 0 0 1-1.414-1.415l4.944-4.945L.293 1.707A1 1 0 0 1 .21.387z"/>\n' +
        '            </svg>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="unsupported-device__image-wrapper">\n' +
        '          <div class="unsupported-device--image"></div>\n' +
        '          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="76" viewBox="0 0 53 76">\n' +
        '            <path fill="#009FDB" fill-rule="nonzero"\n' +
        '                  d="M7.383 68.488a1 1 0 0 1-.247 1.306l-.096.066-1.951 1.171h34.396l.117.006a1 1 0 0 1 .876.876l.007.117-.007.116a1 1 0 0 1-.876.877l-.117.006-34.301.001 1.856 1.113a1 1 0 0 1-.925 1.769l-.104-.055-3.57-2.141a2 2 0 0 1-.136-3.339l.137-.09 3.57-2.142a1 1 0 0 1 1.37.343zm-3.881 3.495l-.032.018.03.019.002-.037zM5.998.865h28.989a5.998 5.998 0 0 1 5.993 5.773l.004.225v49.98a5.998 5.998 0 0 1-5.772 5.994l-.225.005H5.997a5.998 5.998 0 0 1-5.993-5.773L0 56.844V28.505a1 1 0 0 1 1.993-.116l.006.116v28.339a3.999 3.999 0 0 0 3.8 3.993l.199.005h28.989a3.999 3.999 0 0 0 3.993-3.799l.005-.2V6.864a3.999 3.999 0 0 0-3.799-3.994l-.2-.005H5.999a3.999 3.999 0 0 0-3.994 3.8L2 6.862V17.5a1 1 0 0 1-1.992.116L0 17.501V6.863A5.998 5.998 0 0 1 5.773.869l.225-.004h28.989zM50.623.834l.09.137 2.142 3.57a1 1 0 0 1-1.649 1.125l-.066-.097-1.171-1.95v56.387l-.006.116a1 1 0 0 1-.876.877l-.117.006-.116-.006a1 1 0 0 1-.877-.877l-.006-.116-.001-56.293-1.113 1.856a1 1 0 0 1-1.769-.925l.055-.104L47.284.97a2 2 0 0 1 3.339-.136zM32.055 5.572A3.999 3.999 0 0 1 36.05 9.37l.005.2v38.86a1 1 0 0 1-1.993.117l-.007-.116V9.57a2 2 0 0 0-1.85-1.993l-.149-.006H9.064a2 2 0 0 0-1.994 1.85l-.005.15v43.983a2 2 0 0 0 1.85 1.993l.149.006h11.15a1 1 0 0 1 .117 1.992l-.116.007H9.064a3.999 3.999 0 0 1-3.994-3.799l-.005-.2V9.57a3.999 3.999 0 0 1 3.8-3.993l.199-.005h22.991zm-5.732 49.98a1 1 0 0 1 .116 1.993l-.116.007h-2.674a1 1 0 0 1-.117-1.992l.117-.007h2.674zm3.998 0a1 1 0 0 1 .117 1.993l-.117.007h-.674a1 1 0 0 1-.117-1.992l.117-.007h.674zM26.4 35.75a1 1 0 0 1-.092 1.41c-3.404 2.988-7.256 2.988-11.248.055a1 1 0 0 1 1.184-1.611c3.263 2.398 6.075 2.398 8.745.054a1 1 0 0 1 1.41.092zm-11.248-9.73a1 1 0 0 1 .993.883l.007.116v3a1 1 0 0 1-1.993.116l-.006-.117v-2.999a1 1 0 0 1 1-1zm10.202.742c.944 0 1.829.335 2.627.979a1 1 0 0 1-1.256 1.556c-.454-.366-.901-.536-1.371-.536s-.918.17-1.372.536a1 1 0 1 1-1.255-1.556c.797-.644 1.683-.98 2.627-.98zM1 20.337a1 1 0 0 1 1 1v3.428a1 1 0 1 1-2 0v-3.428a1 1 0 0 1 1-1zM48.999 2l-.018.03.035.001L48.999 2z"/>\n' +
        '          </svg>\n' +
        '        </div>\n' +
        '        <div class="unsupported-device__text-wrapper">\n' +
        '          <div class="unsupported-device--text">\n' +
        '            <p>Please be advised that this website has not been optimized for your device\'s resolution.</p>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="unsupported-device__button-wrapper">\n' +
        '          <div class="unsupported-device--button">\n' +
        '            <a class="unsupported-device--button-link set_supported" href="javascript:_skipTooSmall()">Got it</a>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>';

        return html;
    }
})();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
