// https://github.com/usama8800/SumoSustain

defaultOptions = {
    clearDefaults: 1
};

jQuery.fn.extend({
    SumoSustain: function (options = defaultOptions) {
        $(this).each(function (key, e) {
            let cookie = getCookie(getCookieName(e));

            if (options.clearDefaults === 2) {
                unselectAll(e.sumo);
            }
            if (!cookie || cookie === '') return;
            if (options.clearDefaults === 1) {
                unselectAll(e.sumo);
            }

            cookie = cookie.split(',');
            for (let i = 0; i < cookie.length; i++) {
                try {
                    e.sumo.selectItem(+cookie[i]);
                } catch (e) {
                    // console.error('SelectItem')
                }
            }
        });
        $(this).on('change', sumo => save(sumo.target));
        // window.onbeforeunload = window.onunload = window.onpagehide = () => save($(this)[0]);
    }
});

function unselectAll(sumo) {
    for (let i = 0; i < sumo.E[0].length; i++) {
        try {
            sumo.unSelectItem(i);
        } catch (err) {
            // console.error('UnselectItem');
        }
    }
}

function save(target) {
    let cookieval = [];
    $.each(target.selectedOptions, function (key, value) {
        cookieval.push(value.index);
    });
    setCookie(getCookieName(target), cookieval);
}

function getCookieName(e){
    if(e.id === '') return e.name;
    return e.id;
}

function setCookie(key, value) {
    let expires = new Date();
    expires.setTime(expires.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    let keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
