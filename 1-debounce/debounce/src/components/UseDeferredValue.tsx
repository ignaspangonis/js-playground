import { useDeferredValue, useMemo, useState } from 'react'

function UseDeferredValue() {
  const [inputValue, setInputValue] = useState('')
  const deferredInputValue = useDeferredValue(inputValue)

  const list = useMemo(() => {
    let newList: string[] = []

    for (let i = 0; i < 20000; i++) {
      newList.push(deferredInputValue)
    }

    return newList
  }, [deferredInputValue])

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
      {deferredInputValue === inputValue ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          {list.map((element) => (
            <div key={element}>{element}</div>
          ))}
        </div>
      ) : (
        <p>Updating...</p>
      )}
    </div>
  )
}

export default UseDeferredValue
