import React, {useState} from 'react';

export default function Test() {
  
  const [form, setForm] = useState('Holi');

  return (
    <div className='contact'>
      <form>
        <label htmlFor='contact'>
          Test
          <input id="contact" value={form}
            placeholder="contact" onChange = { e => setForm(e.target.value)} />
        </label>
      </form>
    </div>
  );
}