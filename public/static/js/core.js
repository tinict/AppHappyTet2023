export function Render ([first, ...res], ...values) {
    return values.reduce((acc, current) => {
        return acc.concat(current, res.shift());
    }, [first]).filter((fill) => {
        return fill !== true && fill !== false;
    }).join('');;
}