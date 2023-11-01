import { Workflow } from "deno-slack-api/types.ts";

const horasJira: Workflow = {
  // "myWorkflow" is the callback_id of the workflow
  callback_id: "horas_jira_pps",
  steps: [
    {
      type: "message",
      // use variables to insert dynamic information
      text: "Hola {{user.name}}, por favor no te olvides de cargar tus horas en JIRA",
    }
  ]
  // other fields of the workflow definition
};

export default horasJira;
