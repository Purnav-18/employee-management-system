import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const authProvider = createContext();

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('Offline');
    const [role, setRole] = useState('Product Manager');
    const [team, setTeam] = useState('Design');
    const [show, setShow] = useState(false);
    const [filtered, setFiltered] = useState("all");
    const [searchTerm, setSearchTerm] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function getData() {
        try {
            const res = await axios.get('http://localhost:4000/api/auth/user');
            setState(res.data);
        } catch (error) {
            console.log('error in getData');
        }
    }

    const deleted = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/auth/user/${id}`);
            getData();
        } catch (error) {
            console.log('error in deleted');
        }
    }

    const addData = async (e) => {
        try {
            e.preventDefault();
            await axios.post('http://localhost:4000/api/auth/user', {
                name, email, image, status, role, team
            });
            setName(""); setEmail(""); setImage("");
            setStatus(""); setRole(""); setTeam("");
            await getData();
            navigate("/directory");
        } catch (error) {
            console.log('error in addData');
        }
    };

    const filters = state.filter((items) => {
        const search = searchTerm.toLowerCase();
        const matchSearch = items.name.toLowerCase().includes(search) ||
            items.email.toLowerCase().includes(search) ||
            items.status.toLowerCase().includes(search) ||
            items.role.toLowerCase().includes(search) ||
            items.team.toLowerCase().includes(search);
        const matchFilter = filtered === "all" ||
            items.status === filtered || items.role === filtered || items.team === filtered;
        return matchSearch && matchFilter;
    });

    useEffect(() => { getData(); }, []);

    return (
        <authProvider.Provider value={{
            setFiltered, filters, setSearchTerm, deleted, addData,
            name, setName, email, setEmail, image, setImage,
            status, setStatus, role, setRole, team, setTeam,
            show, setShow, handleClose, handleShow, getData
        }}>
            {children}
        </authProvider.Provider>
    );
};
