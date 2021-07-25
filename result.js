function textView(num) {
    document.form.result.value = document.form.result.value + num
}
function deleteSymbols() {
    document.form.result.value = ""
}
function summ() {
    let nummeration = document.form.result.value
    if (nummeration) {
        document.form.result.value = eval(nummeration)
    }
}

