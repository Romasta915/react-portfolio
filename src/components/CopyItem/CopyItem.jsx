import { useRef, useState } from 'react';

const CopyItem = ({ text, parentClass }) => {
  const textRef = useRef();
  const [iconClass, setIconClass] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setIconClass(!iconClass)
  }

  return (
    <>
      <span className={parentClass} title='click to copy to the clipboard' onClick={handleCopy} style={{ cursor: 'pointer' }}>
        <button><i className={iconClass ? "bi bi-clipboard-check" : "bi bi-clipboard"}></i></button>
      </span>
    </>
  )
}
export default CopyItem;
