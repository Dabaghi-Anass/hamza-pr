import { fetchMoveDetail } from "@/api/queries";
import { Move as MoveType } from "@/types/pokemonTypes";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
const Move = ({move} : {move : MoveType}) => {
    const [opened,setOpened] = useState(false);
    const [description,setDescription] = useState("");
    const [loading,setLoading] = useState(false);
    async function fetchMove(){
        setOpened(!opened);
        setLoading(true)
        const moveDetails = await fetchMoveDetail(move.url);
        let details = moveDetails?.flavor_text_entries[0]?.flavor_text;
        setDescription(details);
        setLoading(false)
    }
  return (
    <div className="move flex flex-col items-start">
        <div onClick={() => fetchMove()} className="w-full hover:border-[#3e5a85] transition-all h-[3rem] p-4 border-[#142847] border rounded-tr rounded-tl flex items-center justify-between">
            <span>{move.name}</span>
            {opened ? <CaretUpIcon onClick={() => fetchMove()}/> : <CaretDownIcon onClick={() => fetchMove()} />}
        </div>
        {opened &&
            <div className="move-description p-4 bg-[#162D50] w-full rounded-br rounded-bl">{
                loading ? <span>loading...</span> : description
            }</div>
        }
    </div>
  )
}

export default Move