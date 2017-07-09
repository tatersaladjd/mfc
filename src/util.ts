export function convertToBoolean(input: string): boolean | undefined {
    try {
        return JSON.parse(input);
    }
    catch (e) {
        return undefined;
    }
}

export function convertToNumber(input: string): number | undefined {
    try {
        return JSON.parse(input);
    }
    catch (e) {
        return undefined;
    }
}