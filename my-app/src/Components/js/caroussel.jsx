import Carousel from 'react-elastic-carousel'
import React,{useEffect,useState} from 'react'
import Snippet from './snippet'


function CarouselComponent() {
    function myArrow() {
        return (
          <div> 
          </div>
        )
      }


    const [codes, setCodes] = useState([]);
    const [languages, setLanguages] = useState([]);
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
        <Carousel focusOnSelect={true} className='test' initialActiveIndex={1} enableAutoPlay autoPlaySpeed={2500} itemPadding={[10, 50]} verticalMode itemsToShow={5} renderArrow={myArrow} renderPagination={myArrow}>
            <div></div>
            <div></div>
            {codes.map((element,index) =>  
                  <Snippet code={element} lang={languages[index]} isActive={index === 2 ? true : false} />
                )}
            <div></div>
        </Carousel>
    );
}

export default CarouselComponent;