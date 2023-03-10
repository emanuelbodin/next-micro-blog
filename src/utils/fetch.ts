export const get = async <T>(url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  const data: T = await res.json()
  return data
}

export const post = async <T>(url: string, body: any) => {
  try {
    const res = await fetch('http://localhost:3000' + url, {
      method: 'POST',
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      throw new Error('Failed to post')
    }

    const data: T = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
