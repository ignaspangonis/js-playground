import { useState, useTransition } from 'react'

function UseTransition() {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(target.value)
    startTransition(() => {
      let newList: string[] = []
      for (let i = 0; i < 20000; i++) {
        newList.push(target.value)
      }
      setList(newList)
    })
  }

  return (
    <div>
      <h2>useTransition</h2>
      <input
        type="text"
        name="search"
        id="search"
        value={inputValue}
        placeholder="Search..."
        autoComplete="off"
        onChange={handleChange}
      />
      {isPending ? (
        <p>Updating...</p>
      ) : (
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
      )}
    </div>
  )
}

export default UseTransition
