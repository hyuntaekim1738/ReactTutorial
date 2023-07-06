//import { MouseEvent } from "react";

import { useState } from "react";

//type annotation to specify type of various properties
interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {

    //hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    //arr[0] // variable (selectedIndex)
    //arr[1] //updater function

    //handler
    //const handleClick = (event: MouseEvent) => console.log(event); //type script annotation
    //items = [];
    return (
        <>
            <h1>{heading}</h1>
            { items.length === 0 ? <p>No item found</p> : null}
            { items.length === 0 && <p>No item found</p>} 
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                    key={item} 
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);}}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ListGroup;