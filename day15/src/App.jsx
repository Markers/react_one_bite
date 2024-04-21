import { useEffect, useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  {
    id: 0,
    name: "markers",
    email: "hello@gmail.com",
  },
  {
    id: 1,
    name: "kitty",
    email: "hello@gmail.com",
  },
  {
    id: 2,
    name: "pikachu",
    email: "pikachu@gmail.com",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
  return state;
}

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        email: email,
        name: name,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
