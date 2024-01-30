export function getValueByPath(obj: object, path: string): any {
    let properties = Array.isArray(path) ? path : path.split('.');
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
}
