import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export default function History(){
  var urlData = JSON.parse(localStorage.getItem("url") || []);
  // console.log(urlData)
  let [removedData, setRemovedData] = useState(urlData)
  const ondelete = (index) => {
    console.log(index, "this index want to be deleted")
    let total = [...removedData]
    total.splice(index, 1)
    setRemovedData(total) 
    localStorage.setItem('url', JSON.stringify(removedData))
    };
  
  
  
  return (
    <div className="HIstory">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Short URL</th>
            <th>Long URL</th>
            <th>Expiry Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {urlData.map((curUser, index) => {
            const { id, url, shortUrl, date } = curUser;
            return (
              <>
                <tr key={index}>
                  <td>{id}</td>
                  <td>{shortUrl}</td>
                  <td>{url}</td>
                  <td>{date}</td>
                  <td>
                    <button
                      className="Icon"
                      onClick={() => {
                        ondelete(index);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
        }
