class BaseResponse {
    status: string;
    status_code: number;
    options: Record<string, string>;

    constructor() {
        this.status = "Successfully processed";
        this.status_code = 200;
        this.options = {};
    }
}

class IngridResponse extends BaseResponse {
    data: IngridResponseData;

    constructor() {
        super();
        this.data = new IngridResponseData();
    }
}

class Response extends BaseResponse {
    data: any;

    constructor() {
        super();
    }
}

class IngridResponseData {
    Data?: IngridData;
    List?: IngridData[];

    constructor() {
    }
}

type IngridData = {
    [name: string]: string[]
};

export { Response, IngridResponse, IngridResponseData, IngridData }