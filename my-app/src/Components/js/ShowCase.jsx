import Carousel from 'react-elastic-carousel'
import React,{useEffect,useState} from 'react'
import Snippet from './snippet'
import details from '../../image/comments-icon.svg'
import star from '../../image/Star.svg'
import emptyStar from '../../image/Star_empty.svg'
import { useMediaQuery } from '@material-ui/core'
function ShowCase() {
    function myArrow() {
        return (
          <div> 
          </div>
        )
      }
      const isSmallScreen = useMediaQuery('(max-width: 960px)')
      const getTimeDifference = (timestamp) => {
        const currentDate = new Date();
        const previousDate = new Date(timestamp);
      
        const timeDifference = currentDate.getTime() - previousDate.getTime();
        const seconds = Math.floor(timeDifference / 1000);
      
        let timeAgo;
      
        switch (true) {
          case seconds < 60:
            timeAgo = `${seconds} secs ago`;
            break;
          case seconds < 3600:
            const minutes = Math.floor(seconds / 60);
            timeAgo = `${minutes} mins ago`;
            break;
          case seconds < 86400:
            const hours = Math.floor(seconds / 3600);
            timeAgo = `${hours} hours ago`;
            break;
          case seconds < 2592000:
            const days = Math.floor(seconds / 86400);
            timeAgo = `${days} days ago`;
            break;
          case seconds < 31536000:
            const months = Math.floor(seconds / 2592000);
            timeAgo = `${months} months ago`;
            break;
          default:
            const years = Math.floor(seconds / 31536000);
            timeAgo = `${years} years ago`;
            break;
        }
      
        return timeAgo;
      };
      

    const [codes, setCodes] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(() => {
        async function gist() {
            fetch("https://api.github.com/users/RamyBouchareb25/gists").then((response) => response.json()).then(data => {
                data.forEach(element => {
                    for(var key in element.files) {
                        let x = element.files[key].language + "";
                        setLanguages((prevData) => [...prevData,x.toLowerCase()])
                    }
                    fetch(element.url).then((response) => response.json()).then((newData) => {
                        for (var key in newData.files) {
                            var code = newData.files[key].content;
                            setCodes((prevData) => [...prevData,code])
                        }
                        for(var key in newData.history) {
                            var time = newData.history[key].committed_at;
                            setTime((prevData) => [...prevData,getTimeDifference(time)])
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                });
            }).catch((error) => {
                console.log(error);
                
            })
        }
        gist();
    },[])
    return (
        <Carousel itemPadding={[25, 20]} verticalMode itemsToShow={isSmallScreen ? 1000 : 2} renderArrow={myArrow} renderPagination={myArrow}>
            {codes.map((element,index) =>  {
                return (
                    <div>
                        <div className='avatar-container'>
                            <img src="https://avatars.githubusercontent.com/u/95656890?v=4" className='avatar' alt="avatar" />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '10px',
                                width: '70%',
                            }}> 
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                                <span style={{
                                    color: '#5565E8',
                                    fontSize: '1rem',
                                }}>@RamyBouchareb25</span>
                                <div style={{
                                    color: 'var(--secondary-1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <img src={details} alt="Comment" />
                                    <button className='button-unset btn' style={{
                                        color: 'var(--secondary-1)',
                                        display: 'inline',
                                        marginRight: '10px',
                                    }}> details </button>
                                    {isSmallScreen ? null : <>
                                        <img src={emptyStar} alt="Star Empty" />
                                        <button className='button-unset btn' style={{
                                            color: 'var(--secondary-1)',
                                            display: 'inline',
                                        }}>3 stars </button>
                                    </>}
                                </div>
                            </div>
                                <span style={{
                                    color: 'var(--secondary-1)',
                                    fontSize: '0.8rem',
                                }}>Created {time[index]}</span>
                            </div>
                        </div>
                        <Snippet code={element} lang={languages[index]} isActive={true} width={isSmallScreen ? '75vw' :'35vw'}/>
                    </div>
                )
            }
                )}
            <div></div>
            <div></div>
        </Carousel>
    );
}

export default ShowCase;