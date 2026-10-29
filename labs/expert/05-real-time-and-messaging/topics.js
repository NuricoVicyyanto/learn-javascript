import { exercise01 } from "./01_websockets_lab.js";
import { exercise02 } from "./02_server_sent_events_lab.js";
import { exercise03 } from "./03_message_brokers_lab.js";

export const labTitle = "Real-time and Messaging";

export const topics = [
  { name: "websockets", run: exercise01 },
  { name: "server-sent-events", run: exercise02 },
  { name: "message-brokers", run: exercise03 },
];
