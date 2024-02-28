import style from './ContactsItem.module.css';

export const ContactsItem = ({ id, name, number, deleteContact }) => {
    return (
        <li className={style.item}>
            <span>{name}: {number}</span>
            <button className={style.button} onClick={() => deleteContact(id)}>Delete</button>
        </li>
    )
}
