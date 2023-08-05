export default function cleanSet(set, startString) {
    if (startString === undefined || startString.length === 0) {
        return '';
      }
 
    const stringArray = []
    for (const value of set) {
        if (value.startsWith(startString)) {
            stringArray.push(value.slice(startString.length))
        }
    }
    return stringArray.join('-')
}