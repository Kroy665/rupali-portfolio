import React from 'react'
import { useSelector } from 'react-redux';
// import { lightToDark } from '../../features/lightDarkMode/lightDark';
import './Main.css'
import profilrPic from '../../profileData/profilePic.jpg'
import data from '../../profileData/profileData';
function Main() {
  const lightDark = useSelector((state) => state.lightDark.value)
  // const dispatch = useDispatch()
  var style = {
    mainDiv: {
      backgroundColor: lightDark ? "#d4d4d4" : "#0d0d0d"

    },
    anc: {
      color: lightDark ? "#000fb3" : "#ffda99"
    }
  }
  return (
    <div className="main">
      <div className='main-nav'>
        <div className='profile-pic-div'>
          <img className='profile-pic-img' src={profilrPic} alt={data.first_name} />
        </div>
        <div className='details-nav'>
          <div className='name-div'>
            <h1>
              {data.first_name} {data.last_name}
            </h1>
            <div>
              <p>
                {data.job_title_for_navbar}
              </p>
              <p>
                {data.job_disc_for_navbar}
              </p>
            </div>
          </div>
          <div className='personal-details-div'>
            {data.personal_data.map((dt, index) =>
              <div key={index}>
                <span>{dt.key}</span> : {" "}
                <span>{dt.value}</span>
                <hr />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='main-div' style={style.mainDiv}>
        <div className='main-left-div'>
          <div className='education'>
            <h2>
              Educations
            </h2>
            {data.educations.map((dt, index) =>
              <div className='education-sections'>
                <h4>{dt.category}</h4>
                <div className='education-sections-div'>
                  <span className='education-sections-span'>Institution: </span>
                  <span>
                    {dt.institution}
                  </span>
                </div>
                <div className='education-sections-div'>
                  <span className='education-sections-span'>Degree: </span>
                  <span>
                    {dt.degree}
                  </span>
                </div>
                <div className='education-sections-div'>
                  <span className='education-sections-span'>Address: </span>
                  <span>
                    {dt.address}
                  </span>
                </div>
                <div className='education-sections-div'>
                  <span className='education-sections-span'>Marks: </span>
                  <span>
                    {dt.marks}
                  </span>
                </div>
              </div>
            )}
          </div>
          <hr className='hr-2' />
          <div className='work_skills'>
            <h2>
              Work Skills
            </h2>
            <ul>
              {data.work_skills.map((dt, index) =>
                <li key={index}>
                  {dt}
                </li>
              )}
            </ul>

          </div>
          <hr className='hr-2' />
        </div>


        <div className='main-right-div'>
          <div className='my-writting'>
            <h2>
              My Writting
            </h2>
            <p className='my-writting-p'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {data.my_writting}
            </p>
          </div>
          <div className='experience'>
            <h2>
              Experience
            </h2>
            <ul>
              {data.experiance.map((dt, index) =>
                <li key={index}>
                  <span>
                    {dt.from !== "" && "From: " + dt.from + "-"}
                  </span>
                  {" "}
                  <span>
                    {dt.to !== "" && dt.to + ":"}
                  </span>
                  {" "}
                  <span>
                    {dt.title !== "" && dt.title}
                  </span>
                  {" "}
                  {dt.link !== "" && <a href={dt.link} target="_blank" rel="noreferrer" style={style.anc}>{dt.link}</a>}

                  <hr className='hr-1' />
                </li>
              )}
            </ul>
          </div>
          <div className='work_sample'>
            <h2>Work Sample</h2>
            <ul>
              {data.work_samples.map((dt, index) =>
                <li>
                  <a href={dt} target="_blank" rel="noreferrer" style={style.anc} key={index}>{dt}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main