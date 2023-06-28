import './OneTechno.scss'

const OneTechno = (props) => {

  return (
    <>
      <div className='oneTech movingBorder' title={props.name}>
        <img src={props.img} alt="techology" />
      </div>
      <div className='moreAbout'>

      </div>
    </>
  )
}

export default OneTechno