import { exercise01 } from "./01_oauth_and_oidc_lab.js";
import { exercise02 } from "./02_threat_modeling_lab.js";
import { exercise03 } from "./03_tls_and_secrets_lab.js";
import { exercise04 } from "./04_supply_chain_lab.js";

export const labTitle = "Security";

export const topics = [
  { name: "oauth-and-oidc", run: exercise01 },
  { name: "threat-modeling", run: exercise02 },
  { name: "tls-and-secrets", run: exercise03 },
  { name: "supply-chain", run: exercise04 },
];
