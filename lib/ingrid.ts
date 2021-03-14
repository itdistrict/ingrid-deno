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
    data: IngridMsg;

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

class IngridMsg {
    Class?: string;
    Operation?: string;
    Control?: IngridData;
    Data?: IngridData;
    List?: IngridData[];
    Result?: IngridResult;

    constructor() {
        this.Control = {};
        this.Data = {};
        this.List = new Array<IngridData>();
    }
}
class IngridResult {
    Code?: int;
    Message?: string;
    Control?: IngridData;
    Data?: IngridData;
    List?: IngridData[];
    
    constructor() {
        this.Control = {};
        this.Data = {};
        this.List = new Array<IngridData>();
    }
}

type IngridData = {
    [name: string]: string[]
};

export { Response, IngridResponse, IngridMsg, IngridResult, IngridData }
