interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  // passagem de cor:
  // bg-violet-500 ou bg-[#8257e6]
  return <button className='bg-[#8257e6] px-4 h-18 rounded text-violet-100 hover:bg-violet-700 transition-colors'>{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className='flex gap-2'>
        <Button text="Enviar" />
        <Button text="Ok" />
        <Button />
    </div>
  )
}

export default App
