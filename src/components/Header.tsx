import { useState } from 'react';

const Header = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className="text-3xl">soy el header</p>
      <div className='flex w-auto justify-center' onClick={() => setCount(count + 1)}>
        <button className='bg-white'>count is: {count}</button>
      </div>
    </div>
  )
}

export default Header