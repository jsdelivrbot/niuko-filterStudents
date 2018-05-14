import React from 'react'

const boldTestoRicerca = (testoDigitato, testoRiferimento) => {
  let normTestoDigitato,
    normTestoRiferimento,
    resultIndex,
    result,
    firstPart,
    middlePart,
    endPart,
    indexFinal

  normTestoDigitato = testoDigitato.toLowerCase()
  normTestoRiferimento = testoRiferimento.toLowerCase()
  resultIndex = normTestoRiferimento.indexOf(normTestoDigitato)

  if (resultIndex !== -1) {
    indexFinal = resultIndex + testoDigitato.length
    firstPart = testoRiferimento.substr(0, resultIndex)
    middlePart = testoRiferimento.substr(resultIndex, testoDigitato.length)
    endPart = testoRiferimento.substr(indexFinal, testoRiferimento.length - indexFinal)
    result = (
      <span>
      {firstPart}
        <b>{middlePart}</b>
        {endPart}
    </span>
    )
  } else {
    result = <span>{testoRiferimento}</span>
  }
  return result
}

const TableStudents = ({data, highlightText}) => {
  return (
    <table style={{width: '100%'}}>
      <thead>
      <tr>
        <th>Nome</th>
        <th>Cognome</th>
        <th>Codice Fiscale</th>
      </tr>
      </thead>
      <tbody>
      {data.map((student, key) => {
        return (
          <tr key={key}>
            <td>{boldTestoRicerca(highlightText, student.nome)}</td>
            <td>{boldTestoRicerca(highlightText, student.cognome)}</td>
            <td>{boldTestoRicerca(highlightText, student.cf)}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default TableStudents
