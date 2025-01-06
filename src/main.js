import "./style.css";
import Todo from "./Todo";
import { v4 as uuidv4 } from 'uuid';


// console.log(uuidv4());
const app=new Todo();
app.init();