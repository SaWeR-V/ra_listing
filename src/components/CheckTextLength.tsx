export function CheckTextLength(text?: string) {
    if (text && text.length >= 50) {
        return (text.slice(0, 50) + '...')
    }
    else {
        return text
    }
}