import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Crea un post!</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Título"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Selecciona una categoría</option>
            <option value="restaurante">Restaurante</option>
            <option value="cafeteria">Cafeteria</option>
            <option value="gastrobar">Gastrobar</option>
            <option value="fastfood">Comida rápida</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Sube una imagen
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Escribe tu post!"
          className="h-64 mb-12"
          required
        />
        <Button gradientDuoTone="purpleToBlue" outline>
          Publicar
        </Button>
      </form>
    </div>
  );
}
