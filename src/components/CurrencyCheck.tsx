export function CurrencyCheck(params?: string) {
    if (params === "USD") {
        return "$";
    }
    else if (params === "EUR") {
        return "€";
    }
    else {
        return params + ' ';
    }
}