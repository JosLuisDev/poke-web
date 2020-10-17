import React from 'react';
import { Button, Container, CardImg} from "reactstrap";

const TablaPokemon = (props) => {
    
    const color = (name) => {
        let tipoColor = '';
            switch(name){
                case "bug":
                    tipoColor = '#729f3f';
                    break;
                case "dragon":
                    tipoColor = '#53a4cf';
                    break;
                case "fairy":
                    tipoColor = '#fdb9e9';
                    break;
                case "fire":
                    tipoColor = '#fd7d24';
                    break;
                case "ghost":
                    tipoColor = '#7b62a3';
                    break;
                case "ground":
                    tipoColor = '#f7de3f';
                    break;
                case "normal":
                    tipoColor = '#a4acaf';
                    break;
                case "pyschic":
                    tipoColor = '#f366b9';
                    break;
                case "steel":
                    tipoColor = '#9eb7b';
                    break;
                case "dark":
                    tipoColor = '#707070';
                    break;
                case "electric":
                    tipoColor = '#eed535';
                    break;
                case "fighting":
                    tipoColor = '#d56723';
                    break;
                case "flying":
                    tipoColor = '#3dc7ef';
                    break;
                case "grass":
                    tipoColor = '#9bcc50';
                    break;
                case "ice":
                    tipoColor = '#51c4e7';
                    break;
                case "poison":
                    tipoColor = '#b97fc9';
                    break;
                case "rock":
                    tipoColor = '#a38c21';
                    break;
                case "water":
                    tipoColor = '#4592c4';
                    break;
                default:
                    tipoColor = '#a4acaf';
                    break;
            }
        return tipoColor;
    }

    const {pokemon, openModal} = props;

    return(
        <tr>
            <td>
                <CardImg className={"img-responsive"} src={pokemon.sprites.front_default} alt={''}/>
            </td>
            <td><h4>{pokemon.name}</h4></td>
            <td>
                {pokemon.types.map(type => {
                    return (
                        <Container className="d-flex flex-column justify-content-center alig-items-center">
                            <Button style={{backgroundColor: [color(type.type.name)]}} > {type.type.name} </Button>{' '}
                        </Container>
                    )
                })}
            </td>
            <td>
                <Button color="danger" onClick={() => openModal(pokemon)}>Pokemon Information</Button>
            </td>
        </tr>
    )
}

export default TablaPokemon;