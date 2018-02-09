function SetDefaultValidation() {
    $.validator.setDefaults({
        errorElement: "span", // contain the error msg in a small tag
        errorClass: 'help-block',
        errorPlacement: function (error, element) {// render error placement for each input type
            if (element.attr("type") == "radio" || element.attr("type") == "checkbox") {// for chosen elements, need to insert the error after the chosen container
                error.insertAfter($(element).closest('.form-group').children('div').children().last());
            } else if (element.attr("name") == "card_expiry_mm" || element.attr("name") == "card_expiry_yyyy") {
                error.appendTo($(element).closest('.form-group').children('div'));
            } else {
                error.insertAfter(element);
                // for other inputs, just perform default behavior
            }
        },
        ignore: ':hidden',
        success: function (label, element) {
            label.addClass('help-block valid');
            // mark the current input as valid and display OK icon
            $(element).closest('.form-group').removeClass('has-error');
        },
        highlight: function (element) {
            $(element).closest('.help-block').removeClass('valid');
            // display OK icon
            $(element).closest('.form-group').addClass('has-error');
            // add the Bootstrap error class to the control group
        },
        unhighlight: function (element) {// revert the change done by hightlight
            $(element).closest('.form-group').removeClass('has-error');
            // set error class to the control group
        }
    });
};

jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});


function ValForm() {
    var form = $('#FormEdit');
    var errorHandler = $('.errorHandler', form);

    form.validate({
        rules: {
            Cedula: {
                required: true
               
            },
            Nombre: {
                required: true,

            },

            Provincia: {
                required: true

            },

            Municipio: {
                required: true
            
            },

            Cometario: {
                required: true
            
            },
            RNC: {
                required: true

            },

            PosicionCargo: {
                required: true

            },



        },
        messages: {
            Cedula: {
                required: "Campo es requerido"
                
            },
            Nombre: {
                required: "Campo es requerido"

            },
            Provincia: {
                required: "Campo es requerido"

            },

            Municipio: {
                required: "Campo es requerido"

            },

            Cometario: {
                required: "Campo es requerido"

            },
            RNC: {
                required: "Campo es requerido"

            },

            PosicionCargo: {
                required: "Campo es requerido"

            },

        },
        submitHandler: function (form) {
            errorHandler.hide();
            //LoadingShow();
            var $form = $("#FormEdit"),
                formData = new FormData(),
                params = $form.serializeArray();

            $.each(params, function (i, val) {
                formData.append(val.name, val.value);
            });


            var file = document.getElementById("archivo");
            formData.append('file', file.files[0]);


            $.ajax({
                type: "POST",
                url:  "/Home/Guardar",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success: function (result) {

                    location.reload();
                },
                error:
                    function (result) {
                       
                    }
            });




        },
        invalidHandler: function (event, validator) { //display error alert on form submit
            errorHandler.show();
        }
    });
};


$(document).ready(function () {
    SetDefaultValidation();
    ValForm();
});