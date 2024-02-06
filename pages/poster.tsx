import { setList } from "@/constants/setList";
import React from "react";

const Poster = () => {
  return (
    <div>
      <h1>set List</h1>
      {setList.map((set) =>
        <div>
          <h2>{set.title}</h2>
          <a href={set.youtube} >유튜브 링크!</a>
          {/* <video src={set.youtube} /> */}
        </div>
      )
      }
    </div>
  )
}

export default Poster;