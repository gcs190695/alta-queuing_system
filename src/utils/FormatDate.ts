/* General Date Time Format*/
export const DateAndTimeFormatter = (splitSymbol: string, order: 'time'| 'date', datetime: Date, fullTime?: 'showFullTime') =>{
  // Format Time
  const timeBase = datetime.toLocaleTimeString().split(':')
  const time = `${fullTime === 'showFullTime' ? `${timeBase[0]}:${timeBase[1]}:${timeBase[2]}`: `${timeBase[0]}:${timeBase[1]}`}`

  // Format Date
  const fixedDate = datetime.getDate() - 10 >= 0 ? datetime.getDate().toString() : `0${datetime.getDate()}`
  const fixedMonth = datetime.getMonth() - 10 >= 0 ? datetime.getMonth().toString() : `0${datetime.getMonth()}`
  const date = `${fixedDate}/${fixedMonth}/${datetime.getFullYear()}`

  // Consider To Return Date, Time Format
  switch(order)
  {
    case 'time':
      return `${time} ${splitSymbol} ${date}`
    case 'date':
      return `${date} ${splitSymbol} ${time}`
    default:
      return null
  }
}

  const fixedDate = datetime.getDate() - 10 >= 0 ? datetime.getDate().toString() : `0${datetime.getDate()}`
  const fixedMonth = datetime.getMonth() - 10 >= 0 ? datetime.getMonth().toString() : `0${datetime.getMonth()}`
  const date = `${fixedDate}/${fixedMonth}/${datetime.getFullYear()}`

  switch(order)
  {
    case 'time':
      return `${time} ${splitSymbol} ${date}`
    case 'date':
      return `${splitSymbol} ${date} - ${time}`
    default:
      return null
  }
}