import React, { Fragment } from "react";
import {button, table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Inventory from "./components/Inventory";

function Home(){
    return(
        <Fragment>
            <div style={{margin: "10rem"}}>
                <table striped hover size= "sm">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Pdtnumber
                            </th>
                            <th>
                                Quantity_purchased
                            </th>
                            <th>
                                price_unit
                            </th>
                            <th>
                                Quantity_in_stock
                            </th>
                            <th>
                                Value_in_stock
                            </th>
                            <th>
                                Reorder_level
                            </th>
                            <th>
                                Reorder_quantity_sold
                            </th>
                            <th>
                                Quantity_sold
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Inventory && Inventory.length > 0
                            ?
                            Inventory.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.ID}
                                        </td>
                                        
                                        <td>
                                            {item.Pdtnumber}
                                        </td>
                                        
                                        <td>
                                            {item.Quantity_purchased}
                                        </td>
                                        
                                        <td>
                                            {item.price_unit}
                                        </td>
                                        
                                        <td>
                                            {item.Quantity_in_stock}
                                        </td>
                                        
                                        <td>
                                            {item.Value_in_stock}
                                        </td>
                                        
                                        <td>
                                            {item.Reorder_level}
                                        </td>
                                        
                                        <td>
                                            {item.Reorder_quantity_sold}
                                        </td>
                                        
                                        <td>
                                            {item.Quantity_sold}
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available right try again later"
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Home;