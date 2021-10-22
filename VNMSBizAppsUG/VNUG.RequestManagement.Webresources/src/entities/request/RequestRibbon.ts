import { EntityReference, setMetadataCache, XrmContextCdsServiceClient } from "dataverse-ify";
import {
  vnug_processrequestapprovalMetadata,
  vnug_processrequestapprovalRequest,
} from "../../dataverse-gen/actions/vnug_processrequestapproval";
import { vnug_requestMetadata } from "../../dataverse-gen/entities/vnug_Request";
import { metadataCache } from "../../dataverse-gen/metadata";

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
      await formContext.data.refresh(true);
    } catch (ex) {
      Xrm.Utility.closeProgressIndicator();
      Xrm.Navigation.openErrorDialog({ details: ex, message: `Failed to approve the request: ${ex.message}` });
    }
  }

  static async RejectClicked(formContext: Xrm.FormContext): Promise<void> {
    const result = await Xrm.Navigation.openConfirmDialog({
      title: "Approval Confirmation",
      text: "Are you sure you want to reject this request?",
    });

    if (!result.confirmed) return;

    Xrm.Utility.showProgressIndicator("Rejecting request...");
    try {
      setMetadataCache(metadataCache);

      const requestid = formContext.data.entity.getId();

      const request = {
        logicalName: vnug_processrequestapprovalMetadata.operationName,
        entity: new EntityReference(vnug_requestMetadata.logicalName, requestid),
        Operation: "reject",
      } as vnug_processrequestapprovalRequest;

      const service = new XrmContextCdsServiceClient(Xrm.WebApi);
      const response = await service.execute(request);
      const completedOn = response["CompletedOn"] as string;
      const completedOnDate = new Date(completedOn);

      Xrm.Utility.closeProgressIndicator();

      Xrm.Navigation.openAlertDialog({
        title: "Request Rejected",
        text: `Request is rejected successfully on: ${completedOnDate.toLocaleString()}`,
      });
    } catch (ex) {
      Xrm.Utility.closeProgressIndicator();
      Xrm.Navigation.openErrorDialog({ details: ex, message: `Failed to reject the request: ${ex.message}` });
    }
  }
}
