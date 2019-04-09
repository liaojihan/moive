
IntegerToWan = number => {
    let box = '';
    if (number > Math.pow(10, 8)) {
        let box_count = (number / Math.pow(10, 8)).toFixed(2);
        box += box_count + '亿';
    }else if (Math.pow(10, 4) < number < Math.pow(10, 8)) {
        let box_count = (number / Math.pow(10, 4)).toFixed(2);
        box += box_count + '万';
    }else {
        box += number;
    }
    return box;
};

generateScore = number => {
    return number + '分';
};

saveCookie = (key, value) => {
  $.cookie(key, value, {expires: 1, path: '/'});
};

getCookie = key => {
    let cookieValue = $.cookie(key);
    if (cookieValue) {
        return cookieValue;
    }
    return null;
};