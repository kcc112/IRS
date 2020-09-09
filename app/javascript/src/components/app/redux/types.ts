import { AlertType } from "../../shared/alerts/types";

export interface AppMeta {
  error?: Error;
  showModal: boolean;
  showLoader: boolean;
  showAlert: boolean;
  alert: { message: string; type: AlertType };
}

export interface ApiProcess {
  loader: boolean;
}