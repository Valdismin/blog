'use client';
import React, {useState} from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), {ssr: false});

const modules = {
    toolbar: [
        [{header: [1, 2, false]}],
        ['bold', 'italic', 'underline', 'strike'],
        [{list: 'ordered'}, {list: 'bullet'}],
        ['link', 'image'],
        ['clean'], // удалить форматирование
    ],
};

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'link',
    'image',
];

export default function Contribute() {
    const [content, setContent] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const response = await fetch('/api/submit-post', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content}),
        });

        if (response.ok) {
            alert('Пост успешно отправлен!');
            setContent(''); // очистить редактор
        } else {
            alert('Ошибка при отправке.');
        }
    };

    return (
        <section className="relative size-full">
            <form onSubmit={handleSubmit} className={'max-w-[50%] mx-auto'}>
                <h2>Создать пост</h2>
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    formats={formats}
                />
                <button type="submit" style={{marginTop: '20px'}}>
                    Отправить пост
                </button>
            </form>
        </section>
    );
}