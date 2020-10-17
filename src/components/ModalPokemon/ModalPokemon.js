import React from 'react';
import './styles.css';
import { Button, Card, CardBody, CardColumns, CardImg, CardText, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


const ModalPokemon = (props) => {

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