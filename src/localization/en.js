function getYear() {
    const date = new Date().getFullYear()
    return date
}
const en = {
    'title': 'en title',
    'copyright': `© 2002-${getYear()} Azər Türk Bank`,
}

export default en

