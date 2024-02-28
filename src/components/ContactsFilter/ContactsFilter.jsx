import style from './ContactsFilter.module.css';

export const ContactsFilter = ({ changeFilter }) => {
    const handleChange = (event) => {
        const filterQuery = event.target.value.trim().toLowerCase();

        changeFilter(filterQuery);
    }

    return (
        <>
            <label className={style.label} htmlFor='contactSearch'>Find contacts by name</label>
            <input
                type="text"
                onChange={handleChange}
                id='contactSearch'
            />
        </>
    )
}
