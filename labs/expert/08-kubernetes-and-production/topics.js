import { exercise01 } from "./01_containers_and_kubernetes_lab.js";
import { exercise02 } from "./02_graceful_shutdown_and_scaling_lab.js";
import { exercise03 } from "./03_observability_and_slos_lab.js";

export const labTitle = "Kubernetes and Production Operations";

export const topics = [
  { name: "containers-and-kubernetes", run: exercise01 },
  { name: "graceful-shutdown-and-scaling", run: exercise02 },
  { name: "observability-and-slos", run: exercise03 },
];
