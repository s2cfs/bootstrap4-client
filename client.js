
(function() {
    function getNode(root, query) {
        return root.querySelector(query) || {
            style: {}
        };
    }
    var toEmail = cf.a[0],
        apiKey = cf.a[1],
        apiUrl = '/todo',
        contactForms = document.querySelectorAll('form[data-form]');
    [].forEach.call(contactForms, function(form) {
        var emailInput = getNode(form, 'input[name="email"]'),
            subjectInput = getNode(form, 'input[name="subject"]'),
            messageTextarea = getNode(form, 'textarea[name="message"]'),
            submitButton = getNode(form, 'button[type="submit"]'),
            formId = form.dataset.form,
            alertSuccess = getNode(document, '.alert[data-alert-type="success"][data-form="' + formId + '"]'),
            alertInvalid = getNode(document, '.alert[data-alert-type="invalid"][data-form="' + formId + '"]'),
            statusAlerts = document.querySelectorAll('.alert[data-status-reg-exp][data-form="' + formId + '"]');
        function handleSubmit(event) {
            event.preventDefault();
            event.stopPropagation();
            var isFormValid = form.checkValidity();
            form.classList.add('was-validated');
            if (isFormValid === false) {
                alertInvalid.style.display = 'block';
                return;
            }
            var message = messageTextarea.value,
                subject = subjectInput.value,
                email = emailInput.value,
                jsonPayload = JSON.stringify({
                    message,
                    subject,
                    email
                }),
                xhr = new XMLHttpRequest();
            submitButton.disabled = true;
            xhr.open('POST', apiUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('x-api-key', apiKey);
            xhr.setRequestHeader('to-email-address', toEmail);
            xhr.onload = function() {
                submitButton.disabled = false;
                var status = xhr.status;
                if (status === 200) {
                    alertSuccess.style.display = 'block';
                    return;
                }
                [].forEach.call(statusAlerts, function(alert) {
                    var statusRegexp = new RegExp(alert.dataset.statusRegExp);
                    if (statusRegexp.test(String(status))) {
                        alert.style.display = 'block';
                    }
                });
                return;
            };
            xhr.send(jsonPayload);
        }
        form.addEventListener('submit', handleSubmit, false);
    });
})();
