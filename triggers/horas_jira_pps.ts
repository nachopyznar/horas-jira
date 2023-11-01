import { Trigger } from "deno-slack-api/types.ts";
import horasJira from "../workflows/horas_jira_pps.ts";
import { TriggerTypes } from "deno-slack-api/mod.ts";

const trigger: Trigger<typeof horasJira.definition> = {
  // your TypeScript payload
  type: TriggerTypes.Scheduled, 
  name: "envio automatico horas jira", 
  workflow: `#/workflows/${horasJira.definition.callback_id}`,
  inputs: {
    channel: {
      value: "horas-jira"
    }
  },
  // set the schedule to every Friday at 12:00 PM
  // schedule: {
  //   cronExpression: "0 12 * * FRI",
  //   timezone: "America/Argentina/Buenos_Aires",
  // },
  
  schedule: {
    // Schedule the first execution 60 seconds from when the trigger is created
    start_time: new Date(new Date().getTime() + 60000).toISOString(),
    end_time: "2037-12-31T23:59:59Z",
    frequency: { type: "daily", repeats_every: 1 },
  },

  // set the message type to direct message
  messageType: "direct_message",
  filter: (user) => !user.is_bot,
};

export default trigger;
