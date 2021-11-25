export const removeExtraSpace = (s: string) =>
    s
        .toLowerCase()
        .trim()
        .split(/ +/)
        .join("");

export const searchFilter = (data: string[], filterQuery: string) => data.filter(item => removeExtraSpace(item).includes(removeExtraSpace(filterQuery)));