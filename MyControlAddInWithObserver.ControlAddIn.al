controladdin MyControlAddInWithObserver
{
    RequestedHeight = 300;
    MinimumHeight = 300;
    MaximumHeight = 300;
    RequestedWidth = 500;
    MinimumWidth = 500;
    MaximumWidth = 580;
    VerticalStretch = true;
    VerticalShrink = false;
    HorizontalStretch = true;
    HorizontalShrink = false;
    Scripts =
        './script.js';
    StyleSheets =
        './style.css';
    StartupScript = './startup.js';

    event OnConfirmInput(InputText: Text)

    procedure EnableInput()
}