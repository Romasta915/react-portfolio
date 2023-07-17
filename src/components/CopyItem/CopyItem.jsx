import { useRef, useState } from 'react';

const CopyItem = ({ text, parentClass }) => {
  const textRef = useRef();
  const [iconClass, setIconClass] = useState(false)

  const handleCopy = () => {
    textRef.current.select();
    textRef.current.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(text)
    window.getSelection().removeAllRanges()
    setIconClass(!iconClass)
  }

  return (
    <>
      <span className={parentClass} title='copy to the clipboard' onClick={handleCopy} style={{ cursor: 'pointer' }}>
        <input
          ref={textRef}
          type="text"
          value={text}
          style={{ position: 'absolute', left: '-9999px' }}
          readOnly
        />
        <button><i class={iconClass ? "bi bi-clipboard-check" : "bi bi-clipboard"}></i></button>
      </span>
    </>
  )
}
export default CopyItem;
