import React, {useState, useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    // const ref = useRef<HTMLInputElement>(null); // использования useRef для работы с инпутом

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title);
            // ref.current!.value = '' // очищаем инпут
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input
                // ref={ref} // передаем ref
                type="text"
                id="title"
                placeholder='Введите название задачи'
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Введите название задачи
            </label>
        </div>
    )
}