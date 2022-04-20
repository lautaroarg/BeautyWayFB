export interface IMessage {
    DocId?: string;
    FromId?: string;
    ToId?: string;
    Text?: string;
    SentOn?: number;
    Status?: number;

    // Status
    // 0: Sending
    // 1: Sent
    // 2: Deliverd
    // 3: Seen
}
