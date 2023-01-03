const main = () => {
  // Ganti NR
  let dataMahasiswa = document.getElementsByClassName('table-striped')[0]
  let listData = dataMahasiswa.querySelectorAll('tbody tr')
  // listData[7]ip ipk
  let ipIPK = listData[7].querySelectorAll('td span')
  ipIPK.forEach((ip) => {
    ip.textContent = '4.00'
  })
  // ip TPB
  listData[9].querySelector('td').textContent = '4.00 / Lulus 36 SKS'
  //  NR
  listData[10].querySelector('td').textContent = '4.00 / 24 SKS'

  // Ganti index di tabel
  let tabelIndex = document.getElementsByClassName('table-striped')[1]
  let rowIndex = tabelIndex.querySelectorAll('table tr')

  rowIndex.forEach((row) => {
    try {
      let tdElements = row.querySelectorAll('td')
      tdElements[5].textContent = 'A'
    } catch (err) {}
  })

}
main()
