import styles from './app-info.module.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className={styles.appInfo}>
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;