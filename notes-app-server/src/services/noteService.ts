const Note = require("../../Schema/models").Note;

export type iNote = {
  title: string;
  content: string;
};

const getAllNotes = async () => {
  try {
    const allNotes = await Note.findAll();
    //console.log(allNotes);
    return allNotes;
  } catch (error) {
    throw error;
  }
};

const getOneNote = () => {
  return;
};

const createNewNote = async (note: iNote) => {
  try {
    const createdNote = await Note.create(note);
    // console.log(createdNote);
    return createdNote;
  } catch (error) {
    throw error;
  }
};

const updateOneNote = async (
  note: { title: string; content: string },
  id: number
) => {
  try {
    const updatedNote = await Note.update(note, { where: { id } });
    return updatedNote;
  } catch (error) {
    throw error;
  }
};

const deleteOneNote = async (id: number) => {
  try {
    const deletedNote = await Note.destroy({
      where: { id },
    });
    return deletedNote;
  } catch (error) {
    throw error;
  }
};

export { getAllNotes, getOneNote, createNewNote, updateOneNote, deleteOneNote };
