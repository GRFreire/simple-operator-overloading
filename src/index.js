function $(a, op, b) {
    return a[op](b);
}

globalThis['$'] = $;