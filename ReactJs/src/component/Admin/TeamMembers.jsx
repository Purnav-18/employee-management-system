import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Icon from "../../Image/Icon.png";
import edit from "../../Image/edit.png";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { authProvider } from "../Data/Data";

function TeamMemeberadmin() {
    const { filters, deleted } = useContext(authProvider);
    const Navigate = useNavigate();

    const handleDelete = (itemId) => {
        deleted(itemId);
    };

    return (
        <>
            <section>
                <Container>
                    <div className="table-responsive">
                        <Table hover style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#555' }}>
                            <thead>
                                <tr>
                                    <th colSpan={2} style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: '700', color: '#444', backgroundColor: '#f1f1f1', textAlign: 'left', padding: '12px' }}>Name</th>
                                    <th style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: '700', color: '#444', backgroundColor: '#f1f1f1', textAlign: 'left', padding: '12px' }}>Status</th>
                                    <th style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: '700', color: '#444', backgroundColor: '#f1f1f1', textAlign: 'left', padding: '12px' }}>Role</th>
                                    <th style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: '700', color: '#444', backgroundColor: '#f1f1f1', textAlign: 'left', padding: '12px' }}>Email Address</th>
                                    <th style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: '700', color: '#444', backgroundColor: '#f1f1f1', textAlign: 'left', padding: '12px' }}>Team</th>
                                    <th colSpan={2} style={{ fontFamily: 'Arial, sans-serif', fontSize: '20px', fontWeight: '700', color: '#444', backgroundColor: '#f1f1f1', textAlign: 'left', padding: '12px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filters.map((item) => {
                                    return (
                                        <tr key={item._id} style={{ borderBottom: '1px solid #ddd' }}>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', color: '#555', padding: '10px', textAlign: 'left' }}>
                                                <img
                                                    src={item.image}
                                                    alt="img"
                                                    style={{ width: "45px", height: "45px", marginRight: "0%", borderRadius: "50%" }}
                                                />
                                            </td>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', color: '#555', padding: '10px', textAlign: 'left' }}>{item.name}</td>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', color: '#555', padding: '10px', textAlign: 'left' }}>{item.status}</td>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', color: '#555', padding: '10px', textAlign: 'left' }}>{item.role}</td>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', color: '#555', padding: '10px', textAlign: 'left' }}>{item.email}</td>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', color: '#555', padding: '10px', textAlign: 'left' }}>{item.team}</td>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '19px', color: '#555', padding: '10px', textAlign: 'left' }}>
                                                <img
                                                    src={edit}
                                                    onClick={() => { Navigate(`/user/${item._id}`) }}
                                                    alt="edit"
                                                    style={{ width: '20px', height: '20px', cursor: 'pointer', marginRight: '10px' }}
                                                />
                                            </td>
                                            <td style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#555', padding: '10px', textAlign: 'left' }}>
                                                <img
                                                    onClick={() => handleDelete(item._id)}
                                                    src={Icon}
                                                    alt="delete icon"
                                                    style={{ width: '20px', height: '20px', cursor: 'pointer', marginRight: '10px' }}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default TeamMemeberadmin;
