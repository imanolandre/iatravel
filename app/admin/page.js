"use client";
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, serverTimestamp, query, orderBy, doc, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect} from 'react';
import Select from 'react-select';

const colourOptions = [
    { value: "aventura", label: "Aventura" },
    { value: "playa", label: "Playa" },
    { value: "sol", label: "Sol" },
    { value: "desierto", label: "Desierto" },
    { value: "extremo", label: "Extremo" },
  ];

async function addTodoFirebase(nombre, detalle, image, filtro){
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            nombre: nombre,
            detalle: detalle,
            image: image,
            filtro: filtro,
            createdAt: serverTimestamp(),
        });
        console.log("Dato añadida con ID: ", docRef.id);
        return true;
    } catch (error) {
        console.error("error al añadir Dato: ", error);
        return false;
    }
}

async function fetchTodosFromFirestore() {
    const todosCollection = collection(db, "todos");
    const querySnapshot = await getDocs(query(todosCollection, orderBy("createdAt", "desc")));
    const todos = [];
    querySnapshot.forEach((doc) => {
        const todoData = doc.data();
        todos.push({id: doc.id, ...todoData});
    });
    return todos;
}

async function deleteTodoFromFirestore(todoId) {
    try {
        console.log("Intentando borrar con Id: ", todoId)
        await deleteDoc(doc(db, "todos", todoId));
        return todoId;
    } catch (error) {
        console.error("Error elimiando todo: ", error);
        return null;
    }
}

export default function pageadmin() {

    const [nombre, setNombre] = useState("");
    const [detalle, setDetalle] = useState("");
    const [image, setImage] = useState("");
    const [filtro, setFiltro] = useState("");

    const [todos, setTodos] = useState([]);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [isUpdateMode, setUpdateMode] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isUpdateMode) {
            if(selectedTodo) {
                try {
                    const updatedTodo = {
                        nombre,
                        detalle,
                        image,
                        filtro
                    };
                    const todoRef = doc(db, "todos", selectedTodo.id);
                    await updateDoc(todoRef, updatedTodo);

                    setNombre("");
                    setDetalle("");
                    setImage("");
                    setFiltro("");
                    setSelectedTodo(null);
                    setUpdateMode(false);

                    alert("Todo actualizado correctamente")
                } catch (error) {
                    console.error("Error actualizando todo: ", error);
                }
            }
        } else {
            const added = await addTodoFirebase(nombre, detalle, image, filtro);
            if (added) {
                setNombre("");
                setDetalle("");
                setImage("");
                setFiltro("");

                alert("Todo  agregado a firestore correctamente")
            }
        }
    };

    useEffect(() => {
        async function fetchTodos() {
            const todos = await fetchTodosFromFirestore();
            setTodos(todos);
        }
        fetchTodos();
    }, []);

    const handleUpdateClick = (todo) => {
        setNombre(todo.nombre || "");
        setDetalle(todo.detalle || "");
        setImage(todo.image || "");
        setFiltro(todo.filtro || "");

        setSelectedTodo(todo);
        setUpdateMode(true);
    }

    useEffect(() => {
        async function fetchTodos() {
            const todos = await fetchTodosFromFirestore();
            setTodos(todos);
        }
        fetchTodos();
    }, []);
    
    return (
        <main className="flex flex-1 items-center justify-center flex-col md:flex-row min-h-screen">
            <section className='flex-1 flex md:flex-col items-center md:justify-start mx-auto'>
                <div className='p-6 md:p-12 mt-4 rounded-lg shadow-xl w-full max-w-lg bg-white'>
                    <h2 className='text-center text-2xl font-bold leading-5 text-gray-900'>
                        {isUpdateMode ? "Update Your Todo" : "DESTINOS"}
                    </h2>
                    <form className='mt-6 space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='nombre' className='block text-sm font-medium leading-6 text-gray-600'>
                                Nombre
                            </label>
                            <div className='mt-2'>
                                <input
                                    id="nombre"
                                    name='nombre'
                                    type='text'
                                    autoComplete='off'
                                    required
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className='w-full rounded border py-2 pl-2 text-gray-900 shadow ring'
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='detalle' className='block text-sm font-medium leading-6 text-gray-600'>
                                Detalle
                            </label>
                            <div className='mt-2'>
                                <textarea
                                    id="detalle"
                                    name='detalle'
                                    rows="4"
                                    autoComplete='off'
                                    required
                                    value={detalle}
                                    onChange={(e) => setDetalle(e.target.value)}
                                    className='w-full rounded border py-2 pl-2 text-gray-900 shadow ring'
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='image' className='block text-sm font-medium leading-6 text-gray-600'>
                                Imagen
                            </label>
                            <div className='mt-2'>
                                <input
                                    id="image"
                                    name='image'
                                    type='file'
                                    autoComplete='off'
                                    required
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className='w-full rounded border py-2 pl-2 text-gray-900 shadow ring'
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor='filtro' className='block text-sm font-medium leading-6 text-gray-600'>
                                Filtro
                            </label>
                            <div className='mt-2'>
                            <Select
                                type="select"
                                isMulti
                                name="colors"
                                options={colourOptions}
                                className="w-full rounded border py-2 pl-2 text-gray-900 shadow ring"
                                classNamePrefix="select"
                            />
                            </div>
                            <div className='mt-4'>
                                <button
                                type='submit'
                                className='w-full bg-[#1259dd] text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700'>
                                {isUpdateMode ? "Update Todo" : "Create Todo"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className='md:w-1/2 md:max-h-screen overflow-y-auto md:ml-10 mt-20 mx-auto'>
                <div className='p-6 md:p-12 mt-10 rounded-lg shadow-xl w-full max-w-lg bg-white'>
                    <h2 className='text-center text-2xl font-bold leading-9 text-gray-900'>
                        DESTINOS
                    </h2>
                    <div className='mt-6 space-y-6'>
                        {todos.map((todo) => (
                            <div key={todo.id} className='border p-4 rounded-md shadow-md'>
                                <h3 className='text-lg font-semibold text-gray-900 break-words'>{todo.nombre}
                                    <p className='text-sm text-gray-500'>
                                        Detalle: {todo.detalle}
                                    </p>
                                    <p className='text-gray-700 multiline break-words'>
                                        {todo.filtro}
                                    </p>
                                    <img src='{todo.image}.jpg' className='w-[50px] h-auto'>
                                        
                                    </img>
                                    <div className='mt-4 space-x-6'>
                                        <button
                                        type='button'
                                        className='px-3 py-1 text-sm font-semibold text.white bg-blue-500 hover:bg-blue-600 rounded-md' onClick={() => handleUpdateClick(todo)}>
                                        Actualizar
                                        </button>
                                        <button
                                        type='button'
                                        onClick={async () => {
                                            const deletedTodoId = await deleteTodoFromFirestore(todo.id);
                                            if(deletedTodoId) {
                                                const updatedTodos = todos.filter((t) => t.id !== deletedTodoId);
                                                setTodos(updatedTodos);
                                            }
                                        }}
                                        className='px-3 py-1 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-md'>
                                            Eliminar
                                        </button>
                                    </div>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>     
        </main>
    )
  }