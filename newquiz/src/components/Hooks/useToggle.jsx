import { useState } from "react";

export default function useToggle(initialState) {
    const [state, setState] = useState(initialState);
    function toggleFunction() {
      setState(!state);
    }
    
    return [state, toggleFunction];
   }
   