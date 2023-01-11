import './form.css';
import React, { useState, useRef } from 'react';

const Form = () => {
  const [persons, setPerson] = useState([]);
  const [personError, setPersonError] = useState();
  const personName = useRef();
  const personLastName = useRef();

  const personList = persons.map((obj) =>
    <li key={obj['name']}>{obj['name']} {obj['last_name']}</li>
  );

  const addPerson = () => {
    let person_name = personName.current.value;
    let person_last_name = personLastName.current.value;

    if (person_name === '' || person_last_name === '') {
      setPersonError('Imię i nazwisko jest wymagane!');
      return
    }

    var numbers = /[0-9]+/;

    if (person_name.match(numbers) || person_last_name.match(numbers)) {
      setPersonError('Imię i nazwisko nie może zawierać cyfr!');
      return
    }

    setPersonError(null);

    setPerson(persons.concat({ 'name': person_name, 'last_name': person_last_name }));
    document.getElementById('user_form').reset();
  }

  return (
    <div className='blocks'>
      <div className='view-form'>
        <div className='text-center'>
          <h2 >Tworzenie konta</h2>
        </div>
        {personError &&
          <div className='error text-center'>{personError}</div>
        }
        <form id='user_form' className='style-form'>
          <div className='line-padding'>
            <label htmlFor='firstName'>Imię*</label><br />
            <input ref={personName} alt='name' type='text' id='firstName' />
          </div>
          <div className='line-padding'>
            <label htmlFor='lastName'>Nazwisko*</label><br />
            <input ref={personLastName} alt='surname' type='text' id='lastName' />
          </div>
          <div className='line-padding'>
            <label htmlFor='eMail'>E-mail</label><br />
            <input type='text' id='eMail' />
          </div>
          <div className='line-padding'>
            <label htmlFor='password'>Hasło</label><br />
            <input type='password' id='password' />
          </div>
          <div className='line-padding'>
            <label htmlFor='yearOfBirth'>Rok urodzenia</label><br />
            <select className='year-list' id='yearOdBirth'>
              <option value="1990">1990+</option>
              <option value="2000">2000+</option>
              <option value="2010">2010+</option>
            </select>
          </div>
          <div className='right-button'>
            <input type='button' value='Wyślij' className='style-button' onClick={() => addPerson()} />
          </div>
        </form>
      </div>
      <div className='lists'>
        <h3 className='text-center'>Dołączyli</h3>
        <ol className='lists-person'>
          {personList}
        </ol>
      </div>
    </div>
  )
}

export default Form;
