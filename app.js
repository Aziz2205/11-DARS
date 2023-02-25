const body = document.querySelector('body')
const cont = document.querySelector('.container')
const clrText = document.querySelector('.color-par')
const vl = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

function getGradient() {
    let clr = '#'
    for (let i = 0; i < 6; i++) {
        const rndmNumber = Math.trunc(Math.random() * vl.length)
        clr += vl[rndmNumber]
    }
    return clr
}

function setGradient() {
    const clr1 = getGradient()
    const clr2 = getGradient();
    const rndmDeg = Math.trunc(Math.random() * 360);
    const bgclr = `linear-gradient(
        ${rndmDeg}deg,
        ${clr1},
        ${clr2}
    )`
    body.style.background = bgclr;
    clrText.textContent = bgclr
}

setGradient()


cont.addEventListener('click', setGradient)