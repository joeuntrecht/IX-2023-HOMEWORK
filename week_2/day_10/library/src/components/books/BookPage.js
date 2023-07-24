import React, {useState,useEffect} from 'react'

import { Book } from '../../models/book';

import BookForm from './BookForm';
import BookTable from './BookTable';

import LibraryService from '../../services/library-service';

export default function BookPage() {
    const [books, setBooks] = useState([]);
    const [bookToEdit, setBookToEdit] = useState(null);
  
    useEffect(() => {
      onInitialLoad();
    }, []);
  
    async function onInitialLoad(){
      try{
        const books = await LibraryService.fetchBooks();
        setBooks(books);
      }catch(err){
        console.log(err);
      }
    }
  
    async function onBookCreated(book) {
      setBookToEdit(null);
      setBooks([...books, book]);
    }
  
    async function onBookDelete(book) {
      await LibraryService.deleteBook(book.id);
  
      setBooks(books.filter((x) => x.isbn !== book.isbn));
    }
  
    async function onBookEdit(book) {
      setBookToEdit(book);
      setBooks(books.filter((x) => x.isbn !== book.isbn));
      onBookDelete(book);
      
    }
  

  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit} />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  )
}
