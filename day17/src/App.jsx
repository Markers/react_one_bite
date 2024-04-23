import {
  useEffect,
  useReducer,
  useRef,
  useCallback,
  createContext,
  useMemo,
} from "react";
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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((name, email) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        email: email,
        name: name,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedContact = useMemo(
    () => ({
      onCreate,
      onDelete,
    }),
    []
  );

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedContact}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
