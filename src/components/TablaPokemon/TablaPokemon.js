import React from 'react';
import { Button, Container, CardImg} from "reactstrap";

const TablaPokemon = (props) => {

    const {pokemon, openModal} = props;

    return(
        <tr>
            <td>
                <CardImg className={"img-responsive"} src={pokemon.sprites.front_default} alt={''} style={{height:'100px', width:'100px'}}/>
            </td>
            <td><h4 translate={"no"}>{pokemon.name}</h4></td>

            <td>
                <Button style={{width:"95%"}} color="danger" onClick={() => openModal(pokemon)}>See more</Button>
            </td>
        </tr>
    )
}

export default TablaPokemon;