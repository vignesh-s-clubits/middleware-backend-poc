import { EmailMessage } from "@azure/communication-email";
export declare const senderAddress: string;
export declare const sendEmail: (message: EmailMessage) => Promise<void>;
