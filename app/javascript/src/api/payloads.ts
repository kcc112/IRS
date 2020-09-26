export interface EnterpriseEditPayload {
  name: string;
  description: string;
}

export interface EnterpriseCreatePayload {
  name: string;
  description: string;
}

export interface UserInformationsEditPayload {
  name: string;
  surname: string;
  phone_number: string;
}

export interface UserRoleEditPayload {
  role: {
    value: string;
  };
}