﻿var api_get_key = require("apiGet");
let orders = Aliases.Orders;
let mainForm = orders.MainForm;
let orderForm = orders.OrderForm;
let groupBox = orderForm.Group;
let customerText = groupBox.Customer;
let zipText = groupBox.Zip;

function test()
{
  TestedApps.Orders.Run(1, true);
  mainForm.ToolBar.ClickItem(4, false);
  customerText.SetText(api_get_key.get_activity());
  zipText.SetText(api_get_key.get_key());
  orderForm.ButtonOK.ClickButton();
  mainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}
