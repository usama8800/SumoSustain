$(document).ready(function () {
    $('.testselect').SumoSelect({okCancelInMulti: true});
    $('.testselect').SumoSustain();

    $('.testselect1').SumoSelect({
        okCancelInMulti: true,
        selectAll: true
    });
    $('.testselect1').SumoSustain({clearDefaults: 1});
});


