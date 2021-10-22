using Microsoft.Xrm.Sdk;
using System;
using System.ServiceModel;

namespace VNUG.RequestManagement.Plugins.Actions
{
    [CrmPluginRegistration("vnug_processrequestapproval",
    "vnug_request", StageEnum.PostOperation, ExecutionModeEnum.Synchronous,
    "", "PostOperation_vnug_processrequestapproval_Sync", 1,
    IsolationModeEnum.Sandbox
    )]
    public class ProcessRequestApprovalAction : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            if (context.InputParameters.Contains("Target") &&
                context.InputParameters["Target"] is EntityReference)
            {
                var targetRef = (EntityReference)context.InputParameters["Target"];
                var operation = (string)context.InputParameters["Operation"];

                var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
                var service = serviceFactory.CreateOrganizationService(context.UserId);
                var approvalStatus = new OptionSetValue(operation == "approve" ? 100000001 : 100000002);
                try
                {
                    var update = new Entity(targetRef.LogicalName)
                    {
                        Id = targetRef.Id,
                        ["statuscode"] = approvalStatus
                    };

                    service.Update(update);

                    context.OutputParameters["CompletedOn"] = DateTime.Now;
                }
                catch (FaultException<OrganizationServiceFault> ex)
                {
                    throw new InvalidPluginExecutionException("An error occurred in ProcessRequestApprovalAction.", ex);
                }
                catch (Exception ex)
                {
                    tracingService.Trace("ProcessRequestApprovalAction: {0}", ex.ToString());
                    throw;
                }
            }
        }
    }
}
