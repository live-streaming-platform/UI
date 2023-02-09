export class UriComponentBuilder {
    static fromHttpUrl = (url: string): UriComponent => {
        return new UriComponent(url);
    }
}

class UriComponent {
    private readonly baseUrl: string;
    private path?: string;
    private pathParams?: Map<string, any>;
    private static PATH_PARAM_BEGIN_SYMBOL = '{';
    private static PATH_PARAM_END_SYMBOL = '}';
    private static URI_DIVIDER_SYMBOL = '/';
    private static PROTOCOL_DIVIDER = '://';

    constructor(baseUrl: string) {
        const baseUriComponents = baseUrl.split(UriComponent.PROTOCOL_DIVIDER);
        let protocol = baseUriComponents[0];
        this.baseUrl = protocol
            .concat(UriComponent.PROTOCOL_DIVIDER)
            .concat(UriComponent.fixPath(baseUriComponents[1]))
    }

    private static fixPath(path: string): string {
        return path
            .split(UriComponent.URI_DIVIDER_SYMBOL)
            .filter(item => item && item.trim() !== "")
            .join(UriComponent.URI_DIVIDER_SYMBOL)

    }

    withPath(path: string): UriComponent {
        this.path = UriComponent.fixPath(path)
        return this;
    }

    setPathParam(param: string, value: any): UriComponent {
        if (!this.pathParams) {
            this.pathParams = new Map<string, any>();
        }

        this.pathParams.set(param, value);

        return this;
    }

    toString(): string {
        let url: string = this.path ? this.baseUrl.concat(UriComponent.URI_DIVIDER_SYMBOL).concat(this.path) : this.baseUrl;

        if (this.pathParams) {
            this.pathParams.forEach((value, key) => {
                url.replace(UriComponent.PATH_PARAM_BEGIN_SYMBOL + key + UriComponent.PATH_PARAM_END_SYMBOL, value);
            })
        }
        return url;
    }

}

