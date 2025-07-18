
"use client";
import { useRef } from "react";
import { submitAction } from "../actions/form";
export default function Home() {
let ref=useRef()
  return (
    <div className="w-2/3 mx-auto mt-10">
      <form ref={ref} action={(e)=>{submitAction(e);ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" className="text-black bg-white mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="Add">Address</label>
          <input name="Add" className="text-black bg-white mx-4" type="text" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
