let input = process.argv.slice(2)


function shadowBeep(delay) {
  delay = Number(delay)
  if (!isNaN(delay) && delay > 0) {
    setTimeout(beep, delay * 1000)
  }
}


function beep() {
  process.stdout.write('.\n')
}

for (let num of input) {
  shadowBeep(num)
}


//shadowBeep()
//beep()