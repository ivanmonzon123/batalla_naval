export function GetCode(min=11111, max=99999) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}