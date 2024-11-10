import React from "react";
import { Col, Card, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";

function CustomCard({ item }) {
    const [show, setShow] = useState(false);

    const [selections, setSelections] = useState({
        jain: false,
        extraCheese: false,
        extraSauce: false,
    });

    const openModal = () => setShow(true);

    const closeModal = () => setShow(false);
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelections((prevSelections) => ({
            ...prevSelections,
            [name]: checked,
        }));
    };

    // Handle save changes button click
    const handleSave = () => {
        console.log(item.title, " Selected options:", selections);
        closeModal(); // Close modal after saving changes
    };
    return (
        <div className="p-2">
            <Card
                style={{ width: "24rem", height: "16rem" }}
                className="d-flex flex-row"
            >
                <Col md={5} className="d-flex align-items-center">
                    <Card.Img
                        className=" p-4 "
                        variant="top"
                        src="https://picsum.photos/100/100"
                    />
                </Col>
                <Col md={7}>
                    <Card.Body className="d-flex flex-column align-items-start">
                        <Card.Title className="mb-3">{item.title}</Card.Title>
                        <Card.Text className="text-start opacity-50">
                            {item.title}
                        </Card.Text>
                        <Card.Text className="text-warning">
                            &#9733; {item.rating}
                        </Card.Text>
                        <Card.Text className="text-success">
                            {item.price}
                        </Card.Text>
                        <div className="d-flex">
                            <Button
                                className="me-2"
                                variant="success"
                                onClick={openModal}
                            >
                                Customise
                            </Button>
                            <Button
                                variant="success"
                                onClick={() => {
                                    console.log("addded to cart", item);
                                }}
                            >
                                Add
                            </Button>
                        </div>
                    </Card.Body>
                </Col>
            </Card>
            {show && (
                <div
                    className="modal show"
                    style={{ display: "block", position: "absolute" }}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton onClick={closeModal}>
                            <Modal.Title>{item.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Jain"
                                        name="jain"
                                        checked={selections.jain}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Extra Cheese"
                                        name="extraCheese"
                                        checked={selections.extraCheese}
                                        onChange={handleCheckboxChange}
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Extra Sauce"
                                        name="extraSauce"
                                        checked={selections.extraSauce}
                                        onChange={handleCheckboxChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSave}>
                                Save changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            )}
        </div>
    );
}

export default CustomCard;
