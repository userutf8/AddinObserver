namespace userutf8.AddinObserverExample;
using Microsoft.Inventory.Item;

page 58200 MyPageWithUserControl
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    Caption = 'Check Item No.';

    layout
    {
        area(Content)
        {
            usercontrol(MyUserControl; MyControlAddInWithObserver)
            {
                trigger OnConfirmInput(InputText: Text)
                var
                    Item: Record Item;
                    ItemNo: Code[20];
                begin
                    ItemNo := CopyStr(InputText, 1, MaxStrLen(Item."No."));
                    Item.SetLoadFields("No.", Description);
                    if Item.Get(ItemNo) then begin
                        Message('Success! Found Item %1 %2.', Item."No.", Item.Description);
                        CurrPage.MyUserControl.EnableInput();
                    end else begin
                        Message('Fail! Not found Item %1.', ItemNo);
                        CurrPage.MyUserControl.EnableInput();
                    end;
                end;
            }
        }
    }
}