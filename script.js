function CreateInput() {
    var controlAddIn = document.getElementById('controlAddIn');

    var control = document.createElement('div');
    control.id = 'control1';
    control.class = 'control';

    var caption = document.createElement('div');
    caption.id = 'caption1';
    caption.class = 'caption';
    caption.textContent = 'Item No.';

    var value = document.createElement('div');
    value.id = 'value1';
    value.class = 'value';

    var input = document.createElement('input');
    input.id = 'input1';
    input.type = 'Text';

    value.appendChild(input);
    control.appendChild(caption);
    control.appendChild(value);
    controlAddIn.appendChild(control);
}

function EnableInput() {
    var input = document.getElementById('input1');
    input.disabled = false;

    input.addEventListener('keydown', function InputKeydownHandler(event) {
        if (event.key === 'Enter') {
            this.removeEventListener('keydown', InputKeydownHandler);
            input.disabled = true;

            Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnConfirmInput', [input.value]);
        }
    });
}

function ObserveDialogAppearance() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            const dialog = window.parent.document.querySelector('[class*="message-dialog"]');
            if (dialog) {
                ObserveDialogDisappearance(dialog);
            }
        });
    });
    observer.observe(window.parent.document.body, { childList: true, subtree: true });
}

function ObserveDialogDisappearance(dialog) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
            if (!window.parent.document.body.contains(dialog)) {
                observer.disconnect();

                var input = document.getElementById('input1');
                if (input) {
                    input.disabled = false;
                    input.focus();
                    input.select();
                };
            }
        });
    });
    observer.observe(window.parent.document.body, { childList: true, subtree: true });
}