const Note = require("../../Schema/models").Note;

export type iNote = {
  title: string;
  content: string;
};

const getAllNotes = async () => {
  const allNotes = await Note.findAll();
  //console.log(allNotes);
  return allNotes;
};

const getOneNote = () => {
  return;
};

const createNewNote = async (note: iNote) => {
  const createdNote = await Note.create(note);
  console.log(createdNote);
  return createdNote;
};

const updateOneNote = async (
  note: { title: string; content: string },
  id: number
) => {
  const updatedNote = await Note.update(note, { where: { id } });
  return updatedNote;
};

const deleteOneNote = async (id: number) => {
  const deletedNote = await Note.destroy({
    where: { id },
  });
  return deletedNote;
};

export { getAllNotes, getOneNote, createNewNote, updateOneNote, deleteOneNote };
