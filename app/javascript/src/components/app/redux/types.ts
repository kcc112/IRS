export interface AppMeta {
  error?: Error;
  showModal: boolean;
  showLoader: boolean;
  showAlert: boolean;
  alertMessag: string;
}

export interface ApiProcess {
  loader: boolean;
}