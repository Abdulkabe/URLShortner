import React, { useEffect, useState } from 'react'


const getUrlsFromStorage=()=> {
  const data = localStorage.getItem('url')
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export default function UrlLogin() {

  const [books, setBooks] = useState(getUrlsFromStorage());

  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");


  const handleSubmit = (event)=>{
    let num = Math.floor(Math.random()*4);
    let num1 = num + 13;
    let shortUrl = url.slice(0,num1) + '.com'
    event.preventDefault();
    let book = {
      id,
      url,
      shortUrl,
      date 
    }
    setBooks([...books, book])
    setUrl('');
    setDate('');
    setId('');
    alert("data has been submitted");

  }
  // const ondelete = (id) => {
  //   const filteredBooks = books.filter((e)=>{
  //     return e.id!== id;
  //   })
  //   setBooks(filteredBooks);
  // };
  
  
 
  useEffect(()=>{
    localStorage.setItem("url", JSON.stringify(books));  
  }, [books])
  

  return (
    <>
    <div className='Home'>

        <div>
            <form className='Form' onSubmit={handleSubmit}>
                
                <input className='Url' type="url" name='URL' placeholder='URL Shortner' value={url} onChange={(e)=>
                setUrl(e.target.value)} required/><br />
                <input className='Date' type="date" name='ExpiryDate' value={date} onChange={(e)=>
                setDate(e.target.value)} required/><br />
                <input className='Identity' type="text" name='Unique Identity' value={id} onChange={(e)=>
                setId(e.target.value)} placeholder='Unique Identity' required/><br />
                <button className='click'>Short</button>
            </form>
            
            
        </div>

    </div>
    
    
    
    
   </>
  )
}
