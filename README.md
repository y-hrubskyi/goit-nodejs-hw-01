# Contacts CLI-app

### Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

`node index.js --action="list"`
<br/>
example: https://prnt.sc/xFkd5OxdS6wu

### Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

`node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6`
<br/>
example: https://prnt.sc/6g9GsBDQAilT

### Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

`node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22`
<br/>
example: https://prnt.sc/A-ZOebVsC3Z7

### Оновлюємо контакт та виводимо в консоль об'єкт оновленого контакту

`node index.js --action="update" --id rsKkOQUi80UsgVPCcLZZW --name Kiwi --email kiwi@gmail.com --phone 988-88-88`
<br/>
example: https://prnt.sc/5s9Zuh4FzJjw

### Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

`node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH`
<br/>
example: https://prnt.sc/RMkJBa4GQ8-D
