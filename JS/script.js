function convert() {
const cmVal = Number(document.getElementById("input").value);
const inchVal = cmVal / 2.54
const result = document.getElementById("result")
result.innerHTML = inchVal.toFixed(2) + " inches"
}

function convertCentimetre() {
    const val1 = Number(document.getElementById("input-cm").value);
    const cmVal1 = val1 * 2.54
    const result1 = document.getElementById("resultcm")
    result1.innerHTML = cmVal1.toFixed(2) + " cm"
}

function convertMillimetre() {
    const val2 = Number(document.getElementById("input-mm").value)
    const mmVal = val2 * 10
    const result2 = document.getElementById("resultmm")
    result2.innerHTML = mmVal.toFixed(0) + " mm"
}

function convertMetre() {
    const val3 = Number(document.getElementById("input-km").value)
    const valKm = val3 * 1000
    const result4 = document.getElementById("resultMetre")
    result4.innerHTML = valKm.toFixed(0) + " Metre"
}

function convertKilometre() {
    const val5 = Number(document.getElementById("input-m").value)
    const valMetre = val5 / 1000
    const result5 = document.getElementById("resultKilometre")
    result5.innerHTML = valMetre.toFixed(3) + "km"
}

function convertFoot() {
    const val6 = Number(document.getElementById("input-f").value)
    const foot = val6 * 12
    const result6 = document.getElementById("resultFoot")
    result6.innerHTML = foot.toFixed(1) + " inches"
}