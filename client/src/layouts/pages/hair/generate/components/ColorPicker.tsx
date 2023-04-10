import MDBox from "../../../../../components/MDBox";
import React, {useState} from "react";
import {SketchPicker} from 'react-color'

interface IProps {
    onColorChange?: (value: string) => void;
}

const ColorPicker: React.FC<IProps> = ({
                                           onColorChange
                                       }) => {

    const [pickColor, setPickColor] = useState('000');


    const handleChangeComplete = (color: any) => {
        setPickColor(color.hex);
        onColorChange(color.hex)
    };

    return (
        <MDBox>
            <SketchPicker color={pickColor} onChange={handleChangeComplete}/>
        </MDBox>
    )
}

export default ColorPicker;
