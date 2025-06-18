import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import filter from "../../Image/filter.png";
import { useState, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { authProvider } from '../Data/Data';

function Teamadmin() {
    const { setFiltered, setSearchTerm, addData, name, setName, email, setEmail, image, setImage, status, setStatus, role, setRole, team, setTeam, show, setShow, handleClose, handleShow } = useContext(authProvider);

    const [showDropdown, setShowDropdown] = useState(false);

    const handleFilterClick = () => {
        setShowDropdown(prevState => !prevState);
    };

    const handleCloseDropdown = () => {
        setShowDropdown(false);
    };

    return (
        <>
            <Navbar expand="lg" className="d-flex flex-row justify-content-between pt-2 mx-2 border-bottom pb-2">
                <Container>
                    <div className='d-flex flex-row'>
                        <Navbar.Brand href="#" style={{ fontWeight: '500', fontSize: '30px' }}>Team members</Navbar.Brand>
                    </div>
                    <div style={{ display: 'flex', flex: 'row' }}>
                        <Form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={(e) => { setSearchTerm(e.target.value) }}
                                onClick={() => { Navigate("/directory") }}
                            />
                        </Form>

                        <div style={{ position: 'relative' }}>
                            <img
                                src={filter}
                                alt="Filter"
                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                                onClick={handleFilterClick}
                            />

                            {showDropdown && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '30px',
                                        right: '0',
                                        backgroundColor: 'white',
                                        border: '1px solid #ccc',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        width: '250px',
                                        transition: 'top 0.3s ease-in-out',
                                    }}
                                >
                                    {/* Status Filter */}
                                    <Form.Select
                                        aria-label="Filter by status"
                                        style={{ marginBottom: '10px' }}
                                        onChange={(e) => setFiltered(e.target.value)}
                                    >
                                        <option value="all">Choose Status</option>
                                        <option value="Offline">Offline</option>
                                        <option value="Online">Online</option>
                                        <option value="Active">Active</option>
                                    </Form.Select>

                                    {/* Role Filter */}
                                    <Form.Select
                                        aria-label="Filter by role"
                                        style={{ marginBottom: '10px' }}
                                        onChange={(e) => setFiltered(e.target.value)}
                                    >
                                        <option value="all">Choose Role</option>
                                        <option value="Product Manager">Product Manager</option>
                                        <option value="Frontend Developer">Frontend Developer</option>
                                        <option value="Backend Developer">Backend Developer</option>
                                        <option value="FullStack Developer">FullStack Developer</option>
                                        <option value="UX Designer">UX Designer</option>
                                        <option value="UI Designer">UI Designer</option>
                                        <option value="QA Engineer">QA Engineer</option>
                                    </Form.Select>

                                    {/* Team Filter */}
                                    <Form.Select
                                        aria-label="Filter by team"
                                        onChange={(e) => setFiltered(e.target.value)}
                                    >
                                        <option value="all">Choose Team</option>
                                        <option value="Design">Design</option>
                                        <option value="Product">Product</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Technology">Technology</option>
                                    </Form.Select>

                                    {/* Close Button */}
                                    <Button
                                        variant="secondary"
                                        style={{ marginTop: '10px', width: '100%' }}
                                        onClick={handleCloseDropdown}
                                    >
                                        Close
                                    </Button>
                                </div>
                            )}
                        </div>

                        <Button variant="primary" onClick={handleShow}>ADD MEMBER</Button>
                    </div>
                </Container>
            </Navbar>

            {/* Add Member Modal Start */}
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Members ➕</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <>
                            <Col>
                                <Form onSubmit={addData}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="name" value={name} placeholder="Enter name" onChange={(e) => { setName(e.target.value) }} />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='email' value={email} placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control type='link' value={image} placeholder="Image url" onChange={(e) => { setImage(e.target.value) }} />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridCity">
                                            <Form.Label>Status</Form.Label>
                                            <Form.Select defaultValue="Choose Status" value={status} onChange={(e) => { setStatus(e.target.value) }}>
                                                <option value="Offline">Offline</option>
                                                <option value="Online">Online</option>
                                                <option value="Active">Active</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Select defaultValue="Choose Role" value={role} onChange={(e) => { setRole(e.target.value) }}>
                                                <option value="Product Manager">Product Manager</option>
                                                <option value="Product Designer">Product Designer</option>
                                                <option value="Frontend Developer">Frontend Developer</option>
                                                <option value="Backend Developer">Backend Developer</option>
                                                <option value="FullStack Developer">FullStack Developer</option>
                                                <option value="UX Designer">UX Designer</option>
                                                <option value="UI Designer">UI Designer</option>
                                                <option value="QA Engineer">QA Engineer</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                            <Form.Label>Team</Form.Label>
                                            <Form.Select defaultValue="Choose team" value={team} onChange={(e) => { setTeam(e.target.value) }}>
                                                <option value="Design">Design</option>
                                                <option value="Product">Product</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Technology">Technology</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>

                                    <Modal.Footer>
                                        <Button variant="primary" type="submit" onClick={() => { handleClose('/directory') }}>Submit</Button>
                                    </Modal.Footer>
                                </Form>
                            </Col>
                        </>
                    </Modal.Body>
                </Modal>
            </>
            {/* Add Member Modal End */}
        </>
    );
}

export default Teamadmin;
