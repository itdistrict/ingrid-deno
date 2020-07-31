class Response {
    status: string;
    status_code: number;
    options: Record<string, string>;
    data: any;

    constructor() {
        this.status = "Successfully processed";
        this.status_code = 200;
        this.options = {};
    }
}

type Data = {
    [name: string]: string[]
};

export { Response, Data }