export class RequestRibbon {
  static async ApproveClicked(formContext: Xrm.FormContext): Promise<void> {
    const result = await Xrm.Navigation.openConfirmDialog({
      title: "Approval Confirmation",
      text: "Are you sure you want to approve this request?",
    });

    if (!result.confirmed) return;

    Xrm.Utility.showProgressIndicator("Approving request...");
    try {
      const requestid = formContext.data.entity.getId();
      Xrm.WebApi.updateRecord("vnug_request", requestid, { statuscode: 100000001 });
      Xrm.Utility.closeProgressIndicator();
    } catch (ex) {
      Xrm.Utility.closeProgressIndicator();
      Xrm.Navigation.openErrorDialog({ details: ex, message: `Failed to approve the request: ${ex.message}` });
    }
  }
}
