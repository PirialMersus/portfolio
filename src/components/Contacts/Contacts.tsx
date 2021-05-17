import React from 'react';
import s from './Contacts.module.css'
import common from '../../common/style/Common.module.css'


function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={common.container}>
                <div className={s.contactsContent}>
                    <h3>Контакты</h3>
                    <form action="../../form-result.php" method="post" target="_blank">
                        <div>
                            <input className={s.inputs} type="text" name="user"/>
                            <input className={s.inputs} type="password" name="pass"/>
                            <textarea> </textarea>
                        </div>
                        <p><input type="submit" value="Отправить"/></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
