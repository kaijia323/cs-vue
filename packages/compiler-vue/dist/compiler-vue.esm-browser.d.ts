declare interface IParams {
    Vue?: any;
    ref?: any;
    reactive?: any;
    computed?: any;
    watch?: any;
}

declare type IResult = (params: IParams) => {
    vm: any;
    style: string;
};

export declare const startCompiler: (content: string) => IResult;

export { }
