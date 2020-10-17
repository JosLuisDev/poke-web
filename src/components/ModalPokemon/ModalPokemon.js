import React from 'react';
import './styles.css';
import {
    Button,
    Card,
    CardBody,
    CardColumns,
    CardImg,
    CardText,
    CardTitle,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';


const ModalPokemon = (props) => {

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

    const {show, pokemonModal, closeModal} = props;
    console.log(pokemonModal.sprites);

    return(
        <Modal isOpen={show} size={"sm"}>
            <ModalHeader className="my-modal">
                {pokemonModal.name}
            </ModalHeader>
            <ModalBody className="my-modal-body">
                <Card>
                    <CardImg top width={'50%'} src={pokemonModal?.sprites?.front_default} alt="pokeSelfie" />
                    <CardBody className={"my-card"}>
                        <CardTitle>Type</CardTitle>
                        <CardText>
                            {pokemonModal?.types?.map(type => {
                                return (
                                    <Container className="d-flex flex-column justify-content-center ">
                                        <Button style={{backgroundColor: [color(type.type.name)]}} > {type.type.name} </Button>{' '}
                                    </Container>
                                )
                            })}
                        </CardText>
                            <hr/>
                        <CardTitle>Height</CardTitle>
                        <CardText>{pokemonModal.height}</CardText>
                        <hr/>
                        <CardTitle>Weight</CardTitle>
                        <CardText>{pokemonModal.weight}</CardText>
                        <hr/>
                        <CardColumns className="h6">
                            <CardTitle>Abilities</CardTitle>
                        </CardColumns>
                        {pokemonModal.abilities?.map((ability, i) => {
                            return (<CardText>{i+1}.-{ability.ability.name}</CardText>)
                        })}
                        <hr/>
                        <CardTitle className={"h6"}>Experience Points</CardTitle>
                        <CardText>{pokemonModal.base_experience}</CardText>
                    </CardBody>
                </Card>
            </ModalBody>
            <ModalFooter className={"my-modal-body"}>
                <Button outline color={"info"} onClick={closeModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalPokemon;