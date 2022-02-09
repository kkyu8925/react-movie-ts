import React from 'react';
import Button from "./Button";
import styles from "./App.module.css"

const App = () => (
    <div>
        <h1 className={styles.title}>hello</h1>
        <Button text={"continue"}/>
    </div>
)

export default App;
