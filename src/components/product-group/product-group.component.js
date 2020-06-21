import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import './Product-group.styles.css'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function ProductGroup(props) {
    const {items } = props
    console.log("items is ", items);
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const [itemsVariant, setItemsVariant] = React.useState(null);

    const handleClick = (item) => {
            console.log("handel click item is ", item)
            const {items} = item
            setChecked((prev) => !prev);
            setItemsVariant(items)
        
    }

    return (
        <div className="ItemContainer" >
            <div className="Item" >

            {items.map((item, index) => {
                console.log("An item is ", item)
                return (
                    <div key={index}>
                      <Button 
                       onClick={() => handleClick(item)} variant="outlined" size="large" color="primary" className={classes.margin}>
             {item.name}
        </Button>     
                </div>
                )
            })}
</div>

<Slide direction="right" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
          { itemsVariant && itemsVariant.map( (productVariant,index) => {
                   console.log("in product variant is ", productVariant)
                   return (
     <ExpansionPanel key={index}>
     <ExpansionPanelSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel1a-content"
       id="panel1a-header"
     >
       <div>{productVariant.name}</div>
     </ExpansionPanelSummary>
     <ExpansionPanelDetails>
       <div>
        {productVariant.shortDescription}
       </div>
       <div>
       Price {productVariant.price}
       </div>
       <img src={`https://www.aesop.com${productVariant.thumbnail}`} />
     </ExpansionPanelDetails>
   </ExpansionPanel>
             
                   ) 

               }
              )
               }

          </Paper>
        </Slide>
   
        </div>
    )
}


export default ProductGroup

