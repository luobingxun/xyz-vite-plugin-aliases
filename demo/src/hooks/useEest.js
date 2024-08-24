import { useState } from 'react';

export default function useTest() {
  const [name, setName] = useState('asdsd');

  return { name, setName };
}
