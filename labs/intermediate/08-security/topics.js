import { exercise01 } from "./01_authentication_and_authorization_lab.js";
import { exercise02 } from "./02_owasp_for_apis_lab.js";
import { exercise03 } from "./03_secrets_and_tls_lab.js";
import { exercise04 } from "./04_supply_chain_security_lab.js";

export const labTitle = "Security";

export const topics = [
  { name: "authentication-and-authorization", run: exercise01 },
  { name: "owasp-for-apis", run: exercise02 },
  { name: "secrets-and-tls", run: exercise03 },
  { name: "supply-chain-security", run: exercise04 },
];
