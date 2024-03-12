import { useState } from "react";
import "./AllSubscriber.css";
import { GoChevronDown } from "react-icons/go";
const AllSubscriber = () => {
  const [showFilterList,setShowFilterList] = useState(false)
  const [showFilterListItem,setShowFilterListItem] = useState("Choose a filter")
  const [showAction,setShowAction] = useState(false)
  const [showToggleColumns,setShowToggleColumns] = useState(false)
  const [arrayFilterList] = useState(["CHOOSE A FILTER","HELLO","HI","HEY","BYE"])
  const [tempArray,setTempArray] = useState(["CHOOSE A FILTER","HELLO","HI","HEY","BYE"])
  // let arrayFilterList = ["HELLO","HI","HEY","BYE"];
  // tempArray = arrayFilterList;

  const handleSetShowFilterItem = (value)=>{
    setShowFilterListItem(value)
    setShowFilterList(false)
  }

  const handleSearch = (value)=>{

    console.log("value=====>",value)
    if(value!=="" && value.length > 0){
      let filterArray = arrayFilterList.filter((item)=>{
        return item.includes(value.toUpperCase())
      })
      setTempArray(filterArray)
      // tempArray = filterArray;
    }else{
      setTempArray(arrayFilterList)
    }
    

  }

  return (
    <div className="allsubscriber">
      <div className="allsubscriber-file">
        <div className="allsubscriber-file-content">
        

          <div onClick={()=>{setShowFilterList(!showFilterList)}} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",border:"1px solid black",width:"200px",backgroundColor:"#ffffff",cursor:"pointer",borderRadius:"4px"}}>
            <p style={{fontSize:"12px"}}>{showFilterListItem}</p>
            <GoChevronDown />
          </div>
          {
            showFilterList && <div style={{borderRadius:"4px",border:"1px solid black",width:"200px",marginTop:"1px",position:"absolute",backgroundColor:"#ffffff",boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.5);"}}>
              <div style={{backgroundColor:"white",padding:"10px"}}>
              <input onChange={(e)=>{
                handleSearch(e.target.value)
              }} className="filter-input" type="text" placeholder="Search..." />
              </div>
              
            <ul style={{padding:"0px",listStyle:"none"}}>
              {
                tempArray.map((item)=>{
                  return <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem(item)}}>{item}</li>

                })
              }
            </ul>
          </div>
          }
          

          
        </div>
      </div>
      <div className="allsubscriber-content">
        <div className="allsubscriber-content-row-1">
          <ul style={{padding:"0px",listStyle:"none",display:"flex",alignItems:"center"}}>
            <li >Showing</li>
            <li id="allsubscriber-content-row-1-li-2">Active <GoChevronDown /></li>
            <li>subscriber</li>
          </ul>
        </div>
        <div className="allsubscriber-content-count">
          <h1>1</h1>
        </div>
        <div style={{padding:"0.5px 0px",backgroundColor:"#9bb1dd"}}>
        </div>
        <div className="allsubscriber-content-action">
          <div style={{position:"relative"}}>

          
          <div onClick={()=>{setShowAction(!showAction)}} className="allsubscriber-content-action-btn">
          <p style={{marginRight:"10px"}}>Action</p>
          <GoChevronDown />
          
          </div>
          { showAction && <div style={{border:"1px solid black",width:"200px",marginTop:"5px",position:"absolute",backgroundColor:"#ffffff"}}>
            <ul style={{padding:"0px",listStyle:"none"}}>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("hello")}}>Hello</li>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("Hii")}}>Hii</li>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("Hey")}}>Hey</li>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("Bye")}}>Bye</li>
            </ul>
          </div>
            
          }
          </div>
          <div style={{position:"relative"}}>
          
          <div onClick={()=>{setShowToggleColumns(!showToggleColumns)}} className="allsubscriber-content-action-btn">
          <p style={{marginRight:"10px"}}>Toggle Columns</p>
          <GoChevronDown />
          </div>
          { showToggleColumns && <div style={{border:"1px solid black",width:"200px",marginTop:"5px",position:"absolute",backgroundColor:"#ffffff"}}>
            <ul style={{padding:"0px",listStyle:"none"}}>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("hello")}}>Hello</li>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("Hii")}}>Hii</li>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("Hey")}}>Hey</li>
              <li className="filterlist-li" onClick={()=>{handleSetShowFilterItem("Bye")}}>Bye</li>
            </ul>
          </div>
            
          }
          </div>
        </div>
        <div style={{padding:"0.5px 0px",backgroundColor:"#9bb1dd"}}>
        </div>
        <div className="allsubscriber-content-table">
          <table >
            <tr>
              <th style={{display:"flex",justifyContent:"flex-start",alignItems:"center",color:"black"}}>
                <div style={{backgroundColor:"#9bb1dd",padding:"5px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px"}}>
                <GoChevronDown />

                </div>
                
              </th>
              <th>Subscriber</th>
              <th>Sent</th>
              <th>Open</th>
              <th>Clicks</th>
              <th>Subcribed</th>
              <th>Location</th>
            </tr>
            
            <tr>
              <td style={{display:"flex",justifyContent:"flex-start",alignItems:"center",color:"black"}}>
              <div style={{padding:"1px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px"}}>
                
                <input type="checkbox"  />
                </div>
              </td>
              <td style={{color:"#4DC36B"}}>suraj.singh@oodles.io</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2024-03-06 08:52:24</td>
              <td>Delhi</td>
            </tr>
            <tr>
              <td style={{display:"flex",justifyContent:"flex-start",alignItems:"center",color:"black"}}>
              <div style={{padding:"1px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px"}}>
                <input type="checkbox"  />
                </div>
              </td>
              <td style={{color:"#4DC36B"}}>suraj.singh@oodles.io</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>2024-03-06 08:52:24</td>
              <td>Delhi</td>
            </tr>

          </table>


        </div>

        <div className="allsubscriber-content-item-left">
          <div>
            <p>Showing 1 to 1 of 1 results</p>

          </div>
          <div>
            <button>Previous</button>
            <button>Next</button>

          </div>

        </div>

      </div>

    </div>
  );
};
export default AllSubscriber;
