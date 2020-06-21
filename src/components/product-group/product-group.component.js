import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import ItemVariants from '../item-variants/item-variants.component'
import Accordion from '../Accordion/'
import Card from '../Card'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

//   {item.items.map(({ name, variants }, index) => (
//     <Card key={index}>
//       <Accordion.Toggle element={Card.Header} eventKey={index}>
//         {index + 1}. {name}
//       </Accordion.Toggle>
//       <Accordion.Collapse eventKey={index} element={Card.Body}>
//       {name}

//       </Accordion.Collapse>
//     </Card>
//   ))}


// <ItemVariants key={index} itemVariants={item.items}/> 
function ProductGroup(props) {
    const {items } = props
    console.log("items is ", items);
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const [itemsVariant, setItemsVariant] = React.useState(null);



    const handleClick = (item) => {
            console.log("handel click item is ", item)
            const {items} = item
          //  setChecked(false);
         //   setChecked(true);
            setChecked((prev) => !prev);
            setItemsVariant(items)
        
    }

    return (
        <div>
            {items.map((item, index) => {
                console.log("An item is ", item)
                return (
                    <>
                      <Button onClick={() => handleClick(item)} variant="outlined" size="large" color="primary" className={classes.margin}>
                {item.name}
        </Button>
                
                </>
                )
            })}

<Slide direction="right" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
          { itemsVariant && itemsVariant.map( productVariant => {
                   console.log("in product variant is ", productVariant)
                   return (
     <ExpansionPanel>
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

