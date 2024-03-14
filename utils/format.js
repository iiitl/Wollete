const cc_format = (value) => {
  const v = value.replace(/[^0-9]/g, '').substr(0, 16)
  const parts = []
  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4))
  }
  return parts.length > 1 ? parts.join('-') : v
}

const expiry_format = (value) => {
  const expdate = value
  const expDateFormatter =
    expdate.replace(/[^0-9]/g, '').substring(0, 2) +
    (expdate.length > 2 ? '/' : '') +
    expdate.replace(/[^0-9]/g, '').substring(2, 4)

  return expDateFormatter
}

const cvv_format = (value) => {
  return value.replace(/[^0-9]/g, '').substr(0, 3)
}

const formatters = {
  cc_format,
  expiry_format,
  cvv_format,
}

export default formatters
