import { ReactNode } from "react";

declare global {
    interface Number {
        formatToSeconds: () => string;
    }
    interface Date {
        roundDateUp: () => Date;
    }
}

// eslint-disable-next-line no-extend-native
Number.prototype.formatToSeconds = function (): string {
    var num = this as number;
    if (isNaN(num)) {
        num = 0
    }

    const seconds = num / 1000;

    const secondsStr = seconds.toFixed(3);
    const [wholePart, fractionalPart] = secondsStr.split('.');

    const firstDigit = parseInt(fractionalPart[0]);
    const secondDigit = parseInt(fractionalPart[1]);
    const thirdDigit = parseInt(fractionalPart[2]);

    let roundedFirstDigit = firstDigit;
    let roundedSecondDigit = secondDigit;
    if (thirdDigit >= 5) {
        if (roundedSecondDigit === 9) {
            roundedSecondDigit = 0;
            roundedFirstDigit += 1;
        } else {
            roundedSecondDigit += 1;
        }
    }

    const result = `${wholePart},${roundedFirstDigit}${roundedSecondDigit}`;
    return result;
};

// eslint-disable-next-line no-extend-native
Date.prototype.roundDateUp = function (): Date {
    const date = new Date(this.valueOf());
    // Add one hour
    date.setHours(date.getHours() + 1);
    // Reset minutes, seconds and milliseconds
    date.setMinutes(0, 0, 0);
    return date;
}


interface IStd {
    formatEval: (str: any) => any;
    formatTime(date: Date): string
    formatDate: (date: Date, separator: string) => string;
    isNull: (a: any) => boolean;
    isDevelopment: boolean;
    calcPercent: (n1: number, n2: number) => string;
    formatNumber: (v1: number) => string;
    groupBy: <T>(array: T[], getKey: (item: T) => string | number) => Record<string, T[]>;
    isObject: (value: any) => boolean;
    validateJSON<T extends object>(jsonData: T): jsonData is T;
    createDefaultValues<T extends object>(): T
    validateResponse<T extends object>(jsonData: any, classConstructor: { new(): T }): jsonData is T;
    msToS: (ms: number) => number;
    msToM: (ms: number) => ReactNode;
    formatDateBRL(date: string): string

}

interface Dev {
    log: (...args: any[]) => any
}

const dev: Dev = {
    log: (...args) => {
        if (std.isDevelopment) console.log(...args);
    }
}



class CStd implements IStd {
    isDevelopment: boolean;

    constructor() {
        this.isDevelopment = process.env.NODE_ENV === 'development';
    }
    formatEval(str: any) {
        if (typeof str === 'string') {
            return eval("(" + str + ")");
        } else {
            return str;
        }
    }
    isNull(a: any): boolean {
        return a === null || a === undefined;
    }
    formatTime(date: Date): string {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    formatDate(date: Date, separator: string = "-"): string {
        //    if(!std.isNull(date)) {
        const year: number = date.getFullYear();
        let month: number | string = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day: number | string = date.getDate();
        day = day < 10 ? '0' + day : day;
        return year + separator + month + separator + day
        //  }
        //   return ''
    }
    formatDateBRL(date: string): string {
        const dateRegex = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/;
        if (!dateRegex.test(date)) {
            throw new Error("A data deve estar no formato yyyy-mm ou yyyy-mm-dd");
        }

        const match = date.match(dateRegex);
        if (!match) {
            throw new Error("A data não pôde ser analisada corretamente");
        }

        const [, year, month, day] = match;

        if (day) {
            return `${day}/${month}/${year}`; // formato yyyy-mm-dd
        } else {
            return `${month}/${year}`; // formato yyyy-mm
        }
    }
    calcPercent(v1: number, v2: number) {
        if (v2 === 0) {
            return "";
        } else {
            const percentual = (v1 / v2) * 100;
            return percentual.toFixed(2) + "%";
        }
    }
    isObject(value: any): boolean {
        return value !== null && typeof value === 'object';
    }
    formatNumber(n: number) {
        if (typeof n !== 'number') {
            throw new Error('O argumento fornecido não é um número.');
        }

        const roundedNumber = Math.min(Math.round(n * 10000) / 10000, 9999);
        const formattedNumber = roundedNumber.toFixed(4);
        return formattedNumber.length > 4 ? formattedNumber.replace('.', ',') : formattedNumber;

    }
    groupBy<T>(array: T[], getKey: (item: T) => string | number): Record<string, T[]> {
        return array.reduce((result, currentItem) => {
            const key = getKey(currentItem);
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(currentItem);
            return result;
        }, {} as Record<string, T[]>);
    }

    validateResponse<T extends object>(jsonData: any, classConstructor: { new(): T }): jsonData is T {
        const instance = new classConstructor();
        const keys = Object.keys(instance);

        for (const key of keys) {
            if (jsonData[key] === undefined) {
                return false;
            }
        }

        for (const key in instance) {
            if (Array.isArray(instance[key])) {
                if (!Array.isArray(jsonData[key])) {
                    return false;
                }
                const array = jsonData[key] as any[];
                for (const item of array) {
                    if (!std.validateResponse(item, classConstructor)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
    validateJSON<T extends object>(jsonData: T): jsonData is T {

        if (typeof jsonData !== 'object' || jsonData === null) {
            return false;
        }

        const keys = Object.keys(jsonData);

        for (const key of keys) {
            const value = jsonData[key as keyof T];
            if (typeof value !== 'string' && typeof value !== 'number') {
                return false;
            }
        }

        return true;
    }
    createDefaultValues<T extends object>(): T {
        const defaults = {} as T; // Utilizamos type assertion para inicializar defaults como um objeto do tipo T

        function setDefaults(template: any, defaultsObj: any): any {
            for (const key in template) {
                const value = template[key];
                switch (typeof value) {
                    case 'string':
                        defaultsObj[key] = '';
                        break;
                    case 'number':
                        defaultsObj[key] = 0;
                        break;
                    case 'boolean':
                        defaultsObj[key] = false;
                        break;
                    case 'object':
                        if (value === null) {
                            defaultsObj[key] = null;
                        } else if (Array.isArray(value)) {
                            defaultsObj[key] = [];
                        } else {
                            defaultsObj[key] = setDefaults(value, {});
                        }
                        break;
                    default:
                        defaultsObj[key] = null;
                        break;
                }
            }
            return defaultsObj;
        }

        return setDefaults(defaults, {}) as T;
    }
    msToS(ms: number) { return ms / 1000 }
    msToM(ms: number) {
        const horas: number = Math.floor(ms / (1000 * 60 * 60));
        const minutos: number = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const segundos: number = Math.floor((ms % (1000 * 60)) / 1000);

        if (horas === 0) {
            if (minutos === 0) {
                return <>{segundos === 1 ? segundos + ' segundo' : segundos + ' segundos'}</>;
            } else {
                if (segundos === 0) {
                    return <>{minutos === 1 ? minutos + ' minuto ' : minutos + ' minutos '}<br /></>;
                } else {
                    return <>{minutos === 1 ? minutos + ' minuto ' : minutos + ' minutos '} <br />{segundos === 1 ? segundos + ' segundo' : segundos + ' segundos'}</>;
                }
            }
        } else {
            return <>{horas === 1 ? horas + ' hora' : horas + ' horas'}<br />{minutos === 1 ? minutos + ' minuto' : minutos + ' minutos'}<br />{segundos === 1 ? segundos + ' segundo' : segundos + ' segundos'}</>;
        }
    }
}

const std = new CStd();
export { dev, std };

