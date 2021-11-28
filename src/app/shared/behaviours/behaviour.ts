export interface Behaviour {
  id: string;
  executeWithPayload(payload: any): void;
}
