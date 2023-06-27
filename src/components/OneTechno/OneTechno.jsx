import './OneTechno.scss'

const OneTechno = (props) => {

  return (
    <>
      <div className='oneTech' title={props.name}>
        <img src={props.img} alt="techology" />
      </div>
    </>
  )
}

export default OneTechno