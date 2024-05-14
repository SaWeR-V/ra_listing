export function CurrencyCheck(params) {
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