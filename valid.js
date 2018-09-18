window.onload = function () {

    function setError(element) {
        element.classList.add('error');
        element.parentElement.classList.add('error');
        $(element).effect('bounce', 1000);
        $( "#dialog" ).dialog();
    }

    function isValidName(str) {
        return /^[a-zA-ZА-Яа-яЁё\s]+$/.test(str);
    }

    function isValidPhone(str) {
        return /\+\d\([\d]{3}\)\d{3}-\d{4}/.test(str);
    }

    function isValidEmail(str) {
        return /^((\b-|\b\.)?[a-z])+@[a-z]+\.[a-z]{2,4}$/.test(str);
    }

    function isValidTextReview(str) {
        return /.{2,}/.test(str);
    }

    document.getElementById('send').addEventListener('click', function () {
        var $dialog = $('#dialog');
        $dialog.empty();
        var inputs = document.querySelectorAll('.item');
        for(var i = 0; i < inputs.length; i++){
            var str = inputs[i].value;
            if(inputs[i].classList.contains('name') && !isValidName(str)) {
                $dialog.append('<p>Ошибка в поле имя</p>');
                setError(inputs[i]);
            }
            if(inputs[i].classList.contains('phone') && !isValidPhone(str)) {
                $dialog.append('<p>Ошибка в поле телефон</p>');
                setError(inputs[i]);

            }
            if(inputs[i].classList.contains('email') && !isValidEmail(str)){
                $dialog.append('<p>Ошибка в поле емейл</p>');
                setError(inputs[i]);
            }
            if(inputs[i].classList.contains('textReview') && !isValidTextReview(str)){
                $dialog.append('<p>Ошибка в поле текст отзыва</p>');
                setError(inputs[i]);
            }
            inputs[i].addEventListener('focus', function () {
                this.classList.remove('error');
                this.parentElement.classList.remove('error');
            });
        }
    });

    $( function() {
        $( "#datepicker" ).datepicker({
            changeMonth: true,
            changeYear: true,
            dayNamesMin: ["ВС" , "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
            firstDay: 1,
            maxDate: 0,
            dateFormat: "dd.mm.yy"
        });
    } );
}


















