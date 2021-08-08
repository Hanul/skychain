export default interface Tx {
    hash: string;
    prev: string;
    time: number;
    contract: string;
    method: string;
    args: any;
}