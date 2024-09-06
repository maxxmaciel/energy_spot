export type nullOrUndefined = null | undefined;

export interface ResponseSuccess {
  success: boolean;
}


export namespace VTT {
  export interface ResponseEXT<T,> extends ResponseSuccess {
    data: T;
    success: boolean;
    error: string;
    foundRows: number;
    message: string | null;
    metaData: string | null;
  }
}