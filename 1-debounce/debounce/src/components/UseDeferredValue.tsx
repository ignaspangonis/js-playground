import { useDeferredValue, useState } from 'react'

function UseDeferredValue() {
  const [inputValue, setInputValue] = useState('')
  const deferredInputValue = useDeferredValue(inputValue)

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(target.value)
  }

  return (
    <div>
      <h2>useDeferredValue</h2>
      <input
        type="text"
        name="search"
        id="search"
        value={inputValue}
        placeholder="Search..."
        autoComplete="off"
        onChange={handleChange}
      />
      <p>Deferred value: {deferredInputValue}</p>
    </div>
  )
}

export default UseDeferredValue
