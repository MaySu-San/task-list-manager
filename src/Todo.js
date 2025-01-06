import render from "./initialRender.js";
import listener from "./listeners.js";
import observer from "./observer.js";

class Todo{
    init(){
        observer();
        listener();
        render();
    }
}

export default Todo;