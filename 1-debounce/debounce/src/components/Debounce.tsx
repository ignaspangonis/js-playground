import { useCallback, useState } from 'react'

function debounce(callback: (...args: any[]) => void, delay: number) {
  let timeout: number

  return (...args: any[]) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

function Debounce() {
  const [inputValue, setInputValue] = useState('')
  const [inputValueDebounced, setInputValueDebounced] = useState('')

  function updateValue(value: string) {
    setInputValue(value)
  }

  const updateValueDebounced = useCallback(
    debounce((value: string) => {
      setInputValueDebounced(value)
    }, 500),
    []
  )

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    updateValue(target.value)
    updateValueDebounced(target.value)
  }

  return (
    <div>
      <h2>debounce</h2>
      <input
        type="text"
        name="search"
        id="search"
        value={inputValue}
        placeholder="Search..."
        autoComplete="off"
        onChange={handleChange}
      />
      <p>Debonced value: {inputValueDebounced}</p>
    </div>
  )
}

export default Debounce
