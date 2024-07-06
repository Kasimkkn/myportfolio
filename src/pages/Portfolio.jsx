import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import img1 from '../images/img-1.png';
import pos from '../images/pos.png';
import vcme from '../images/vc-me.png';
import img2 from '../images/snap.png';
import img3 from '../images/lens.png';
import img4 from '../images/educa.png';
import mir from '../images/mir.png';
import dst from '../images/ds.png';



const initialData = {
    completed: {
        id: 'completed',
        items: [
            { id: 'item-9', image: vcme, title: 'VC-ME', description: 'a Next.js-based Video Conferencing App built', link: 'https://github.com/Kasimkkn/Vc-Me' },
            { id: 'item-1', image: img1, title: 'Luxify Shoes Store', description: 'premium and trendy shoes website with admin panel', link: 'https://luxifys.vercel.app/' },
            { id: 'item-2', image: img2, title: 'SnapGram', description: 'A Social Media Web App', link: 'https://github.com/Kasimkkn/social-media' },
            { id: 'item-6', image: mir, title: 'Miranda-News', description: 'A Newspaper Web App Frontend', link: 'https://github.com/Kasimkkn/Miranda' },
            { id: 'item-5', image: dst, title: 'D-Studio', description: 'A Web App For Digitally crafted brand experiences', link: 'https://dstudio2.netlify.app' },
            { id: 'item-4', image: pos, title: 'A Restaurant Billing Desktop App', description: 'Billing, Inventory, Reports, POS', link: 'https://github.com/Kasimkkn/develpoment-pos' },
            { id: 'item-3', image: img3, title: 'Eyescare', description: 'A Web App Frontend For Selling Eyeglasses', link: 'https://github.com/Kasimkkn/eyescare' },
            { id: 'item-7', image: img4, title: 'Educa', description: 'A Web App Frontend For Education', link: 'https://github.com/Kasimkkn/education' },
        ],
    },
};

const Portfolio = () => {
    const [items, setItems] = useState(initialData);

    useEffect(() => {
        const savedData = localStorage.getItem('portfolioData');
        if (savedData) {
            setItems(JSON.parse(savedData));
        }
    }, []);

    const saveToLocalStorage = (data) => {
        localStorage.setItem('portfolioData', JSON.stringify(data));
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const { source, destination } = result;

        if (source.droppableId === destination.droppableId) {
            const list = [...items[destination.droppableId].items];
            const [removed] = list.splice(source.index, 1);
            list.splice(destination.index, 0, removed);

            const updatedItems = {
                ...items,
                [destination.droppableId]: {
                    ...items[destination.droppableId],
                    items: list,
                },
            };

            setItems(updatedItems);
            saveToLocalStorage(updatedItems);
        } else {
            const sourceList = [...items[source.droppableId].items];
            const destList = [...items[destination.droppableId].items];
            const [removed] = sourceList.splice(source.index, 1);
            destList.splice(destination.index, 0, removed);

            const updatedItems = {
                ...items,
                [source.droppableId]: {
                    ...items[source.droppableId],
                    items: sourceList,
                },
                [destination.droppableId]: {
                    ...items[destination.droppableId],
                    items: destList,
                },
            };

            setItems(updatedItems);
            saveToLocalStorage(updatedItems);
        }
    };

    return (
        <section className="portfolio">
            <h1 className="heading"><span>my</span> work</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="completed">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="box-container"
                        >
                            {items.completed.items.map((item, index) => (
                                console.log(item),
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`box ${snapshot.isDragging ? 'dragging' : ''}`}
                                        >
                                            <img src={item.image} alt={item.title} />
                                            <div className="content">
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </section>
    );
};

export default Portfolio;
