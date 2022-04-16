# useStorage

useStorage hook stores the data in local, or session storage. It takes a key as a string argument, and a default value as a string. The hook will search the storage the key in storage for a value and return if it there is one, otherwise it will use the default value.

If you want to store an object then use JON.stringify, and JON.parse to send a string to the hook.

return a tuple of [ string, setState function, and a remove function ].

### **To install...**

```bash
mpn i @sjblurton/use-storage

yarn add @sjblurton/use-storage
```

### **To import...**

```bash
import { useLocalStorage, useSessionStorage } from "../hooks/use-storage"
```

### **To call the hook...**

```bash
const [name, setName, removeName] = useSessionStorage("name", "foo")

const [age, setAge, removeAge] = useLocalStorage("age", "40")
```

### **Links**

GitHub: https://github.com/sjblurton/use-storage
<br/>
NPM: https://www.npmjs.com/package/@sjblurton/use-storage
