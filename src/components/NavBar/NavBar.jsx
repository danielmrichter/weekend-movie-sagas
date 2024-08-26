import { Menubar } from 'primereact/menubar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function NavBar() {
    const history = useHistory()
    const menuItems = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => history.push('/list')
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => history.push('/')
        },
        {
            label: 'About',
            icon: 'pi pi-star',
            command: () => history.push('/about')
        }
    ]

    return(
       <Menubar model={menuItems}/>
    )
}