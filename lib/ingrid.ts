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
    data: IngridResult;

    constructor() {
        super();
        this.data = new IngridResult();
    }
}

class Response extends BaseResponse {
    data: any;

    constructor() {
        super();
    }
}

class IngridResult {
    Data?: IngridData;
    List?: IngridData[];

    constructor() {
        this.Data = {};
        this.List = new Array<IngridData>();
    }
}

type IngridData = {
    [name: string]: string[]
};

export { Response, IngridResponse, IngridResult, IngridData }