// https://github.com/usama8800/SumoSustain

defaultOptions = {
    clearDefaults: 1
};

jQuery.fn.extend({
    SumoSustain: function (options = defaultOptions) {

        $(this).each(function (key, e) {
            let cookie = getCookie(e.name);

            if (options.clearDefaults === 2) {
                e.sumo.unSelectAll();
            }
            if (!cookie || cookie === '') return;
            if (options.clearDefaults === 1) {
                e.sumo.unSelectAll();
            }

            cookie = cookie.split(',');
            for (let i = 0; i < cookie.length; i++) {
                e.sumo.selectItem(+cookie[i]);
            }
        });
        // $(this).on('sumo:closed', sumo => save(sumo.target));
        window.onbeforeunload = () => save($(this)[0]);
    }
});

function save(target) {
    let cookieval = [];
    $.each(target.selectedOptions, function (key, value) {
        cookieval.push(value.index);
    });
    setCookie(target.name, cookieval);
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
