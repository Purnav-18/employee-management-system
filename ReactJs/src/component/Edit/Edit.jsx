import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { authProvider } from "../Data/Data";

function Edit() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    const [role, setRole] = useState('');
    const [team, setTeam] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const { getData } = useContext(authProvider); 

    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4000/api/auth/user/${id}`);
        setName(res.data.name || "");
        setEmail(res.data.email || "");
        setImage(res.data.image || "");
        setStatus(res.data.status || "");
        setRole(res.data.role || "");
        setTeam(res.data.team || "");
        setShowModal(true);
    };

    const editData = async (e) => {
        try {
            e.preventDefault();
            await axios.put(`http://localhost:4000/api/auth/user/${id}`, {
                name,
                email,
                image,
                status,
                role,
                team
            });
            await getData(); 
            setShowModal(false);
            navigate('/');
        } catch (error) {
            console.log('Error in editData', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton onClick={() => navigate('/')}>
                    <Modal.Title>Edit User Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editData}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                placeholder="Image URL"
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="Active">Active</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Online">Online</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRole">
                                <Form.Label>Role</Form.Label>
                                <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="Product Manager">Product Manager</option>
                                    <option value="Product Designer">Product Designer</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="Fullstack Developer">Fullstack Developer</option>
                                    <option value="UX Designer">UX Designer</option>
                                    <option value="UI Designer">UI Designer</option>
                                    <option value="QA Engineer">QA Engineer</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridTeam">
                                <Form.Label>Team</Form.Label>
                                <Form.Select value={team} onChange={(e) => setTeam(e.target.value)}>
                                    <option value="Design">Design</option>
                                    <option value="Product">Product</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Technology">Technology</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                            <Button variant="primary" type="submit" className="ms-2">Save Changes</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Edit;
