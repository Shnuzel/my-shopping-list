import React, { useState } from "react";
import './add.css'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { BasicRating } from './alert'
import PostAddIcon from '@mui/icons-material/PostAdd';


export const AddItem = () => {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [list, setList] = useState([]);

    const add = () => {
        const date = { item, quantity };
        if (item || quantity) {
            const newList = [...list, date]
            setList(newList);
            setItem("");
            setQuantity("");
        }
    };

    const remove = (index) => {
        const newList = list.filter((item) => list.indexOf(item) !== index)
        setList(newList)
    }

    return (
        <div className="center">
            <label>
                <TextField id="outlined-basic" label="Product" variant="outlined" className="large"
                    name="item"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />-
                <TextField id="outlined-basic" label="Quantity" variant="outlined" className="tiny"
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <IconButton fontSize="large" className="button" variant="contained" onClick={add}><PostAddIcon/></IconButton>
            </label>

            {list.map((a, i) => (
                <div className="middle" >
                    <div className="pad">
                        <Box component="button" sx={{ width: '100%', maxWidth: 790, bgcolor: 'palette.success.main' }}>
                            <Divider />
                            <ListItem button divider  >
                                <ListItemText className="text"> {a.item}{" - " + a.quantity + " "}
                                    <Checkbox />
                                    <IconButton size="small" variant="contained" onClick={() => { remove(i) }}><DeleteIcon /></IconButton >
                                    <BasicRating></BasicRating>
                                </ListItemText>
                            </ListItem>
                        </Box>
                    </div>

                </div>
            ))}
        </div>
    );
};

